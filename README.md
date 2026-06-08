# Surve.AI — Clickable Mockup Set
URL - https://sankar.work/SurveAI_AI-Powered-Customer-Feedback-Analysis/ 

A self-contained, zero-build prototype generated from **Surve.AI — Product
Requirements Document v2.0** (Team 10 / MIT Mastering Design Thinking, June 2026).
It turns the spec into something a stakeholder can click through and react to
before design or engineering investment begins.

## How to open it

No install, no server, no build step required.

```
open index.html
```

…or just double-click `index.html` in Finder. Every screen links to the next —
start at the hub, or jump straight into the workspace via
`screens/02-dashboard.html`, or the respondent flow via
`screens/11-respondent-survey.html`.

## What's here

```
mockups/
├── index.html                       # Hub — product framing, flow map, full screen index
├── screens/
│   ├── 01-login.html                # Sign in (role-based access entry point)
│   ├── 02-dashboard.html            # Survey portfolio + North Star metric
│   ├── 03-survey-builder.html       # AI chat brief → generated question set (FR10)
│   ├── 04-deploy.html               # Channels, screening pre-qualifiers, recruitment & incentives
│   ├── 05-live-monitor.html         # Real-time response tracking while a survey is live
│   ├── 06-insights.html             # ★ Flagship: themes, sentiment, priority matrix, traceability
│   ├── 07-improvement.html          # AI-suggested question variants + A/B testing (FR8/FR9)
│   ├── 08-forecasting.html          # Trend forecasting from historical data (FR11)
│   ├── 09-collaboration.html        # Role-based views, annotations, export (FR12)
│   ├── 10-settings.html             # Screening governance, team roles, plan & usage
│   ├── 11-respondent-survey.html    # Mobile — adaptive survey w/ live-generated follow-up
│   └── 12-survey-complete.html      # Mobile — completion, voucher & referral chain (FR7)
├── assets/
│   ├── styles.css                   # Design tokens layered on Tailwind (colour, AI badge, motion)
│   └── app.js                       # Shared mock data + toasts/modals/nav so numbers stay consistent
└── README.md                        # You are here
```

## Design system

- **Brand tone:** confident, analytical, quietly futuristic — never gimmicky.
- **Colour:** Indigo `#6366f1` (brand/primary) + Cyan `#06b6d4` ("AI generated"
  accent — used consistently as the `.ai-badge` whenever content is
  machine-produced, e.g. generated questions, theme clusters, suggested variants),
  Emerald/Amber/Red as semantic positive/neutral/negative sentiment colours,
  Slate neutrals for surfaces and text.
- **Type:** *Sora* for display/headings, *Inter* for body and UI — both via
  Google Fonts.
- **Components:** shared button, card (`.card-shadow`), badge, toggle, sentiment
  dot, and toast/modal patterns defined once in `assets/styles.css` /
  `assets/app.js` and reused identically across every screen so nothing drifts.
- **Icons:** Lucide via CDN throughout — never emoji as UI icons.

## Screen → PRD traceability

| # | Screen | Primary PRD coverage |
|---|---|---|
| 01 | Sign in | Role-based access (FR12 prerequisite); persona entry points (PM / CX director / analyst) |
| 02 | Dashboard | North Star metric (§6 — feedback-to-decision cycle time), survey portfolio overview, MVP success criteria framing |
| 03 | AI survey builder | FR10 (AI chat generates a survey from a natural-language brief); Flow 1 step 1–3; Story 4 |
| 04 | Deploy & recruit | FR1 (≥2 channels), FR3 (screening pre-qualifiers), FR7 (voucher + referral incentives), §3.3 question-bank rotation, §4.3 PM-approval boundary on screening thresholds |
| 05 | Live monitor | NFRs (dashboard load < 3s, completion-rate ≥ 60% target, adaptive latency < 2s), §4.3 graceful-degradation/error-handling spec |
| 06 | Insights dashboard | FR2, FR5, FR6, FR13 — theme clustering, sentiment, priority matrix, verbatims, quant+qual synthesis, screening transparency & full traceability; Story 1 & Story 3 acceptance criteria |
| 07 | Auto-improvement | FR8, FR9 — AI-suggested question variants with accept/edit/reject, A/B testing with statistical comparison; Story 4 acceptance criteria; §2.4 auto-improvement flywheel |
| 08 | Forecasting | FR11 — trend forecasting from historical response data; §6 forecast-latency/accuracy health metrics |
| 09 | Stakeholder collaboration | FR12 — role-based executive vs. analyst views, annotations, decision logging, export to PDF/CSV/BI; Flow 5 |
| 10 | Settings & team | §4.3 autonomy boundary (screening-threshold changes require PM approval, logged to audit trail), team roles, §3.3 aligned scheduling (P2), pricing/usage (§5) |
| 11 | Respondent survey (mobile) | Flow 2, FR4, Story 2 — real-time AI-generated adaptive follow-up questions, "why behind the why" depth |
| 12 | Survey complete (mobile) | FR7 — Amazon voucher reward + peer-referral chain; ESOMAR-aligned incentive copy |

## Assumptions made (PRD was silent or implicit)

1. **Org & persona context.** Set the workspace at a fictional mid-market
   retailer ("Brightline Retail Co.") and signed-in user as the Story 1
   persona (PM, Priya Nandakumar) — the PRD names personas generically, so a
   concrete org/name was needed to make data feel real (per "realism over
   lorem ipsum").
2. **"4 of 6 questions per respondent" rotation** (Flow 1: "random selection
   of 4 core questions") was visualised as a question-bank with explicit
   rotation messaging on the builder and deploy screens, since the PRD
   describes the mechanic but not its UI.
3. **Adaptive depth limit** — the PRD specifies adaptive follow-ups and a
   fallback on generation failure (§4.3) but not a maximum follow-up count.
   Mockups show up to 2 AI-generated follow-ups per respondent before
   returning to the base question set, a conventional bound that keeps
   "3–5 questions" (Flow 2) plausible.
4. **Executive vs. analyst view split** (FR12) was implemented as a toggle
   between an AI-written narrative summary with logged decisions (executive)
   and a confidence-scored data table (analyst) — the PRD names the two
   altitudes but not their concrete contents.
5. **Screening confidence threshold UI** — shown as a slider defaulting to
   70% (the value cited in §4.3's error-handling spec — "<70% confidence →
   flagged for manual review"), gated behind a PM-approval submission flow
   to dramatise the autonomy boundary the PRD specifies.
6. **"Aligned scheduling" (P2)** was given a minimal recurring-survey toggle
   on the Settings screen rather than a full calendar UI, since it's
   explicitly lower-priority and the PRD gives no interaction detail.
7. **Voucher value ($10, with $5 referral bonus)** is illustrative —
   the PRD specifies the Amazon-voucher mechanic and referral chain (FR7)
   but not denominations.
8. **IVR (interactive voice)** is represented only as a configuration toggle
   and inline copy (not a separate phone-call screen), consistent with the
   PRD's assumption (§12) that "interactive voice survey" means IVR via
   phone — a screen for that channel would be a phone system, not a web UI.
9. **Native mobile creator app and social listening** are shown as visibly
   disabled options on the Deploy screen with "Phase 2 / Phase 3" labels,
   reflecting §3.4 Out of Scope rather than omitting them — so reviewers can
   see what's deliberately deferred, not missing.

## Open questions surfaced (worth a human decision)

These mirror — and in a few cases sharpen — the PRD's own §11 Open Questions,
based on what became concrete while designing the screens:

1. **LLM provider selection (PRD §11.1)** affects the "AI generation < 2s"
   latency promise shown live on the live-monitor and respondent screens —
   worth validating against real provider latencies before the pilot.
2. **Respondent panel sourcing (PRD §11.2)** — the Deploy screen offers a
   "Respondent panel" recruitment channel as a toggle; whether this is
   build-vs-buy changes whether that's a real integration or a waitlist CTA.
3. **Borderline-confidence review queue** — the PRD specifies that <70%
   confidence responses are "flagged for manual review" (§4.3), but doesn't
   say where that queue lives. The mockup surfaces it via an inline "Review &
   override" action on the Insights screen; a dedicated review queue/inbox
   may be needed at higher response volumes.
4. **Forecast actioning** — FR11 specifies forecasting itself, but not what
   a business user *does* with a forecast. The mockup adds a "draft a survey
   to validate this" suggestion linking forecast → builder — worth
   confirming this is the intended behaviour loop.
5. **A/B test traffic split control** — FR9 requires "parallel deployment …
   with statistical comparison"; the mockup assumes Surve.AI sets the split
   (52/48 shown) rather than the business user configuring it. Confirm
   whether business users need manual control over the split ratio.

## Self-review notes

- **Coverage:** all 5 user flows and 4 personas have dedicated screens; every
  P0/P1 in-scope feature (§3.3) traces to at least one screen above.
- **States:** empty/loading/error/success are represented — e.g. the "AI is
  listening…" generation state and graceful-degradation note on Live Monitor,
  the draft/live/analyzing/complete survey-status badges on the Dashboard, the
  borderline-confidence flagging and override flow on Insights, and disabled
  out-of-scope channel options on Deploy.
- **Navigation:** `index.html` reaches every screen; every screen links back
  to the hub and forward along its flow; no dead links.
- **Content realism:** all names, numbers, quotes, and copy are
  fictional-but-plausible retail-feedback content — zero lorem ipsum.
- **Consistency:** sidebar, topbar, cards, buttons, badges, and sentiment
  colours are identical markup/classes across every workspace screen.
- **Responsive & accessible:** mobile nav drawer below `lg:`, phone-frame
  layout for the respondent flow, semantic landmarks, labelled inputs, visible
  focus rings, and WCAG-AA-checked colour pairings throughout.
