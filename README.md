# take-home project

## Tech & setup

When you setup this project (see "Get Started" in the next section), we provide you with some modules, tooling, data and an example by default.

### Modules

These are the most important modules that get installed by default:

- React (https://reactjs.org/docs/getting-started.html)
- React Router (https://reacttraining.com/react-router/web/guides/quick-start)
- Express (https://expressjs.com/en/guide)

### Tooling

The setup comes ready with all the tooling that bundles your assets in the frontend (through Webpack) and compiles on the fly in the backend.

### Data structure & data provided

The setup comes with a SQL table structure in place, with the following tables (and some populated data):

- Table with work animal_type: id, type (cat, dog)
- Table with animals: id, name, animal_type_id
- Table with owners: id, name
- Table with work order owner_animal_assignees: id, owner_id, animal_id

The detailed structure (with column types and such) can be found in `db/index.js`.

We use in-memory SQLite for the small scope of this project.

### Example

The setup comes with an home page with basic styling and an example frontend page using routing and making a fetch call to the backend.

## What we're asking

- Remove the /example page and code associated (including backend)
- Create a new page /animals where you have a list of animals:
  - Each list item should have the name and owner of the animal, 
  - a link to a /owner/:id page with details for that owner
  - an event to delete the animal from the list
- Owner details page should include:
  - Owner name
  - List of animals
    -   the list should diaplay the animal name and type
- "Create owner" page accessible from list with route /owner/new, should include:
  - Form with the following fields:
    - Name of owner
    - An option to add animals (0 to N) for this owner
  - Form should be user-friendly and have some basic input validation
- Along the way, create the relevant backend endpoints/interfaces as needed

## Guidelines

- Backend endpoints should leverage "sql" utility to access/modify data. (see example)
- Don't hesitate to refactor/split in files, utilities, etc. In fact, we encourage it.
- Comments are encouraged to explain concerns/decisions/etc.
- The CSS/stylings provided are only a base, feel free to add, remove, re-style anything you want. 

## Get started

### Prerequesites

- NodeJS 10.x or newer
- `yarn` (https://yarnpkg.com/lang/en/docs/install/)

### Commands

- Run `yarn install` in the root directory to install the necessary packages
- Run `yarn start` to start the backend server & frontend assets.
  - The backend server will restart automatically when it detects changes.
  - The frontend provider will hot-reload any changes made into the page.
