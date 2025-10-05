# ACME Learning Center Application (learning-center)

## Overview
LearningCenter is a modular, domain-driven Angular application for managing learning resources, such as courses and categories. It is designed with the best practices in architecture, maintainability, and scalability in mind.

## Features
- Category and course management
- Language switching (English/Spanish) using ngx-translate
- Error handling and robust navigation
- Modular bounded contexts (Learning, Shared)
- Domain-driven design with clear separation of layers
- Responsive UI and component-based structure
- Angular Routing for navigation between views
- HTTP communication using Angular HttpClient

## Technologies
- Angular CLI 20.3.2
- Angular Framework
- Angular Routing
- Angular HttpClient
- RxJS
- Angular Material
- ngx-translate
- TypeScript
- PlantUML (for architecture diagrams)
- json-server (for local API simulation)

## User Stories
For a detailed description of the application's functional requirements, please review the [docs/user-stories.md](docs/user-stories.md) file.

## Class Diagram
The application's architecture and relationships are documented in the [docs/class-diagram.puml](docs/class-diagram.puml) file. Review this diagram for a visual overview of the domain-driven design and package structure.

## Installation
To install dependencies, run:

```bash
npm install
```

## Running
To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Starting the Fake API (json-server)
This project uses [json-server](https://github.com/typicode/json-server) to simulate a backend API for development and testing. Configuration files are located in the `/server` folder.

To start the fake API server, run:

```bash
npx json-server --watch server/db.json --routes server/routes.json --port 3000
```

Or use the provided script:

```bash
sh server/start.sh
```

The API will be available at `http://localhost:3000/`.
