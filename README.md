# 🧞 Aki Industries HQ

Internal operations dashboard for Aki Industries.

## What's Inside

**Top half — Pixel Office**
- 11 animated agents walking around an office floor
- Each agent has a desk, wanders when idle, types when working
- Click any character to see their current task

**Bottom half — Mission Control**
- Three-column task board: Backlog | In Progress | Done
- Clean dark ops-dashboard aesthetic
- Task data from `/public/tasks.json` (API integration coming later)

## Tech Stack

- **Next.js 16** (App Router, static export)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — character animations

## Agents

| Agent | Role |
|-------|------|
| Aki 🧞 | CEO / Orchestrator |
| Ghabash 🛠️ | Engineering |
| Basma 📋 | Operations |
| Nader 🔎 | Research |
| Layla ✍️ | Growth & Content |
| Rami 🕸️ | Data & Scraping |
| Mira 🎬 | Media & Creative |
| Omar 📈 | Sales Systems |
| Dina 🧭 | Process & SOPs |
| Sami 🛡️ | QA / Audit |
| Noor ⚙️ | Automation |

## Dev

```bash
npm run dev    # localhost:3000
npm run build  # production build
```

## Updating Tasks

Edit `/public/tasks.json` to update the task board. Future: connect to an API.
