import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#adefd1", // Set particles color 
          },
          shape: {
            type: "circle", // Set particle shape to circle
          },
          size: {
            value: 4, // Increase particle size
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: false, // Disable line linking the particles
          },
          move: {
            enable: true,
            speed: 2, // Increase particle movement speed
            direction: "none",
            random: true,
            straight: false,
            out_mode: "bounce",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse", // Change interaction mode to repulse on hover
            },
          },
          modes: {
            repulse: {
              distance: 200, // Increase repulsion distance
              duration: 0.4,
            },
          },
        },
      }}
    />
  );
}

export default Particle;
