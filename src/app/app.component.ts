import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'client';
  dataz = []
  homes$: any
  typeDropdownOpen: Boolean = true

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  toggleTypeDropDown() {
    this.typeDropdownOpen = !this.typeDropdownOpen
  }

  submitData(value: any) {
    console.log(value)
    const body = {
      ...value
    }
    this.usersService.postData(body).subscribe(response => {
      console.log("response", response)
    })
  }

  updateData(value: any) {
    console.log('value', value)
    const body = {
      ...value
    }
    this.usersService.updateData(body, '6249a8d923736f4aeb36cc81')
      .subscribe(response => {
        console.log(response)
      })
  }

  ngOnInit() {
    this.usersService.getAll().subscribe(data => {
      console.log("data", data)
      data = data
      this.homes$ = data
    })
  }

  typeFilterApplied(event: any) {
    console.log("$event", event)
    this.typeDropdownOpen = false
    this.router.navigate(['names'], {
      queryParams: {
        "type": event
      }
    })
  }

}
