---
uid: pdf-2d-docs
title: PDF 2D Docs
description: Learn how to load a 2D PDF floor plan, calibrate it against your IFC model, and review the aligned overlay in five steps.
keywords: PDF overlay, 2D docs, floor plan, calibration, IFC PDF
canonical_url: https://docs.flinker.app/docs/PDF-2d-Docs.html
---

# PDF 2D Docs

The **PDF Overlay** workflow lets you place a 2D PDF floor plan on top of the IFC model floor view. This is useful when you want to compare model geometry against consultant drawings, room labels, or printed documentation.

## Five-step workflow

<style>
.pdf-anim {
  position: relative;
  margin: 1.5rem auto 1rem;
  width: 100%;
  max-width: 820px;
  height: min(48vh, 420px);
  overflow: hidden;
  border: 1px solid var(--bs-border-color, #d9d9d9);
  border-radius: 0.75rem;
  background: #101820;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.pdf-anim-slide {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
  opacity: 0;
  overflow: hidden;
  animation: pdf-anim-cycle 10s infinite;
}

.pdf-anim-slide:nth-child(1) {
  animation-delay: 0s;
}

.pdf-anim-slide:nth-child(2) {
  animation-delay: 2s;
}

.pdf-anim-slide:nth-child(3) {
  animation-delay: 4s;
}

.pdf-anim-slide:nth-child(4) {
  animation-delay: 6s;
}

.pdf-anim-slide:nth-child(5) {
  animation-delay: 8s;
}

.pdf-anim:hover .pdf-anim-slide {
  animation-play-state: paused;
}

.pdf-anim-slide > img,
.pdf-anim-slide > a,
.pdf-anim-slide > a > img {
  display: block;
  width: 100%;
  height: 100%;
}

.pdf-anim-slide > img,
.pdf-anim-slide > a > img {
  object-fit: cover;
}

.pdf-anim-slide > a {
  text-decoration: none;
}

.pdf-anim-slide figcaption {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  padding: 1rem 1.25rem 1.15rem;
  color: #fff;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0.2), transparent);
  line-height: 1.5;
}

.pdf-anim-slide figcaption strong {
  display: block;
  margin: 0.15rem 0 0.35rem;
  color: #fff;
}

.pdf-anim-step {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 2;
  display: inline-block;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  background: rgba(7, 121, 255, 0.95);
  color: #fff;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}

@keyframes pdf-anim-cycle {
  0% { opacity: 0; }
  5% { opacity: 1; }
  20% { opacity: 1; }
  25% { opacity: 0; }
  100% { opacity: 0; }
}

@media (max-width: 768px) {
  .pdf-anim {
    height: min(34vh, 280px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .pdf-anim {
    height: auto;
  }

  .pdf-anim-slide {
    position: relative;
    opacity: 1;
    animation: none;
    display: none;
  }

  .pdf-anim-slide:first-child {
    display: block;
  }

  .pdf-anim-slide > img,
  .pdf-anim-slide > a,
  .pdf-anim-slide > a > img {
    height: auto;
  }
}
</style>

<div class="pdf-anim" aria-label="Animated walkthrough of the PDF overlay workflow">
  <figure class="pdf-anim-slide">
    <img src="/_media/pdf_1.png" alt="Load Docs panel with a PDF floor plan added to the imported PDF library." />
    <span class="pdf-anim-step">Step 1</span>
  </figure>

  <figure class="pdf-anim-slide">
    <img src="/_media/pdf_2.png" alt="Imported PDF library showing the PDF assigned to a floor plan with Calibrate and Show PDF actions." />
    <span class="pdf-anim-step">Step 2</span>
  </figure>

  <figure class="pdf-anim-slide">
    <img src="/_media/pdf_4.png" alt="Calibration dialog showing the 2D PDF view ready for selecting two reference points." />
    <span class="pdf-anim-step">Step 3</span>
  </figure>

  <figure class="pdf-anim-slide">
    <img src="/_media/pdf_6.png" alt="IFC floor plan view asking for the same two calibration points on the model." />
    <span class="pdf-anim-step">Step 4</span>
  </figure>

  <figure class="pdf-anim-slide">
    <img src="/_media/pdf_7.png" alt="Final aligned PDF overlay displayed on top of the IFC floor model." />
    <span class="pdf-anim-step">Step 5</span>
  </figure>
</div>

Hover the animation to pause on a specific frame.

To start:

1. <strong>Load the PDF file.</strong>  
   Open <strong>PDF Overlay</strong>, select <strong>Load Docs</strong>, and import the PDF plan you want to place on the model.
2. <strong>Assign the PDF to the floor plan.</strong>  
   In the imported PDF library, choose the correct level from the floor plan dropdown so the PDF is linked to the right floor.
3. <strong>Open the 2D PDF calibration view.</strong>  
   Click <strong>Calibrate</strong>, then pick two clear reference points on the PDF drawing, such as corners or grid intersections.
4. <strong>Pick the same two points in the IFC floor view.</strong>  
   In the IFC model floor plan, click the same two locations so the PDF can be aligned to the model geometry.
5. <strong>Show the aligned PDF overlay.</strong>  
   Click <strong>Show PDF</strong> to display the aligned floor plan on the model and review spaces, walls, doors, and annotations in context.

> [!NOTE]
> Pick two points that are easy to identify in both views, such as grid intersections, outside corners, or shaft corners. The farther apart the points are, the better the alignment usually becomes.

## What this is good for

- Compare consultant floor plans against the IFC geometry.
- Check whether room labels and sheet annotations match the model.
- Review plan layout without leaving the viewer.

## Related Features

- [IFC Viewer](ifc-viewer.md)
- [Real World Map](real_worldMap.md)
