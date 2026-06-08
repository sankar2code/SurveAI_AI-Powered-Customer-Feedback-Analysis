// Surve.AI mockup — shared data & interactivity. No backend; everything is local state.

const SurveAI = {
  // ---- Shared mock data, reused across screens so numbers stay consistent ----
  data: {
    user: { name: 'Priya Nandakumar', role: 'Product Manager', org: 'Brightline Retail Co.', initials: 'PN' },

    surveys: [
      { id: 'srv-1042', name: 'Q3 Checkout Experience Pulse', status: 'analyzing', channel: 'Web + Voice', responses: 1284, target: 1500, completion: 64, lastActivity: '12 minutes ago' },
      { id: 'srv-1041', name: 'Loyalty Program Renewal Feedback', status: 'live', channel: 'Web', responses: 612, target: 2000, completion: 58, lastActivity: '2 minutes ago' },
      { id: 'srv-1038', name: 'Post-Purchase NPS — Home Goods', status: 'complete', channel: 'Web + Voice', responses: 2143, target: 2000, completion: 71, lastActivity: '3 days ago' },
      { id: 'srv-1033', name: 'New App Onboarding Drop-off', status: 'complete', channel: 'Web', responses: 956, target: 1000, completion: 67, lastActivity: '1 week ago' },
      { id: 'srv-1029', name: 'Store Associate Service Quality', status: 'draft', channel: 'Voice', responses: 0, target: 1200, completion: 0, lastActivity: 'Edited yesterday' },
    ],

    // Theme clusters for the flagship insights dashboard (srv-1038, the most complete dataset)
    themes: [
      { name: 'Shipping speed & tracking', mentions: 412, sentiment: -0.42, trend: 'up', priority: 1, quote: '"The order said 3 days but took 9 — and the tracking page never updated."' },
      { name: 'Checkout & payment friction', mentions: 318, sentiment: -0.31, trend: 'up', priority: 2, quote: '"I tried three times to apply my gift card and gave up."' },
      { name: 'Product quality vs. photos', mentions: 261, sentiment: -0.18, trend: 'flat', priority: 3, quote: '"The fabric felt thinner in person than it looked online."' },
      { name: 'Customer support responsiveness', mentions: 204, sentiment: 0.05, trend: 'down', priority: 4, quote: '"Support replied within the hour and actually solved it — nice surprise."' },
      { name: 'Loyalty point redemption', mentions: 176, sentiment: 0.22, trend: 'flat', priority: 5, quote: '"Redeeming points for my last order was way easier than I expected."' },
      { name: 'Packaging & unboxing feel', mentions: 139, sentiment: 0.38, trend: 'up', priority: 6, quote: '"Loved the little thank-you card — felt personal."' },
    ],

    sentimentTrend: [
      { week: 'Wk 1', positive: 38, neutral: 31, negative: 31 },
      { week: 'Wk 2', positive: 35, neutral: 30, negative: 35 },
      { week: 'Wk 3', positive: 33, neutral: 29, negative: 38 },
      { week: 'Wk 4', positive: 41, neutral: 28, negative: 31 },
      { week: 'Wk 5', positive: 46, neutral: 27, negative: 27 },
      { week: 'Wk 6', positive: 49, neutral: 26, negative: 25 },
    ],

    screening: {
      totalCollected: 2143,
      excluded: 187,
      precision: 96.2,
      reasons: [
        { label: 'Straight-lining (identical answers)', count: 81 },
        { label: 'Implausibly fast completion (<20s)', count: 54 },
        { label: 'Contradictory answer pattern', count: 31 },
        { label: 'Nonsensical open-text entry', count: 21 },
      ],
    },

    questionVariants: [
      { id: 'qv-1', base: 'How satisfied were you with your delivery time?', variant: 'Walk me through what happened between placing your order and it arriving — what stood out?', rationale: 'Open-ended framing surfaced 2.3x more root-cause detail in similar Growth-tier surveys.', status: 'suggested' },
      { id: 'qv-2', base: 'Rate the checkout process from 1–5.', variant: 'Was there any moment during checkout where you almost gave up? What was happening right before that?', rationale: 'Targets the "checkout & payment friction" theme directly — derived from 318 prior mentions.', status: 'suggested' },
      { id: 'qv-3', base: 'Would you recommend us to a friend?', variant: 'If a friend asked whether to shop with us, what’s the first thing you’d tell them — good or bad?', rationale: 'Reframes NPS as a story prompt; tends to surface the “why” behind the score.', status: 'accepted' },
    ],

    forecast: {
      headline: 'Negative sentiment on “shipping speed” projected to rise 9–14% over the next 4 weeks',
      confidence: 78,
      points: [
        { label: 'Wk 7 (proj.)', value: 34 },
        { label: 'Wk 8 (proj.)', value: 37 },
        { label: 'Wk 9 (proj.)', value: 40 },
        { label: 'Wk 10 (proj.)', value: 43 },
      ],
    },

    team: [
      { name: 'Priya Nandakumar', role: 'Product Manager', access: 'Admin', email: 'priya.n@brightline.co' },
      { name: 'Marcus Webb', role: 'CX Director', access: 'Editor', email: 'marcus.w@brightline.co' },
      { name: 'Aisha Rahman', role: 'Market Research Analyst', access: 'Analyst', email: 'aisha.r@brightline.co' },
      { name: 'Devon Cole', role: 'Brand Manager', access: 'Viewer', email: 'devon.c@brightline.co' },
    ],

    comments: [
      { author: 'Marcus Webb', role: 'CX Director', time: '2 hours ago', text: 'Shipping complaints are spiking right before the holiday push — can we get an emergency carrier review on the agenda for Monday?', target: 'Shipping speed & tracking' },
      { author: 'Devon Cole', role: 'Brand Manager', time: 'Yesterday', text: 'The packaging love is great context for the Q4 brand campaign — pulling a few quotes for creative.', target: 'Packaging & unboxing feel' },
    ],
  },

  // ---- Small interactivity helpers shared across screens ----

  initIcons() {
    if (window.lucide) lucide.createIcons();
  },

  // Lightweight toast notification
  toast(message, variant = 'default') {
    const colors = {
      default: 'bg-slate-900 text-white',
      success: 'bg-emerald-600 text-white',
      info: 'bg-indigo-600 text-white',
    };
    const el = document.createElement('div');
    el.className = `fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] px-4 py-2.5 rounded-lg shadow-lg text-sm font-medium ${colors[variant] || colors.default} transition-base opacity-0 translate-y-2`;
    el.textContent = message;
    document.body.appendChild(el);
    requestAnimationFrame(() => {
      el.classList.remove('opacity-0', 'translate-y-2');
    });
    setTimeout(() => {
      el.classList.add('opacity-0', 'translate-y-2');
      setTimeout(() => el.remove(), 200);
    }, 2400);
  },

  // Toggle a modal by id
  openModal(id) {
    const m = document.getElementById(id);
    if (!m) return;
    m.classList.remove('hidden');
    requestAnimationFrame(() => {
      m.querySelector('[data-modal-panel]')?.classList.remove('opacity-0', 'scale-95');
    });
  },
  closeModal(id) {
    const m = document.getElementById(id);
    if (!m) return;
    m.querySelector('[data-modal-panel]')?.classList.add('opacity-0', 'scale-95');
    setTimeout(() => m.classList.add('hidden'), 150);
  },

  // Mobile nav drawer toggle (used on app shell screens)
  toggleMobileNav() {
    const nav = document.getElementById('mobile-nav');
    const overlay = document.getElementById('mobile-nav-overlay');
    if (!nav) return;
    nav.classList.toggle('-translate-x-full');
    overlay?.classList.toggle('hidden');
  },
};

document.addEventListener('DOMContentLoaded', () => SurveAI.initIcons());
