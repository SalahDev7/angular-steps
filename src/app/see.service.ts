import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SeeService {

  constructor() { }

  createEventSource(): Observable<any> {
    return new Observable(observer => {
      const eventSource = new EventSource("https://1b00-196-115-71-213.ngrok-free.app/events/e9134029-b3dc-43c6-991a-3b5d4b1f5239", { withCredentials: true });

      eventSource.onmessage = event => {
        const messageData: any = JSON.parse(event.data);
        observer.next(messageData);
      };

      eventSource.onerror = error => {
        observer.error('EventSource error');
      };
    });
  }

}
