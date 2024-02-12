# Portfolio

**[Link](https://pakkudon.github.io)**

## Tools used:
- HTML + Handlebars
- CSS + SASS
- JavaScript
- Webpack
- PostCSS
  - Autoprefixer
- JSON data files

## Development
### Pre-requisites
- Node v20

### Instructions
- Clone repository
- Install dependencies
```sh
npm install
```
- Start development server
```sh
npm run dev
```

## Updating skills / projects
The skills list is stored in [`src/data/skills.json`](src/data/skills.json) in the following format
```js
{
  // List of programming languages
  "languages": [ "..." ],
  // List of software frameworks
  "frameworks": [ "..." ],
  // List of other tools, platforms and techniques
  "other": [ "..." ]
}
```

Similarly projects are stored in [`src/data/projects.json`](src/data/projects.json)
```js
[
  {
    "name": "Project name",
    "company": "Company name",
    "start_date": "Month Year (eg: December 2018)",
    "end_date": "Month Year (eg: December 2018)",
    "image_set": [
      "path/to/image.png",
      "path/to/another-image.png",
    ],
    "description": "Text to be displayed in project stub",
    "notes": [
      "Items to be displayed below description"
    ],
    "tags": [
      "List of technologies"
    ],
    "links": [
      {
        "title": "Link description",
        "url": "https://example.com"
      }
    ]
  },
```

## Deployment
Run `npm run deploy` to deploy the latest changes to Github Pages.

## Project history
This site was once written in Angular 1 because that was the first frontend framework I had learnt. It has since been migrated away to plain JavaScript with Handlebars templates.

I felt like a framework may be overkill for what this is doing. Maybe that'll change one day :D

## Architecture Decisions

This project uses [Architecture Decision Records](https://adr.github.io/) to capture the rationale behind architecturally significant decisions. They can be found at [`doc/architecture/decisions`](./doc/architecture/decisions)
