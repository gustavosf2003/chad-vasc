import React from "react";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center h-20 border-t text-12 tracking-[-0.24px] opacity-50 px-4">
      <div className="flex items-center gap-4">
        <p>
          Amanda{" "}
          <span className="hidden mx-1 lg:inline-flex">de Oliveira </span>
          Vicente - CRM 91239178
        </p>
      </div>
    </footer>
  );
}
