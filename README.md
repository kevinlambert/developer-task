# Front-end Developer Task

## Figma Design File

<img width="848" alt="Screenshot 2024-08-19 at 13 23 57" src="https://github.com/user-attachments/assets/7d3809fb-2076-4e5b-8ec7-e4cda5a2c78c">


Link to the Figma design file https://www.figma.com/design/xNFC23o2ez10gmGq2ZOLNN/Kevin-Lambert-Front-End-Developer-Task?node-id=0-1&t=bCzB4gl64RbDx1hi-1

> Note: The hover background color has been lightened and the grey text darkened as it did not pass AA accessibility guidlines for small text

### Design - Some additional TODOs that could be considered

Below are a list of additional design elements that could be considered for the component

- Error states
- Success states
- Set up design tokens for colors, fonts, spacing increments
- Create reusable full select Figma component

## Code

### Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Folder structure:

- `ui-components` holds generic components that are context agnostic
- `connected-components` holds specific use case components that are connected to data

### Code - Some additional TODOs that could be considered

**Component**

- Search username as well
- Add unit and snapshot tests
- Pass value to select to set default value
- aria tags for accessiblity
- CSS colors, fonts and spacings to reference design tokens variables
- Add select dropdown arrow
- Keyboard navigation

**API**

- Add caching
- Get user url from a config
- For larger datasets add search and paging to the api
