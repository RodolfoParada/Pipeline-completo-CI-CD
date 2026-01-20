// Task 4: Gestión de Secrets y Variables (8 minutos)
// Manejar información sensible de forma segura.

// # Usar secrets en workflows
// name: Deploy with Secrets

// on:
//   push:
//     branches: [ main ]

// jobs:
//   deploy:
//     runs-on: ubuntu-latest

//     steps:
//     - uses: actions/checkout@v3

//     - name: Deploy to AWS
//       run: |
//         aws configure set aws_access_key_id ${{ secrets.AWS_ACCESS_KEY_ID }}
//         aws configure set aws_secret_access_key ${{ secrets.AWS_SECRET_ACCESS_KEY }}
//         aws s3 sync ./build s3://my-bucket --delete
//       env:
//         AWS_DEFAULT_REGION: us-east-1

//     - name: Notify Slack
//       uses: 8398a7/action-slack@v3
//       with:
//         status: success
//         text: "Deployment completed successfully!"
//       env:
//         SLACK_WEBHOOK_URL: ${{ secrets.SLACK_WEBHOOK_URL }}
// # Variables de entorno
// name: Environment Variables

// on:
//   push:
//     branches: [ main ]

// env:
//   NODE_ENV: production
//   API_BASE_URL: ${{ secrets.API_BASE_URL }}

// jobs:
//   build:
//     runs-on: ubuntu-latest

//     steps:
//     - uses: actions/checkout@v3

//     - name: Setup Node.js
//       uses: actions/setup-node@v3
//       with:
//         node-version: '18'

//     - name: Build with env vars
//       run: npm run build
//       env:
//         REACT_APP_API_URL: ${{ secrets.REACT_APP_API_URL }}
//         REACT_APP_VERSION: ${{ github.sha }}