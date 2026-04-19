# Unionversity

A type-safe TypeScript program that lets students enroll in courses and study groups at Unionversity — a new-wave educational institution where learners combine their knowledge to gain a higher understanding of the world around them.

## Motivation

This project is a CodeCademy exercise focused on practicing TypeScript's type system — type aliases, union types, and type guards — by building a real-world-style enrollment program. As they say at Unionversity: _"ts-c you in class!"_

## Tech/framework used

<b>Built with</b>

- [TypeScript](https://www.typescriptlang.org/)

## Features

- Search courses and study groups by keyword or ID
- Enroll in events (courses or study groups) with full type safety
- Print a list of currently enrolled events

## Code Example

```typescript
// Search for art courses and enroll in all results
let searchResults = searchEvents({ query: 'art', eventType: 'courses' });
searchResults.forEach((result) => {
  enroll(result);
});

console.log(enrolledEvents);
```

## Installation

```bash
npm install
```

## How to use?

Compile and run the program:

```bash
npx tsc && node dist/index.js
```

Or use `ts-node` for direct execution:

```bash
npx ts-node src/index.ts
```

## Credits

Project concept and description by [CodeCademy](https://www.codecademy.com/courses/learn-typescript/projects/union-types-project).
