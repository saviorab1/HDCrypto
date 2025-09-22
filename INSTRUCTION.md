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

# HDBank Crypto Dashboard

A modern cryptocurrency portfolio management dashboard built with React, TypeScript, and AWS Amplify.

## Prerequisites

- Node.js (v18 or higher)
- npm
- AWS CLI configured (for deployment)

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Charts**: Recharts
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Backend**: AWS Amplify (Auth + GraphQL)
- **Authentication**: AWS Cognito

## Installation

1. Install dependencies

```bash
npm install
```

## Development

1. Start the development server

```bash
npm run dev
```

2. Open your browser and navigate to `http://localhost:5173`

## Build Commands

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

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components (Button, Card, Input, etc.)
│   ├── ChatBox.tsx      # AI chatbot component
│   ├── DashboardHeader.tsx # Dynamic dashboard header
│   ├── Sidebar.tsx      # Navigation sidebar
│   ├── ProtectedRoute.tsx # Route protection wrapper
│   └── PublicRoute.tsx  # Public route wrapper
├── pages/               # Page components
│   ├── dashboard/       # Dashboard-specific pages
│   │   ├── OverviewPage.tsx    # Main dashboard with charts
│   │   ├── BalancePage.tsx     # Portfolio balance view
│   │   ├── NewsPage.tsx        # Crypto news and analysis
│   │   ├── ExchangePage.tsx    # Trading interface
│   │   ├── AnalyticPage.tsx    # Analytics dashboard
│   │   ├── NotificationPage.tsx # Notifications center
│   │   └── SettingsPage.tsx    # User settings
│   ├── DashboardPage.tsx # Dashboard layout wrapper
│   ├── HomePage.tsx     # Landing page
│   └── AboutPage.tsx    # About page
├── hooks/               # Custom React hooks
│   └── useAuth.ts       # Authentication hook
├── contexts/            # React context providers
│   └── AuthContext.tsx  # Authentication context
├── lib/                 # Utility functions
│   └── utils.ts         # Common utilities
├── assets/              # Static assets
│   └── HDBank logo-01.png # Brand logo
├── App.tsx              # Main app component with routing
├── main.tsx             # Application entry point
└── index.css            # Global styles and Tailwind imports

amplify/
├── auth/                # Authentication configuration
│   └── resource.ts      # Cognito user pool setup
├── data/                # GraphQL API configuration
│   └── resource.ts      # AppSync API and schema
└── backend.ts           # Amplify backend definition

Configuration Files:
├── amplify_outputs.json # Amplify resources (auto-generated)
├── components.json      # shadcn/ui configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite build configuration
```

## Routing Structure

- `/` - Landing page
- `/about` - About page
- `/login` - Authentication
- `/register` - User registration
- `/overview` - Main dashboard (default)
- `/balance` - Portfolio balance
- `/exchange` - Trading interface
- `/analytics` - Analytics dashboard
- `/news` - Market news
- `/notifications` - User notifications
- `/settings` - Account settings

## Color Palette

- **Primary**: Orange (#f97316) - Brand color
- **Success**: Green (#10b981) - Positive changes
- **Error**: Red (#ef4444) - Negative changes
- **Text Primary**: Gray 900 (#111827)
- **Text Secondary**: Gray 500 (#6b7280)
- **Background**: Gray 50 (#f9fafb)
- **Card Background**: White (#ffffff)