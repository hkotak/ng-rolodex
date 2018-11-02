const express = require('express');
const router = express.Router();

const Contacts = require('../db/models/contacts.js');

//~~~~ GET ALL CONTACTS ~~~~//
router.get('/home', (req, res) => {
  Contacts
    .fetchAll()
    .then(contacts => {
      console.log('SERVER CONTACTS: ', contacts.serialize());
      res.json(contacts)
    })
    .catch(err => {
      console.log('SERVER GET ERROR', err)
      res.json('error')
    })
})


module.exports = router;