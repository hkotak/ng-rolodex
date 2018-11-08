const express = require('express');
const router = express.Router();

const Contacts = require('../db/models/contacts.js');

//~~~~ GET ALL CONTACTS ~~~~//
router.get('/contacts', (req, res) => {
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

  const newContact = {
    name: req.body.name,
    address: req.body.address,
    mobile: req.body.mobile,
    work: req.body.work,
    home: req.body.home,
    email: req.body.email,
    twitter: req.body.twitter,
    instagram: req.body.instagram,
    github: req.body.github,
    created_by: 1
  }

  Contacts
    .forge(newContact)
    .save()
    .then((results) => {
      res.json(results)
    })
    .catch(err => {
      console.log('SERVER ADD ERROR: ', err)
      res.json('SERVER ADD ERROR')
    })
})

//~~~~ GET CONTACT BY ID ~~~~//
router.get('/contacts/:id', (req, res) => {
  const { id } = req.params;

  Contacts
    .where({ id })
    .fetch()
    .then(contact => {
      res.json(contact);
    })
    .catch(err => {
      console.log("ERROR GET CONTACT: ", err);
      res.json("ERROR GET CONTACT");
    })
})

//~~~ DELETE BY ID ~~~//
router.delete('/contacts/:id', (req, res) => {

  const { id } = req.params;

  Contacts
    .where({ id })
    .destroy()
    .then(contact => {
      res.json(contact)
    })
    .catch(err => {
      res.send('ERROR IN SERVER GET BY ID')
    })
})


//~~~~ UPDATE CONTACT BY ID ~~~~//
router.put('/:id', (req, res) => {
  let id = req.params.id;
  let {
    name,
    address,
    mobile,
    work,
    home,
    email,
    twitter,
    instagram,
    github,
    created_by
  } = req.body;

  Contacts
    .where({ id })
    .fetchAll()
    .then(contact => {
      return new Contact({ id })
        .save({ name, address, mobile, work, home, email, twitter, instagram, github, created_by })
        .then(editedContact => {
          return res.json(editedContact);
        })
    })
    .catch(err => console.log(err));
})




module.exports = router;



//~~~~ POSTMAN TESTS ~~~~//
//post
// {
// 	"name": "name",
//     "address": "address",
//     "mobile": "mobile",
//     "work": "work",
//     "home": "home",
//     "email": "email",
//     "twitter": "twitter",
//     "instagram": "instagram",
//     "github": "github",
//     "created_by": "1"
// }