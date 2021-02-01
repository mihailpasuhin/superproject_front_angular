import { Component, Input, OnInit } from '@angular/core';
import { IForumPost } from '../../../shared/interfaces/apiInterfaces';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input()
  post: IForumPost;

  constructor() { }

  ngOnInit(): void {
  }

}
