# 🔍 Pehchaan Index
### *Evidence-Based Governance at Scale*

> **Converting 1.4 billion+ Aadhaar update records into measurable outcomes.**  
> Data → Signal → Decision → Administrative Action.

Submitted for the **UIDAI Data Hackathon** by **Team BitBlitz**

---

## What Is Pehchaan Index?

Aadhaar enrolment and update demand varies dramatically across regions and seasons—but without real-time visibility, administrators are always reacting, never anticipating.

**Pehchaan Index** turns UIDAI's open demographic data into a live intelligence layer for governance:

| Problem | What Pehchaan Does |
|---|---|
| 🚐 Mobile vans deployed *after* backlogs form | Predicts demand spikes before they happen |
| 🏙️ Address update surges sit unused | Surfaces migration signals for urban planning |
| 📊 Age-group anomalies go unnoticed | Flags structural access gaps with dashboards |

---

## Coverage

```
36 States & UTs  ·  700+ Districts  ·  3 Demographic Segments
```

---

## How It Works

```
Official UIDAI Datasets (anonymised, aggregated, monthly)
        ↓
   Data Structuring
   (State · District · Age Group · Update Category)
        ↓
   Comparative Analysis
   (District vs State · State vs National · Month-on-Month)
        ↓
   Signal Detection
   (Normal · Above-Normal Spikes · Unusual Drops)
        ↓
   Pehchaan Index Dashboard
   (India Heatmap · Rankings · Decision-Ready View)
        ↓
   Insight → Administrative Action
```

**Data integrity:** All data sourced exclusively from UIDAI's official open portal. Fully anonymised and aggregated. Zero personal or identifiable data.

---

## The Dashboard

- 🗺️ **India Heatmap** — national overview at a glance
- 🔍 **District Drill-Down** — zoom into any of 700+ districts
- 📈 **Trend Analysis** — month-on-month signal patterns
- ⚠️ **Operational Hotspots** — coverage gaps and anomaly flags

---

## Tech Stack

Built with **Next.js 15** · **TypeScript** · **Tailwind CSS**

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm / bun

### Installation

```bash
git clone https://github.com/your-repo/pehchaan-index.git
cd pehchaan-index
npm install
```

### Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the dashboard.

### Build for Production

```bash
npm run build
npm start
```

---

## Project Structure

```
pehchaan-index/
├── app/                  # Next.js app router
│   ├── page.tsx          # Landing page
│   └── dashboard/        # Analytics dashboard
├── components/           # Reusable UI components
│   ├── maps/             # India heatmap components
│   ├── charts/           # Trend & comparison charts
│   └── kpis/             # KPI indicator panels
├── data/                 # Processed UIDAI datasets
└── lib/                  # Signal detection & analytics logic
```

---

## Team BitBlitz

| Name | Contributions |
|---|---|
| **Pranshu Kumar** | Analytics dashboard · Maps, charts & KPIs · Data integration · Final build |
| **Harsha Darshita Ojha** | Dashboard sections · Insight logic & summaries · Data-driven components · Build stabilization |
| **Raj Verma** | Landing page · Frontend components · Site build |
| **Abhishek Padhy** | Dataset processing · Data integration · Presentation code |

---

## Data Ethics & Privacy

- ✅ All data from UIDAI's official open data portal
- ✅ Fully anonymised and aggregated — no individual records
- ✅ Monthly releases only — no real-time personal tracking
- ✅ Built for monitoring, planning, and policy insights only

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [UIDAI Open Data Portal](https://uidai.gov.in)

---

*UIDAI Data Hackathon Submission · Team BitBlitz · 2024*
