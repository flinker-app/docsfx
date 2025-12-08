---
title: Flinker Documentation - Teams & SharePoint Apps IFC Viewer & Permissions Management
description: Official Flinker documentation for Teams and SharePoint apps. Learn how to use the IFC Viewer for BIM files and manage sharing and permissions with our comprehensive guides.
keywords: Flinker, Teams Apps, SharePoint Apps, IFC, IFC Viewer, BIM Viewer, Sharing Permissions, Permissions Management, Documentation, IFC GPT, IFC Microsoft, AI, PowerBI, Power Automate
canonical_url: /docs/index.html
_disableAffix: true
_disableBreadcrumb: true
_disableNextArticle: true
---

<!-- Tailwind (CDN) only for the landing experience -->
<script>
  tailwind.config = {
    darkMode: 'class',
    corePlugins: { preflight: true },
    theme: {
      extend: {
        colors: {
          'ms-blue': '#0F6CBD',
          'ms-indigo': '#0B3B80',
          'ms-sky': '#6BB8FF',
          'ms-sand': '#F7F9FC',
          'ms-graphite': '#1A1F36'
        },
        fontFamily: {
          sans: ['"Segoe UI"', 'Inter', 'system-ui', '-apple-system', 'sans-serif']
        },
        boxShadow: {
          panel: '0 22px 60px -28px rgba(10, 32, 66, 0.55)',
          card: '0 14px 36px -22px rgba(15, 108, 189, 0.45)'
        }
      }
    }
  };
</script>
<script src="https://cdn.tailwindcss.com"></script>

<style>
  :root[data-bs-theme="dark"] .tw .text-slate-900,
  :root[data-bs-theme="dark"] .tw .text-slate-800 {
    color: #e5edff !important;
  }
  :root[data-bs-theme="dark"] .tw .text-slate-700 {
    color: #cdd9f1 !important;
  }
  :root[data-bs-theme="dark"] .tw .text-slate-600 {
    color: #b9c9ec !important;
  }
  :root[data-bs-theme="dark"] .tw .text-slate-500 {
    color: #a7b9e3 !important;
  }
  :root[data-bs-theme="dark"] .tw .text-ms-indigo,
  :root[data-bs-theme="dark"] .tw .text-ms-blue {
    color: #6bb8ff !important;
  }
  :root[data-bs-theme="dark"] .tw .bg-ms-sand {
    background-color: rgba(255, 255, 255, 0.04) !important;
  }
  :root[data-bs-theme="dark"] .tw .border-slate-200 {
    border-color: rgba(255, 255, 255, 0.12) !important;
  }

  /* Light, professional surfaces */
  .tw-page-bg {
    background: #ffffff;
  }
  .dark .tw-page-bg {
    background: #050b1a;
  }
  .panel-surface {
    background: #ffffff;
    border-color: #e5eaf1;
  }
  .dark .panel-surface {
    background: #0e1626;
    border-color: rgba(255, 255, 255, 0.06);
  }
  .hero-surface {
    background: linear-gradient(145deg, #f6f9ff 0%, #eaf2ff 60%, #dfe9ff 100%);
  }
  .dark .hero-surface {
    background: linear-gradient(145deg, #0a1a35 0%, #0a2448 60%, #081b32 100%);
  }
  .panel-soft {
    background: #f8fbff;
    border-color: #e5eaf1;
  }
  .dark .panel-soft {
    background: #0c1324;
    border-color: rgba(255, 255, 255, 0.08);
  }
  .card-surface {
    background: #ffffff;
    border: 1px solid #e5eaf1;
    border-radius: 20px;
  }
  .dark .card-surface {
    background: #0f1629;
    border-color: rgba(255, 255, 255, 0.08);
  }
  .pill-soft {
    background: #eef3fb;
    color: #0f274b;
  }
  .dark .pill-soft {
    background: rgba(255, 255, 255, 0.08);
    color: #e5edff;
  }
</style>

<script>
  const syncTailwindDark = () => {
    const root = document.documentElement;
    const isDark = root.getAttribute('data-bs-theme') === 'dark';
    root.classList.toggle('dark', isDark);
  };

  syncTailwindDark();
  new MutationObserver(syncTailwindDark).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-bs-theme']
  });
</script>

<h1 class="sr-only">Flinker Documentation</h1>

<div class="tw tw-page-bg min-h-screen">
<div class="mx-auto mt-4 flex max-w-6xl flex-col gap-16 px-4 pb-20 font-sans text-slate-900 dark:text-slate-100 sm:px-6 lg:px-8 bg-white dark:bg-transparent">
  <section class="relative overflow-hidden rounded-3xl border border-slate-200 panel-surface hero-surface p-10 text-slate-900 shadow dark:border-slate-800">
    <div class="relative space-y-8">
      <div class="space-y-6">
        <p class="text-xs font-semibold uppercase tracking-[0.35em] text-ms-indigo">Documentation hub</p>
        <h2 class="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl dark:text-white">Bring IFC workflows to Teams and SharePoint</h2>
        <p class="max-w-2xl text-lg text-slate-700 dark:text-slate-200">
          Welcome to the Flinker documentation. Browse these guides to deploy viewers, secure data, and automate insights with the Microsoft 365 tools your teams already trust.
        </p>
        <div class="flex flex-wrap gap-3">
          <a class="inline-flex items-center justify-center rounded-full bg-ms-blue/10 px-4 py-2 text-sm font-semibold text-ms-indigo shadow-card transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-white/10 dark:text-white" href="/docs/setting-up-the-ifc-viewer-in-microsoft-teams.html">
            Deploy to Teams
          </a>
          <a class="inline-flex items-center justify-center rounded-full border border-ms-blue/50 px-4 py-2 text-sm font-semibold text-ms-blue transition hover:-translate-y-0.5 hover:bg-ms-blue/10 dark:border-white/40 dark:text-white dark:hover:bg-white/10" href="https://outlook.office365.com/book/SupportConsultingonlinemeeting@flinker.app/">
            Book a call
          </a>
        </div>
      </div>
      <div class="grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-panel dark:border-slate-800 dark:bg-slate-900">
          <p class="text-sm font-semibold text-slate-900 dark:text-white">Built for Microsoft 365</p>
          <p class="mt-1 text-xs text-slate-700 dark:text-slate-200">IFC viewing, BCF topics, and automation without leaving Teams or SharePoint.</p>
        </div>
        <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-panel dark:border-slate-800 dark:bg-slate-900">
          <p class="text-sm font-semibold text-slate-900 dark:text-white">OpenBIM standards</p>
          <div class="mt-3 flex flex-wrap gap-2">
            <span class="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-ms-graphite dark:bg-white/20 dark:text-white">IFC</span>
            <span class="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-ms-graphite dark:bg-white/20 dark:text-white">BCF</span>
            <span class="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-ms-graphite dark:bg-white/20 dark:text-white">IDS</span>
          </div>
          <p class="mt-3 text-xs text-slate-700 dark:text-slate-200">Aligned to Microsoft security, compliance, and accessibility baselines for enterprise delivery.</p>
        </div>
        <div class="rounded-2xl border border-slate-200 bg-white p-4 shadow-panel dark:border-slate-800 dark:bg-slate-900">
          <p class="text-sm font-semibold text-slate-900 dark:text-white">Secure & compliant</p>
          <p class="mt-1 text-xs text-slate-700 dark:text-slate-200">Single Sign-On, tenant data residency, and permissions mapped to Microsoft security.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="space-y-6 rounded-3xl border border-slate-200 panel-surface panel-soft p-6 shadow-none dark:border-slate-800">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wide text-ms-indigo">Deployment overview</p>
        <h3 class="text-2xl font-semibold text-slate-900">Guides for every surface</h3>
      </div>
      <span class="pill-soft rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide">Live</span>
    </div>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3" aria-label="Documentation entry points">
      <div class="card-surface p-5 shadow-none dark:border-slate-800 dark:bg-slate-900">
        <div class="flex items-center gap-3">
          <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-ms-blue/10 dark:bg-white/10">
            <img src="_media/Microsoft_Office_Teams_Logo.svg" alt="Microsoft Teams Logo" class="h-6 w-6">
          </span>
          <div>
            <p class="text-sm font-semibold text-slate-900">Teams IFC Viewer</p>
            <p class="text-xs text-slate-600">Collaborate in channels and meetings</p>
          </div>
        </div>
        <a class="mt-3 flex items-center justify-between rounded-2xl border border-slate-200 bg-ms-sand px-4 py-3 text-sm font-semibold text-ms-blue transition hover:-translate-y-0.5 hover:shadow-card" href="/docs/ifc-viewer-for-teams.html">
          Product overview <span class="text-xs font-normal text-slate-600">Guide</span>
        </a>
      </div>
      <div class="card-surface p-5 shadow-none dark:border-slate-800 dark:bg-slate-900">
        <div class="flex items-center gap-3">
          <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-ms-blue/10 dark:bg-white/10">
            <img src="_media/Microsoft_Office_SharePoint_Logo.svg" alt="Microsoft SharePoint Logo" class="h-6 w-6">
          </span>
          <div>
            <p class="text-sm font-semibold text-slate-900">SharePoint IFC Viewer</p>
            <p class="text-xs text-slate-600">CDE-ready with granular access</p>
          </div>
        </div>
        <a class="mt-3 flex items-center justify-between rounded-2xl border border-slate-200 bg-ms-sand px-4 py-3 text-sm font-semibold text-ms-blue transition hover:-translate-y-0.5 hover:shadow-card" href="/docs/ifc-viewer-for-sharepoint.html">
          Product overview <span class="text-xs font-normal text-slate-600">Guide</span>
        </a>
      </div>
      <div class="card-surface p-5 shadow-none dark:border-slate-800 dark:bg-slate-900">
        <div class="flex items-center gap-3">
          <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-ms-blue/10 dark:bg-white/10">
            <img src="_media/Power_BI_Logo.svg" alt="Microsoft Power BI Logo" class="h-6 w-6">
          </span>
          <div>
            <p class="text-sm font-semibold text-slate-900">Power BI Visual</p>
            <p class="text-xs text-slate-600">Reporting and digital twins</p>
          </div>
        </div>
        <a class="mt-3 flex items-center justify-between rounded-2xl border border-slate-200 bg-ms-sand px-4 py-3 text-sm font-semibold text-ms-blue transition hover:-translate-y-0.5 hover:shadow-card" href="/docs/ifc-power-bi.html">
          Product overview <span class="text-xs font-normal text-slate-600">Guide</span>
        </a>
      </div>
      <div class="card-surface p-5 shadow-none dark:border-slate-800 dark:bg-slate-900">
        <div class="flex items-center gap-3">
          <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-ms-blue/10 dark:bg-white/10">
            <img src="_media/Microsoft_Office_Excel_Logo.svg" alt="Microsoft Excel Logo" class="h-6 w-6">
          </span>
          <div>
            <p class="text-sm font-semibold text-slate-900">Excel IFC Viewer</p>
            <p class="text-xs text-slate-600">Link model data directly in sheets</p>
          </div>
        </div>
        <a class="mt-3 flex items-center justify-between rounded-2xl border border-slate-200 bg-ms-sand px-4 py-3 text-sm font-semibold text-ms-blue transition hover:-translate-y-0.5 hover:shadow-card" href="/docs/ifc-viewer-for-microsoft-excel.html">
          Product overview <span class="text-xs font-normal text-slate-600">Guide</span>
        </a>
      </div>
      <div class="card-surface p-5 shadow-none dark:border-slate-800 dark:bg-slate-900">
        <div class="flex items-center gap-3">
          <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-ms-blue/10 dark:bg-white/10">
            <img src="_media/Microsoft_Office_SharePoint_Logo.svg" alt="SharePoint Protect" class="h-6 w-6">
          </span>
          <div>
            <p class="text-sm font-semibold text-slate-900">SharePoint Protect</p>
            <p class="text-xs text-slate-600">Permissions and governance</p>
          </div>
        </div>
        <a class="mt-3 flex items-center justify-between rounded-2xl border border-slate-200 bg-ms-sand px-4 py-3 text-sm font-semibold text-ms-blue transition hover:-translate-y-0.5 hover:shadow-card" href="/docs/share-features.html">
          Capabilities <span class="text-xs font-normal text-slate-600">Guide</span>
        </a>
      </div>
    </div>
  </section>

  <section class="space-y-6 rounded-3xl border border-slate-200 panel-surface panel-soft p-8 shadow-none dark:border-slate-800" aria-label="Rollout playbook">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wide text-ms-indigo">Rollout playbook</p>
        <h3 class="text-2xl font-semibold text-slate-900">Get to value quickly</h3>
      </div>
      <a class="text-sm font-semibold text-ms-blue underline-offset-4 hover:text-ms-indigo hover:underline" href="/docs/faq-ifc-viewer.html">FAQ</a>
    </div>
    <div class="grid gap-4 md:grid-cols-3">
      <div class="rounded-2xl bg-white p-5 shadow-none dark:border-slate-800 dark:bg-slate-900">
        <p class="text-xs font-semibold uppercase tracking-wide text-ms-indigo">Step 1</p>
        <h4 class="mt-2 text-lg font-semibold text-slate-900">Provision the viewers</h4>
        <p class="mt-2 text-sm text-slate-700">Install in Teams or SharePoint with tenant admin approval so project teams can open IFC and BCF immediately.</p>
        <div class="mt-3 space-y-1 text-sm">
          <a class="text-ms-blue underline-offset-4 hover:text-ms-indigo hover:underline" href="/docs/setting-up-the-ifc-viewer-in-microsoft-teams.html">Teams deployment</a>
          <a class="text-ms-blue underline-offset-4 hover:text-ms-indigo hover:underline" href="/docs/viewer-app-installation-with-admin-approval.html">SharePoint deployment</a>
        </div>
      </div>
      <div class="rounded-2xl bg-white p-5 shadow-none dark:border-slate-800 dark:bg-slate-900">
        <p class="text-xs font-semibold uppercase tracking-wide text-ms-indigo">Step 2</p>
        <h4 class="mt-2 text-lg font-semibold text-slate-900">Secure access</h4>
        <p class="mt-2 text-sm text-slate-700">Map project roles to Microsoft 365 permissions and keep governance aligned with your tenant policies.</p>
        <div class="mt-3 space-y-1 text-sm">
          <a class="text-ms-blue underline-offset-4 hover:text-ms-indigo hover:underline" href="/docs/share-features.html">SharePoint Protect</a>
          <a class="text-ms-blue underline-offset-4 hover:text-ms-indigo hover:underline" href="/docs/faq-share-app-for-microsoft-sharepoint.html">Protect FAQ</a>
        </div>
      </div>
      <div class="rounded-2xl bg-white p-5 shadow-none dark:border-slate-800 dark:bg-slate-900">
        <p class="text-xs font-semibold uppercase tracking-wide text-ms-indigo">Step 3</p>
        <h4 class="mt-2 text-lg font-semibold text-slate-900">Automate insights</h4>
        <p class="mt-2 text-sm text-slate-700">Use the Power BI visual and Excel add-in to create dashboards, exports, and automated notifications.</p>
        <div class="mt-3 space-y-1 text-sm">
          <a class="text-ms-blue underline-offset-4 hover:text-ms-indigo hover:underline" href="/docs/ifc-power-bi.html">Power BI visual</a>
          <a class="text-ms-blue underline-offset-4 hover:text-ms-indigo hover:underline" href="/docs/ifc-viewer-for-microsoft-excel.html">Excel add-in</a>
        </div>
      </div>
    </div>
  </section>

  <section class="space-y-6 rounded-3xl border border-slate-200 panel-surface panel-soft p-6 shadow-none dark:border-slate-800" aria-label="Feature guides">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div>
        <p class="text-sm font-semibold uppercase tracking-wide text-ms-indigo">Feature guides</p>
        <h3 class="text-2xl font-semibold text-slate-900">Deliver better BIM collaboration</h3>
      </div>
    </div>
    <div class="grid gap-4 md:grid-cols-2">
      <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-none dark:border-slate-800 dark:bg-slate-900">
        <p class="text-xs font-semibold uppercase tracking-wide text-ms-indigo">Model and issues</p>
        <h4 class="mt-2 text-lg font-semibold text-slate-900">Visualize and coordinate</h4>
        <ul class="mt-3 space-y-2 text-sm text-slate-700">
          <li><a class="text-ms-blue underline-offset-4 hover:text-ms-indigo hover:underline" href="/docs/ifc-viewer.html">Online IFC Viewer</a> for model inspection</li>
          <li><a class="text-ms-blue underline-offset-4 hover:text-ms-indigo hover:underline" href="/docs/ifc-bcf.html">BCF topics</a> to track issues with comments and viewpoints</li>
          <li><a class="text-ms-blue underline-offset-4 hover:text-ms-indigo hover:underline" href="/docs/faq-ifc-viewer.html">Clipping and filtering</a> to focus on the right assemblies</li>
        </ul>
      </div>
      <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-none dark:border-slate-800 dark:bg-slate-900">
        <p class="text-xs font-semibold uppercase tracking-wide text-ms-indigo">Search and automation</p>
        <h4 class="mt-2 text-lg font-semibold text-slate-900">Find and act faster</h4>
        <ul class="mt-3 space-y-2 text-sm text-slate-700">
          <li><a class="text-ms-blue underline-offset-4 hover:text-ms-indigo hover:underline" href="/docs/ai-search.html">AI search</a> across models and issues</li>
          <li><a class="text-ms-blue underline-offset-4 hover:text-ms-indigo hover:underline" href="/docs/ifc-viewer-installation-for-power-bi.html">Power BI setup</a> for reporting and KPIs</li>
          <li><a class="text-ms-blue underline-offset-4 hover:text-ms-indigo hover:underline" href="/docs/installation.html">Protect app setup</a> for automated permissions</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="space-y-6 rounded-3xl border border-slate-200 panel-surface panel-soft p-6 shadow-none dark:border-slate-800" aria-label="OpenBIM standards">
    <div>
      <p class="text-sm font-semibold uppercase tracking-wide text-ms-indigo">OpenBIM standards</p>
      <h3 class="text-2xl font-semibold text-slate-900">Work in open formats and keep data portable</h3>
      <p class="mt-2 text-sm text-slate-700">Native support for IFC, BCF, and IDS keeps coordination aligned with industry standards while staying inside Microsoft 365.</p>
    </div>
    <div class="grid gap-4 md:grid-cols-3">
      <a class="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-none transition hover:-translate-y-1 hover:shadow-card dark:border-slate-800 dark:bg-slate-900" href="/docs/ifc-viewer.html">
        <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-ms-blue/10 dark:bg-white/10">
          <img style="clip-path: inset(19%);" src="https://www.buildingsmart.org/wp-content/uploads/2024/07/bsi-icon-download.png" alt="IFC icon" class="h-8 w-8">
        </span>
        <div>
          <p class="text-sm font-semibold text-slate-900">.IFC</p>
          <p class="text-xs text-slate-600">OpenBIM model exchange</p>
        </div>
      </a>
      <a class="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-none transition hover:-translate-y-1 hover:shadow-card dark:border-slate-800 dark:bg-slate-900" href="/docs/ifc-bcf.html">
        <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-ms-blue/10 dark:bg-white/10">
          <img style="clip-path: inset(19%);" src="https://www.buildingsmart.org/wp-content/uploads/2024/07/bcf-icon-download.png" alt="BCF icon" class="h-8 w-8">
        </span>
        <div>
          <p class="text-sm font-semibold text-slate-900">.BCF</p>
          <p class="text-xs text-slate-600">Issues and viewpoints</p>
        </div>
      </a>
      <a class="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-none transition hover:-translate-y-1 hover:shadow-card dark:border-slate-800 dark:bg-slate-900" href="/docs/ifc-ids.html">
        <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-ms-blue/10 dark:bg-white/10">
          <img style="clip-path: inset(19%);" src="https://www.buildingsmart.org/wp-content/uploads/2024/07/ids-icon-download.png" alt="IDS icon" class="h-8 w-8">
        </span>
        <div>
          <p class="text-sm font-semibold text-slate-900">.IDS</p>
          <p class="text-xs text-slate-600">Information delivery specs</p>
        </div>
      </a>
    </div>
  </section>

  <section class="rounded-3xl border border-slate-200 panel-surface panel-soft p-8 shadow-none dark:border-slate-800">
    <div class="space-y-3">
      <p class="text-sm font-semibold uppercase tracking-wide text-ms-indigo">Why Microsoft-first</p>
      <h3 class="text-2xl font-semibold text-slate-900">Enterprise controls with no extra software</h3>
      <ul class="mt-4 space-y-3 text-sm text-slate-700">
        <li><span class="font-semibold text-slate-900">No new stack:</span> use Teams, SharePoint, Power BI, and Excel.</li>
        <li><span class="font-semibold text-slate-900">Data stays in your tenant:</span> aligned with privacy and data residency policies.</li>
        <li><span class="font-semibold text-slate-900">SSO for everyone:</span> map project roles to Azure AD identities.</li>
        <li><span class="font-semibold text-slate-900">Automation-ready:</span> trigger flows with Power Automate and surface KPIs in Power BI.</li>
      </ul>
    </div>
  </section>

  <section class="rounded-3xl border border-slate-200 panel-surface panel-soft p-8 shadow-none dark:border-slate-800">
    <div class="space-y-3">
      <p class="text-sm font-semibold uppercase tracking-wide text-ms-indigo">Support</p>
      <h3 class="text-2xl font-semibold text-slate-900">Talk to us anytime</h3>
      <div class="mt-2 space-y-2 text-sm text-slate-700">
        <p><a class="text-ms-blue underline-offset-4 hover:text-ms-indigo hover:underline" href="https://outlook.office365.com/book/SupportConsultingonlinemeeting@flinker.app/">Book a meeting</a> with the support team</p>
        <p><a class="text-ms-blue underline-offset-4 hover:text-ms-indigo hover:underline" href="mailto:support@flinker.app">support@flinker.app</a> for implementation or bug reports</p>
        <p><a class="text-ms-blue underline-offset-4 hover:text-ms-indigo hover:underline" href="tel:+498926204274">+49 89 26204274</a> for direct assistance</p>
      </div>
    </div>
  </section>
</div>
</div>
