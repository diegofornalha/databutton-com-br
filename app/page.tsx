"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-8 md:px-16 bg-black/80 backdrop-blur-sm shadow-md">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="DataButton Logo"
              width={200}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>
        </div>
        
        {/* Menu hamburger para mobile */}
        <div className="md:hidden">
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="text-white p-2"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Menu desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="https://agentesintegrados.com.br/login" className="link-hover">
            Entrar
          </Link>
          <Link href="https://agentesintegrados.com.br/signup" className="btn-primary">
            Começar
          </Link>
        </div>
      </nav>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="fixed top-[4.5rem] left-0 right-0 z-40 bg-black/95 p-4 flex flex-col items-center gap-6 shadow-lg md:hidden">
          <Link 
            href="https://agentesintegrados.com.br/login" 
            className="link-hover text-xl py-2"
            onClick={() => setMenuOpen(false)}
          >
            Entrar
          </Link>
          <Link 
            href="https://agentesintegrados.com.br/signup" 
            className="btn-primary w-full text-center py-3"
            onClick={() => setMenuOpen(false)}
          >
            Começar
          </Link>
        </div>
      )}

      {/* Hero Section */}
      <main className="px-4 sm:px-8 md:px-16 pt-24 md:pt-36">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="lg:max-w-[60%]">
            <h1 className="text-primary text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none">
              A Melhor 
              <br />
              Metodologia 
              <br />
              Para Criar Seu
              <br />
              MVP com IA  
            </h1>

            <p className="text-white/90 mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl max-w-2xl">
              Seu mvp em minutos, tire suas ideias do papel com IA      
              <br />
              Precisa lançar rápido? Vamos te ajudar a chegar lá!
            </p>
          </div>
          
          <div className="w-full lg:w-[40%] mt-6 lg:mt-0 flex flex-col items-center">
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl">
              <div className="relative w-full h-0 pb-[56.25%]"> {/* Aspect ratio 16:9 */}
                <iframe 
                  src="https://www.youtube.com/embed/uvb6wf8GNTA" 
                  title="Vídeo demonstrativo do Databutton" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
                ></iframe>
              </div>
            </div>
            <div className="mt-6 sm:mt-8 w-full flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://agentesintegrados.com.br/signup"
                className="btn-outline w-full sm:w-auto text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-12 py-3 md:py-4"
              >
                Comece Grátis
              </Link>
              <Link
                href="https://www.youtube.com/diegofornalha"
                target="_blank"
                rel="noopener noreferrer"
                className="channel-link text-base sm:text-lg md:text-xl"
              >
                Inscreva-se no Canal
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
