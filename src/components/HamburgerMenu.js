import React, { useState } from "react";
import { Menu, X, MapPin } from "lucide-react";

const HamburgerMenu = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const sections = [
    { title: "Home", href: "#hero" },
    { title: "Our Story", href: "#story" },
    { title: "Wedding Details", href: "#details" },
    { title: "Dress Code", href: "#dresscode" },
    { title: "Location", href: "#location" },
    { title: "RSVP", href: "#rsvp" },
    { title: "FAQ", href: "#faq" },
  ];

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setIsNavActive(true)}
        className="rounded-2xl bg-white/60 p-3 backdrop-blur-md shadow-lg shadow-[#676b57]/10"
      >
        <Menu size={22} className="text-[#676b57]" />
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-500 ${
          isNavActive ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsNavActive(false)}
      />

      {/* Menu */}
      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-[85%] max-w-sm transform bg-sage shadow-2xl transition-transform duration-500 ease-out ${
          isNavActive ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-1 flex-col px-8 py-8">
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.35em] text-[#8e8f7c]">
              Wedding Menu
            </p>

            <button
              onClick={() => setIsNavActive(false)}
              className="rounded-full bg-white/40 p-2 transition hover:bg-white/60"
            >
              <X className="text-[#676b57]" />
            </button>
          </div>

          <nav className="mt-12 flex flex-col">
            {sections.map((section, index) => (
              <a
                key={section.title}
                href={section.href}
                onClick={() => setIsNavActive(false)}
                style={{ transitionDelay: `${index * 80}ms` }}
                className={`border-b border-[#676b57]/10 py-5 text-xs uppercase tracking-[0.2em] text-[#676b57] transition-all duration-500 hover:text-[#D6C27A] ${
                  isNavActive
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
              >
                {section.title}
              </a>
            ))}
          </nav>

          <div className="mt-auto">
            <div className="mb-6 h-px w-full bg-[#D6C27A]" />

            <p className="text-xs uppercase tracking-[0.3em] text-[#8e8f7c]">
              07 July 2027
            </p>

            <div className="mt-2 flex items-center gap-2">
              <MapPin size={18} className="text-[#676b57]" />
              <p className="text-sm text-[#676b57]/70">Bourton Hall</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default HamburgerMenu;
