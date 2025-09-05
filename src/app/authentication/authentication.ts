import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { Router} from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-authentication',
  imports: [MatTabsModule],
  templateUrl: './authentication.html',
  styleUrl: './authentication.scss'
})
export class Authentication {
}
