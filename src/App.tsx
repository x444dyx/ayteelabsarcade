import { ReactNode } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const GameCard = ({ title, description, url, motif }: { title: string, description: string, url: string, motif: ReactNode }) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -10, borderColor: "rgba(255, 255, 255, 0.2)", backgroundColor: "#0f0f0f" }}
    className="group flex flex-col h-full p-10 bg-[#0a0a0a] border border-white/10 rounded-[32px] transition-all duration-500 no-underline text-inherit"
  >
    <div className="h-40 w-full mb-10 flex items-center justify-center relative">
      {motif}
    </div>
    <h3 className="text-3xl font-medium tracking-tight mb-3">{title}</h3>
    <p className="text-neutral-400 text-lg mb-8 flex-grow leading-relaxed">
      {description}
    </p>
    <div className="flex items-center text-sm font-semibold uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
      Play Now
      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
    </div>
  </motion.a>
);

const VolumeHeading = ({ volume, subtitle }: { volume: string, subtitle: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-12"
  >
    <div className="flex items-center gap-4 mb-3">
      <div className="h-px flex-1 bg-white/10" />
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/30">{volume}</span>
      <div className="h-px flex-1 bg-white/10" />
    </div>
    <p className="text-center text-white/20 text-sm tracking-widest uppercase">{subtitle}</p>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-white/10">

      {/* HERO */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-radial from-white/[0.03] to-transparent pointer-events-none" />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-8xl font-medium tracking-tighter leading-[1.1] mb-6"
        >
          Minimalist<br />Interactions.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl md:text-2xl text-neutral-400 max-w-xl mb-12 leading-relaxed"
        >
          A curated collection of addictive, elegant browser games designed for the modern web. Instant play, infinite focus.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#games" className="inline-flex items-center justify-center px-10 py-4 bg-white text-black rounded-full font-medium transition-all hover:bg-transparent hover:text-white border border-white hover:-translate-y-1">
            Explore Games
          </a>
        </motion.div>
      </section>

      {/* GAMES */}
      <section id="games" className="px-6 md:px-12 max-w-7xl mx-auto py-32 space-y-24">

        {/* VOLUME 1 */}
        <div>
          <VolumeHeading volume="Volume I" subtitle="The Originals" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <GameCard
              title="Pulse"
              description="Find your rhythm in a world of expanding circles. A test of timing and focus."
              url="https://pulse.ayteelabs.com"
              motif={
                <div className="relative w-16 h-16 border border-white/20 rounded-full animate-pulse-ring">
                  <div className="absolute inset-0 m-auto w-10 h-10 border border-white/40 rounded-full animate-pulse-ring [animation-delay:0.5s]" />
                </div>
              }
            />
            <GameCard
              title="Sync"
              description="Align the frequencies. A meditative puzzle experience about finding perfect harmony."
              url="https://sync.ayteelabs.com"
              motif={
                <div className="flex gap-3 items-end h-16">
                  {[0, 0.2, 0.4, 0.6, 0.8].map((delay, i) => (
                    <div
                      key={delay}
                      className="w-0.5 bg-white/30 animate-sync-move rounded-full"
                      style={{ animationDelay: `${delay}s`, height: `${20 + i * 8}px` }}
                    />
                  ))}
                </div>
              }
            />
            <GameCard
              title="Fold"
              description="Navigate geometric complexities. Fold space and time to reach the objective."
              url="https://fold.ayteelabs.com"
              motif={
                <div className="w-16 h-16 bg-white/5 border border-white/20 rotate-45 relative">
                  <div className="absolute -top-px -left-px w-8 h-8 bg-white/10 border-r border-b border-white/30 animate-fold-flip" />
                </div>
              }
            />
          </div>
        </div>

        {/* VOLUME 2 */}
        <div>
          <VolumeHeading volume="Volume II" subtitle="New Challenges" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <GameCard
              title="Pair"
              description="Find the only matching pair before time runs out. Every level, one unique match hidden in plain sight."
              url="https://pair.ayteelabs.com"
              motif={
                <div className="flex gap-5 items-center">
                  {[
                    <svg key="a" viewBox="0 0 100 100" className="w-10 h-10 text-white/40" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="50" cy="50" r="35" /></svg>,
                    <svg key="b" viewBox="0 0 100 100" className="w-10 h-10 text-white/80 animate-pair-pulse" fill="none" stroke="currentColor" strokeWidth="2"><rect x="20" y="20" width="60" height="60" /></svg>,
                    <svg key="c" viewBox="0 0 100 100" className="w-10 h-10 text-white/80 animate-pair-pulse [animation-delay:0.15s]" fill="none" stroke="currentColor" strokeWidth="2"><rect x="20" y="20" width="60" height="60" /></svg>,
                    <svg key="d" viewBox="0 0 100 100" className="w-10 h-10 text-white/40" fill="none" stroke="currentColor" strokeWidth="2"><path d="M50 15 L85 80 L15 80 Z" /></svg>,
                  ]}
                </div>
              }
            />
            <GameCard
              title="Recall"
              description="Watch the sequence. Remember it. Recreate it. A test of visual memory under pressure."
              url="https://recall.ayteelabs.com"
              motif={
                <div className="flex gap-4 items-center">
                  {[
                    { shape: <circle cx="50" cy="50" r="35" />, delay: '0s', opacity: 'text-white/80' },
                    { shape: <path d="M50 15 L85 80 L15 80 Z" />, delay: '0.3s', opacity: 'text-white/50' },
                    { shape: <rect x="20" y="20" width="60" height="60" />, delay: '0.6s', opacity: 'text-white/80' },
                  ].map((item, i) => (
                    <svg key={i} viewBox="0 0 100 100" className={`w-10 h-10 ${item.opacity} animate-recall-flash`} style={{ animationDelay: item.delay }} fill="none" stroke="currentColor" strokeWidth="2">
                      {item.shape}
                    </svg>
                  ))}
                </div>
              }
            />
            <GameCard
              title="Adapt"
              description="The rules keep changing. Tap the right shape — but only when the rule says so. Stay sharp or fall behind."
              url="https://adapt.ayteelabs.com"
              motif={
                <div className="relative flex items-center justify-center w-24 h-16">
                  <svg viewBox="0 0 100 100" className="w-14 h-14 text-white/70 animate-adapt-morph" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="50" cy="50" r="35" />
                  </svg>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.3em] text-white/20 whitespace-nowrap animate-adapt-rule">
                    tap if circle
                  </div>
                </div>
              }
            />
          </div>
        </div>

        {/* VOLUME 3 */}
        <div>
          <VolumeHeading volume="Volume III" subtitle="In Motion" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="hidden lg:block" />
            <GameCard
              title="Flow"
              description="Navigate an ever-growing trail through obstacles. Move fluidly, grow endlessly, don't cross your own path."
              url="https://flow.ayteelabs.com"
              motif={
                <div className="relative w-full h-16 overflow-hidden flex items-center justify-center">
                  <svg viewBox="0 0 200 60" className="w-48 h-12" fill="none">
                    <path
                      d="M10 40 C 40 40, 40 20, 70 20 C 100 20, 100 40, 130 40 C 160 40, 160 20, 190 20"
                      stroke="url(#flowgrad)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="animate-flow-draw"
                    />
                    <circle cx="190" cy="20" r="4" fill="white" className="animate-flow-dot" />
                    <defs>
                      <linearGradient id="flowgrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="white" stopOpacity="0.05" />
                        <stop offset="100%" stopColor="white" stopOpacity="0.8" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              }
            />
            <div className="hidden lg:block" />
          </div>
        </div>

        {/* VOLUME 4 */}
        <div>
          <VolumeHeading volume="Volume IV" subtitle="Control Systems" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {['Shift', 'Split', 'Stack'].map((name) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col h-full p-10 bg-[#0a0a0a] border border-white/5 rounded-[32px] border-dashed items-center justify-center min-h-[300px] gap-3"
              >
                <span className="text-white/20 text-2xl font-medium tracking-tight">{name}</span>
                <span className="text-white/10 text-xs uppercase tracking-[0.3em]">Coming Soon</span>
              </motion.div>
            ))}
          </div>
        </div>

      </section>

      {/* PHILOSOPHY */}
      <section className="border-t border-white/10 py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-medium tracking-tight mb-8"
          >
            The Art of Less.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-neutral-400 mb-12 leading-relaxed"
          >
            At AyTee Labs, we believe games should be as refined as the tools we use every day. No clutter, no noise—just pure mechanics wrapped in a premium aesthetic. Our collection is built for those who appreciate the beauty of simplicity.
          </motion.p>
          <div className="text-xs font-semibold tracking-[0.2em] uppercase opacity-40">
            AyTee Labs
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-16 text-center">
        <span className="text-sm font-medium tracking-widest uppercase opacity-50">
          Created by{' '}
          <a
            href="https://ayteelabs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 transition-opacity"
          >
            AyTee Labs
          </a>
        </span>
      </footer>
    </div>
  );
}
