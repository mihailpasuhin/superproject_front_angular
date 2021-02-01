import { Component, OnInit } from '@angular/core';
import { IForumSection } from '../../shared/interfaces/apiInterfaces';
import { ForumService } from '../../shared/services/api/forum.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './forum-main-page.component.html',
  styleUrls: ['./forum-main-page.component.scss']
})
export class ForumMainPageComponent implements OnInit {

  sections: IForumSection[] = [];

  constructor(
    private forumService: ForumService
  ) { }

  ngOnInit(): void {
    this.forumService.getForumSections().subscribe((sections: IForumSection[]) => {
      this.sections = sections;
    });
  }

}
