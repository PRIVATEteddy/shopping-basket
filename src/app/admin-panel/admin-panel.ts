import { Component, inject, ViewChild, AfterViewInit } from '@angular/core';
import { MatFormFieldModule} from '@angular/material/form-field';
import { AdminPanelService } from './admin-panel.model';
import { MatTableDataSource,MatTableModule } from '@angular/material/table';
import { AsyncPipe, NgFor, CurrencyPipe, NgIf } from '@angular/common';
import { map } from 'rxjs/operators';
import { product } from '../datamodel/admin.interface';
import {  from, Observable } from 'rxjs';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule, Sort  } from '@angular/material/sort';
import { MatSort } from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MyDialogComponent } from './product-details-dialog/product-details-dialog';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
interface Categories {
  value: string;
  viewValue: string;
}

  interface TableFilter {
  text: string;
  singleCategory: string | null;
  multiCategories: string[];
}


@Component({
  selector: 'app-admin-panel',
  imports: [ MatPaginator, MatButtonModule, MatFormFieldModule, MatTableModule, AsyncPipe, NgFor, CurrencyPipe,  ReactiveFormsModule , MatInputModule, MatSortModule, MatSelectModule, MatPaginatorModule],
  templateUrl: './admin-panel.html',
  styleUrl: './admin-panel.scss',
})
export class AdminPanel {
  private api = inject(AdminPanelService);
  readonly dialog = inject(MatDialog);



openDialog() {
    this.dialog.open(MyDialogComponent);
  }



form!: FormGroup;

  products$: Observable<product[]> = this.api.getProducts();
  dataSource = new MatTableDataSource<product>([]);
  displayedColumns: string[] = ['id', 'name', 'price', 'stock', 'category', 'information'];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;



products = new FormControl<string[]>([]);
//Geeft de geselecteerde multi-select categorieën als CSV = Sport,Nieuws,Tech
get selectedProductAsString(): string {
  return this.products.value?.join(',')??'';
}
//maak de category lowercase als standaard
private categoryKey(row: product): string {
  return (row.category ?? '').toLowerCase();
}

private nameKey(row: product): string {
  return (row.name ?? '').toLowerCase();
}




//word ge update met elke product verander the datasource is wat in het tabel is
ngOnInit(): void {
  this.products$.subscribe(items => {
    this.dataSource.data = items;


  });
  // fallback als filterstr geen json is filter op naam met normaal tekst
this.dataSource.filterPredicate = (row, filterStr) => {
  let f: TableFilter | null = null;
  try { f = JSON.parse(filterStr) as TableFilter; } catch {}

  const cat = this.categoryKey(row);
 const name = this.nameKey(row);
  if (!f) {

    const t = (filterStr || '').toLowerCase();
    return name.includes(t);
  }
//f geparste filtermodel
  const textPass   = !f.text || name.includes(f.text);
  const singlePass = !f.singleCategory || cat === f.singleCategory;
  const multiPass  = !f.multiCategories.length || f.multiCategories.includes(cat);

  return textPass && singlePass && multiPass;
};
this.applyFilter();

}


//pakt gewoon de string en zoekt
private searchText = '';

filterResults(text: string) {
  this.searchText = (text || '').trim().toLowerCase();
  this.applyFilter();

}


//pakt string el filtered gewoon
categorySingle = new FormControl<string | null>(null);

 applyFilter() {
  const model: TableFilter = {
    text: this.searchText,
    singleCategory: this.categorySingle?.value
      ? this.categorySingle.value.toLowerCase()
      : null,
    multiCategories: (this.products?.value ?? []).map(v => v.toLowerCase()),
  };
  this.dataSource.filter = JSON.stringify(model);
}









  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

















  // increase / decrease / delete
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
    category: this.fb.control<string[]>([], {validators: [Validators.required]}),
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

categoriesList: Categories[] = [
    {value: '', viewValue: 'none'},
    {value: 'mice', viewValue: 'Mice'},
    {value: 'mousepads', viewValue: 'Mousepads'},
    {value: 'headphones', viewValue: 'Headphones'},
    {value: 'keyboards', viewValue: 'Keyboards'},
];

logCats() {
  console.log('category control value =', this.form.get('category')?.value);
}






}
