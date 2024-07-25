# Day 13: Modules

## Overview

This project demonstrates the use of TypeScript modules and various utilities. The file structure has been organized to enhance clarity and maintainability.

## File Structure

├── .gitignore
├── dist
│ └── bundle.js
├── src
│ ├── index.ts
│ ├── mathUtils.ts
│ ├── getCharacter.ts
│ └── utils
│ ├── gotDetails.ts
│ ├── gotGreet.ts
│ └── gotUtils.ts
├── src/models
│ └── types.ts
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
└── webpack.config.js

### `src/`

Contains all the source TypeScript files.

- **`index.ts`**: Main entry point for the application.
- **`mathUtils.ts`**: Contains utility functions for mathematical operations.
- **`getCharacter.ts`**: Contains character information and methods.

### `src/utils/`

Contains utility functions related to specific features.

- **`gotDetails.ts`**: Functions and constants related to character details.
- **`gotGreet.ts`**: Function for greeting a character.
- **`gotUtils.ts`**: Utility functions for character information.

### `src/models/`

Contains TypeScript interfaces and types.

- **`types.ts`**: Defines the `Post` interface used for API data.
