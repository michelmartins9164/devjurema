import { AppRoutingModule } from './../../app-routing.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  public headerImage = '../../../assets/images/bgHeader.svg';
  ngOnInit(): void {
  }

  public urlImage:Array<string> = ['icon1.svg','icon2.svg','icon3.svg','icon4.svg'];
  public textimages:Array<string> = ['Encontre uma de nossas lojas', 'Adquira nossos produtos', 'Acompanhe as ofertas nas nossas redes sociais', 'Processo de separação e entrega garantida'];

}
