import React, { useEffect, useState } from 'react';
import { copy } from './data/copy';
import { HeroSection } from './components/HeroSection';
import { BrandSection } from './components/BrandSection';
import { PhilosophySection } from './components/PhilosophySection';
import { SigyeongjaSection } from './components/SigyeongjaSection';
import { RoleSection } from './components/RoleSection';
import { MntfreeSection } from './components/MntfreeSection';
import { CTASection } from './components/CTASection';

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-3xl w-full items-center justify-between px-6 py-4"
        aria-label="메인 네비게이션"
      >
        <a
          href="#hero"
          className="text-lg font-bold text-slate-800 hover:text-slate-600 transition-colors"
        >
          {copy.nav.brand}<span className="text-slate-500">.</span>
        </a>
        <ul className="flex flex-wrap items-center gap-6 text-sm">
          {copy.nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer
      className="border-t border-slate-200 bg-slate-50/80 py-12 px-6"
      role="contentinfo"
    >
      <div className="mx-auto max-w-3xl w-full text-center">
        <p className="text-sm text-slate-600">{copy.footer.copyright}</p>
        {copy.footer.subline && (
          <p className="mt-2 text-sm text-slate-500">{copy.footer.subline}</p>
        )}
      </div>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    const observerOptions = { threshold: 0.08 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, observerOptions);
    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach((el) => observer.observe(el));
    return () => sections.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-[#fafaf9] text-slate-900">
      <Nav />
      <main role="main">
        <HeroSection />
        <BrandSection />
        <PhilosophySection />
        <SigyeongjaSection />
        <RoleSection />
        <MntfreeSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
