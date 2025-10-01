import { Routes } from '@angular/router';
// Lazy-loaded components
const categoryList = () => import('./views/category-list/category-list').then(m => m.CategoryList);
const categoryForm = () => import('./views/category-form/category-form').then(m => m.CategoryForm);
const courseList = () => import('./views/course-list/course-list').then(m => m.CourseList);
const courseForm = () => import('./views/course-form/course-form').then(m => m.CourseForm);

export const learningRoutes: Routes = [
  { path: 'categories',           loadComponent: categoryList},
  { path: 'categories/new',       loadComponent: categoryForm},
  { path: 'categories/:id/edit',  loadComponent: categoryForm},
  { path: 'courses',              loadComponent: courseList},
  { path: 'courses/new',          loadComponent: courseForm},
  { path: 'courses/:id/edit',     loadComponent: courseForm}
];

