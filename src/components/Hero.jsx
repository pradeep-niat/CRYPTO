import { motion } from 'framer-motion';

const tags = [
  'No Taxes, No Bullshit',
  'Community Driven',
  '10,000+ Holders',
  'Make It or Break It',
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-12 px-4"
    >
      {/* Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-neon-purple/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-electric-blue/8 blur-[120px] pointer-events-none" />

      {/* Floating Coin */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 mb-10"
      >
        <div className="animate-float relative flex justify-center items-center">
          <div className="absolute inset-0 rounded-full bg-neon-purple/20 blur-[80px] scale-150" />
          <img
            src="/coin.png"
            alt="Mystery Coin"
            className="w-48 h-48 md:w-64 md:h-64 lg:w-[340px] lg:h-[340px] xl:w-[400px] xl:h-[400px] object-contain relative z-10 drop-shadow-[0_0_80px_rgba(168,85,247,0.5)]"
          />
        </div>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="font-heading font-black text-6xl md:text-8xl lg:text-9xl text-center leading-[1.1] tracking-tighter z-10 mb-6"
      >
        <span className="text-white">Chance. For </span>
        <span className="gradient-text-purple px-2">Everyone.</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-text-secondary text-lg md:text-xl lg:text-2xl text-center max-w-2xl mx-auto z-10 mb-12 leading-relaxed font-medium"
      >
        Each coin is a ticket for a raffle. One lucky investor wins
        all the money invested in the Mystery project.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-6 z-10 mb-16 w-full px-4"
      >
        <button className="btn-primary w-full sm:w-auto text-lg py-4 px-10 flex items-center justify-center gap-3">
          Buy $MYSTERY
          <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
        </button>
        <button className="btn-secondary w-full sm:w-auto text-lg py-4 px-10">
          Learn More
        </button>
      </motion.div>

      {/* Tags */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="flex flex-wrap items-center justify-center gap-3 z-10"
      >
        {tags.map((tag) => (
          <span
            key={tag}
            className="glass text-xs md:text-sm text-text-secondary px-4 py-2 rounded-full border border-glass-border hover:border-neon-purple/30 hover:text-white transition-all duration-300 cursor-default"
          >
            {tag}
          </span>
        ))}
      </motion.div>

      {/* Starfield */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 3 + 2}s`,
          }}
        />
      ))}
    </section>
  );
}
