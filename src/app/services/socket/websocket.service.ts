import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  messages: any = [];
  messageInput: string = '';
  webSocket: WebSocket;

  public Onmessage = new BehaviorSubject<any>('');

  constructor() { }

  open(conFor)
  {
    this.webSocket = new WebSocket(environment.config.websocketUrl + conFor);

    this.webSocket.onopen = (e:any) =>
    {
      console.log(e);
    }

    this.webSocket.onmessage = (event) => {
      const message = event.data;
      console.log("received message",message);
      this.messages.push(JSON.parse(message));
      this.Onmessage.next(JSON.parse(message));
    };

    this.webSocket.onclose = (e:any) =>
    {
      console.log(e);
    }
  }

  sendMessage(msg:any) {
    this.webSocket.send(JSON.stringify(msg));
  }

  closeConnection()
  {
    this.webSocket.close();
  }


}

export class NormalMsg{

}