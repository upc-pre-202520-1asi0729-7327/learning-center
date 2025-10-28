import {Component, inject} from '@angular/core';
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {LearningStore} from '../../../application/learning.store';
import {Category} from '../../../domain/model/category.entity';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-category-form',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatError,
    MatButton,
    MatInput,
    TranslatePipe
  ],
  templateUrl: './category-form.html',
  styleUrl: './category-form.css'
})
export class CategoryForm {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private store = inject(LearningStore);

  form = this.fb.group({
    name: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] })
  });

  isEdit = false;
  categoryId: number | null = null;

  constructor() {
    this.route.params.subscribe(params  => {
      this.categoryId = params['id'] ? +params['id'] : null;
      this.isEdit = !!this.categoryId;
      if (this.isEdit && this.categoryId) {
        let id = this.categoryId;
        const category = this.store.getCategoryById(id)();
        console.log(category);
        if (category) this.form.patchValue({name: category.name});
      }
    });
  }

  submit() {
    if (this.form.invalid) return;
    const category: Category = new Category({
      id: this.categoryId ?? 0,
      name: this.form.value.name!
    });

    if (this.isEdit) this.store.updateCategory(category); else this.store.addCategory(category);
    this.router.navigate(['learning/categories']).then();
  }
}
