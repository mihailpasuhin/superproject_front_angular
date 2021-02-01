import { Component, OnInit } from '@angular/core';
import { PapersService } from '../../../shared/services/api/papers.service';

@Component({
  selector: 'app-papers-most-popular',
  templateUrl: './papers-most-popular.component.html',
  styleUrls: ['./papers-most-popular.component.scss']
})
export class PapersMostPopularComponent implements OnInit {

  papers: any[];

  constructor(
    private papersService: PapersService
  ) { }

  ngOnInit(): void {
    this.papersService.findMostPopular().subscribe(papers => {
      this.papers = papers;
    });
  }

}
