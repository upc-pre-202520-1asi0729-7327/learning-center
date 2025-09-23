import {Component, inject} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';

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

  constructor() {
    this.translate = inject(TranslateService);
    this.currentLang = this.translate.getCurrentLang();
  }

  useLanguage(language: string) {
    this.translate.use(language);
    this.currentLang = language;
  }

}
