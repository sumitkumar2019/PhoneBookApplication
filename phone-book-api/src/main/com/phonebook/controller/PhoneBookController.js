const PhoneBookService = require('../services/PhoneBookService');
const BasicValidator = require('../validation/BasicValidator');

class PhoneBookController {

    constructor(router) {
        this.router = router;
        this.phoneBookService = new PhoneBookService();
        this.basicValidator = new BasicValidator();
        this.registerPath();
        console.log("Phone book controller is active now....");
    }

    registerPath() {
        this.router.get('/getAllContact', this.getAllContact.bind(this));
        this.router.get('/getContactById/:id', this.getContactById.bind(this));
        this.router.post('/createContact', this.createContact.bind(this));
        this.router.get('/deleteContact/:id', this.deleteContact.bind(this));
        this.router.put('/updateContact', this.updateContact.bind(this));
    }

    async getAllContact(req, res) {
        console.log("inside get all contact");
        try{
            const contacts = await this.phoneBookService.getAllContact();
            res.status(200).send({success: true, contacts:contacts});
        }catch(error){
            res.status(500).send({success: false, message:error.message});
        }
    }

    async getContactById(req, res) {
        console.log("inside get contact by id");
        const id = req.params.id;
        try{
            const contact = await this.phoneBookService.getContactById(id);
            res.status(200).send({success: true, contacts:[contact]});
        }catch(error){
            res.status(500).send({success: false, message:error.message});
        }
    }

    async createContact(req, res) {
        console.log("inside create contact");
        const contact = this.basicValidator.validateRequest(req.body);
        await this.phoneBookService.createContact(contact);
        try{
            const contacts = await this.phoneBookService.getAllContact();
            res.status(200).send({success: true, contacts:contacts});
        }catch(error){
            res.status(500).send({success: false, message:error.message});
        }
    }

    async deleteContact(req, res) {
        console.log("inside delete contact");
        const id = req.params.id;
        this.phoneBookService.deleteContact(id);
        try{
            const contacts = await this.phoneBookService.getAllContact();
            res.status(200).send({success: true, contacts:contacts});
        }catch(error){
            res.status(500).send({success: false, message:error.message});
        }
    }

    async updateContact(req, res) {
        const contact = this.basicValidator.validateRequest(req.body);
        this.phoneBookService.updateContact(contact);
        try{
            const contacts = await this.phoneBookService.getAllContact();
            res.status(200).send({success: true, contacts:contacts});
        }catch(error){
            res.status(500).send({success: false, message:error.message});
        }
    }

}

module.exports = PhoneBookController;