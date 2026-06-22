gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isMobile = window.matchMedia("(max-width: 767px)").matches;

if (!prefersReducedMotion) {
  const lenis = new Lenis({
    duration: isMobile ? 0.75 : 1.08,
    smoothWheel: true,
    syncTouch: false,
    wheelMultiplier: 0.95,
    touchMultiplier: 1.05
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));

      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target, {
        offset: 0,
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    });
  });

  const loadTimeline = gsap.timeline({ defaults: { ease: "expo.out" } });

  loadTimeline
    .from(".site-header", {
      autoAlpha: 0,
      y: -18,
      duration: 0.85
    })
    .from(
      ".hero-panel",
      {
        autoAlpha: 0,
        scale: 1.015,
        duration: 0.9
      },
      0
    )
    .from(
      ".hero-content .eyebrow-line",
      {
        scaleX: 0,
        transformOrigin: "center center",
        duration: 0.75
      },
      0.25
    )
    .from(
      ".hero-content .eyebrow",
      {
        autoAlpha: 0,
        y: 18,
        duration: 0.75
      },
      0.35
    )
    .from(
      ".hero-content h1",
      {
        autoAlpha: 0,
        y: 56,
        clipPath: "inset(100% 0% 0% 0%)",
        duration: 1.15
      },
      0.5
    )
    .from(
      ".hero-subtitle",
      {
        autoAlpha: 0,
        y: 22,
        duration: 0.75,
        stagger: 0.08
      },
      0.9
    )
    .from(
      [".social-rail a", ".scroll-rail", ".scroll-cue"],
      {
        autoAlpha: 0,
        y: 18,
        duration: 0.75,
        stagger: 0.08
      },
      1.05
    );

  gsap.to(".scroll-cue", {
    y: 8,
    duration: 1.2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.utils.toArray(".section-panel").forEach((panel) => {
    gsap.to(panel, {
      backgroundPosition: "50% 18%",
      ease: "none",
      scrollTrigger: {
        trigger: panel,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  });

  gsap.utils.toArray(".section:not(.section--hero)").forEach((section) => {
    const headingItems = section.querySelectorAll(".section-heading .eyebrow, .section-heading h2, .section-heading p, .contact-copy .eyebrow, .contact-copy h2, .contact-copy > p");
    const cards = section.querySelectorAll(".project-card");
    const cardVisuals = section.querySelectorAll(".project-card__visual");
    const contactItems = section.querySelectorAll(".contact-list > *, .social-row a");
    const form = section.querySelector(".contact-form");
    const button = section.querySelector(".button--outline");

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 72%",
        end: "bottom 35%",
        toggleActions: "play none none reverse"
      },
      defaults: {
        ease: "power4.out"
      }
    });

    if (headingItems.length) {
      timeline.from(headingItems, {
        autoAlpha: 0,
        y: 34,
        duration: 0.85,
        stagger: 0.08
      });
    }

    if (cards.length) {
      timeline.from(
        cards,
        {
          autoAlpha: 0,
          y: 70,
          scale: 0.96,
          duration: 0.95,
          stagger: 0.12
        },
        "-=0.28"
      );
    }

    if (cardVisuals.length) {
      timeline.from(
        cardVisuals,
        {
          scale: 1.14,
          duration: 1.35,
          stagger: 0.1
        },
        "-=0.95"
      );
    }

    if (button) {
      timeline.from(
        button,
        {
          autoAlpha: 0,
          y: 24,
          duration: 0.75
        },
        "-=0.45"
      );
    }

    if (contactItems.length) {
      timeline.from(
        contactItems,
        {
          autoAlpha: 0,
          y: 24,
          duration: 0.7,
          stagger: 0.08
        },
        "-=0.35"
      );
    }

    if (form) {
      timeline.from(
        form,
        {
          autoAlpha: 0,
          x: isMobile ? 0 : 54,
          y: isMobile ? 34 : 0,
          duration: 1
        },
        "-=0.75"
      );

      timeline.from(
        form.querySelectorAll("input, textarea, button"),
        {
          autoAlpha: 0,
          y: 16,
          duration: 0.55,
          stagger: 0.06
        },
        "-=0.55"
      );
    }
  });

  if (!isMobile) {
    ScrollTrigger.create({
      trigger: ".site-main",
      start: "top top",
      end: "bottom bottom",
      snap: {
        snapTo: 1 / (document.querySelectorAll(".section").length - 1),
        duration: { min: 0.65, max: 1.05 },
        delay: 0.08,
        ease: "power3.inOut"
      }
    });
  }

  document.querySelectorAll(".button, .project-card").forEach((element) => {
    element.addEventListener("pointermove", (event) => {
      if (isMobile) return;

      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;

      gsap.to(element, {
        x: x * 0.035,
        y: y * 0.035,
        duration: 0.45,
        ease: "power3.out"
      });
    });

    element.addEventListener("pointerleave", () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.55,
        ease: "elastic.out(1, 0.45)"
      });
    });
  });
}