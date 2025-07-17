# Project Improvements

- [x] **Dependency Management**
  - [x] Pin all dependency versions in `package.json`
  - [x] Audit dependencies for vulnerabilities
  - [x] Fix critical vulnerability in `next` package

- [x] **Configuration**
  - [x] Use environment variables for the API endpoint via `.env.local`

- [x] **Code Quality & Formatting**
  - [x] Add and configure ESLint for linting
  - [x] Add and configure Prettier for code formatting
  - [x] Add `format` script to `package.json`
  - [x] Format the entire codebase

- [x] **UI & User Experience**
  - [x] Introduce a loading state on the main page

- [x] **TypeScript Migration**
  - [x] Rename all `.js`/`.jsx` files to `.ts`/`.tsx`
  - [x] Add TypeScript and type definitions (`@types/*`) as dev dependencies
  - [x] Generate `tsconfig.json`
  - [x] Add static types to all application code (`pages`, `utils`)
  - [x] Add static types to all test files
  - [x] Update Jest configuration (`jest.config.js`, `jest.setup.ts`) to support TypeScript and fix type errors
