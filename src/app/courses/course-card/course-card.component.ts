import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../shared/services/api/users.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {

  constructor(
    private userService: UsersService
  ) { }

  ngOnInit(): void {
  }

  click(): void {
    this.userService.getMyProfile().subscribe(res => {
      alert(`Вас зовут: ${res.first_name} ${res.last_name}`);
    });
  }

}
