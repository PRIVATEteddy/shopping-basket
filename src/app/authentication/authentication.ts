import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { Router} from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Login } from "./login/login";
import { Register } from "./register/register";


@Component({
  selector: 'app-authentication',
  imports: [MatTabsModule, RouterOutlet, Login, Register],
  templateUrl: './authentication.html',
  styleUrl: './authentication.scss'
})
export class Authentication {

  }

