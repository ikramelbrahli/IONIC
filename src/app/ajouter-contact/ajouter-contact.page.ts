import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { ContactAcessService } from '../services/contact-acess.service';
import { ContactAuthService } from '../services/contact-auth.service';
import { FormsModule, ReactiveFormsModule, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ajouter-contact',
  templateUrl: './ajouter-contact.page.html',
  styleUrls: ['./ajouter-contact.page.scss'],
})
export class AjouterContactPage implements OnInit {
  private ajouterContactForm : FormGroup;
  constructor(private fireauth:ContactAuthService ,private formBuilder : FormBuilder,  private firestore: ContactAcessService , private navCtrl : NavController , private menuCtrl : MenuController) { 
    this.menuCtrl.enable(false)
  }

  ngOnInit() {
    this.ajouterContactForm = this.formBuilder.group({
      nom:[''],
      email:[''],
      prenom:[''],
      tel:[''],
      adresse:[''],
      ville:[''],
      service:[''],
    });
  }
  nouveauContact(){
    this.fireauth.userDetails().subscribe(res => {
    console.log('res', res);
    if (res !== null) {
    this.firestore.newPersonalContact(res.email,this.ajouterContactForm.value)
    this.navCtrl.navigateForward('/liste-contacts');
    } else {
    this.navCtrl.navigateForward('/athentification');
    }
    }, err => {
    console.log('err', err);
    })
    }
  
}
