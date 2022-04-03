import { Component } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  constructor(private usersService: UsersService) { }

  submitData(value: any) {
    console.log(value)
    const body = {
      ...value
    }
    this.usersService.postData(body).subscribe(response => {
      console.log("response", response)
    })
  }



  ngOnInit() {
    this.usersService.getAll().subscribe(data => {
      console.log("data", data)
    })
  }

}
