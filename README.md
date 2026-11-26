# 🚚 Trip Management & Smart Fleet Logistics Platform
### نخبة النقل – منصة إدارة الأسطول والرحلات الذكية
> **An enterprise-grade, real-time fleet operations, trip planning, and driver monitoring platform developed by [Alaa Eriby](https://github.com/Alaa-Eriby).**

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black.svg?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2-blue.svg?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC.svg?logo=tailwind-css)](https://tailwindcss.com/)
[![Prisma ORM](https://img.shields.io/badge/Prisma-6.x-2D3748.svg?logo=prisma)](https://www.prisma.io/)
[![NextAuth](https://img.shields.io/badge/NextAuth-v4-purple.svg)](https://next-auth.js.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Author](https://img.shields.io/badge/Author-Alaa%20Eriby-orange.svg)](https://github.com/Alaa-Eriby)

---

## 📖 Overview | نظرة عامة

**Trip Management Platform (نظام إدارة رحلات نخبة النقل)** is a production-ready, full-stack logistics and fleet management web application. It delivers real-time vehicle GPS tracking, driver behavioral analytics, dynamic route planning, fuel and maintenance logging, order booking, and complete multi-role dashboards for administrators, fleet managers, clients, and drivers.

نظام متكامل لإدارة وتتبع الأسطول والنقل اللوجستي في الوقت الفعلي، يوفر متابعة دقيقة للمركبات والسائقين على الخرائط التفاعلية، وجدولة الرحلات، وإدارة أوامر النقل، مع دعم ثنائي اللغة (عربي/إنجليزي) واتجاه واجهة تلقائي (RTL/LTR).

---

## 📑 Table of Contents | فهرس المحتويات

- [Key Features](#-key-features)
- [System Architecture & Modules](#-system-architecture--modules)
- [Future AI Transformation Roadmap](#-future-ai-transformation-roadmap--خطة-التحول-بالذكاء-الاصطناعي)
- [Technology Stack](#-technology-stack)
- [User Roles & Portals](#-user-roles--portals)
- [Quick Start & Installation](#-quick-start--installation)
- [Environment Configuration](#-environment-configuration)
- [Author & License](#-author--license)

---

## ✨ Key Features | المميزات الرئيسية

| الميزة | الوصف الإنجليزي |
|---|---|
| **Live Vehicle Tracking** | Real-time interactive GPS tracking on dynamic Leaflet maps with speed and route replay. |
| **Driver Performance & Safety** | Comprehensive driver scoring, hours-of-service compliance, and incident alerting. |
| **Fleet & Maintenance Management** | Preventative maintenance scheduling, vehicle health diagnostics, and fuel consumption logs. |
| **Trip & Order Booking Wizard** | End-to-end trip creation, client booking requests, and proof-of-delivery tracking. |
| **Interactive Analytics & KPIs** | Rich visual reports powered by Recharts and ApexCharts for operational insights. |
| **Full Bilingual Support (i18n)** | Seamless Arabic (RTL) and English (LTR) with automatic browser locale detection. |
| **Responsive Dark/Light UI** | Modern user experience built with Tailwind CSS, shadcn/ui components, and smooth micro-animations. |

---

## 🤖 Future AI Transformation Roadmap | خطة التحول بالذكاء الاصطناعي

> **Future Vision by Alaa Eriby**: The platform is strategically planned to evolve into an autonomous, AI-driven intelligent transportation and logistics management ecosystem.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        TravelEase & Trip Management AI Roadmap                         │
├────────────────────┬────────────────────┬────────────────────┬─────────────────────────┤
│ Phase 1: Predictive│ Phase 2: Dynamic   │ Phase 3: Driver    │ Phase 4: Conversational │
│   Maintenance      │ Route Optimization │   Safety Vision    │   AI Fleet Co-Pilot     │
├────────────────────┼────────────────────┼────────────────────┼─────────────────────────┤
│ • Telematics ML    │ • Live traffic AI  │ • Drowsiness & eye │ • LLM dispatch assistant│
│ • Sensor anomalies │ • Fuel-saving paths│   tracking vision  │ • Voice trip status     │
│ • Component wear   │ • Dynamic reroute  │ • Harsh event alerts│ • Automated PDF summary │
└────────────────────┴────────────────────┴────────────────────┴─────────────────────────┘
```

### 1. AI Predictive Maintenance (الصيانة التنبؤية الذكية)
- **Machine Learning Failure Prediction**: Integrate time-series ML models (XGBoost / LSTM) trained on engine sensor data (RPM, oil pressure, coolant temperature) to forecast mechanical failures 2-3 weeks before breakdown.
- **Automated Work Orders**: AI triggers preventive maintenance tickets automatically and schedules shop visits during zero-utilization windows.

### 2. Autonomous Dynamic Route Optimization (تحسين المسارات الذكي)
- **Real-Time Traffic & Weather AI Engine**: Graph Neural Networks (GNN) and Reinforcement Learning models to dynamically re-route active convoys around congestion, sandstorms, and road hazards.
- **Green Fleet Carbon & Fuel Optimizer**: Algorithmically optimize vehicle loads and speeds to minimize fuel consumption and carbon footprint by up to 18%.

### 3. Driver Safety & Computer Vision Telematics (تحليل سلامة السائق بالرؤية الحاسوبية)
- **In-Cabin AI Monitoring**: Integration with Edge-AI cameras to detect driver drowsiness, phone usage, and distraction in real-time.
- **Smart Safety Scoring**: Continual ML scoring reflecting harsh braking, sudden lane departures, and excessive acceleration to reward cautious drivers.

### 4. Conversational AI Fleet Co-Pilot & Natural Language Queries (المساعد الذكي للمديرين)
- **RAG-Powered Fleet Assistant**: Natural language querying for managers (e.g., *"Which reefer trucks in Riyadh have maintenance overdue and are closest to Dammam?"*).
- **Automated Client Support Chatbot**: 24/7 intelligent multi-lingual assistant for shipment status, ETA predictions, and booking modifications.

### 5. Demand Forecasting & Capacity Allocation (التنبؤ الذكي بالطلب وتوزيع الأسطول)
- **Predictive Demand Modeling**: Forecast regional transportation demand based on historical cargo records, seasons, and market economic trends.
- **Automated Fleet Redistribution**: Pre-allocate empty return trips to minimize deadhead mileage across GCC transport corridors.

---

## 🛠️ Technology Stack | التقنيات المستخدمة

- **Frontend & App Framework**: Next.js 14 (App Router), React 18, TypeScript 5
- **Styling & UI Components**: Tailwind CSS, shadcn/ui, Radix UI primitives, Lucide Icons
- **State & Data Fetching**: TanStack React Query v5, Context API
- **Charts & Visualization**: Recharts, ApexCharts, React-Apexcharts
- **Mapping & Geospatial**: Leaflet, React-Leaflet, OpenStreetMap
- **Backend & Database ORM**: Next.js API Routes, Prisma ORM 6.x, PostgreSQL / SQLite
- **Authentication**: NextAuth.js (v4), bcryptjs
- **Validation & Tooling**: Zod, React Hook Form, Biome, ESLint, Husky

---

## 👥 User Roles & Portals | أدوار المستخدمين

```
┌────────────────────────────────────────────────────────────────────────┐
│                        Role-Based Access Matrix                        │
├────────────────────┬────────────────────┬──────────────────────────────┤
│  🛡️ Administrator  │  🏢 Fleet Manager  │  🚚 Driver / Client          │
├────────────────────┼────────────────────┼──────────────────────────────┤
│ • User management  │ • Vehicle catalog  │ • Active task assignments    │
│ • System audit log │ • Route schedules  │ • Step-by-step navigation    │
│ • Database backups │ • Trip tracking    │ • Order status & tracking    │
│ • Financial KPIs   │ • Driver dispatch  │ • Proof of delivery submit   │
└────────────────────┴────────────────────┴──────────────────────────────┘
```

---

## 🚀 Quick Start & Installation | التثبيت والتشغيل

### Prerequisites
- **Node.js**: `v18.17.0` or higher
- **npm**, **yarn**, or **pnpm**

### Step-by-Step Setup

```bash
# 1. Clone the repository
git clone https://github.com/Alaa-Eriby/trip-management.git
cd trip-management

# 2. Install dependencies
npm install

# 3. Setup environment variables
cp .env.example .env

# 4. Initialize database & migrations
npx prisma migrate dev
npx prisma db seed

# 5. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Environment Configuration

Create a `.env` or `.env.local` file in the root directory:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="your-super-secret-nextauth-key"
NEXTAUTH_URL="http://localhost:3000"
```

---

## 👤 Author & Maintainer | صاحب المشروع

**Alaa Eriby**
- **GitHub**: [@Alaa-Eriby](https://github.com/Alaa-Eriby)
- **Repository**: [https://github.com/Alaa-Eriby/trip-management](https://github.com/Alaa-Eriby/trip-management)

---

## 📄 License
This project is open-source and licensed under the [MIT License](LICENSE).

<div align="center">
  <sub>Trip Management Platform • Developed with ❤️ by <b>Alaa Eriby</b></sub>
</div>
