import React, { useEffect, useRef } from "react";

function StarryBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const stars = [];
    const numStars = 200; // Nombre d'étoiles
    const maxDepth = 1000; // Profondeur maximale (simulée)

    // Crée les étoiles
    for (let i = 0; i < numStars; i++) {
      stars.push({
        angle: Math.random() * Math.PI * 2, // Position angulaire (en radians)
        radius: Math.random() * (canvas.width / 2), // Distance au centre
        z: Math.random() * maxDepth, // Profondeur
        size: Math.random() * 2, // Taille de l'étoile
        speed: 0.002 + Math.random() * 0.004, // Vitesse de rotation
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dessine les étoiles
      stars.forEach((star) => {
        // Position en 3D projetée sur un plan 2D
        const perspective = 1000 / (1000 - star.z);
        const x = centerX + star.radius * Math.cos(star.angle) * perspective;
        const y = centerY + star.radius * Math.sin(star.angle) * perspective;
        const size = star.size * perspective;

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
      });
    }

    function animate() {
      stars.forEach((star) => {
        star.angle += star.speed; // Rotation
        star.z -= 3; // Les étoiles se rapprochent de nous

        // Réinitialisation des étoiles lorsqu'elles sortent de l'écran
        if (star.z < 1) {
          star.z = maxDepth;
          star.radius = Math.random() * (canvas.width / 2);
          star.angle = Math.random() * Math.PI * 2;
        }
      });

      draw();
      requestAnimationFrame(animate);
    }

    animate();

    // Redimensionne le canvas lorsqu'on ajuste la taille de la fenêtre
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        backgroundColor: "black",
      }}
    />
  );
}

export default StarryBackground;
