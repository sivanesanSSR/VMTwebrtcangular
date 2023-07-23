import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './services/socket/websocket.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'chatapp';

  public userList:any =[
    {name:'vms',id:112},
    {name:'someone',id:66},
    {name:'grue',id:55},
    {name:'menu',id:99}
  ]
  // --- user ---
  connectionFor:any = null;
  sendMsg:any = null;
  messages:any = [];

  constructor(public socket:WebsocketService)
  {
    this.socket.Onmessage.subscribe(x=>{
      this.messages.push(x)
      // {"fromUserName":"someone","fromUserId":66,"toUserName":"vms","toUserId":112,"msgType":"NORMAL","msgContent":"VMT","dateofsended":"2023-07-23T14:16:46.833Z"}
    })
  }
  
  ngOnInit(): void {
      
  }
  // openCon()
  // {
  //   if(this.connectionFor != null)
  //   {
  //     this.socket.openWebsocketConnection()
  //   }
  // }
  selectUser(e:any)
  {
    console.log(e.target.value)
    console.log(this.connectionFor)
  }

  // sendMessage()
  // {
  //   this.socket.sendWebSocketMessage(this.sendMsg);
  // }

  connect()
  {
    // this.socket.connect();
    this.socket.open(this.connectionFor.id);
  }

  send()
  {
    // this.socket.send(this.sendMsg)
    let msgData = {
      fromUserName:this.connectionFor.name,
      fromUserId:this.connectionFor.id,
      toUserName:this.sendFor.name,
      toUserId:this.sendFor.id,
      msgType:'NORMAL',// for now it is normal messag for chat is should be other types like meeting,meetingroom etc,.
      msgContent:this.sendMsg,
      dateofsended:new Date()
    }
    this.socket.sendMessage(msgData)
  }

  sendFor:any = null;
  sendto(e:any)
  {
    console.log(e.target.value)
    console.log(this.sendFor)
    
  }

  
}
