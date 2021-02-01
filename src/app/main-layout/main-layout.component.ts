import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from '../shared/services/api/auth.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor(
    public authService: AuthService,
  ) {

  }

  ngOnInit(): void {
  }


}
