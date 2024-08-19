# Front-end Developer Task

## Figma Design File

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FxNFC23o2ez10gmGq2ZOLNN%2FKevin-Lambert-Front-End-Developer-Task%3Fnode-id%3D0-1%26t%3DT2o9R5YUSjHKDHN6-1" allowfullscreen></iframe>

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

**API**

- Add caching
- Get user url from a config
