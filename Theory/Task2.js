// Task 2: Testing Automatizado en CI (8 minutos)
// Ejecutar diferentes tipos de tests automáticamente.

// # Workflow completo con múltiples jobs
// name: CI Pipeline

// on:
//   push:
//     branches: [ main ]
//   pull_request:
//     branches: [ main ]

// jobs:
//   # Job 1: Tests unitarios
//   unit-tests:
//     runs-on: ubuntu-latest

//     steps:
//     - uses: actions/checkout@v3

//     - name: Setup Node.js
//       uses: actions/setup-node@v3
//       with:
//         node-version: '18'
//         cache: 'npm'

//     - name: Install dependencies
//       run: npm ci

//     - name: Run unit tests
//       run: npm run test:unit

//     - name: Upload coverage
//       uses: codecov/codecov-action@v3
//       with:
//         file: ./coverage/lcov.info

//   # Job 2: Tests de integración
//   integration-tests:
//     runs-on: ubuntu-latest
//     services:
//       postgres:
//         image: postgres:13
//         env:
//           POSTGRES_PASSWORD: postgres
//         options: >-
//           --health-cmd pg_isready
//           --health-interval 10s
//           --health-timeout 5s
//           --health-retries 5

//     steps:
//     - uses: actions/checkout@v3

//     - name: Setup Node.js
//       uses: actions/setup-node@v3
//       with:
//         node-version: '18'
//         cache: 'npm'

//     - name: Install dependencies
//       run: npm ci

//     - name: Run integration tests
//       run: npm run test:integration
//       env:
//         DATABASE_URL: postgresql://postgres:postgres@localhost:5432/test

//   # Job 3: Linting y calidad
//   quality:
//     runs-on: ubuntu-latest

//     steps:
//     - uses: actions/checkout@v3

//     - name: Setup Node.js
//       uses: actions/setup-node@v3
//       with:
//         node-version: '18'
//         cache: 'npm'

//     - name: Install dependencies
//       run: npm ci

//     - name: Run ESLint
//       run: npm run lint

//     - name: Check formatting
//       run: npm run format:check
