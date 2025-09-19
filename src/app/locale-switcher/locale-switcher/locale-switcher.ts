import { CommonModule } from '@angular/common';
import { Inject,Component, LOCALE_ID,} from '@angular/core';


@Component({
  imports : [CommonModule],
  selector: 'app-locale-switcher',
  templateUrl: './locale-switcher.html',
})
export class LocaleSwitcher {
  localesList = [
    { code: 'en', name: 'English' },
    { code: 'nl', name: 'Dutch' },
  ];

}
