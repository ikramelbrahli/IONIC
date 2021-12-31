import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, MenuController } from '@ionic/angular';
import { Contacts } from '../Contacts';
import { ContactAcessService } from '../services/contact-acess.service';
import { ContactAuthService } from '../services/contact-auth.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.page.html',
  styleUrls: ['./update-contact.page.scss'],
})
export class UpdateContactPage implements OnInit {
  private updateContactForm : FormGroup;
  id:any;
  emailContact:string;
  from:string;
  contact: Contacts;
  constructor(private fireauth:ContactAuthService ,private formBuilder : FormBuilder,  private firestore: ContactAcessService , private route: ActivatedRoute, private navCtrl : NavController , private menuCtrl : MenuController,private router: Router) {
    this.menuCtrl.enable(false)
    this.route.queryParams.subscribe(params => {
      this.emailContact = params["email"];
      console.log( this.emailContact)
      this.from=params["from"];
      
      });
   }

  ngOnInit() {
    this.updateContactForm = this.formBuilder.group({
      nom:[''],
      email:[''],
      prenom:[''],
      tel:[''],
      adresse:[''],
      ville:[''],
      service:[''],
    });
  }
  updateContact() {
    this.fireauth.userDetails().subscribe(res => {
      console.log('res_update', this.emailContact);
      if (res !== null) {
      this.firestore.updateContact(res.uid,this.emailContact,this.updateContactForm.value);
      this.navCtrl.navigateForward('/liste-contacts');
      } else {
      this.navCtrl.navigateForward('/athentification');
      }
      }, err => {
      console.log('err', err);
      })

  }

}
