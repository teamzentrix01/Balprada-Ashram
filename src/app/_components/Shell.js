"use client";

import Header from "./Header";

export function Shell({ children }) {
  return (
    <main className="site-shell">
      <Header />
      {children}
    </main>
  );
}

export default Shell;
