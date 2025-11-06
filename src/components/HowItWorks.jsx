import React from 'react';
import { Mic, Edit3, Share2 } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="how" className="relative bg-gradient-to-b from-white to-purple-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">How it works</h2>
          <p className="mt-3 text-gray-600">Three simple steps to your AI-crafted website.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600/10 text-purple-600">
              <Mic size={18} />
            </div>
            <h3 className="text-lg font-semibold">Talk to the AI</h3>
            <p className="mt-2 text-gray-600">Share your idea, vibe, and goals — voice or text.</p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600">
              <Edit3 size={18} />
            </div>
            <h3 className="text-lg font-semibold">Iterate instantly</h3>
            <p className="mt-2 text-gray-600">Ask for changes. Colors, tone, sections — it updates live.</p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-600/10 text-green-600">
              <Share2 size={18} />
            </div>
            <h3 className="text-lg font-semibold">Share your link</h3>
            <p className="mt-2 text-gray-600">Publish and share — free to start, upgrade anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
