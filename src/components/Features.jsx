import React from 'react';
import { Wand2, Headphones, Palette, Timer } from 'lucide-react';

const features = [
  {
    icon: Wand2,
    title: 'Generate pages with prompts',
    desc: 'Describe your idea. Instantly turn it into sections, copy, and layouts tailored to your brand.',
  },
  {
    icon: Headphones,
    title: 'Voice-first workflow',
    desc: 'Speak to your AI. It listens, understands context, and updates your site live.',
  },
  {
    icon: Palette,
    title: 'Beautiful by default',
    desc: 'Modern typography, gradients, and components that feel premium and polished.',
  },
  {
    icon: Timer,
    title: 'Launch in minutes',
    desc: 'Go from idea to live link fast. Share your concept without waiting on design/dev.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Everything you need to ship fast
          </h2>
          <p className="mt-3 text-gray-600">
            A focused toolkit that helps you go from blank canvas to beautiful, working site.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200/70 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-indigo-500/10 text-purple-600">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
