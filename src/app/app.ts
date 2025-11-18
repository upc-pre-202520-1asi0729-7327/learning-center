import {Component, inject, signal} from '@angular/core';
import {Layout} from './shared/presentation/components/layout/layout';
import {TranslateService} from '@ngx-translate/core';

/**
 * Root component of the application.
 * Sets up the main layout and initializes translation services.
 */
@Component({
  selector: 'app-root',
  imports: [Layout],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('learning-center');
  private translate: TranslateService;

  /**
   * Creates an instance of App.
   * Initializes the translation service with supported languages and sets the default language to English.
   */
  constructor() {
    this.translate = inject(TranslateService);
    this.translate.addLangs(['en', 'es']);
    this.translate.use('en');
  }
}
