'use client'

import { useState, useEffect } from 'react';

export default function Home() {
  const [banner, setBanner] = useState("");

  useEffect(() => {
    // Array de banners disponíveis
    const banners = [
      "banner01.jpg",
      "banner02.jpg",
      "banner03.jpg",
    ];

    // Escolher aleatoriamente uma imagem do array
    const randomBanner = banners[Math.floor(Math.random() * banners.length)];

    // Definir a imagem escolhida no estado
    setBanner(randomBanner);
  }, []); // O array vazio [] significa que isso acontece apenas uma vez ao carregar

  return (
    <main className="w-screen h-screen">
      <div className="w-full h-full relative flex justify-center items-center">
        {/* A imagem será exibida quando o estado 'banner' for atualizado */}
        {banner && (
          <img className="w-full h-full object-cover" src={banner} alt="Banner" />
        )}
        <h1 className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-4xl md:text-6xl lg:text-7xl xl:text-9xl font-bold text-white text-center animate-glow animate-colorChange">
          FELIZ NATAL!!!
        </h1>
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center animate-glow animate-colorChange">
          O Carlos, nAyow, Carlão, Carlinhos, Carlinfonos e Carlota te desenha um feliz natal!!!
        </h1>
      </div>
    </main>
  );
}
