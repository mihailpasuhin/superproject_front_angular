import { Component, Input, OnInit } from '@angular/core';
import { IForumSubsection, IForumThread } from '../../../shared/interfaces/apiInterfaces';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit {

  @Input()
  thread: IForumThread;

  constructor() { }

  ngOnInit(): void {
  }

}
