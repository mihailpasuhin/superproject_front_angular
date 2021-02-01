import { Component, OnInit } from '@angular/core';
import { PapersService } from '../shared/services/api/papers.service';

@Component({
  selector: 'app-papers',
  templateUrl: './papers.component.html',
  styleUrls: ['./papers.component.scss']
})
export class PapersComponent implements OnInit {

  papers: any[] = [];

  constructor(
    private papersService: PapersService,
  ) { }

  ngOnInit(): void {
    this.papersService.getPapers().subscribe((papers: any[]) => {
      this.papers = papers;
      console.log(papers);
    });
  }

}
