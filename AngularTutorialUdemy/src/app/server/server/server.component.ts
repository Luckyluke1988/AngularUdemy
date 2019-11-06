import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`.online{
    color: white;
  }`]
})


export class ServerComponent implements OnInit {
  ServerId = 0
  ServerStatus = 'Offline'


  constructor() {
    
    this.ServerStatus = Math.random() > 0.5 ? 'Online' : 'Offline';

   }



  ngOnInit() {
  }


  getServerStatus(){
    return this.ServerStatus;
  }

  getColor()
  {
    return this.ServerStatus == 'Online' ? 'green' : 'red'; 
  }

  

  
}
