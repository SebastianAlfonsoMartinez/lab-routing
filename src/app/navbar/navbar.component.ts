import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  mainMenu: {
    accessLink: Array<any>
  } = {accessLink: []  };
  ngOnInit(): void {
    this.mainMenu.accessLink = [
      {
        name: 'Home',
        router: ['/'],
        style: 'nav-link active'
      },
      {
        name: 'AboutUs',
        router: ['/', 'aboutUs'],
        style: 'nav-link'
      },
      {
        name: 'Contact',
        router: ['/', 'contact'],
        style: 'nav-link'
      }
    ]
  }

}
