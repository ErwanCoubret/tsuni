"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    };
    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  return (
    <div className="relative h-[calc(var(--vh)*100)] bg-gray-1 p-6 overflow-y-auto">
      <div className="flex flex-col h-full gap-3">
        <h1 className="text-xl font-bold text-green-4">Exercices</h1>
        <p className="text-xs text-gray-4">
          Découvrez des exercices pratiques pour vous aider à gérer le stress et l'anxiété. Ces exercices sont conçus pour être simples et efficaces, et ont été définis conjointement avec des professionnels de santé.
        </p>

        <div className="w-full p-3 bg-green-1 rounded-lg border-2 border-green-2 text-green-3">
          <p className="text-sm">
            Cette section est en construction.
          </p>
        </div>
      </div>
    </div>
  );
}
