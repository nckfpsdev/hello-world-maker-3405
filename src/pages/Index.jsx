import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Layers, Activity } from 'lucide-react';

export default function Index() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-zinc-100 p-6 sm:p-12 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        whileHover={{
          y: -4,
          boxShadow: '0 28px 70px -15px rgba(0, 0, 0, 0.85), 0 0 32px -4px rgba(244, 63, 94, 0.22), 0 1px 0 0 rgba(255, 255, 255, 0.14) inset',
          borderColor: 'rgba(244, 63, 94, 0.35)'
        }}
        transition={{ type: 'spring', stiffness: 360, damping: 26 }}
        className="w-full max-w-2xl bg-zinc-900/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.75)] relative overflow-hidden"
      >
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

        <div className="flex items-center justify-between pb-6 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-b from-rose-500/20 to-rose-700/20 border border-rose-500/40 flex items-center justify-center text-rose-400 shadow-[0_4px_16px_rgba(244,63,94,0.25)]">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold tracking-tight text-white">nckfpsdev/hello-world-maker-3405</h1>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-rose-500/15 text-rose-300 border border-rose-500/30">
                  gpt-4o • high
                </span>
              </div>
              <p className="text-xs text-zinc-400">Sincronizado diretamente com a Lovable</p>
            </div>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Online</span>
          </span>
        </div>

        <div className="my-6 relative z-10">
          <p className="text-sm text-zinc-300 leading-relaxed">
            Componente gerado via <strong>nck dev — Red Edition</strong> conectado diretamente ao ChatGPT Web com raciocínio <em>high</em>. Design com superfícies de vidro líquido, acentuação rubi e microinterações fluidas.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3.5 my-6 relative z-10">
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
            <div className="text-xs text-zinc-400">Projeto Destino</div>
            <div className="text-sm font-bold text-white font-mono mt-1 truncate">nckfpsdev/hello-world-maker-3405</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
            <div className="text-xs text-zinc-400">Modo de Pensar</div>
            <div className="text-sm font-bold text-rose-400 capitalize mt-1">high</div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/10 relative z-10">
          <span className="text-xs text-zinc-500">Desenvolvido com padrão Apple UI</span>
          <button className="py-2.5 px-5 rounded-xl bg-gradient-to-b from-rose-500 to-rose-700 hover:from-rose-400 hover:to-rose-600 text-white font-semibold text-xs transition-all shadow-[0_4px_16px_rgba(244,63,94,0.35)] flex items-center gap-2">
            <span>Explorar Aplicação</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}