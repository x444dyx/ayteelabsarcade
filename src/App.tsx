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

export default function App() {
  return (
    <div className="min-h-screen selection:bg-white/10">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        {/* Subtle Ambient Glow */}
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

      {/* GAMES GRID */}
      <section id="games" className="px-6 md:px-12 max-w-7xl mx-auto py-32">
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
              <div className="flex gap-3">
                {[0, 0.2, 0.4].map((delay) => (
                  <div 
                    key={delay}
                    className="w-0.5 h-10 bg-white/20 animate-sync-move"
                    style={{ animationDelay: `${delay}s` }}
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
      </section>

      {/* PHILOSOPHY SECTION */}
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
