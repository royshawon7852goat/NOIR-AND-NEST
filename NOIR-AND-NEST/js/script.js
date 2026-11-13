/**
 * NOIR & NEST — Premium Restaurant Website
 * Core JavaScript: Interactive Controls, Lightbox, Form Validation & Animations
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ==========================================================================
  // 1. STICKY NAVBAR & SCROLL BEHAVIOR
  // ==========================================================================
  const siteHeader = document.querySelector('.site-header');
  const btnBackToTop = document.querySelector('.btn-back-to-top');

  const handleScroll = () => {
    const scrollY = window.scrollY;

    // Sticky header style
    if (scrollY > 50) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }

    // Back to Top button visibility
    if (scrollY > 600) {
      btnBackToTop?.classList.add('visible');
    } else {
      btnBackToTop?.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  if (btnBackToTop) {
    btnBackToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ==========================================================================
  // 2. MOBILE NAVIGATION DRAWER
  // ==========================================================================
  const navToggle = document.querySelector('.nav-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const mobileBackdrop = document.querySelector('.mobile-drawer-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-drawer .btn');

  const openMobileMenu = () => {
    navToggle?.classList.add('open');
    mobileDrawer?.classList.add('open');
    mobileBackdrop?.classList.add('open');
    navToggle?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileMenu = () => {
    navToggle?.classList.remove('open');
    mobileDrawer?.classList.remove('open');
    mobileBackdrop?.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const isOpen = navToggle.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  mobileBackdrop?.addEventListener('click', closeMobileMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // ==========================================================================
  // 3. SMOOTH NAVIGATION SCROLL & ACTIVE LINK HIGHLIGHTING
  // ==========================================================================
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  const highlightNavOnScroll = () => {
    const scrollY = window.scrollY + 120;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });

  // ==========================================================================
  // 4. MENU CATEGORY FILTER TABS
  // ==========================================================================
  const menuTabs = document.querySelectorAll('.menu-tab-btn');
  const menuItems = document.querySelectorAll('.menu-item-card');

  menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      menuTabs.forEach(btn => btn.classList.remove('active'));
      tab.classList.add('active');

      const targetCategory = tab.getAttribute('data-filter');

      menuItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (targetCategory === 'all' || itemCategory === targetCategory) {
          item.classList.remove('is-hidden');
          item.style.animation = 'fadeInItem 0.4s ease forwards';
        } else {
          item.classList.add('is-hidden');
        }
      });
    });
  });

  // ==========================================================================
  // 5. FOOD GALLERY LIGHTBOX
  // ==========================================================================
  const galleryItems = document.querySelectorAll('.gallery-grid-item');
  const lightboxModal = document.getElementById('gallery-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxClose = document.querySelector('.lightbox-btn-close');
  const lightboxPrev = document.querySelector('.lightbox-btn-prev');
  const lightboxNext = document.querySelector('.lightbox-btn-next');

  let currentGalleryIndex = 0;
  const galleryData = [];

  galleryItems.forEach((item, index) => {
    const imgEl = item.querySelector('img');
    const titleEl = item.querySelector('.gallery-overlay-title');
    const categoryEl = item.querySelector('.gallery-overlay-category');

    galleryData.push({
      src: imgEl ? imgEl.getAttribute('src') : '',
      alt: imgEl ? imgEl.getAttribute('alt') : 'Fine Dining Gallery',
      title: titleEl ? titleEl.textContent.trim() : 'Noir & Nest Culinary Art',
      category: categoryEl ? categoryEl.textContent.trim() : 'Gastronomy'
    });

    item.addEventListener('click', () => {
      openLightbox(index);
    });
  });

  const updateLightboxContent = (index) => {
    if (!galleryData[index]) return;
    currentGalleryIndex = index;
    const item = galleryData[index];

    if (lightboxImg) {
      lightboxImg.src = item.src;
      lightboxImg.alt = item.alt;
    }
    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxDesc) lightboxDesc.textContent = item.category;
    if (lightboxCounter) lightboxCounter.textContent = `Photo ${index + 1} of ${galleryData.length}`;
  };

  const openLightbox = (index) => {
    updateLightboxContent(index);
    lightboxModal?.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightboxModal?.classList.remove('is-active');
    document.body.style.overflow = '';
  };

  const nextLightboxImage = () => {
    const nextIndex = (currentGalleryIndex + 1) % galleryData.length;
    updateLightboxContent(nextIndex);
  };

  const prevLightboxImage = () => {
    const prevIndex = (currentGalleryIndex - 1 + galleryData.length) % galleryData.length;
    updateLightboxContent(prevIndex);
  };

  lightboxClose?.addEventListener('click', closeLightbox);
  lightboxNext?.addEventListener('click', nextLightboxImage);
  lightboxPrev?.addEventListener('click', prevLightboxImage);

  // Close when clicking modal backdrop
  lightboxModal?.addEventListener('click', (e) => {
    if (e.target === lightboxModal) {
      closeLightbox();
    }
  });

  // Keyboard navigation for Lightbox
  window.addEventListener('keydown', (e) => {
    if (!lightboxModal?.classList.contains('is-active')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextLightboxImage();
    if (e.key === 'ArrowLeft') prevLightboxImage();
  });

  // ==========================================================================
  // 6. STORY MODAL (CHEF JULIAN VANCE & MANIFESTO)
  // ==========================================================================
  const storyModal = document.getElementById('story-modal');
  const btnOpenStory = document.querySelectorAll('.btn-open-story');
  const btnCloseStory = storyModal?.querySelector('.modal-btn-close');

  const openStoryModal = () => {
    storyModal?.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  };

  const closeStoryModal = () => {
    storyModal?.classList.remove('is-active');
    document.body.style.overflow = '';
  };

  btnOpenStory.forEach(btn => btn.addEventListener('click', openStoryModal));
  btnCloseStory?.addEventListener('click', closeStoryModal);

  storyModal?.addEventListener('click', (e) => {
    if (e.target === storyModal) closeStoryModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && storyModal?.classList.contains('is-active')) {
      closeStoryModal();
    }
  });

  // ==========================================================================
  // 7. RESERVATION FORM VALIDATION & CONFIRMATION MODAL
  // ==========================================================================
  const reservationForm = document.getElementById('reservation-form');
  const resModal = document.getElementById('reservation-success-modal');
  const btnCloseResModal = resModal?.querySelector('.modal-btn-close');
  const btnDismissTicket = document.getElementById('btn-dismiss-ticket');
  const dateInput = document.getElementById('res-date');

  // Set minimum date to today
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  // Field validator helper
  const showError = (fieldId, errorMsg) => {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(`${fieldId}-error`);
    if (field) field.classList.add('is-invalid');
    if (errorEl) {
      errorEl.textContent = errorMsg;
      errorEl.classList.add('visible');
    }
  };

  const clearError = (fieldId) => {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(`${fieldId}-error`);
    if (field) field.classList.remove('is-invalid');
    if (errorEl) {
      errorEl.textContent = '';
      errorEl.classList.remove('visible');
    }
  };

  // Real-time error clearing
  ['res-name', 'res-email', 'res-phone', 'res-date', 'res-time', 'res-guests'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', () => clearError(id));
      el.addEventListener('change', () => clearError(id));
    }
  });

  if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      // Validate Name
      const name = document.getElementById('res-name')?.value.trim();
      if (!name || name.length < 2) {
        showError('res-name', 'Please enter your full name (minimum 2 characters).');
        isValid = false;
      } else {
        clearError('res-name');
      }

      // Validate Email
      const email = document.getElementById('res-email')?.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailPattern.test(email)) {
        showError('res-email', 'Please provide a valid email address.');
        isValid = false;
      } else {
        clearError('res-email');
      }

      // Validate Phone
      const phone = document.getElementById('res-phone')?.value.trim();
      const phoneClean = phone.replace(/[^0-9+]/g, '');
      if (!phone || phoneClean.length < 10) {
        showError('res-phone', 'Please enter a valid phone number (at least 10 digits).');
        isValid = false;
      } else {
        clearError('res-phone');
      }

      // Validate Date
      const resDate = document.getElementById('res-date')?.value;
      if (!resDate) {
        showError('res-date', 'Please choose a dining date.');
        isValid = false;
      } else {
        clearError('res-date');
      }

      // Validate Time
      const resTime = document.getElementById('res-time')?.value;
      if (!resTime) {
        showError('res-time', 'Please select a preferred seating time.');
        isValid = false;
      } else {
        clearError('res-time');
      }

      // Validate Guests
      const resGuests = document.getElementById('res-guests')?.value;
      if (!resGuests) {
        showError('res-guests', 'Please select party size.');
        isValid = false;
      } else {
        clearError('res-guests');
      }

      if (!isValid) {
        showToast('Please correct the highlighted fields.');
        return;
      }

      // Form is valid: show button loading state
      const submitBtn = reservationForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Confirm Reservation';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg style="animation: spin 1s linear infinite; width:18px; height:18px; margin-right:8px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10" stroke-opacity="0.25"/>
            <path d="M12 2a10 10 0 0 1 10 10"/>
          </svg>
          Securing Your Table...
        `;
      }

      // Simulate luxury reservation processing
      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }

        // Generate reference ID
        const randomRef = 'NN-' + Math.floor(1000 + Math.random() * 9000);
        const seatingArea = document.getElementById('res-seating')?.value || 'Main Dining Hall';
        const requests = document.getElementById('res-requests')?.value.trim() || 'No special requests noted.';

        // Populate modal data
        document.getElementById('ticket-ref').textContent = randomRef;
        document.getElementById('ticket-name').textContent = name;
        document.getElementById('ticket-guests').textContent = `${resGuests} Guest${parseInt(resGuests) > 1 ? 's' : ''}`;
        document.getElementById('ticket-datetime').textContent = `${resDate} at ${resTime}`;
        document.getElementById('ticket-seating').textContent = seatingArea;
        document.getElementById('ticket-contact').textContent = `${phone} • ${email}`;
        document.getElementById('ticket-requests').textContent = requests;

        // Open Confirmation Modal
        resModal?.classList.add('is-active');
        document.body.style.overflow = 'hidden';

        // Reset form
        reservationForm.reset();
        showToast('Demo reservation recorded successfully!');
      }, 750);
    });
  }

  const closeResModal = () => {
    resModal?.classList.remove('is-active');
    document.body.style.overflow = '';
  };

  btnCloseResModal?.addEventListener('click', closeResModal);
  btnDismissTicket?.addEventListener('click', closeResModal);

  resModal?.addEventListener('click', (e) => {
    if (e.target === resModal) closeResModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && resModal?.classList.contains('is-active')) {
      closeResModal();
    }
  });

  // Quick reservation triggers from dish cards
  const quickBookBtns = document.querySelectorAll('.btn-quick-reserve');
  quickBookBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const dishName = btn.getAttribute('data-dish') || 'Signature Selection';
      const requestsField = document.getElementById('res-requests');
      if (requestsField) {
        requestsField.value = `Interested in the "${dishName}" Chef's pairing.`;
      }
      const resSection = document.getElementById('reservations');
      resSection?.scrollIntoView({ behavior: 'smooth' });
      document.getElementById('res-name')?.focus();
    });
  });

  // ==========================================================================
  // 8. NEWSLETTER SUBSCRIPTION & NOTIFICATION TOAST SYSTEM
  // ==========================================================================
  const newsletterForm = document.getElementById('newsletter-form');
  const toastContainer = document.getElementById('toast-container');

  function showToast(message, duration = 4000) {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <div class="toast-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 16v-4M12 8h.01"/>
        </svg>
      </div>
      <div>${message}</div>
    `;

    toastContainer.appendChild(toast);

    // Trigger reveal
    setTimeout(() => toast.classList.add('show'), 50);

    // Auto dismiss
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, duration);
  }

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletter-email');
      const val = emailInput ? emailInput.value.trim() : '';

      if (val && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        showToast('Welcome to the NOIR & NEST Privé Society. Exclusive invitations will arrive soon.');
        newsletterForm.reset();
      } else {
        showToast('Please enter a valid email address.');
      }
    });
  }

  // ==========================================================================
  // 9. SCROLL REVEAL OBSERVER
  // ==========================================================================
  const revealElements = document.querySelectorAll('.reveal-fade-up');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.12
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback if IntersectionObserver not supported
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }

  // ==========================================================================
  // 10. REAL-TIME RESTAURANT SERVICE STATUS
  // ==========================================================================
  const serviceBadge = document.getElementById('service-status-pill');
  if (serviceBadge) {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay(); // 0 is Sunday, 1 is Monday

    let statusText = '• Open for Dinner Service (19:00 - 23:45)';
    let isServiceActive = true;

    if (day === 1) {
      statusText = '• Closed Today (Culinary Atelier & R&D)';
      isServiceActive = false;
    } else if (hour >= 12 && hour < 16) {
      statusText = '• Now Serving: Lunch Atelier (12:30 - 15:30)';
    } else if (hour >= 19 && hour < 24) {
      statusText = '• Now Serving: Evening Degustation (19:00 - 23:45)';
    } else {
      statusText = '• Reservations Open for Tonight (Service starts 19:00)';
    }

    serviceBadge.textContent = statusText;
  }
});
