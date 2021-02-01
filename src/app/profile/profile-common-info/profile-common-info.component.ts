import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../../shared/services/api/users.service';

@Component({
  selector: 'app-profile-common-info',
  templateUrl: './profile-common-info.component.html',
  styleUrls: ['./profile-common-info.component.scss']
})
export class ProfileCommonInfoComponent implements OnInit {

  form: FormGroup;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.usersService.getMyProfile().subscribe(user => {
      this.form = new FormGroup({
        username: new FormControl(user.username),
        first_name: new FormControl(user.first_name),
        last_name: new FormControl(user.last_name),
        email: new FormControl(user.email),
      });
      console.log(user);
    });
  }

  submit() {

  }

}
