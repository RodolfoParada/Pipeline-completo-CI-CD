// Practical exercise to apply the concepts learned.
// Pipeline completo de CI/CD:

// # .github/workflows/main.yml
// name: 🚀 CI/CD Pipeline

// on:
//   push:
//     branches: [ main, develop ]
//   pull_request:
//     branches: [ main ]

// env:
//   NODE_VERSION: '18'

// jobs:
//   # 🔍 Code Quality
//   quality:
//     name: Code Quality
//     runs-on: ubuntu-latest

//     steps:
//     - name: Checkout code
//       uses: actions/checkout@v3

//     - name: Setup Node.js
//       uses: actions/setup-node@v3
//       with:
//         node-version: ${{ env.NODE_VERSION }}
//         cache: 'npm'

//     - name: Install dependencies
//       run: npm ci

//     - name: Type checking
//       run: npm run type-check

//     - name: Linting
//       run: npm run lint

//     - name: Formatting check
//       run: npm run format:check

//   # 🧪 Testing
//   test:
//     name: Testing
//     runs-on: ubuntu-latest
//     needs: quality

//     strategy:
//       matrix:
//         node-version: [16.x, 18.x]

//     steps:
//     - name: Checkout code
//       uses: actions/checkout@v3

//     - name: Setup Node.js ${{ matrix.node-version }}
//       uses: actions/setup-node@v3
//       with:
//         node-version: ${{ matrix.node-version }}
//         cache: 'npm'

//     - name: Install dependencies
//       run: npm ci

//     - name: Unit tests
//       run: npm run test:unit

//     - name: Integration tests
//       run: npm run test:integration

//     - name: Upload coverage
//       uses: codecov/codecov-action@v3
//       if: matrix.node-version == '18.x'
//       with:
//         file: ./coverage/lcov.info

//   # 🏗️ Build
//   build:
//     name: Build
//     runs-on: ubuntu-latest
//     needs: test
//     if: github.ref == 'refs/heads/main'

//     steps:
//     - name: Checkout code
//       uses: actions/checkout@v3

//     - name: Setup Node.js
//       uses: actions/setup-node@v3
//       with:
//         node-version: ${{ env.NODE_VERSION }}
//         cache: 'npm'

//     - name: Install dependencies
//       run: npm ci

//     - name: Build application
//       run: npm run build

//     - name: Upload build artifacts
//       uses: actions/upload-artifact@v3
//       with:
//         name: build-files
//         path: ./build

//   # 🚀 Deploy
//   deploy:
//     name: Deploy
//     runs-on: ubuntu-latest
//     needs: build
//     if: github.ref == 'refs/heads/main'

//     steps:
//     - name: Checkout code
//       uses: actions/checkout@v3

//     - name: Download build artifacts
//       uses: actions/download-artifact@v3
//       with:
//         name: build-files
//         path: ./build

//     - name: Deploy to Netlify
//       uses: nwtgck/actions-netlify@v2
//       with:
//         publish-dir: './build'
//         production-branch: main
//         github-token: ${{ secrets.GITHUB_TOKEN }}
//         deploy-message: "Deploy from GitHub Actions"
//         netlify-config-path: ./netlify.toml
//       env:
//         NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
//         NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}

//   # 📊 Report
//   report:
//     name: Report
//     runs-on: ubuntu-latest
//     needs: [quality, test, deploy]
//     if: always()

//     steps:
//     - name: Report status
//       run: |
//         echo "Quality: ${{ needs.quality.result }}"
//         echo "Test: ${{ needs.test.result }}"
//         echo "Deploy: ${{ needs.deploy.result }}"
// # Scripts en package.json
// {
//   "scripts": {
//     "dev": "next dev",
//     "build": "next build",
//     "start": "next start",
//     "type-check": "tsc --noEmit",
//     "lint": "eslint src --ext .js,.jsx,.ts,.tsx",
//     "lint:fix": "eslint src --ext .js,.jsx,.ts,.tsx --fix",
//     "format": "prettier --write src/**/*.{js,jsx,ts,tsx,json,css,md}",
//     "format:check": "prettier --check src/**/*.{js,jsx,ts,tsx,json,css,md}",
//     "test": "jest",
//     "test:unit": "jest --testPathPattern=unit",
//     "test:integration": "jest --testPathPattern=integration",
//     "test:e2e": "cypress run",
//     "test:coverage": "jest --coverage",
//     "quality": "npm run type-check && npm run lint && npm run format:check && npm run test:coverage"
//   }
// }
// Requerimientos:
// # Instalar dependencias de CI/CD
// npm install --save-dev @types/node typescript

// # Crear directorios necesarios
// mkdir -p .github/workflows

// # Crear archivos de configuración
// touch .github/workflows/main.yml
// touch netlify.toml
