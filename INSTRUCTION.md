# Setup AWS CLI
```bash
aws configure --profile <profile_name>
```
Follow instructions to enter `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `DEFAULT_REGION`
```bash
aws configure sso
```
Follow instructions to enter `SSO_SESSION_NAME`, `SSO_START_URL`, `SSO_REGION`

# Run sandbox environment
```
npx ampx sandbox --once --profile <your profile name>
```
`--once` tell amplify to run and deploy/update sanbdox one time only and cancel backend tracking

# Check aws profiles
```
aws configure list-profiles
```
or Check a specific profile’s details:
```
aws configure list --profile <profile_name>
```

# HDHackathon Frontend Deployment
## Prerequisites
- Node.js (v18 or higher)
- npm
- AWS CLI configured (for deployment)

## Installation
1. Install depedencies
```bash
npm install
```
In the hotfix version, i had downgraded React from v19 to v18, so you dont have to run the command below again
```bash
npm install react@^18.3.1 react-dom@^18.3.1 @types/react@^18.3.0 @types/react-dom@^18.3.0
```

## Development
1. Start the development server
```bash
npm run dev
```
2. Open your browser and navigate to `http://localhost:3000`

## Other commands
- Build for production
```bash
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```
# AWS Amplify Setup
## Deploy backend
```bash
npx ampx sandbox
```

# Folder structure
```
src/
├── components/      # Reusable components
├── pages/           # Next.js pages
├── styles/          # Global styles
├── utils/           # Utility functions
├── hooks/           # Custom hooks
├── contexts/        # Context providers
├── services/        # API services
└── assets/          # Static assets (images, icons, etc.)
amplify/
├── backend/         # Amplify backend configuration
amplify_outputs.json # Amplify resources declaration
```