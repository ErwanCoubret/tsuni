"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function FeatherGame() {
  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
    };
    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  return (
    <div className="relative h-[calc(var(--vh)*100)] bg-gray-1 flex flex-col p-6 overflow-hidden">
      <div className="flex items-center gap-2 mb-2">
        <Link href="/exercices" className="bg-green-3 h-fit rounded p-1">
          <FaArrowLeft className="text-white" />
        </Link>
        <h1 className="text-xl font-bold text-green-4">Jeu de la plume</h1>
      </div>

      <p className="text-xs text-gray-4 mb-2">
        Focalisez votre attention sur la queue du renard et faites coincider votre respiration avec son mouvement. Inspirez lorsque la plume monte et expirez lorsqu'elle descend.
      </p>

      <div className="relative flex h-120 items-center justify-center mb-6 bg-green-2 rounded">
        <div className="absolute w-3 h-90 bg-white p-2 rounded-full" />
        <motion.div
          animate={{ y: [150, -173, 150], rotate: [-3, 15, -3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image src="/tail.png" alt="feather" width={120} height={600} priority className="rotate-30" />
        </motion.div>

      </div>
    </div>
  );
}
