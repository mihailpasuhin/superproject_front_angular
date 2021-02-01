import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PapersService } from '../../shared/services/api/papers.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  form: FormGroup;
  content: any;

  constructor(
    private papersService: PapersService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(''),
      content: new FormControl('')
    });
  }

  submit() {
    this.papersService.addPaper(this.form.value).subscribe(res => console.log('ok'));
  }

}
