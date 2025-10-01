import {Component, inject} from '@angular/core';
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {LearningStore} from '../../../application/learning.store';
import {Category} from '../../../domain/model/category.entity';
import {Course} from '../../../domain/model/course.entity';
import {MatError, MatFormField} from '@angular/material/form-field';
import {MatLabel} from '@angular/material/form-field';
import {MatSelect} from '@angular/material/select';
import {MatOption} from '@angular/material/core';
import {MatButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';

@Component({
  selector: 'app-course-form',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatError,
    MatSelect,
    MatOption,
    MatButton,
    MatInput
  ],
  templateUrl: './course-form.html',
  styleUrl: './course-form.css'
})
export class CourseForm {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private store = inject(LearningStore);

  form = this.fb.group({
    title: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    description: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    categoryId: new FormControl<number | null>(null)
  });
  categories = this.store.categories;
  isEdit = false;
  courseId: number | null = null;

  constructor() {
    this.route.params.subscribe(params => {
      this.courseId = params['id'] ? +params['id'] : null;
      this.isEdit = !!this.courseId;
      if (this.isEdit && this.courseId) {
        let id = this.courseId;
        const course = this.store.getCourseById(id)();
        if (course) {
          this.form.patchValue({
            title: course.title,
            description: course.description,
            categoryId: course.categoryId
          });
        }
      }
    });
  }

  submit() {
    if (this.form.invalid) return;
    let id = this.form.value.categoryId ?? 0;
    const category: Category | null = this.store.getCategoryById(id)() ?? null;
    const course: Course = new Course({
      id: this.courseId ?? 0,
      title: this.form.value.title!,
      description: this.form.value.description!,
      categoryId: this.form.value.categoryId ?? 0,
      category: category ?? null
    });

    if (this.isEdit) {
      this.store.updateCourse(course);
    } else {
      this.store.addCourse(course);
    }

    this.router.navigate(['learning/courses']).then();
  }
}
