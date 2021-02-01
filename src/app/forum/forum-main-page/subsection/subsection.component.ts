import { Component, Input, OnInit } from '@angular/core';
import { IForumSubsection, IForumThread } from '../../../shared/interfaces/apiInterfaces';

@Component({
  selector: 'app-subsection',
  templateUrl: './subsection.component.html',
  styleUrls: ['./subsection.component.scss']
})
export class SubsectionComponent implements OnInit {

  @Input()
  subsection: IForumSubsection | IForumThread;

  constructor() { }

  ngOnInit(): void {
  }

}
