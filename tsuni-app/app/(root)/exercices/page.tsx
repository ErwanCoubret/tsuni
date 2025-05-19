"use client";

import Link from "next/link";
import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaFeatherPointed } from "react-icons/fa6";

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

        <div className="flex justify-between gap-1 bg-gray-2 rounded p-2">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <FaFeatherPointed className="text-green-3 text-2xl" />
              <h2 className="text-green-3 font-bold text-base mb-1">Jeu de la Plume</h2>
            </div>

            <p className="text-gray-4 text-sm">
              Retrouvez un rythme de respiration apaisant et relaxant en suivant la queue du renard.
            </p>
          </div>

          <Link className="flex items-center bg-green-3 justify-center bg-gray-3 h-full p-2 rounded"
            href="./exercices/feather">

            <FaArrowRight className=" text-white text-xl rounded  ml-auto" />
          </Link>
        </div>

        <div className="w-full p-3 bg-green-1 rounded-lg border-2 border-green-2 text-green-3">
          <p className="text-sm">
            Plus d'exercices sont en élaboration.
          </p>
        </div>
      </div>
    </div>
  );
}
