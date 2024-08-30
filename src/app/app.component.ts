import {Component, OnInit} from '@angular/core';
import {SeeService} from "./see.service";
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-saad',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my name is CodingTech';
  age: number = 20;
  anouar: string = 'my name is anouar';
  hobbies: string = '';

  returnText() {
    return 'I am a Software Engineer';
  }

  changeTile(): void {
    this.title = 'I am not a Software Engineer';
  }

  changeAge(): void {
    this.age++;
  }

  data: Observable<any> | undefined ;

  constructor(private sseService: SeeService) {}
  ngOnInit(): void {
     this.sseService.createEventSource().subscribe((e : Observable<any>) => {
      console.log('Message received: ' + e);
      console.log("salamsalam")
       this.data = e;
    });
  }
}
