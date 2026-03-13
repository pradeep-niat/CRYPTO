import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-text-secondary leading-relaxed"
        >
          Dive into{' '}
          <span className="text-white">$MYSTERY</span>, where every coin is a
          chance at something big. Each transaction fuels the jackpot, with one
          lucky holder winning it all. Empowered by{' '}
          <span className="text-neon-purple">community engagement</span>, shaped
          by enthusiasts like you. Join the adventure where{' '}
          <span className="text-white">chance meets crypto innovation</span>.
        </motion.p>
      </div>

      {/* Separator with coin */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex items-center justify-center mt-20"
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-neon-purple/20 blur-[40px] scale-150" />
          <img
            src="/coin.png"
            alt="Mystery Coin"
            className="w-32 h-32 animate-float-slow relative z-10 drop-shadow-[0_0_40px_rgba(168,85,247,0.3)]"
          />
          <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 text-right">
            <p className="text-white font-heading font-bold text-sm">Buy on DEX</p>
            <p className="text-text-muted text-xs">and claim it all</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
