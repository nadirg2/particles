particlesJS(
  "particles-js",
  {
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          value_area: 600,
        },
      },
      color: {
        value: "#fc1fff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#fc1fff",
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 8,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 80,
          size_min: 2,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 200,
        color: "#feabff",
        opacity: 0.3,
        width: 1,
      },
      move: {
        enable: true,
        speed: 7,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: false,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 800,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 800,
          size: 80,
          duration: 2,
          opacity: 0.8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 8,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  }
);
