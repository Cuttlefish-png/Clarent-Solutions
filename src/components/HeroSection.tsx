import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Strength and power particles (lion theme)
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      type: 'strength' | 'power';
    }> = [];

    const createParticle = () => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 4 + 1,
      opacity: Math.random() * 0.4 + 0.1,
      type: Math.random() > 0.7 ? 'power' : 'strength' as 'strength' | 'power',
    });

    // Initialize particles
    for (let i = 0; i < 40; i++) {
      particles.push(createParticle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.offsetWidth;
        if (particle.x > canvas.offsetWidth) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.offsetHeight;
        if (particle.y > canvas.offsetHeight) particle.y = 0;

        ctx.beginPath();
        if (particle.type === 'power') {
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity * 0.3})`;
          ctx.fill();
          ctx.strokeStyle = `rgba(31, 194, 215, ${particle.opacity * 0.5})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        } else {
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(31, 194, 215, ${particle.opacity})`;
          ctx.fill();
        }

        // Connect nearby strength particles
        if (particle.type === 'strength') {
          particles.slice(index + 1).forEach(otherParticle => {
            if (otherParticle.type === 'strength') {
              const dx = particle.x - otherParticle.x;
              const dy = particle.y - otherParticle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < 80) {
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.strokeStyle = `rgba(31, 194, 215, ${0.1 * (1 - distance / 80)})`;
                ctx.lineWidth = 1;
                ctx.stroke();
              }
            }
          });
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-navy-800 overflow-hidden">
      {/* Power Wave Pattern */}
      <div className="absolute inset-0">
        <svg
          className="absolute bottom-0 left-0 w-full h-64"
          viewBox="0 0 1200 320"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="rgba(31, 194, 215, 0.1)"
            animate={{
              d: [
                "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,154.7C672,149,768,171,864,181.3C960,192,1056,192,1152,170.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.path
            d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,170.7C672,160,768,160,864,165.3C960,171,1056,181,1152,181.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="rgba(31, 194, 215, 0.05)"
            animate={{
              d: [
                "M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,170.7C672,160,768,160,864,165.3C960,171,1056,181,1152,181.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,224L48,229.3C96,235,192,245,288,240C384,235,480,213,576,202.7C672,192,768,192,864,197.3C960,203,1056,213,1152,213.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,170.7C672,160,768,160,864,165.3C960,171,1056,181,1152,181.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center px-4 py-2 bg-teal-500/20 rounded-full text-teal-300 text-sm font-inter font-medium"
              >
                <span className="w-2 h-2 bg-teal-400 rounded-full mr-2 animate-pulse"></span>
                Enterprise Revenue Optimization
              </motion.div>

              <h1 className="font-playfair font-bold text-5xl lg:text-7xl text-white leading-tight">
                Revenue Engineering
                <span className="block text-teal-400">for Scaling</span>
                <span className="block">Enterprises</span>
              </h1>

              <p className="text-xl text-gray-300 font-inter leading-relaxed max-w-2xl">
                Transform your revenue operations with data-driven methodologies. 
                We architect scalable systems that deliver measurable growth for 
                enterprise organizations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-inter font-semibold rounded-lg transition-colors duration-200 group"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Logo with Thematic Animations */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center h-96 lg:h-[500px]"
          >
            {/* Background Canvas for Power Effects */}
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full rounded-2xl"
            />
            
            {/* Main Logo - Powerful Motion */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="relative z-20 flex items-center justify-center"
            >
              <motion.img
                src="/Typhon Group.png"
                alt="Typhon Group"
                className="w-80 h-80 lg:w-96 lg:h-96 object-contain drop-shadow-2xl"
                animate={{ 
                  y: [-8, 8, -8],
                  scale: [1, 1.02, 1]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            
            {/* Power Lines - Lion Strength Theme */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`power-${i}`}
                className="absolute w-16 h-0.5 bg-gradient-to-r from-transparent via-teal-400/30 to-transparent"
                style={{
                  top: `${20 + i * 12}%`,
                  right: `${10 + i * 5}%`,
                }}
                animate={{
                  x: [-20, 20, -20],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3
                }}
              />
            ))}

            {/* Floating Strength Elements */}
            <motion.div
              animate={{ 
                y: [-15, 15, -15],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute top-8 right-8 w-16 h-16 bg-teal-400/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-teal-400/30"
            >
              <div className="w-8 h-8 bg-teal-400/60 rounded-full animate-pulse"></div>
            </motion.div>

            <motion.div
              animate={{ 
                y: [15, -15, 15],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 7, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute bottom-8 left-8 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/30"
            >
              <div className="w-6 h-6 bg-white/60 rounded-sm animate-pulse"></div>
            </motion.div>

            {/* Power Circle Animation */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-teal-400/10 rounded-full"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-teal-400/40 rounded-full"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-teal-400/30 rounded-full"></div>
              <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-teal-400/30 rounded-full"></div>
              <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-teal-400/30 rounded-full"></div>
            </motion.div>

            {/* Strength Path Dots */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`dot-${i}`}
                className="absolute w-2 h-2 bg-teal-400/40 rounded-full"
                style={{
                  left: `${30 + Math.cos((i * 45) * Math.PI / 180) * 120}px`,
                  top: `${50 + Math.sin((i * 45) * Math.PI / 180) * 120}%`,
                }}
                animate={{
                  scale: [0.5, 1.2, 0.5],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.25
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;