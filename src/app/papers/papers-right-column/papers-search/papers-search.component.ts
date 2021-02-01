import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-papers-search',
  templateUrl: './papers-search.component.html',
  styleUrls: ['./papers-search.component.scss']
})
export class PapersSearchComponent implements OnInit {

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      searchQuery: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  search() {
    console.log('qwe');
  }

}
