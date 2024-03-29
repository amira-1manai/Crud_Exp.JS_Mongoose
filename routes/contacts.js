const express=require('express');
const { getContacts, addContact, updateContact, deleteContact , getContactsid } = require('../controllers/contactControllers');
const router = express.Router();
router.get('/',getContacts);// get contacts with controllers
router.post('/',addContact);
router.put('/:id',updateContact);
router.delete('/:id',deleteContact);
router.get('/:id', getContactsid);

module.exports=router;

