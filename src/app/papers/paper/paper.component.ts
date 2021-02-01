import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PapersService } from '../../shared/services/api/papers.service';

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.scss']
})
export class PaperComponent implements OnInit {

  @Input() private id: number;
  paper: any;

  constructor(
    private papersService: PapersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.papersService.getPaper(params.id).subscribe((paper: any) => {
        this.paper = paper;
      });
    });
  }

}
