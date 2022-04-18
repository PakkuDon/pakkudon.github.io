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
- Node v16
- Yarn

### Instructions
- Clone repository
- Install dependencies
```sh
yarn install
```
- Start Webpack in watch mode. This will recompile files on change
```sh
yarn watch
```
- In separate terminal start a web server of your choice in the `dist/` folder
```sh
npx http-server -c-1 dist
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
Run `yarn build` in the project root to generate a minified JavaScript bundle

New changes pushed to `master` will be made live via Github pages at the demo URL provided above. There currently is no option to deploy from `gh-pages`. [(Source)](https://help.github.com/articles/user-organization-and-project-pages/#user-and-organization-pages-sites)

## Project history
This site was once written in Angular 1 because that was the first frontend framework I had learnt. It has since been migrated away to plain JavaScript with Handlebars templates.

I felt like a framework may be overkill for what this is doing. Maybe that'll change one day :D
