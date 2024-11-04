---
title: Flinker Documentation - Teams & SharePoint Apps IFC Viewer & Permissions Management
description: Official Flinker documentation for Teams and SharePoint apps. Learn how to use the IFC Viewer for BIM files and manage sharing and permissions with our comprehensive guides.
keywords: Flinker, Teams Apps, SharePoint Apps, IFC Viewer, BIM Viewer, Sharing Permissions, Permissions Management, Documentation
_disableAffix: true
_disableBreadcrumb: true
---

<style>
/* Reset box-sizing for consistency */
* {
  box-sizing: border-box;
}

/* Full-Width Intro Section */
.intro-section {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.intro-section h1 {
  margin-bottom: 15px;
}

.intro-section p {
  max-width: 800px;
}

/* Container for the vertical cards */
.vertical-card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* Reduced gap for a tighter layout */
  padding: 30px 20px; /* Reduced padding */
  margin: 20px 0;
  align-items: stretch;
}

/* Individual vertical card styling */
.vertical-card {
  border: 1px solid #e1e1e1;
  border-radius: 2px; /* Smaller border radius */
  width: 280px; /* Fixed width for uniformity */
  text-align: left;
  color: inherit;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
}

.vertical-card:hover {
  transform: translateY(-3px); /* Subtle hover effect */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

/* Image styling for vertical cards */
.vertical-card img {
  width: 100%;
  height: 140px; /* Fixed height for images */
  object-fit: cover;
  border-top-left-radius: 2px; /* Match smaller border radius */
  border-top-right-radius: 2px;
}

/* Card content for vertical cards */
.vertical-card-content {
  padding: 15px; /* Reduced padding */
  flex: 1; /* Ensure the content area takes up remaining space */
  display: flex;
  flex-direction: column;
}

/* Card title */
.card-title {
  font-size: 1em; /* Smaller font size */
  margin-bottom: 8px;
}

/* Card description */
.card-description {
  flex-grow: 1; /* Pushes the content to fill the space */
  margin: 0;
  margin-bottom: 4px;
}

/* Container for the horizontal cards */
.horizontal-card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* Gap between cards */
  padding: 30px 20px; /* Padding around the container */
  margin: 20px 0;
  align-items: stretch;
}

/* Individual horizontal card styling */
.horizontal-card {
  border: 1px solid #e1e1e1;
  border-radius: 2px; /* Smaller border radius */
  width: 340px; /* Wider width for horizontal layout */
  text-decoration: none;
  color: inherit;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.horizontal-card:hover {
  transform: translateY(-3px); /* Subtle hover effect */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

/* Image styling for horizontal cards */
.horizontal-card img {
  width: 40px; /* Small image on the left */
  height: 40px;
  object-fit: cover;
  border-radius: 2px;
  margin-right: 10px; /* Space between image and content */
  margin-left: 10px;
}

/* Card content for horizontal cards */
.horizontal-card-content {
  padding: 10px; /* Padding around content */
  display: flex;
  flex-direction: column;
}

/* Container for the benefits */
.benefits-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* Gap between benefit items */
  padding: 30px 20px; /* Padding around the container */
  margin: 20px 0;
  align-items: stretch;
}

/* Individual benefit item styling */
.benefit-item {
  border: 1px solid #e1e1e1;
  border-radius: 2px; /* Smaller border radius */
  width: 250px; /* Fixed width for uniformity */
  padding: 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.benefit-item:hover {
  transform: translateY(-3px); /* Subtle hover effect */
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.benefit-icon {
  font-size: 1.5em;
  margin-right: 15px;
}

.benefit-text {
  font-size: 1em;
}

/* Responsive Design */
@media (max-width: 768px) {
  .vertical-card-container {
    flex-direction: column;
    align-items: center;
  }

  .horizontal-card-container {
    flex-direction: column;
    align-items: center;
  }

  .horizontal-card {
    width: 100%; /* Full width on small screens */
    flex-direction: column;
    align-items: center;
  }

  .horizontal-card img {
    margin-right: 0;
    margin-bottom: 10px; /* Space below image */
  }

  .horizontal-card-content {
    text-align: center;
  }

  .benefits-container {
    flex-direction: column;
    align-items: center;
  }

  .benefit-item {
    width: 100%; /* Full width on small screens */
    max-width: 300px;
  }
}

</style>

<!-- Intro Section -->
<div class="intro-section">
  <h1>Introduction and Support</h1>
  <p>
    Microsoft 365 Add-ons for secure project management between teams and companies.
  </p>
    <p>
Discover the full potential of Microsoft Add-ons with these guides and documentation. Enhanced your team collaboration and security across Microsoft SharePoint and Teams.

  </p>
</div>

<div class="vertical-card-container">

  <!-- Card 1 -->
  <div class="vertical-card">
    <div class="vertical-card-content">
      <h3 class="card-title">Setup</h3>
      <p class="card-description">Learn how to install and configure the Microsoft 365 Add-ons with step-by-step instructions.</p>
      <a href="/docs/setting-up-the-ifc-viewer-in-microsoft-teams.html" class="card-link">IFC Viewer setup in Teams</a>
      <a href="/docs/viewer-app-installation-with-admin-approval.html" class="card-link">IFC Viewer setup in Sharepoint</a>
      <a href="/docs/installation.html" class="card-link">Share setup</a>
    </div>
  </div>

  <!-- Card 2 -->
  <div class="vertical-card">
    <div class="vertical-card-content">
      <h3 class="card-title">Features</h3>
      <p class="card-description">Learn how to use the Microsoft 365 Add-ons effectively.</p>
      <a href="/docs/share-features.html" class="card-link">Share app features</a>
      <a href="/docs/faq-ifc-viewer.html" class="card-link">IFC Viewer app FAQs</a>
    </div>
  </div>

  <!-- Card 3 -->
  <div class="vertical-card">
    <div class="vertical-card-content">
      <h3 class="card-title">FAQs</h3>
      <p class="card-description">FAQs for our Add-Ons.</p>
      <a href="/docs/faq-share-add-on-for-microsoft-sharepoint.html" class="card-link">Share app FAQs</a>
      <a href="/docs/faq-ifc-viewer.html" class="card-link">IFC Viewer app FAQs</a>
    </div>
  </div>  
</div>

## Add-Ons For Microsoft 365
All our products have been designed specifically for Microsoft 365. That means our solutions fit seamlessly with your existing Microsoft infrastructure.
<div class="horizontal-card-container"> 

  <a href="/docs/share-features.html" class="horizontal-card">
    <img 
      src="https://store-images.s-microsoft.com/image/apps.8710.f4a5189b-9a64-4251-b3ad-9fe54b90332c.a6ddbdcf-71af-4b0a-9ac8-1fddd491d66d.4a1843fb-411a-42b1-b5f4-d83bdb3b72d1.png" 
      alt="Share">
    <div class="horizontal-card-content">
      <h3 class="card-title">Share</h3>
      <p class="card-description">Simplify sharing in SharePoint and Teams.</p>
    </div>
  </a>

  <a href="/docs/viewer-app-installation-with-admin-approval.html" class="horizontal-card">
    <img 
      src="https://store-images.s-microsoft.com/image/apps.12309.c24477af-2aeb-444a-9f51-3442091a108b.7f8441a4-87aa-4f3c-b52a-2f18c329ec78.fe7c80b2-03e4-4f1f-8dc5-c08984c0d3ec.png" 
      alt="IFC Viewer">
    <div class="horizontal-card-content">
      <h3 class="card-title">IFC Viewer in SharePoint</h3>
      <p class="card-description">Seamlessly view IFC files directly in SharePoint.</p>
    </div>
  </a>

  <a href="http://localhost:8080/docs/setting-up-the-ifc-viewer-in-microsoft-teams.html" class="horizontal-card">
    <img 
      src="https://store-images.s-microsoft.com/image/apps.12309.c24477af-2aeb-444a-9f51-3442091a108b.7f8441a4-87aa-4f3c-b52a-2f18c329ec78.fe7c80b2-03e4-4f1f-8dc5-c08984c0d3ec.png" 
      alt="Open IFC Viewer" >
    <div class="horizontal-card-content">
      <h3 class="card-title">IFC Viewer in Teams</h3>
      <p class="card-description">Seamlessly view IFC files directly in Teams.</p>
    </div>
  </a>

</div>


## Benefits

<div class="benefits-container">

<div class="benefit-item">
  <span class="benefit-icon"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/240px-Microsoft_logo.svg.png" alt="Teams" width="26" height="auto" style=" max-width: unset"></span>
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

If you have any questions about implementation, usage and bug reports, please feel free to contact us at any time using the contact details below:

<!-- Benefits Container for Contact Information -->
<div class="benefits-container">

  <!-- Meeting -->
  <div class="benefit-item">
    <span class="benefit-text">
      <strong>Meeting</strong><br><a href="https://outlook.office365.com/book/SupportConsultingonlinemeeting@flinker.app/" class="contact-link">Reach out to our dedicated support team</a>
    </span>
  </div>

  <!-- Email -->
  <div class="benefit-item">
    <span class="benefit-text">
      <strong>Email</strong><br><a href="mailto:support@flinker.app" class="contact-link">support@flinker.app</a>
    </span>
  </div>

  <!-- Phone -->
  <div class="benefit-item">
    <span class="benefit-text">
      <strong>Phone</strong><br><a href="tel:+498926204274" class="contact-link">+49 89 26204274</a>
    </span>
  </div>

</div>