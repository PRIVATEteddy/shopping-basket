
import { Injectable } from '@angular/core';
import { itemInterface } from './datamodel/item.interface';


@Injectable({
  providedIn: 'root'
})
export class DatabaseData {

  url = 'http://localhost:3000/locations';


  async getAllData(): Promise<itemInterface[]>{
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }














}


