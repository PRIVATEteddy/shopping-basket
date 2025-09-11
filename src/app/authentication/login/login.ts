
import { AuthService } from './../auth.service';
import { Component, signal } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { userInterface } from '../../datamodel/user.interface';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, MatButtonModule, MatInputModule,MatIconModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
hide = signal(true);
clickEvent(event: MouseEvent){
  this.hide.set(!this.hide());
  event.stopPropagation();
}


 email = '';
  password = '';
  loggedInUser?: userInterface | null;

constructor(private authService: AuthService) {}

// login.component.ts
onLogin() {
  this.authService.login(this.email, this.password).subscribe(user => {
    if (user) {
      this.loggedInUser = user;
      console.log('Login successful:', user.name, user.email);
    } else {
      this.loggedInUser = null;
      console.log('Invalid credentials');
    }
  });
}
}
