const Incident = require('../models/Incident');

// @desc    Get all incidents
// @route   GET /api/incidents
// @access  Public (filtered for public view)
exports.getIncidents = async (req, res) => {
  try {
    // Only show verified incidents to public, all to admins
    // TODO: Check admin role from JWT payload
    const isAdmin = req.user.role === 'admin';
    const filter = isAdmin ? {} : { status: 'verified' };

    const incidents = await Incident.find(filter)
      .populate('reportedBy', 'name')
      .populate('verifiedBy', 'name')
      .sort({ createdAt: -1 });

    // Remove reporter info for anonymous reports
    const sanitizedIncidents = incidents.map(incident => {
      if (incident.anonymous) {
        incident.reportedBy = null;
      }
      return incident;
    });

    res.json(sanitizedIncidents);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Get single incident
// @route   GET /api/incidents/:id
// @access  Public (if verified) or Private (if own report)
exports.getIncident = async (req, res) => {
  try {
    const incident = await Incident.findById(req.params.id)
      .populate('reportedBy', 'name')
      .populate('verifiedBy', 'name');

    if (!incident) {
      return res.status(404).json({ msg: 'Incident not found' });
    }

    // Check permissions
    if (incident.status !== 'verified' && (!req.user || req.user.id !== incident.reportedBy?.toString())) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    // Remove reporter info for anonymous reports
    if (incident.anonymous) {
      incident.reportedBy = null;
    }

    res.json(incident);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Incident not found' });
    }
    res.status(500).send('Server error');
  }
};

// @desc    Create an incident report
// @route   POST /api/incidents
// @access  Private
exports.createIncident = async (req, res) => {
  const { incidentType, location, description, anonymous, coordinates } = req.body;

  try {
    // Handle file uploads
    const evidence = req.files ? req.files.map(file => file.path) : [];

    const newIncident = new Incident({
      incidentType,
      location,
      description,
      anonymous: anonymous === 'true' || anonymous === true,
      evidence,
      coordinates: coordinates ? JSON.parse(coordinates) : undefined,
      reportedBy: anonymous ? null : req.user.id,
    });

    const incident = await newIncident.save();
    res.json(incident);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Update incident status (admin only)
// @route   PUT /api/incidents/:id
// @access  Private (Admin)
exports.updateIncident = async (req, res) => {
  const { status } = req.body;

  try {
    let incident = await Incident.findById(req.params.id);
    if (!incident) {
      return res.status(404).json({ msg: 'Incident not found' });
    }

    // Check if user is admin
    const isAdmin = req.user.role === 'admin';
    if (!isAdmin) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    incident = await Incident.findByIdAndUpdate(
      req.params.id,
      {
        status,
        verifiedBy: req.user.id,
        updatedAt: Date.now()
      },
      { new: true }
    );

    res.json(incident);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Delete an incident
// @route   DELETE /api/incidents/:id
// @access  Private (Admin or reporter)
exports.deleteIncident = async (req, res) => {
  try {
    const incident = await Incident.findById(req.params.id);
    if (!incident) {
      return res.status(404).json({ msg: 'Incident not found' });
    }

    // Check permissions
    const isAdmin = req.user.role === 'admin';
    if (!isAdmin && req.user.id !== incident.reportedBy?.toString()) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Incident.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Incident removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc    Get user's reports
// @route   GET /api/incidents/user
// @access  Private
exports.getUserIncidents = async (req, res) => {
  try {
    const incidents = await Incident.find({ reportedBy: req.user.id })
      .sort({ createdAt: -1 });

    res.json(incidents);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};