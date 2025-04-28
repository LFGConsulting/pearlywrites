# pearlywrites.com Project Setup - Internal Notes (LFG Consulting)

This document outlines the infrastructure and deployment plan for the new Pearly Writes website, using a modern JAMstack approach with Ghost CMS, Next.js/React, GitHub, and Vercel.

---

## Overview
- **Client:** Pearly Writes (pearlywrites.com)
- **Developer:** LFG Consulting
- **Stack:**
  - Frontend: Next.js (React)
  - CMS: Ghost Pro (Headless)
  - Hosting: Vercel
  - Code Repository: GitHub Org (`LFG Consulting`)
  - Domain Registrar: Squarespace

---

### ✅ Ghost(Pro) CMS Setup – Updated Plan

1. **Client (PearlyWrites) signs up for a Ghost(Pro) account**
   - Go to https://ghost.org
   - Choose "Start a free trial"
   - Pick subdomain: `pearlywrites.ghost.io` (won't be public once custom domain is set)

2. **Client adds me (developer) as staff admin**
   - My email: [INSERT_YOUR_EMAIL]
   - I'll configure the integration, content model, and API keys

3. **Client will later handle billing**
   - Ghost(Pro) will email before trial expires

4. **We will connect the headless Ghost CMS to the Next.js frontend**
   - Content will live on Ghost
   - Frontend lives on Vercel (connected via Ghost Content API)

### CMS Config Notes
- Webhook can be added to Ghost to auto-trigger a Vercel build on content updates.
- Client will only need Ghost login to edit content.

---

## GitHub Organization
- Org Name: `LFG Consulting`
- Repo created or transferred to org.
  - Initially created under personal GitHub, now lives in org for easier handoff.
- Use `main` as default branch.
- Keep repo **private** until public launch.
- Offer client option to start their own github and transfer

---

## Vercel Setup
- Will be using LFG Organization github repo due to Vercel policy re commercial projects

### Deployment Notes
- Each push to `main` triggers auto-deploy.
- Can add Ghost webhook to Vercel for auto-build on content changes.

---

## Handoff Plan
1. Finalize design and build.
2. Set up Vercel under client account.
3. Point DNS from Squarespace to Vercel.
4. Invite client to Ghost CMS.
5. Provide basic training or loom video.
6. Optional: Transfer Ghost billing.

---

## To-Dos
- [X ] Create GitHub org and transfer repo
- [x ] Build MVP site in Next.js
- [x ] Style with Tailwind (if applicable)
- [x ] Set up Ghost integration (API calls)
- [x ] Deploy to Vercel (initially from personal)
- [ ] Add domain to Vercel & update Squarespace DNS
- [x ] Invite client to Ghost
- [x ] Set up webhook from Ghost to Vercel
- [x ] Set up automated image domain allowlist update (for next/image)

---

## Notes
- Ghost Pro handles authentication, editor UX, backups.
- Keeping config code (e.g. `ghost.ts`, `.env.local`) clean and documented.
- Long-term: optionally integrate Ghost memberships or newsletters if needed.

---

_LFG Consulting_