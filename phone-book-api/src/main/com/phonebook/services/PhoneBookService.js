const PhoneBookDao = require("../model/PhoneBookDao");
class PhoneBookService {

    constructor() {
        this.phoneBookDao = new PhoneBookDao();
    }

    getAllContact() {
        return this.phoneBookDao.getAllContact();
    }

    getContactById(id) {
        return this.phoneBookDao.getContactById(id); 
    }

    createContact(contact) {
        this.phoneBookDao.createContact(contact);
    }

    deleteContact(id) {
        this.phoneBookDao.deleteContact(id);
    }

    updateContact(id, contact) {
        this.phoneBookDao.updateContact(id,contact);
    }
}

module.exports = PhoneBookService;