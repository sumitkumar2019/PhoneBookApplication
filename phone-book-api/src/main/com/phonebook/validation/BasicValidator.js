const _ = require('lodash');
class BasicValidator {

    constructor(){}
    
    validateRequest(body){
        var requestObject = JSON.stringify(body);

        console.log('Received HTTP request - ' + requestObject);

        try{
            requestObject = JSON.parse(requestObject);
        }catch(error){
            throw new Error('Request Object not a JSON object');
        }

        if (_.isEmpty(requestObject) || _.isUndefined(requestObject) || _.isNull(requestObject)) {
            throw new Error('Request Object should not be empty');
        }
        let contact = requestObject.contact;
        
        if ( _.isUndefined(contact.name) || _.isNull(contact.name)) {
            throw new Error('contact should contain name');
        }
        if (!_.isString(contact.name) || _.isEmpty(contact.name)) {
            throw new Error('name should be string and not empty');
        }
        if ( _.isUndefined(contact.city) || _.isNull(contact.city)) {
            throw new Error('contact should contain city');
        }
        if (!_.isString(contact.city) || _.isEmpty(contact.city)) {
            throw new Error('city should be string and not empty');
        }
        if ( _.isUndefined(contact.phone) || _.isNull(contact.phone)) {
            throw new Error('contact should contain phone');
        }
        if (!_.isString(contact.phone) || _.isEmpty(contact.phone)) {
            throw new Error('phone should be string and not empty');
        }
        if ( _.isUndefined(contact.mobile) || _.isNull(contact.mobile)) {
            throw new Error('contact should contain mobile');
        }
        if (!_.isString(contact.mobile) || _.isEmpty(contact.mobile)) {
            throw new Error('mobile should be string and not empty');
        }

        return contact;
    }

}

module.exports = BasicValidator;