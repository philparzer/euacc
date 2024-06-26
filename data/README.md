# DATA

## Links

This repository contains a collection of link entries, each represented by a TypeScript object with properties for the link's title and href (the url it points to). These links are used in the hero section of the website, inside the popover "Socials and Links". Feel free to add your own links to the list.

### Create a new link entry
Each link object in the `links` array includes the following properties:
- `title`: The title of the link.
- `href`: The URL the link points to.

1. fork this repo
2. add a new link object to the `links` array in `src/links.ts`
3. open a pull request


## Logos

This repository contains a collection of logo entries, each represented by a TypeScript object with properties for the logo's name, creator's name, creator's link, and the image source file. These logo entries are used throughout our application and are validated using Zod schemas to ensure consistency.

### Create a new logo entry

Each logo object in the `logos` array includes the following properties:
- `name`: A unique identifier for the logo.
- `creatorName`: The name of the individual or entity that created the logo.
- `creatorLink`: A URL to the creator's profile or website.
- `imgSrc`: The path to the logo image file.

1. fork this repo
2. add a new logo object to the `logos` array in `src/logos.ts`
3. open a pull request

### Need help?
If you are not familiar with GitHub or have questions about contributing, please feel free to email parzerphilipp@gmail.com for assistance.

We welcome contributions from everyone and hope this guide makes it easy to participate in our project!

