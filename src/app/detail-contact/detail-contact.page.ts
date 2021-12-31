import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Contacts } from '../Contacts';
import { ContactAcessService } from '../services/contact-acess.service';
import { ContactAuthService } from '../services/contact-auth.service';

@Component({
  selector: 'app-detail-contact',
  templateUrl: './detail-contact.page.html',
  styleUrls: ['./detail-contact.page.scss'],
})
export class DetailContactPage implements OnInit {

  emailContact:string;
  from:string;
  contact: Contacts;
  private isButtonsVisible=false;
  constructor(private contactservice:ContactAcessService,
  private fireauth :ContactAuthService,
  private firestore: ContactAcessService,
  private navCtrl: NavController,
  private route: ActivatedRoute,
  private router: Router) {
  this.route.queryParams.subscribe(params => {
  this.emailContact = params["emailContact"];
  this.from=params["from"];
  if (this.from==="liste-contacts-rec")
  this.isButtonsVisible = false;
  else
  this.isButtonsVisible = true;
  });
  }

  ngOnInit() {
    if (this.from==="liste-contacts-rec")
      this.recommande();
    else
      this.personel();
  }


    personel(){
      console.log('res____', this.emailContact);

      this.fireauth.userDetails().subscribe(res => {
      console.log('res', res.email);
      console.log('res_', this.emailContact);

      if (res !== null) {
      this.contactservice.getPersonalContact(res.email,this.emailContact).subscribe(res => {
      this.contact=<Contacts>res ;
      console.log(res);
      })
      } else {
      this.navCtrl.navigateForward('/athentification');
      }
      }, err => {
      console.log('err', err);
      })
      }
      recommande(){
      this.fireauth.userDetails().subscribe(res => {
      console.log('res', res);
      if (res !== null) {
      this.contactservice.getContact(this.emailContact).subscribe
      (res => {
      this.contact=<Contacts>res ;
      console.log(res);
      })
      } else {
      this.navCtrl.navigateForward('/athentification');
      }
      }, err => {
      console.log('err', err);
      })
      }
  Supprimer(){
        this.fireauth.userDetails().subscribe(res => {
        console.log('res', res.email);
        if (res !== null) {
        this.contactservice.delateContactPersonel(res.email,this.contact.email);
        this.navCtrl.navigateForward('/liste-contacts');
        } else {
        this.navCtrl.navigateForward('/athentification');
        }
        }, err => {
        console.log('err', err);
        })
  }
  Partager(){
    this.fireauth.userDetails().subscribe(res => {
    console.log('res', res);
    if (res !== null) {
    this.firestore.newContact(this.contact)
    this.navCtrl.navigateForward('/liste-contacts-recommandes');
    } else {
    this.navCtrl.navigateForward('/authentification');
    }
    }, err => {
    console.log('err', err);
    })
    }
    Modifier(){
      this.navCtrl.navigateForward('/update-contact');
    }
}
