import {Validator,FormBuilder,FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { product } from '../datamodel/admin.interface';
@Injectable({ providedIn: 'root' })

export class AdminPanelService {

constructor(private http: HttpClient) {}


  getProducts(): Observable<product[]> {
    return this.http.get<product[]>('http://localhost:3000/products');
  }


  updateProduct(id: number, patch: Partial<product>) {
    return this.http.patch<product>(`http://localhost:3000/products/${id}`, patch);
  }

  deleteProduct(id: number) {
    return this.http.delete<void>(`http://localhost:3000/products/${id}`);
  }
   addProduct(p: Omit<product, 'id'>) {
    return this.http.post<product>('http://localhost:3000/products', p);
  }

  createProduct(p: Omit<product, 'id'>) {
    return this.http.post<product>('http://localhost:3000/products', p);
  }







}
