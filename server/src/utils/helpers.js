// Utility functions for the POLLWATCH application

/**
 * Format date to readable string
 * @param {Date} date
 * @returns {string}
 */
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Check if poll has ended
 * @param {Date} endDate
 * @returns {boolean}
 */
const hasPollEnded = (endDate) => {
  if (!endDate) return false;
  return new Date() > new Date(endDate);
};

/**
 * Validate email format
 * @param {string} email
 * @returns {boolean}
 */
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

module.exports = {
  formatDate,
  hasPollEnded,
  isValidEmail,
};