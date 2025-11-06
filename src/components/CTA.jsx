import React from 'react';
import { Rocket } from 'lucide-react';

export default function CTA() {
  return (
    <section id="get-started" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-[1]" aria-hidden>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-indigo-500/10" />
      </div>

      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-purple-200/40 bg-white/80 p-10 backdrop-blur-lg shadow-xl">
          <div className="grid items-center gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
                Start creating with Free Website AI
              </h3>
              <p className="mt-2 text-gray-600">
                No credit card required. Build something beautiful in minutes.
              </p>
            </div>
            <div className="flex md:justify-end">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 px-6 py-3 font-medium text-white shadow-lg shadow-purple-500/25 transition hover:opacity-90"
              >
                <Rocket size={18} />
                Create my site
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
