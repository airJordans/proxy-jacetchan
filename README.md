# Overview

This is a proxy server that routes all requests from Project Nomad modules
through to the appropriate servers. To get started, follow the instructions
below.

# Getting Started
* __Note:__ Nodemon should be installed globally.
* This proxy does __not__ require the use of opening a new terminal instance for every service.

## Instructions
1. Create a folder on a local directory called `project-nomad`.
2. Navigate into `project-nomad`. For each of the following modules: `booking-module`, `listing-description-module`, `reviews-module`, `image-carousel-module`, clone their respective repos.
3. For each of the modules listed in Step 2, follow the instructions listed in their respective READMEs in order to seed their database. Finish this step before moving on.
4. Navigate into `project-nomad` and clone this repo: `git clone https://github.com/project-nomad/proxy-jacetchan.git`.
5. Navigate into `proxy-jacetchan` and run `npm install`.
6. Run `npm run react-dev-all`. This will run `babel` with the `--watch` flag for each microservice.
7. Create a new terminal instance in order to proceed with the next steps.
8. Run `grunt concat`. This will create _one_ `bundle.js` sourced from each module's bundle file.
9. Run `grunt cssmin` to minify the CSS file in `public`.
10. Run `grunt uglify` to minify the `bundle.js` file to `bundle.min.js`.
11. Run `npm run serve-all`. This will launch the following local hosts: `3000`, `3001`, `3002`, `3003`, and `3004`.
12. In a browser navigate to `localhost:3000/listings/:id` where `:id` is defined
to be any number between 1 through 100 (inclusive).
13. Enjoy your new Airbnb experience. ✌️

# Notes
* Currently, `index.html` is set up to __not__ use the minified stylesheet and minified bundle that is hosted on S3 (it is currently commented out). An update will be pushed after Phase 3 - Dockerize is completed. Please note that this should _not_ currently affect expected behavior.
