import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paper-card',
  templateUrl: './paper-card.component.html',
  styleUrls: ['./paper-card.component.scss']
})
export class PaperCardComponent implements OnInit {

  @Input() paper: any;

  constructor() { }

  ngOnInit(): void {  }

}
