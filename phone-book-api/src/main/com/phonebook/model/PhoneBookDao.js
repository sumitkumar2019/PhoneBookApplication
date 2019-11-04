const Contact = require('./schema/Contact');
class PhoneBoookDao{

    constructor(){

    }

    async createContact(contact){
        const newContact = new Contact({
            name:contact.name,
            address:contact.address,
            city:contact.city,
            state:contact.state,
            phone:contact.phone,
            mobile:contact.mobile
        });
        const result = await newContact.save();
        console.log("contact saved successfully: "+result);
    }
    
    async  updateContact(contact){
        const result = await Contact.update({_id:contact._id }, {
            $set:{
            name:contact.name,
            address:contact.address,
            city:contact.city,
            state:contact.state,
            phone:contact.phone,
            mobile:contact.mobile
            }
        });
        console.log("contact with id: " + contact._id + " updated successfully: "+result);
    }
    
    async deleteContact(id){
        const result = await Contact.findByIdAndDelete(id);
        console.log("contact with id: " + id + " deleted successfully: " + result);
    }
    
    async getAllContact(){
        const results = await Contact.find();
        return results;
    }
    
    async getContactById(id){
        return await Contact.findById(id);
    }
}

module.exports = PhoneBoookDao;