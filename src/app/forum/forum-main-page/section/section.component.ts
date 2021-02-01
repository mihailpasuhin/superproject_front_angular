import { Component, Input, OnInit } from '@angular/core';
import { IForumSection } from '../../../shared/interfaces/apiInterfaces';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input()
  section: IForumSection;

  constructor() { }

  ngOnInit(): void {
  }

}
