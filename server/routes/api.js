const express = require('express');
const router = express.Router();

const Contacts = require('../db/models/contacts.js');

//~~~~ GET ALL CONTACTS ~~~~//
router.get('/home', (req, res) => {
  Contacts
    .fetchAll()
    .then(contacts => {
      // console.log('SERVER CONTACTS: ', contacts.serialize());
      res.json(contacts)
    })
    .catch(err => {
      console.log('SERVER GET ERROR: ', err)
      res.json('error')
    })
})

//~~~~ ADD NEW CONTACTS ~~~~//
router.post('/new-contact', (req, res) => {
  console.log('NEW CONTACT INFO: ', req.body)

  const newContact = {
    name: req.body.name,
    address: req.body.address,
    mobile: req.body.mobile,
    work: req.body.work,
    home: req.body.home,
    email: req.body.email,
    twitter: req.body.twitter,
    instagram: req.body.instagram,
    github: req.body.github
  }

  Contacts
    .forge(newContact)
    .save()
    .then(() => {
      return Contacts.fetchAll()
    })
    .then(contacts => {
      res.json(contacts)
    })
    .catch(err => {
      console.log('SERVER ADD ERROR: ', err)
      res.json('error')
    })
})


module.exports = router;