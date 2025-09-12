import { Component, signal } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  imports: [ FormsModule, MatFormFieldModule, MatButtonModule, MatInputModule,MatIconModule],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {
hide = signal(true);
clickEvent(event: MouseEvent){
  this.hide.set(!this.hide());
  event.stopPropagation();
}


 username = '';
 email = '';
password = '';

constructor(private http: HttpClient) { }

onCreate(){
 const newUser = {
  username: this.username,
  email: this.email,
  password: this.password
 };



this.http.post('http://localhost:3001/user', newUser)
.subscribe(response => {
  console.log('User created', response);
});
}

}

