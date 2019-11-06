import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was Created!';
  serverName='';
  serverList = [];
  serverStatus : string = 'Offline';

  constructor() 
  {
    setTimeout(()=>{this.allowNewServer=true;},2000);

  }

  ngOnInit() 
  {

  }

  getServerStatus()
  {
    return this.serverStatus;
  }

  onCreateServer()
  {
    this.serverCreationStatus = 'New Server Created ' + this.serverName;
    this.serverList.push(this.serverName);
    this.serverName = '';
  }

  onDeleteServer()
  {
    var index = this.serverList.length;
    this.serverList.splice(index-1,1)
  }

  onUpdateServerName(event:Event)
  {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
