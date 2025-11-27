const mongoose = require('mongoose');

const IncidentSchema = new mongoose.Schema({
  incidentType: {
    type: String,
    required: true,
    enum: [
      'violence',
      'bribery',
      'tech-failure',
      'long-queues',
      'missing-materials',
      'agent-issues',
      'irregularities',
      'other'
    ],
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    minlength: 50,
  },
  anonymous: {
    type: Boolean,
    default: false,
  },
  evidence: [{
    type: String, // file paths
  }],
  coordinates: {
    lat: Number,
    lng: Number,
  },
  status: {
    type: String,
    enum: ['pending', 'verified', 'flagged', 'resolved'],
    default: 'pending',
  },
  reportedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  verifiedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update the updatedAt field before saving
IncidentSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Incident', IncidentSchema);