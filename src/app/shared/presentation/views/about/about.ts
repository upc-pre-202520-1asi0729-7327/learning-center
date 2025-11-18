import {Component} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

/**
 * Component for the about page.
 * Displays information about the application.
 */
@Component({
  selector: 'app-about',
  imports: [
    TranslatePipe
  ],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

}
