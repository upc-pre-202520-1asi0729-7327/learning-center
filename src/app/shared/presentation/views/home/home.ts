import {Component} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

/**
 * Component for the home page.
 * Serves as the landing page of the application.
 */
@Component({
  selector: 'app-home',
  imports: [
    TranslatePipe
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
