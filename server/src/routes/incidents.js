const express = require('express');
const router = express.Router();
const multer = require('multer');
const auth = require('../middleware/auth');
const incidentController = require('../controllers/incidentController');

// Configure multer for file uploads (reuse from server.js)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const path = require('path');
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    const path = require('path');
    const allowedTypes = /jpeg|jpg|png|gif|mp4|mov|avi/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only images and videos are allowed.'));
    }
  }
});

// Routes that work
router.get('/', incidentController.getIncidents);
router.get('/:id', incidentController.getIncident);
router.put('/:id', auth, incidentController.updateIncident);
router.delete('/:id', auth, incidentController.deleteIncident);
router.get('/user/incidents', auth, incidentController.getUserIncidents);

// Enable the POST route for creating incidents with file upload
router.post('/', auth, upload.array('evidence', 5), incidentController.createIncident);

module.exports = router;