import { motion } from 'framer-motion';
import { FaChartArea, FaExternalLinkAlt } from 'react-icons/fa';

export default function LiveChart() {
  return (
    <section id="chart" className="section-padding relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-4">
            Live Chart
          </h2>
          <p className="text-text-secondary text-lg max-w-lg mx-auto">
            Track $MYSTERY price in real-time
          </p>
        </motion.div>

        {/* Chart Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-strong p-2 md:p-4"
        >
          {/* Placeholder chart area */}
          <div className="relative bg-mystery-dark rounded-2xl overflow-hidden min-h-[450px] flex items-center justify-center">
            {/* Grid lines decoration */}
            <div className="absolute inset-0 opacity-10">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={`h-${i}`}
                  className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent"
                  style={{ top: `${(i + 1) * 12}%` }}
                />
              ))}
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={`v-${i}`}
                  className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-neon-purple/30 to-transparent"
                  style={{ left: `${(i + 1) * 8}%` }}
                />
              ))}
            </div>

            {/* Fake candlestick chart SVG */}
            <svg
              viewBox="0 0 800 300"
              className="w-full h-full absolute inset-0 p-6"
              preserveAspectRatio="none"
            >
              {/* Price line */}
              <defs>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#A855F7" />
                  <stop offset="50%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#22D3EE" />
                </linearGradient>
                <linearGradient id="fillGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#A855F7" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Area fill */}
              <path
                d="M0,250 Q50,240 100,200 T200,180 T300,120 T400,150 T500,90 T600,100 T700,60 T800,40 L800,300 L0,300 Z"
                fill="url(#fillGrad)"
              />
              {/* Line */}
              <path
                d="M0,250 Q50,240 100,200 T200,180 T300,120 T400,150 T500,90 T600,100 T700,60 T800,40"
                fill="none"
                stroke="url(#lineGrad)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              {/* Glow on the tip */}
              <circle cx="800" cy="40" r="5" fill="#22D3EE">
                <animate
                  attributeName="r"
                  values="5;8;5"
                  dur="2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="1;0.5;1"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>

            {/* Content Overlay */}
            <div className="relative z-10 text-center">
              <FaChartArea className="text-6xl text-neon-purple/30 mx-auto mb-4" />
              <p className="text-text-secondary text-sm mb-2">
                DexScreener / DEXTools Live Chart
              </p>
              <p className="text-text-muted text-xs">
                Embed your chart iframe here — or use the link below
              </p>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap justify-center gap-4 mt-6 mb-2">
            <a
              href="#"
              className="flex items-center gap-2 text-neon-purple hover:text-neon-purple-light transition-colors text-sm font-medium"
            >
              <FaExternalLinkAlt className="text-xs" />
              View on DexScreener
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-electric-blue hover:text-electric-cyan transition-colors text-sm font-medium"
            >
              <FaExternalLinkAlt className="text-xs" />
              View on DEXTools
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
