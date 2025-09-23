import {Component, inject, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Layout} from './shared/presentation/components/layout/layout';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [Layout],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('learning-center');
  private translate: TranslateService;

  constructor() {
    this.translate = inject(TranslateService);
    this.translate.addLangs(['en', 'es']);
    this.translate.use('en');
  }
}
