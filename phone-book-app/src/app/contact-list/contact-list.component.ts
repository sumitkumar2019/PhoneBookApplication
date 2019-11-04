import { Contact } from './../model/contact';
import { ContactListService } from './../services/contact-list.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Observable<Contact[]>;

  constructor(private contactListService: ContactListService) {}

  ngOnInit() {
    this.resetForm();
    this.loadContacts();
  }

  loadContacts() {
    console.log("inside load contact");
    this.contactListService.getAllContact().subscribe(data =>{
      this.contacts = data['contacts'];
    });
  } 

  resetForm(form?:NgForm){
    if(form===null)
      form.resetForm();
    this.contactListService.newContact = {
      _id:null,
      name:'',
      address:'',
      city:'',
      phone:'',
      mobile:''
    }
  }
  deleteContact(contact){
    console.log("inside delete contact with id : " + contact._id);
    this.contactListService.deleteContact(contact._id).subscribe(data =>{
      this.contactListService.getAllContact().subscribe(data =>{
        this.contacts = data['contacts'];
      });
    });
  }

  createContact(){
    this.contactListService.createContact().subscribe(data =>{
      this.contactListService.getAllContact().subscribe(data =>{
        this.contacts = data['contacts'];
        this.resetForm();
      });
    });
  }
  
  editContact(contact){
    this.contactListService.newContact = {
      _id:contact._id,
      name:contact.name,
      address:contact.address,
      city:contact.city,
      phone:contact.phone,
      mobile:contact.mobile
    }
  }
}




