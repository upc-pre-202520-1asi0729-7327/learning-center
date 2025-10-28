# User Stories

## US-001: Home Page Access
**As a user, I want to view the home page so that I can access the main features of the application.**

### Acceptance Criteria
- **Scenario 1: Navigate to Home**
  - Given the user navigates to the home route
  - When the home page loads
  - Then the user sees the main content of the application.
- **Scenario 2: Home Page with Features**
  - Given the application has features available
  - When the home page loads
  - Then the user sees links to categories and courses.

## US-002: About Page Information
**As a user, I want to view the about page so that I can learn more about the application.**

### Acceptance Criteria
- **Scenario 1: Navigate to About**
  - Given the user navigates to the about route
  - When the about page loads
  - Then the user sees information about the application.
- **Scenario 2: About Content Display**
  - Given the about page is loaded
  - When the content is available
  - Then the user sees details about the learning center.

## US-003: View Categories List
**As a user, I want to view a list of categories so that I can browse available categories.**

### Acceptance Criteria
- **Scenario 1: Retrieve Categories**
  - Given the user navigates to the categories list
  - When the system retrieves categories from the API
  - Then the user sees a list of categories with their names and IDs.
- **Scenario 2: No Categories Available**
  - Given no categories exist in the system
  - When the user navigates to the categories list
  - Then the user sees an empty list.
- **Scenario 3: API Retrieval Failure**
  - Given the API is unavailable
  - When the system attempts to retrieve categories
  - Then the user sees an error message.

## US-004: Create New Category
**As a user, I want to create a new category so that I can add new categories to the system.**

### Acceptance Criteria
- **Scenario 1: Submit Category Request**
  - Given the user provides a valid category name
  - When the user submits the category creation request
  - Then a new category is created and stored with the provided name.
- **Scenario 2: Invalid Category Data**
  - Given the user provides an invalid category name such as an empty string
  - When the user submits the category creation request
  - Then the category is not created and an error is returned.
- **Scenario 3: Duplicate Category Name**
  - Given a category with the same name already exists
  - When the user submits the category creation request
  - Then the category is not created and a duplicate error is returned.

## US-005: Edit Existing Category
**As a user, I want to edit an existing category so that I can update category information.**

### Acceptance Criteria
- **Scenario 1: Update Category**
  - Given the user selects an existing category
  - When the user submits an updated valid category name
  - Then the category is updated with the new name.
- **Scenario 2: Invalid Update Data**
  - Given the user provides an invalid update name such as an empty string
  - When the user submits the category update request
  - Then the category is not updated and an error is returned.
- **Scenario 3: Category Not Found**
  - Given the selected category does not exist
  - When the user submits the category update request
  - Then an error indicates the category is not found.

## US-006: View Courses List
**As a user, I want to view a list of courses so that I can browse available courses.**

### Acceptance Criteria
- **Scenario 1: Retrieve Courses**
  - Given the user navigates to the courses list
  - When the system retrieves courses from the API
  - Then the user sees a list of courses with their titles, descriptions, and category IDs.
- **Scenario 2: No Courses Available**
  - Given no courses exist in the system
  - When the user navigates to the courses list
  - Then the user sees an empty list.
- **Scenario 3: API Retrieval Failure**
  - Given the API is unavailable
  - When the system attempts to retrieve courses
  - Then the user sees an error message.

## US-007: Create New Course
**As a user, I want to create a new course so that I can add new courses to the system.**

### Acceptance Criteria
- **Scenario 1: Submit Course Request**
  - Given the user provides valid course title, description, and category ID
  - When the user submits the course creation request
  - Then a new course is created and stored with the provided attributes.
- **Scenario 2: Invalid Course Data**
  - Given the user provides invalid course data such as an empty title
  - When the user submits the course creation request
  - Then the course is not created and an error is returned.
- **Scenario 3: Duplicate Course Name**
  - Given a course with the same title already exists
  - When the user submits the course creation request
  - Then the course is not created and a duplicate error is returned.

## US-008: Edit Existing Course
**As a user, I want to edit an existing course so that I can update course information.**

### Acceptance Criteria
- **Scenario 1: Update Course**
  - Given the user selects an existing course
  - When the user submits updated valid course title, description, or category ID
  - Then the course is updated with the new attributes.
- **Scenario 2: Invalid Update Data**
  - Given the user provides invalid update data such as an empty title
  - When the user submits the course update request
  - Then the course is not updated and an error is returned.
- **Scenario 3: Course Not Found**
  - Given the selected course does not exist
  - When the user submits the course update request
  - Then an error indicates the course is not found.

## US-009: Language Switching
**As a user, I want to switch the language so that I can view the content in my preferred language.**

### Acceptance Criteria
- **Scenario 1: Change Language**
  - Given the user selects a language option
  - When the language is changed
  - Then the application displays content in the selected language.
- **Scenario 2: Switch to English**
  - Given the current language is not English
  - When the user selects English
  - Then the content switches to English.
- **Scenario 3: Switch to Spanish**
  - Given the current language is not Spanish
  - When the user selects Spanish
  - Then the content switches to Spanish.

## US-010: Footer Content Display
**As a user, I want to see the footer content so that I can find additional information.**

### Acceptance Criteria
- **Scenario 1: View Footer**
  - Given the user views any page
  - When the page loads
  - Then the footer is displayed with content.
- **Scenario 2: Footer on Home Page**
  - Given the user is on the home page
  - When the page loads
  - Then the footer appears at the bottom.
- **Scenario 3: Footer on Other Pages**
  - Given the user is on a different page
  - When the page loads
  - Then the footer remains consistent.

## US-011: Page Not Found Handling
**As a user, I want to see a page not found message so that I know when I access an invalid route.**

### Acceptance Criteria
- **Scenario 1: Invalid Route**
  - Given the user navigates to an invalid route
  - When the page loads
  - Then the user sees a page not found message.
- **Scenario 2: Home Navigation from Page Not Found**
  - Given the page not found is displayed
  - When the user requests to navigate to home
  - Then the user is taken to the home page.
