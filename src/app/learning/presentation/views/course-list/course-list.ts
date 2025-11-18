import {Component, computed, inject, ViewChild} from '@angular/core';
import {LearningStore} from '../../../application/learning.store';
import {Router} from '@angular/router';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {MatError} from '@angular/material/form-field';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource
} from '@angular/material/table';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatPaginator} from '@angular/material/paginator';
import {TranslatePipe} from '@ngx-translate/core';
import {MatSort, MatSortHeader} from '@angular/material/sort';
import {MatIcon} from '@angular/material/icon';

/**
 * Component for displaying a list of courses with options to edit or delete them.
 * Uses Angular Material table for presentation.
 */
@Component({
  selector: 'app-course-list',
  imports: [
    MatProgressSpinner,
    MatError,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatHeaderCellDef,
    MatButton,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
    TranslatePipe,
    MatSort,
    MatPaginator,
    MatIconButton,
    MatSortHeader,
    MatIcon
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {
  readonly store = inject(LearningStore);
  protected router = inject(Router);

  displayedColumns: string[] = ['id', 'title', 'description', 'category', 'actions'];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource = computed(() => {
    const source = new MatTableDataSource(this.store.courses());
    source.sort = this.sort;
    source.paginator = this.paginator;
    return source;
  });

  /**
   * Navigates to the edit page for a specific course.
   * @param id - The ID of the course to edit.
   */
  editCourse(id: number) {
    this.router.navigate(['learning/courses', id, 'edit']).then();
  }

  /**
   * Deletes a course by ID.
   * @param id - The ID of the course to delete.
   */
  deleteCourse(id: number) {
    this.store.deleteCourse(id);
  }

  /**
   * Navigates to the new course creation page.
   */
  navigateToNew() {
    this.router.navigate(['learning/courses/new']).then();
  }

  /**
   * Lifecycle hook to ensure paginator and sort are properly assigned after view checks.
   */
  ngAfterViewChecked() {
    if (this.dataSource().paginator !== this.paginator) {
      this.dataSource().paginator = this.paginator;
    }
    if (this.dataSource().sort !== this.sort) {
      this.dataSource().sort = this.sort;
    }
  }
}
