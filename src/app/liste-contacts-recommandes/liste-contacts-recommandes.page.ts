import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { Contacts } from '../Contacts';
import { ContactAcessService } from '../services/contact-acess.service';
import { ContactAuthService } from '../services/contact-auth.service';

@Component({
  selector: 'app-liste-contacts-recommandes',
  templateUrl: './liste-contacts-recommandes.page.html',
  styleUrls: ['./liste-contacts-recommandes.page.scss'],
})
export class ListeContactsRecommandesPage implements OnInit {

  private contacts : Contacts[] ;

  constructor(private menuCtrl : MenuController , private navCtrl : NavController , private contactservice : ContactAcessService , private fireauth : ContactAuthService ) {   this.menuCtrl.enable(true)}

  ngOnInit() {
    this.fireauth.userDetails().subscribe(res=>{
      console.log('res',res);
      if(res!== null){
        this.contactservice.getAllContact().subscribe(data=>{
          this.contacts = data.map(e=>{
            return{
              nom : e.payload.doc.data()['nom'],
              prenom : e.payload.doc.data()['prenom'],
              tel : e.payload.doc.data()['tel'],
              service : e.payload.doc.data()['service'],
              adresse : e.payload.doc.data()['adresse'],
              ville : e.payload.doc.data()['ville'],
              email : e.payload.doc.data()['email']
    
            };
          })
          console.log(this.contacts)
        })
      }
    })
  

  }
  ajouterContact(){
    this.navCtrl.navigateRoot('/ajouter-contact');
    }
    detailsContact(email){
      let navigationExtras: NavigationExtras = {
      queryParams: {
      emailContact: email,
      from:"liste-contacts"
      }
      };
      this.navCtrl.navigateForward('/detail-contact', navigationExtras);
      }

}
