import { motion } from 'framer-motion';
import { FaCoins, FaShoppingCart, FaTags, FaFire } from 'react-icons/fa';

const stats = [
  {
    icon: <FaCoins className="text-2xl" />,
    label: 'Total Supply',
    value: '1,000,000,000',
    sub: '$MYSTERY',
    color: 'from-neon-purple to-electric-blue',
  },
  {
    icon: <FaShoppingCart className="text-2xl" />,
    label: 'Buy Tax',
    value: '0%',
    sub: 'No buy tax',
    color: 'from-green-400 to-emerald-500',
  },
  {
    icon: <FaTags className="text-2xl" />,
    label: 'Sell Tax',
    value: '0%',
    sub: 'No sell tax',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    icon: <FaFire className="text-2xl" />,
    label: 'Liquidity',
    value: 'BURNED',
    sub: '🔥 Forever',
    color: 'from-orange-400 to-red-500',
  },
];

const distribution = [
  { label: 'Airdrop', pct: 20, color: '#A855F7' },
  { label: 'Community', pct: 30, color: '#3B82F6' },
  { label: 'Treasury', pct: 15, color: '#22D3EE' },
  { label: 'Liquidity', pct: 25, color: '#10B981' },
  { label: 'Team', pct: 10, color: '#F59E0B' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-4">
            Tokenomics
          </h2>
          <p className="text-text-secondary text-lg max-w-lg mx-auto">
            Fair launch, zero taxes, community-first distribution
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={cardVariants}
              className="glass-strong p-8 text-center group hover:-translate-y-2 hover:bg-white/[0.03] transition-all duration-500 cursor-default rounded-3xl relative overflow-hidden"
              style={{ '--tw-border-opacity': 0.1 }}
            >
              {/* Subtle background glow from the top */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                   style={{ backgroundImage: `linear-gradient(to bottom, #A855F7, transparent)` }} />

              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg relative z-10`}>
                {stat.icon}
              </div>
              <p className="text-text-muted text-sm mb-2 uppercase tracking-widest font-bold">
                {stat.label}
              </p>
              <p className="text-white font-heading font-black text-3xl md:text-4xl mb-2 tracking-tight">
                {stat.value}
              </p>
              <p className="text-text-secondary text-sm font-medium">{stat.sub}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Distribution Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-3xl"
        >
          <p className="text-white font-heading font-bold text-2xl mb-8 text-center">
            Token Distribution
          </p>
          <div className="w-full h-6 rounded-full overflow-hidden flex mb-8 bg-mystery-dark border border-glass-border shadow-inner">
            {distribution.map((d) => (
              <motion.div
                key={d.label}
                initial={{ width: 0 }}
                whileInView={{ width: `${d.pct}%` }}
                transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
                viewport={{ once: true }}
                style={{ backgroundColor: d.color, boxShadow: `0 0 10px ${d.color}80` }}
                className="h-full relative overflow-hidden group/bar"
              >
                {/* Shimmer effect inside bar */}
                <div className="absolute inset-0 w-[200%] opacity-30 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover/bar:translate-x-1/2 transition-transform duration-[2s] ease-in-out" />
              </motion.div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
            {distribution.map((d) => (
              <div key={d.label} className="flex items-center gap-3 glass px-4 py-2 rounded-full border border-white/5 hover:border-white/10 transition-colors">
                <div
                  className="w-3.5 h-3.5 rounded-full shadow-sm shadow-current"
                  style={{ backgroundColor: d.color, color: d.color }}
                />
                <span className="text-white font-medium text-sm">
                  {d.label} <span className="text-text-secondary ml-1">({d.pct}%)</span>
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
