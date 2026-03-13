import { motion } from 'framer-motion';
import { FaWallet, FaExchangeAlt, FaHandHoldingUsd } from 'react-icons/fa';

const steps = [
  {
    step: '01',
    icon: <FaWallet className="text-4xl" />,
    title: 'Create a Wallet',
    description:
      'Download Phantom or any Solana-compatible wallet. Set it up securely and store your recovery phrase safely.',
    color: '#A855F7',
  },
  {
    step: '02',
    icon: <FaExchangeAlt className="text-4xl" />,
    title: 'Get SOL',
    description:
      'Buy SOL on a centralized exchange like Coinbase or Binance. Send the SOL to your Phantom wallet address.',
    color: '#3B82F6',
  },
  {
    step: '03',
    icon: <FaHandHoldingUsd className="text-4xl" />,
    title: 'Swap for $MYSTERY',
    description:
      'Connect your wallet to Raydium or Jupiter. Paste the $MYSTERY contract address and swap your SOL. HODL!',
    color: '#22D3EE',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export default function HowToBuy() {
  return (
    <section id="howtobuy" className="section-padding relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-purple/5 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-4">
            How to Buy?
          </h2>
          <p className="text-text-secondary text-lg max-w-lg mx-auto">
            Three simple steps to join the Mystery community
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative"
        >
          {/* Connector Line behind cards (Desktop) */}
          <div className="hidden md:block absolute top-[120px] left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-neon-purple via-electric-blue to-electric-cyan opacity-20 z-0" />

          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              variants={cardVariants}
              className="glass-strong p-8 lg:p-10 text-center group hover:-translate-y-2 hover:bg-white/[0.02] transition-all duration-500 relative overflow-hidden rounded-3xl z-10"
              style={{ '--tw-border-opacity': 0.1, borderColor: `${s.color}30` }}
            >
              {/* Step Number Watermark */}
              <span
                className="absolute -top-4 -right-2 font-heading font-black text-9xl opacity-5 group-hover:opacity-10 transition-opacity duration-500 select-none pointer-events-none"
                style={{ color: s.color }}
              >
                {s.step}
              </span>

              {/* Top glow on hover */}
              <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ color: s.color }} />

              {/* Icon */}
              <div
                className="w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 text-white group-hover:scale-110 group-hover:rotate-[5deg] transition-all duration-500 relative"
                style={{
                  background: `linear-gradient(135deg, ${s.color}20, ${s.color}40)`,
                  color: s.color,
                  boxShadow: `0 0 30px ${s.color}30, inset 0 0 20px ${s.color}20`,
                  border: `1px solid ${s.color}40`
                }}
              >
                {/* Inner animated ring */}
                <div className="absolute inset-[-4px] rounded-[1.4rem] border border-current opacity-0 group-hover:opacity-40 scale-90 group-hover:scale-100 transition-all duration-500" />
                {s.icon}
              </div>

              {/* Content */}
              <h3 className="font-heading font-extrabold text-2xl text-white mb-4 relative z-10">
                {s.title}
              </h3>
              <p className="text-text-secondary text-base leading-relaxed relative z-10 font-medium max-w-[280px] mx-auto">
                {s.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
