import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Mic, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Soft radial glow background (non-interactive) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-gradient-to-br from-purple-500/30 via-blue-400/20 to-orange-400/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur">
            <Sparkles size={16} className="text-purple-300" />
            <span>Introducing Free Website AI</span>
          </div>
          <h1 className="font-extrabold tracking-tight text-4xl md:text-6xl leading-tight">
            Build a stunning website with an AI voice agent
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/70">
            Speak your idea. Watch a futuristic AI aura craft pages, copy, and sections in seconds — free to start.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 px-6 py-3 font-medium shadow-lg shadow-purple-500/25 transition hover:opacity-90"
            >
              <Rocket size={18} />
              Get started free
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-medium text-white/80 hover:bg-white/10"
            >
              <Mic size={18} />
              Try voice demo
            </a>
          </div>
        </div>
      </div>

      <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh]">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />

        {/* Gradient highlight overlay that doesn't block Spline */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-purple-500/20 via-blue-400/20 to-orange-400/20 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
