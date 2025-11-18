import {Component, inject} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';

/**
 * Component for switching between supported languages.
 * Uses Angular Material button toggles for language selection.
 */
@Component({
  selector: 'app-language-switcher',
  imports: [
    MatButtonToggleGroup,
    MatButtonToggle
  ],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.css'
})
export class LanguageSwitcher {
  protected currentLang: string = 'en';

  protected languages: string[] = ['en', 'es'];

  private translate: TranslateService;

  /**
   * Creates an instance of LanguageSwitcher.
   * Initializes the translation service and sets the current language.
   */
  constructor() {
    this.translate = inject(TranslateService);
    this.currentLang = this.translate.getCurrentLang();
  }

  /**
   * Switches the application language.
   * @param language The language code to switch to (e.g., 'en' or 'es').
   */
  useLanguage(language: string) {
    this.translate.use(language);
    this.currentLang = language;
  }

}
