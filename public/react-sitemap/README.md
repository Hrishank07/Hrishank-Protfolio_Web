# React Sitemap

This project provides a sitemap feature for a React application built with Next.js. The sitemap is generated dynamically based on the routes defined in the application, making it easier for search engines to index the pages.

## Features

- Automatically generates a sitemap in XML format.
- Easy integration with Next.js routing.
- Customizable to include specific routes and exclude others.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd react-sitemap
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

To generate the sitemap, you can use the `sitemap.ts` file located in the `src/app` directory. This file exports a function that constructs the sitemap based on the routes defined in your application.

### Generating the Sitemap

You can run the following command to generate the sitemap:

```bash
npm run build
```

This will create the `sitemap.xml` file in the `public` directory, which can be accessed at `/sitemap.xml`.

## Configuration

You can customize the sitemap generation by modifying the `sitemap.ts` file. You can define which routes to include or exclude based on your application's requirements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.