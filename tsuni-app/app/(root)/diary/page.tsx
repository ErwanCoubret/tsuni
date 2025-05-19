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
        <h1 className="text-xl font-bold text-green-4">Journal</h1>
        <p className="text-xs text-gray-4">
          Le journal est un outil puissant pour vous aider à gérer le stress et l'anxiété. Il vous permet de prendre du recul, de réfléchir à vos émotions. Il peut également vous servir de référence lors d'échanges avec un professionnel.
        </p>

        <div className="w-full p-3 bg-gray-2 rounded-lg border-2 border-green-2 text-green-3">
          <h1 className="mb-2">
            <span className="text-sm text-green-4 font-bold">Épreuve de mathématiques</span> - 15/05/2025
          </h1>
          <p className="text-xs text-gray-4">
            À l’approche de l’examen, j’ai ressenti une montée de stress particulièrement intense. Mon cœur s’emballait, j’avais du mal à me concentrer, et une sorte de boule au ventre s’installait dès que je pensais à l’épreuve. J’avais aussi les mains moites et des tensions musculaires persistantes. C’est comme si mon corps entier était en alerte, incapable de se poser, alors que je savais rationnellement que j’étais préparée.
          </p>
        </div>

        <div className="w-full p-3 bg-gray-2 rounded-lg border-2 border-green-2 text-green-3">
          <h1 className="mb-2">
            <span className="text-sm text-green-4 font-bold">Révisions</span> - 12/05/2025
          </h1>
          <p className="text-xs text-gray-4">
            Pendant les révisions, j’ai rapidement senti une pression constante. Même en travaillant plusieurs heures par jour, j’avais l’impression de ne jamais en faire assez. Mon esprit était souvent agité, avec une difficulté à rester concentrée plus de quelques minutes.
          </p>
        </div>

        <div className="w-full p-3 bg-gray-2 rounded-lg border-2 border-green-2 text-green-3">
          <h1 className="mb-2">
            <span className="text-sm text-green-4 font-bold">Sortie</span> - 05/05/2025

          </h1>
          <p className="text-xs text-gray-4">
            J’ai décidé de prendre un moment pour moi, de sortir faire une promenade. J’ai pris le temps de respirer profondément, d’observer la nature autour de moi. Cela m’a permis de me recentrer et de relativiser mes inquiétudes.
          </p>
        </div>

        <div className="w-full p-3 bg-gray-2 rounded-lg border-2 border-green-2 text-green-3">
          <h1 className="mb-2">
            <span className="text-sm text-green-4 font-bold">Vie personnelle</span> - 28/04/2025
          </h1>

          <p className="text-xs text-gray-4">
            En dehors des études, j’ai aussi ressenti une pression sociale. J’avais l’impression que tout le monde autour de moi avançait à grands pas, et je me sentais un peu à la traîne.
          </p>
        </div>

        

        <div className="pb-20" />
      </div>
    </div>
  );
}
