// Task 3: Build y Deployment (8 minutos)
// Automatizar construcción y despliegue.

// # Workflow de deployment a Vercel
// name: Deploy to Vercel

// on:
//   push:
//     branches: [ main ]

// jobs:
//   deploy:
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

//     - name: Build application
//       run: npm run build

//     - name: Deploy to Vercel
//       uses: amondnet/vercel-action@v25
//       with:
//         vercel-token: ${{ secrets.VERCEL_TOKEN }}
//         vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
//         vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
//         vercel-args: '--prod'
// # Deployment condicional (staging/production)
// name: Deploy

// on:
//   push:
//     branches: [ main, develop ]

// jobs:
//   deploy:
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

//     - name: Build
//       run: npm run build

//     # Deploy a staging si es develop
//     - name: Deploy to Staging
//       if: github.ref == 'refs/heads/develop'
//       run: echo "Deploying to staging..."

//     # Deploy a production si es main
//     - name: Deploy to Production
//       if: github.ref == 'refs/heads/main'
//       run: echo "Deploying to production..."