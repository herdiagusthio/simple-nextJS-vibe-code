# Simple Next.js Project

This is a simple Next.js application that demonstrates fetching data from an external API and displaying it. The project is built with TypeScript, includes a comprehensive test suite using Jest and React Testing Library, and is formatted with Prettier to ensure code quality.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

* [Node.js](https://nodejs.org/)
* [npm](https://www.npmjs.com/get-npm)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/herdiagusthio/simple-nextJS-vibe-code.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a `.env.local` file in the root of the project and add the following environment variable:
    ```
    NEXT_PUBLIC_API_URL=https://jsonplaceholder.typicode.com/posts/1
    ```

### Running the Application

To run the application in development mode, use the following command:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running the Tests

To run the automated tests for this system, use the following command:

```sh
npm test
```

## Built With

* [Next.js](https://nextjs.org/) - The React Framework for Production
* [React](https://reactjs.org/) - A JavaScript library for building user interfaces
* [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript
* [Jest](https://jestjs.io/) - A delightful JavaScript Testing Framework
* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Simple and complete React DOM testing utilities
* [Prettier](https://prettier.io/) - An opinionated code formatter