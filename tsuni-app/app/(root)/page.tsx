"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight, FaRegBell } from "react-icons/fa";
import { IoBookOutline, IoCloseSharp } from "react-icons/io5";
import Modal from "../components/Modal";

export default function Home() {

  const [goodness, setGoodness] = useState(50);
  const [open, setOpen] = useState(false);
  const [newNotif, setNewNotif] = useState(true);

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
      <div className="flex flex-col h-full gap-3 mb-20">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center justify-between bg-gray-2 rounded gap-2">
            <Image
              src="/PERSON.png"
              alt="Logo"
              width={50}
              height={50}
              className="rounded"
            />

            <div className="flex flex-col gap-0 text-green-4 font-bold text-xs px-2">
              <p>Bonjour</p> <span className="text-base">Axelle 👋</span>
            </div>

          </div>

          <button className="relative flex items-center gap-2 p-2 text-green-4 rounded bg-gray-2 text-2xl"
            onClick={() => {
              setOpen(!open);
              setNewNotif(false);
            }
            }
          >
            <FaRegBell />
            {newNotif && <span className="absolute top-2 right-2.5 w-2 h-2 bg-green-3 rounded-full" />}
          </button>
        </div>

        <Modal
          showState={open}
          setShowState={setOpen}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-green-4">Notifications</h2>

            <button
              className="p-2 rounded bg-gray-2"
              onClick={() => setOpen(false)}
            >
              <IoCloseSharp className="text-green-4 text-2xl" />
            </button>
          </div>

          <div className="flex flex-col gap-1 bg-gray-2 rounded px-2 pt-0.5 pb-2">
            <h2 className="text-green-3 font-bold text-base">Ce mardi</h2>
            <p className="text-gray-4 text-sm">
              Pic de stress détecté par votre montre à 14h30.
            </p>
          </div>
        </Modal>

        <div className="relative mt-3">
          <Image
            src="/BANNER.png"
            alt="banner"
            layout="responsive"
            width={1000}
            height={200}
            className="rounded"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Image
              src="/tsuni_speak.png"
              alt="banner"
              layout="responsive"
              width={1000}
              height={200}
              className="absolute -top-5 -left-4"
            />
            <input
              type="range"
              min="0"
              max="100"
              value={goodness}
              className="w-5/6 accent-white mt-10"
              onChange={(e) => setGoodness(Number(e.target.value))}
            />
            <p className="bg-white font-bold text-green-3 text-center rounded px-2 mt-2">
              {goodness <= 12.5
                ? "Mal."
                : goodness <= 37.5
                  ? "Bof"
                  : goodness <= 62.5
                    ? "Moyen"
                    : goodness <= 87.5
                      ? "Bien"
                      : "Génial !"}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-1 bg-gray-2 rounded px-2 pt-0.5 pb-2">
          <h2 className="text-green-3 font-bold text-base">Votre dispositif connecté</h2>
          <div className="flex items-center gap-1">
            <div className="flex items-center justify-center bg-gray-3 w-13 h-13 rounded">
              <Image
                src="/MONTRE.png"
                alt="Logo"
                width={35}
                height={35}
                className="opacity-50"
              />
            </div>

            <div className="flex flex-col gap-0 text-gray-4 font-bold text-sm px-2">
              <p>Apple Watch d'Axelle</p>
              <div className="flex items-center gap-2">
                <span className="text-green-2">Connectée</span>
                <p className="bg-green-2 text-white text-xs rounded px-1.5 py-0.5 ">63%</p>
              </div>

            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 bg-green-1 border-2 border-green-2 rounded p-2">

          <h2 className="text-green-3 font-bold italic text-center">
            Relaxez-vous avec Tsuni
          </h2>

          <Image
            src="/ICON_SLEEPING.png"
            alt="icon"
            width={150}
            height={100}
            className="mx-auto"
          />

          <Link
            href="./exercices"
            className="flex items-center gap-2 w-fit mx-auto justify-center text-xs bg-green-2 text-white rounded px-2 py-1 mt-2"
          >
            <span className=" font-bold uppercase">Commencez un exercice</span>
            <FaArrowRight />
          </Link>
        </div>

        <div className="flex justify-between gap-1 bg-gray-2 rounded p-2">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <IoBookOutline className="text-green-3 text-2xl" />
              <h2 className="text-green-3 font-bold text-base mb-1">Votre Journal</h2>
            </div>

            <p className="text-gray-4 text-sm">
              Suivez votre humeur et vos pensées du quotidien.
            </p>
          </div>

          <Link className="flex items-center bg-green-3 justify-center bg-gray-3 h-full p-2 rounded"
            href="./diary">

            <FaArrowRight className=" text-white text-xl rounded  ml-auto" />
          </Link>
        </div>

        <div className="pb-20" />
      </div>
    </div>
  );
}
