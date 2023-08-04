const express = require('express')
const router = express.Router()
const contactController = require('../controllers/contact.controller')
const authenticateToken = require('./protected')

// Protected routes (require JWT authentication)

router.post('/', authenticateToken, contactController.createContact)
router.get('/', authenticateToken, contactController.getAllContacts)
router.put('/:id', authenticateToken, contactController.updateContact)
router.delete('/:id', authenticateToken, contactController.deleteContact)

module.exports = router
