import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IForumThread } from '../../shared/interfaces/apiInterfaces';
import { ForumService } from '../../shared/services/api/forum.service';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit {

  thread: IForumThread;

  constructor(
    private route: ActivatedRoute,
    private forumService: ForumService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.forumService.getForumThread(params.id).subscribe(thread => {
        this.thread = thread;
      });
    });
  }

}
