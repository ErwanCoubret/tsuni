"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";

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

  const teamMembers = [
    { name: "Oumayma MBAREK" },
    { name: "Antoine BRETZNER" },
    { name: "Ryan BELAIB" },
    { name: "Nathan WURPILLOT" },
    { name: "Erwan COUBRET" },
  ];

  return (
    <div className="relative h-[calc(var(--vh)*100)] bg-gray-1 p-6 overflow-y-auto">
      <div className="flex flex-col h-full gap-4">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold text-green-4">À Propos</h1>
        </div>

        <Image
          src="/TSUNI BANNER PNG.png"
          width={300}
          height={100}
          alt="Logo"
          className="mx-auto my-5"
        />

        <div className="flex flex-col gap-1">
          <div className="flex w-full justify-between items-baseline">
            <h2 className="text-lg font-bold text-green-4">L'application</h2>
          </div>
          <p className="text-sm text-gray-4 text-green-4">
            L'application est conçue pour
            accompagner les personnes confrontées au
            stress intense ou à des épisodes d’anxiété. Elle
            propose un soutien concret, accessible et
            bienveillant, sans dramatiser.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex w-full justify-between items-baseline">
            <h2 className="text-lg font-bold text-green-4">L'équipe</h2>
          </div>
          <p className="text-sm text-gray-4 text-green-4">
            Nous sommes 5 étudiant-ingénieurs de Télécom Physique Strasbourg spécialisés en
            informatique et en intelligence artificielle. Le contexte du concours nous a 
            particulièrement intéressé et nous a poussé à nous investir dans ce projet pour 
            réfléchir à la manière dont l'innovation pouvait servir à améliorer le quotidien de
            nombreuses personnes.
            </p>
        </div>

        <Image
          src="/us.png"
          width={400}
          height={200}
          className="mx-auto my-5 rounded-lg"
          alt="Us"
        />

        <div className=" flex flex-col gap-2">

          <ul>
            {teamMembers.map((member) => (
              <li key={member.name} className="flex flex-col py-1">
                <span className="font-bold text-green-4">{member.name}</span>
              </li>
            ))}
          </ul>


        </div>

        <Link
          href={"https://github.com/ErwanCoubret/takeair-cassini-hackathon"}
          className="flex items-center gap-2 w-fit bg-gray-2 text-green-4 p-2 rounded"
        >
          <FaGithub />
          Code de l'application
        </Link>

        <div className="pb-20" />
      </div>
    </div>
  );
}
