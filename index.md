---
title: Flinker Documentation - Teams & SharePoint Apps IFC Viewer & Permissions Management
description: Official Flinker documentation for Teams and SharePoint apps. Learn how to use the IFC Viewer for BIM files and manage sharing and permissions with our comprehensive guides.
keywords: Flinker, Teams Apps, SharePoint Apps, IFC, IFC Viewer, BIM Viewer, Sharing Permissions, Permissions Management, Documentation, IFC GPT, IFC Microsoft, AI, PowerBI, Power Automate
canonical_url: https://docs.flinker.app/docs/index.html
_disableAffix: true
_disableBreadcrumb: true
_disableNextArticle: true
---

<style>

  /* Reset box-sizing for consistency */
  * {
    box-sizing: border-box;
  }

  /* Container for the vertical cards */
  .vertical-card-container,
  .horizontal-card-container,
  .benefits-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* Center the cards */
    gap: 20px; /* Space between cards */
    margin: 20px 0;
    align-items: stretch;
    width: 100%; /* Ensure full width within wrapper */
  }

  /* Individual vertical card styling */
  .vertical-card,
  .horizontal-card,
  .benefit-item {
    flex: 1 1 calc(33.333% - 20px); /* Three cards per row */
    max-width: calc(33.333% - 20px);
    border: 1px solid #e1e1e16e;
    border-radius: 2px; /* Smaller border radius */
    text-align: left;
    color: inherit;
    box-shadow: 0 2px 4px rgba(100, 100, 100, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
    display: flex;
    flex-direction: column;
    text-decoration: none; /* Remove underline for links */
  }

  /* Image styling for vertical cards */
  .vertical-card img,
  .horizontal-card img {
    width: 100%;
    height: 160px; /* Fixed height for images */
    object-fit: cover;
    border-top-left-radius: 2px; /* Match smaller border radius */
    border-top-right-radius: 2px;
  }

  /* Card content for vertical cards */
  .vertical-card-content,
  .horizontal-card-content {
    padding: 15px;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  /* Card title */
  .card-title {
    font-size: 1em; /* Smaller font size */
    margin-bottom: 8px;
    margin-top: 0;
  }

  /* Card description */
  .card-description {
    flex-grow: 1;
    margin: 0;
    margin-bottom: 4px;
  }

  /* Links within cards */
  .card-link {
    text-decoration: none;
    margin-top: 5px;
    font-size: 0.95em;
  }

  .card-link:hover {
    text-decoration: underline;
  }

  /* Benefits Item Specific */
  .benefit-item {
    align-items: center;
    flex-direction: row;
    padding: 20px;
  }

  .benefit-icon {
    font-size: 1.5em;
    margin-right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .benefit-text {
    font-size: 1em;
  }

  /* Responsive Design */
  @media (max-width: 1200px) {
    .vertical-card,
    .horizontal-card,
    .benefit-item {
      flex: 1 1 calc(50% - 20px); /* Two cards per row */
      max-width: calc(50% - 20px);
    }
  }

  @media (max-width: 768px) {
    .vertical-card,
    .horizontal-card,
    .benefit-item {
      flex: 1 1 100%; /* Single card per row */
      max-width: 100%;
    }

    .horizontal-card {
      flex-direction: column;
      align-items: center;
    }

    .horizontal-card img {
      margin-right: 0;
      margin-bottom: 10px;
    }

    .horizontal-card-content {
      text-align: center;
    }

    .benefit-item {
      flex-direction: column;
      text-align: center;
    }

    .benefit-icon {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
</style>

# Documentation and Support

Microsoft 365 Apps for secure project management between teams and companies. Discover the full potential of Microsoft Apps with these guides and documentation. Enhance your team collaboration and security across Microsoft SharePoint and Teams.

<!-- Vertical Cards -->
<div class="vertical-card-container">
  <div class="vertical-card">
    <div class="vertical-card-content">
      <h3 class="card-title">Setup</h3>
      <a href="/docs/setting-up-the-ifc-viewer-in-microsoft-teams.html" class="card-link">IFC Viewer setup in Teams</a>
      <a href="/docs/viewer-app-installation-with-admin-approval.html" class="card-link">IFC Viewer setup in SharePoint</a>
      <a href="/docs/installation.html" class="card-link">Share setup</a>
    </div>
  </div>
  <div class="vertical-card">
    <div class="vertical-card-content">
      <h3 class="card-title">Features</h3>
      <a href="/docs/share-features.html" class="card-link">Share app features</a>
      <a href="/docs/faq-ifc-viewer.html" class="card-link">IFC Viewer app FAQs</a>
    </div>
  </div>
  <div class="vertical-card">
    <div class="vertical-card-content">
      <h3 class="card-title">FAQs</h3>
      <a href="/docs/faq-share-add-on-for-microsoft-sharepoint.html" class="card-link">Share app FAQs</a>
      <a href="/docs/faq-ifc-viewer.html" class="card-link">IFC Viewer app FAQs</a>
    </div>
  </div>  
</div>

## Apps for Microsoft 365
All our products have been designed specifically for Microsoft 365. That means our solutions fit seamlessly with your existing Microsoft infrastructure.

<!-- Horizontal Cards -->
<div class="horizontal-card-container"> 
  <a href="/docs/share-features.html" class="horizontal-card">
    <img 
      src="/_media/list-permissions-in-share-app.png" 
      alt="Share">
    <div class="horizontal-card-content">
      <h3 class="card-title">Share</h3>
      <p class="card-description">Simplify sharing in SharePoint and Teams.</p>
    </div>
  </a>
  <a href="/docs/viewer-app-installation-with-admin-approval.html" class="horizontal-card">
    <img 
      src="/_media/sharepoint-document-library-view-ifc-file.png" 
      alt="IFC Viewer">
    <div class="horizontal-card-content">
      <h3 class="card-title">IFC Viewer in SharePoint</h3>
      <p class="card-description">Seamlessly view IFC files directly in SharePoint.</p>
    </div>
  </a>
  <a href="/docs/setting-up-the-ifc-viewer-in-microsoft-teams.html" class="horizontal-card">
    <img 
      src="/_media/teams-apps-ifc-viewer-ifc-files-from-settings-load-automatically.png" 
      alt="IFC Viewer in Teams">
    <div class="horizontal-card-content">
      <h3 class="card-title">IFC Viewer in Teams</h3>
      <p class="card-description">Seamlessly view IFC files directly in Teams.</p>
    </div>
  </a>

</div>

## Benefits

<div class="benefits-container">
  <div class="benefit-item">
    <span class="benefit-icon">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/240px-Microsoft_logo.svg.png" alt="Microsoft" width="26" height="auto" style="max-width: unset;">
    </span>
    <span class="benefit-text">Seamless integration with Microsoft 365</span>
  </div>
  <div class="benefit-item">
    <span class="benefit-icon">🔒</span>
    <span class="benefit-text">100% privacy first and data sovereignty</span>
  </div>
  <div class="benefit-item">
    <span class="benefit-icon">🛡️</span>
    <span class="benefit-text">As secure as Microsoft can be</span>
  </div>
  <div class="benefit-item">
    <span class="benefit-icon">🔑</span>
    <span class="benefit-text">Single Sign-On for any users</span>
  </div>

</div>

## Support

If you have any questions about implementation, usage, or bug reports, please feel free to contact us at any time using the contact details below:

<!-- Benefits Container for Contact Information -->
<div class="benefits-container">
  <div class="benefit-item">
    <span class="benefit-text">
      <h3 class="card-title">Meeting</h3>
      <a href="https://outlook.office365.com/book/SupportConsultingonlinemeeting@flinker.app/" class="contact-link">Reach out to our dedicated support team</a>
    </span>
  </div>
  <div class="benefit-item">
    <span class="benefit-text">
      <h3 class="card-title">Email</h3>
      <a href="mailto:support@flinker.app" class="contact-link">support@flinker.app</a>
    </span>
  </div>
  <div class="benefit-item">
    <span class="benefit-text">
      <h3 class="card-title">Phone</h3>
      <a href="tel:+498926204274" class="contact-link">+49 89 26204274</a>
    </span>
  </div>
</div>
