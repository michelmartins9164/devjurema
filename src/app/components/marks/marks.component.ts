import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.scss']
})
export class MarksComponent implements OnInit {

  public url:string  = '../../../assets/images/';
  public marks:Array<string> = ['fortaleza.svg','brandini.svg', 'donabenta.svg', 'sc.svg', 'ypioca.svg'];
  constructor() { }


  ngOnInit(): void {
  }

}
