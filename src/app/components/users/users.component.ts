import { Component } from '@angular/core';
import {Observable, Observer} from "rxjs";

interface IUser {
  nom: string;
  prenom: string;
  age: number;
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  listUsers:IUser[] = [
    {nom: 'benmbarek', prenom: 'Anouar', age: 23},
    {nom: 'el mouawhed', prenom: 'saad', age: 15},
    {nom: 'mousrij', prenom: 'hamza', age: 19},
    {nom: 'mousrij', prenom: 'amine', age: 25}
  ];

  numbers:number=0;

  numberUserActive:number=15.1;

  dateNow:Date = new Date();
  currency: number = 1;

  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

}
