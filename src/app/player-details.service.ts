import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerDetailsService {
  	details= [
		{id: 1, name: 'Dhawan'},
		{id: 2, name: 'Rohit'},
		{id: 3, name: 'Kholi'},
		{id: 4, name: 'KL Rahul'},
		{id: 5, name: 'Pant'},
		{id: 6, name: 'Dhoni'},
		{id: 7, name: 'Hardik'},
		{id: 8, name: 'Aswin'},
		{id: 9, name: 'Jadeja'},
		{id: 10, name: 'Bumrah'},
		{id: 11, name: 'Isant'}
	]

  constructor() { }

  showDetails(){
    return this.details;
  }
}
