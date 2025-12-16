import React from "react";

export default function SectionWrapper({ children, className = "", id = "" }) {
  return (
    <section
      id={id}
      className={`w-full min-h-screen py-20 px-6 md:px-16 relative overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto relative z-10">{children}</div>
    </section>
  );
}
