import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Mes contacts', url: '/liste-contacts'},
    { title: 'Recommandation', url: '/liste-contacts-recommandes'},
    { title: 'Profile', url: '/profile'},
    { title: 'Déconnexion', url: '/deconnexion'},
    

    
   
  ];
   constructor() {}
}
