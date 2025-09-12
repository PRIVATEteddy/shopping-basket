import { Component, inject } from '@angular/core';
import { MatFormFieldModule} from '@angular/material/form-field';
import { AdminPanelService } from './admin-panel.model';
import { MatTableModule } from '@angular/material/table';
import { AsyncPipe, NgFor, CurrencyPipe, NgIf } from '@angular/common';

import { product } from '../datamodel/admin.interface';
import {  Observable } from 'rxjs';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-admin-panel',
  imports: [  MatButtonModule, MatFormFieldModule, MatTableModule, AsyncPipe, NgFor, CurrencyPipe, NgIf, ReactiveFormsModule , MatInputModule],
  templateUrl: './admin-panel.html',
  styleUrl: './admin-panel.scss',
})
export class AdminPanel {
  private api = inject(AdminPanelService);
  
  products$: Observable<product[]> = this.api.getProducts();
  ngOninit(): void {}
  form: FormGroup;

  onIncrease(p: product) {
    if (!p.id) return;
    this.api.updateProduct(p.id, { stock: p.stock + 1 }).subscribe(() => {
      this.products$ = this.api.getProducts();
    });
  }

  onDelete(id: number | undefined) {
    if (!id) return;
    this.api.deleteProduct(id).subscribe(() => {
      this.products$ = this.api.getProducts();
    });
  }

  onDecrease(p: product) {
    if (!p.id) return;
    if (p.stock <= 0) return;
    this.api.updateProduct(p.id, { stock: p.stock - 1 }).subscribe(() => {
      this.products$ = this.api.getProducts();
    });
  }

constructor(private fb: FormBuilder) {
  this.form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    price: [null, [Validators.required, Validators.min(0)]],
    stock: [0, [Validators.required, Validators.min(0)]],
  });
  }

   onCreate () {
  if(this.form.invalid) {
    return;
  }
 const newProduct = this.form.value;

  this.api.createProduct(newProduct).subscribe(response => {
   this.products$ = this.api.getProducts();
   this.form.reset();
  });
 }

displayedColumns: string[] = ['id', 'name', 'price', 'stock'];


}
