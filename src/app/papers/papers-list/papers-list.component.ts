import { Component, OnInit } from '@angular/core';
import { PapersService } from '../../shared/services/api/papers.service';

@Component({
  selector: 'app-papers-list',
  templateUrl: './papers-list.component.html',
  styleUrls: ['./papers-list.component.scss']
})
export class PapersListComponent implements OnInit {

  papers: any[] = [];

  constructor(
    private papersService: PapersService,
  ) { }

  ngOnInit(): void {
    this.papersService.getPapers().subscribe((papers: any[]) => {
      this.papers = papers;
    });
  }

  downloadMore() {
    this.papersService.getPapers(10, this.papers.length).subscribe((papers: any[]) => {
      this.papers.push(...papers);
    });
  }
}
