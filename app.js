gsap.registerPlugin(ScrollTrigger);

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const desktopQuery = "(min-width: 768px)";
const mobileQuery = "(max-width: 767px)";

ScrollTrigger.config({
  ignoreMobileResize: true
});

if (reduceMotion) {
  document.documentElement.classList.add("reduced-motion");
} else {
  let lenis;

  function initSmoothScroll() {
    const isMobile = window.matchMedia(mobileQuery).matches;

    lenis = new Lenis({
      duration: isMobile ? 0.78 : 1.12,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }

  function initAnchorLinks() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        const selector = link.getAttribute("href");
        const target = document.querySelector(selector);

        if (!target || !lenis) return;

        event.preventDefault();
        lenis.scrollTo(target, {
          offset: 0,
          duration: 1.05
        });
      });
    });
  }

  function heroLoadAnimation() {
    const heroTitle = document.querySelector(".hero-content h1");
    const heroItems = [
      ".site-header",
      ".hero-panel",
      ".hero-content .eyebrow-line",
      ".hero-content .eyebrow",
      ".hero-content h1",
      ".hero-subtitle",
      ".social-rail a",
      ".scroll-rail",
      ".scroll-cue"
    ];

    gsap.set(heroItems, { willChange: "transform, opacity" });
    gsap.set(heroTitle, { clipPath: "inset(100% 0% 0% 0%)" });

    const tl = gsap.timeline({
      defaults: { ease: "expo.out" },
      onComplete: () => {
        gsap.set(heroItems, { clearProps: "willChange" });
        gsap.set(heroTitle, { clearProps: "clipPath" });
      }
    });

    tl.from(".hero-panel", {
      autoAlpha: 0,
      scale: 1.018,
      duration: 0.9
    })
      .from(
        ".site-header",
        {
          autoAlpha: 0,
          y: -18,
          duration: 0.82
        },
        0.08
      )
      .from(
        ".hero-content .eyebrow-line",
        {
          scaleX: 0,
          transformOrigin: "center center",
          duration: 0.72
        },
        0.25
      )
      .from(
        ".hero-content .eyebrow",
        {
          autoAlpha: 0,
          y: 18,
          duration: 0.72
        },
        0.34
      )
      .to(
        heroTitle,
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.05
        },
        0.48
      )
      .from(
        heroTitle,
        {
          autoAlpha: 0,
          y: 58,
          duration: 1.05
        },
        0.48
      )
      .from(
        ".hero-subtitle",
        {
          autoAlpha: 0,
          y: 22,
          duration: 0.72,
          stagger: 0.08
        },
        0.9
      )
      .from(
        [".social-rail a", ".scroll-rail", ".scroll-cue"],
        {
          autoAlpha: 0,
          y: 18,
          duration: 0.7,
          stagger: 0.08
        },
        1.08
      );

    gsap.to(".scroll-cue", {
      y: 8,
      duration: 1.15,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }

  function sectionRevealAnimations() {
    const sections = gsap.utils.toArray(".section:not(.section--hero)");

    sections.forEach((section) => {
      const headingItems = section.querySelectorAll(
        ".section-heading .eyebrow, .section-heading h2, .section-heading p, .contact-copy .eyebrow, .contact-copy h2, .contact-copy > p"
      );
      const cards = section.querySelectorAll(".project-card");
      const visuals = section.querySelectorAll(".project-card__visual");
      const button = section.querySelector(".button--outline");
      const contactItems = section.querySelectorAll(".contact-list > *, .social-row a");
      const form = section.querySelector(".contact-form");
      const formFields = form ? form.querySelectorAll("input, textarea, button") : [];

      const animatedItems = [...headingItems, ...cards, ...visuals, button, ...contactItems, form, ...formFields].filter(Boolean);
      gsap.set(animatedItems, { willChange: "transform, opacity" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "bottom 35%",
          toggleActions: "play none none reverse"
        },
        defaults: { ease: "power4.out" },
        onComplete: () => gsap.set(animatedItems, { clearProps: "willChange" })
      });

      if (headingItems.length) {
        tl.from(headingItems, {
          autoAlpha: 0,
          y: 34,
          duration: 0.82,
          stagger: 0.08
        });
      }

      if (cards.length) {
        tl.from(
          cards,
          {
            autoAlpha: 0,
            y: 72,
            scale: 0.965,
            duration: 0.95,
            stagger: 0.12
          },
          "-=0.28"
        );
      }

      if (visuals.length) {
        tl.from(
          visuals,
          {
            scale: 1.14,
            duration: 1.25,
            stagger: 0.1
          },
          "-=0.96"
        );
      }

      if (button) {
        tl.from(
          button,
          {
            autoAlpha: 0,
            y: 24,
            duration: 0.7
          },
          "-=0.48"
        );
      }

      if (contactItems.length) {
        tl.from(
          contactItems,
          {
            autoAlpha: 0,
            y: 24,
            duration: 0.65,
            stagger: 0.08
          },
          "-=0.28"
        );
      }

      if (form) {
        tl.from(
          form,
          {
            autoAlpha: 0,
            x: window.matchMedia(desktopQuery).matches ? 54 : 0,
            y: window.matchMedia(mobileQuery).matches ? 34 : 0,
            duration: 0.95
          },
          "-=0.72"
        ).from(
          formFields,
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
  }

  function subtlePanelDepth() {
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
  }

  function desktopScrollSnap() {
    const sections = gsap.utils.toArray(".section");

    ScrollTrigger.create({
      trigger: ".site-main",
      start: "top top",
      end: "bottom bottom",
      snap: {
        snapTo: 1 / (sections.length - 1),
        duration: { min: 0.7, max: 1.05 },
        delay: 0.06,
        ease: "power3.inOut"
      }
    });
  }

  function premiumHovers() {
    const buttons = gsap.utils.toArray(".button");
    const cards = gsap.utils.toArray(".project-card");

    buttons.forEach((button) => {
      const moveX = gsap.quickTo(button, "x", { duration: 0.42, ease: "power3.out" });
      const moveY = gsap.quickTo(button, "y", { duration: 0.42, ease: "power3.out" });

      button.addEventListener("pointermove", (event) => {
        const rect = button.getBoundingClientRect();
        moveX((event.clientX - rect.left - rect.width / 2) * 0.18);
        moveY((event.clientY - rect.top - rect.height / 2) * 0.28);
      });

      button.addEventListener("pointerleave", () => {
        moveX(0);
        moveY(0);
      });
    });

    cards.forEach((card) => {
      const moveX = gsap.quickTo(card, "x", { duration: 0.45, ease: "power3.out" });
      const moveY = gsap.quickTo(card, "y", { duration: 0.45, ease: "power3.out" });
      const rotateX = gsap.quickTo(card, "rotationX", { duration: 0.45, ease: "power3.out" });
      const rotateY = gsap.quickTo(card, "rotationY", { duration: 0.45, ease: "power3.out" });

      card.addEventListener("pointermove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;

        moveX(x * 0.025);
        moveY(y * 0.025);
        rotateX(y * -0.018);
        rotateY(x * 0.018);
      });

      card.addEventListener("pointerleave", () => {
        moveX(0);
        moveY(0);
        rotateX(0);
        rotateY(0);
      });
    });
  }

  function optimizeAfterLoad() {
    window.addEventListener("load", () => {
      ScrollTrigger.refresh();
    });

    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => ScrollTrigger.refresh(), 180);
    });
  }

  initSmoothScroll();
  initAnchorLinks();
  heroLoadAnimation();
  sectionRevealAnimations();
  subtlePanelDepth();
  optimizeAfterLoad();

  gsap.matchMedia().add(desktopQuery, () => {
    desktopScrollSnap();
    premiumHovers();
  });
}
