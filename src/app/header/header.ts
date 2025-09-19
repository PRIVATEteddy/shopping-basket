import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { RouterLink } from '@angular/router';
import { LocaleSwitcher } from '../locale-switcher/locale-switcher/locale-switcher';
import {MatSelectModule} from '@angular/material/select';
@Component({

  selector: 'app-header',
  imports: [MatButtonModule, MatToolbarModule, MatDividerModule, RouterLink, LocaleSwitcher, MatSelectModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {

}
