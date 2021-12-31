import { Injectable } from '@angular/core';
import { Compte } from '../Compte';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Contacts } from '../Contacts';
@Injectable({
  providedIn: 'root'
})
export class ContactAcessService {
  newCompte(compte: Compte) {
    return this.firestore.doc('/Comptes/').collection('Compte').add(compte);
  }

  constructor( private firestore: AngularFirestore) { }

  compteRef:AngularFirestore;
  
  // Get Compte
  getCompte(id: string) {
    return this.firestore.doc('/Comptes/'+id).valueChanges();
  }

  getContact(id: string) {
    return this.firestore.doc('/Contacts/'+id).valueChanges();
  }

  getAllCompte() {
    return this.firestore.collection('/Comptes/').snapshotChanges();
  }

  getAllContact() {
    return this.firestore.collection('/Contacts/').snapshotChanges();
  }
  getPersonalContact(id1: string , id2 : string,){
    return this.firestore.doc('/Comptes/'+id1).collection('/Contacts').doc(id2).valueChanges();
  }
  newPersonalContact(id, contact) {
    return this.firestore.doc('/Comptes/'+id).collection('/Contacts/').doc(contact.email).set(contact);
    }
  getAllPersonalContact(id) {
      return this.firestore.doc('/Comptes/'+id).collection('/Contacts/').snapshotChanges()
      }
   delateContactPersonel(id1: string, id2: string ){
        return this.firestore.doc('/Comptes/'+id1).collection('/Contacts/').doc(id2).delete();
        }
   newContact(contact) {
          return this.firestore.collection('/Contacts').doc(contact.email).set(contact);
          }
   updateContact(id1: string, id2 , contact : Contacts){
     console.log("this is id2" , id2)
     console.log("this is id1" , id1)
     console.log("this is contact" , contact.email )
    
    return this.firestore.doc('/Comptes/'+id1).collection('/Contacts/').doc(id2).update(contact);
   }

}
