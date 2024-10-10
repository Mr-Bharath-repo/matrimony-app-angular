# AngularMatrimonyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



## Matrimony Application

This is a Matrimony built with Angular, designed to manage and display user profiles. The application features a carousel for viewing profiles, detailed views for each profile, and a swipe component for interactive profile management.

## Features

- **List of Profiles**: View all available pending profiles in a carousel format.
- **Profile Detail**: View detailed information about each profile upon selection of "Yes" from LIst-of pending profiles component.
- **Profile Swipe**: An interactive feature for swiping through profiles based on daily recommendations.
- **Navigation Bar**: Easy navigation between the list of profiles, profile detail, and profile swipe components.

**Routing-path** : /list-profiles -> For pending profiles -> on click of yes we will be opening -> profile detail component as well
                 : /profile-swipe -> Daily-recommendation -> profiles which are shown in daily-recommendations  -> Default route
                 

## Technologies Used

- **Angular**: Front-end framework for building the application.
- **Angular Material**: For UI components and design.
- **TypeScript**: Superset of JavaScript for type safety.
- **HTML/CSS**: For structuring and styling the application.