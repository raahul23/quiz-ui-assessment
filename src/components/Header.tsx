import React from "react";

const Header: React.FC = () => {
  return (
    <header className="py-4 bg-white shadow-sm">
      <div className="container-desktop mx-auto flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <a href="/" className="flex items-center gap-3" aria-label="Homepage">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
              <rect width="24" height="24" rx="6" fill="#0B61FF" />
              <path d="M6 12h12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="text-xl font-bold">BrandName</span>
          </a>
        </div>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-sm">
            <li>
              <a href="#features" className="hover:underline focus-visible:outline-none">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:underline focus-visible:outline-none">
                Pricing
              </a>
            </li>
            <li>
              <a href="#docs" className="hover:underline focus-visible:outline-none">
                Docs
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a href="#login" className="text-sm text-muted hover:underline focus-visible:outline-none">
            Log in
          </a>
          <a
            href="#signup"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium shadow-sm hover:brightness-105 focus-visible:outline-none"
            role="button"
          >
            Sign up
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
