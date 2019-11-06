import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userName = '';
  userNameList = [];
  userId = 0;
  showDetails = true;

  showDetailsList = [];

  constructor() { }


  ngOnInit() {
  }


  updateUserList()
  {
    this.userNameList.push(this.userName);
  }


  deleteUserName()
  {
    this.userName = '';
    
  }

  changeDetails()
  {
    this.showDetails = !this.showDetails;
    this.showDetailsList.push(new Date);
  }

  deleteDetails()
  {
    this.showDetailsList.splice(this.showDetailsList.length-1,1)
  }
}
