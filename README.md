# Chess Grandmasters Wiki

A simple wiki of chess grandmasters using Chess.com's API. This is a coding challenge for https://github.com/amenitiz/fe-technical-challenge.

## Requirements
- Node.js version 18.18 or later

## Tech Stack
- Next.js 15
- TypeScript
- Tailwind CSS

## Setup
1. Install dependencies:
```bash
yarn
```
2.Run dev server:
```bash
yarn dev
```

## Key Features
- Grandmaster list with pagination
- Profile pages with online clock

### Key Notes About the Compromises:
Due to time constraints, a few compromises were made.

1. **Code Quality**:
   - No Prettier setup as well as some additional improvements like lint-staged, husky, etc.
   - Missing unit tests
   - Basic error handling (no logging/retry logic) 

2. **UI/UX**:
   - Basic design without animations
   - Lack of loading indicators

