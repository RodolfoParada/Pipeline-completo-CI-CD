// Task 1: Conceptos Básicos de CI/CD (6 minutos)
// Fundamentos de integración y despliegue continuo.

// # CI (Continuous Integration)
// # - Integrar código frecuentemente
// # - Ejecutar tests automáticamente
// # - Build automático
// # - Feedback rápido

// # CD (Continuous Delivery/Deployment)
// # - Código siempre listo para producción
// # - Despliegue automático o manual
// # - Rollback automático en fallos
// # Estructura básica de workflow
// # .github/workflows/ci.yml
// name: CI

// # Cuando ejecutar
// on:
//   push:
//     branches: [ main, develop ]
//   pull_request:
//     branches: [ main ]

// # Qué hacer
// jobs:
//   test:
//     runs-on: ubuntu-latest

//     steps:
//     - uses: actions/checkout@v3

//     - name: Setup Node.js
//       uses: actions/setup-node@v3
//       with:
//         node-version: '18'

//     - name: Install dependencies
//       run: npm ci

//     - name: Run tests
//       run: npm test
