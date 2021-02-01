import { Component, Input, OnInit } from '@angular/core';
import { IForumSubsection } from '../../shared/interfaces/apiInterfaces';
import { ActivatedRoute } from '@angular/router';
import { ForumService } from '../../shared/services/api/forum.service';

@Component({
  selector: 'app-subsection-page',
  templateUrl: './subsection-page.component.html',
  styleUrls: ['./subsection-page.component.scss']
})
export class SubsectionPageComponent implements OnInit {

  @Input()
  subsection: IForumSubsection;

  constructor(
    private forumService: ForumService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.forumService.getForumSubsection(params.id).subscribe((subsection: IForumSubsection) => {
        this.subsection = subsection;
      });
    });
  }

}
