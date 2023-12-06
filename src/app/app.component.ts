import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'enset';
  routes:Array<any> = [
    {route: "/home", icon:"bi bi-house", title:"Home"},
    {route: "/products", icon:"bi bi-list", title:"Products"},
    {route: "/newProduct", icon:"bi bi-plus-circle", title:"New Product"}
  ];

  currentRoute: any;

  setCurrentRoute(route: any) {
    this.currentRoute= route;
  }
}
