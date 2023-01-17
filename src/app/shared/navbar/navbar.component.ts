import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  teste(e: MouseEvent):void {
    console.log(e.target)
  }
   ngOnInit(): void {
  }
  public ImageLogo:string = '../../../assets/images/jurema.svg';

  public links:Array<any> = [
    'Inicio','Catálogo','Em oferta','Sobre'
  ]

}
