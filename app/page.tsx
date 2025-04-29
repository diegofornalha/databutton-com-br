import Image from "next/image"
import Link from "next/link"

export default function Home() {
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
        <div className="hidden md:flex items-center gap-8">
          <Link href="https://agentesintegrados.com.br/login" className="link-hover">
            Entrar
          </Link>
          <Link href="https://agentesintegrados.com.br/signup" className="btn-primary">
            Começar
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="px-8 md:px-16 pt-28 md:pt-36">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="lg:max-w-[60%]">
            <h1 className="text-primary text-8xl md:text-10xl font-bold leading-none">
              A Melhor 
              <br />
              Metodologia 
              <br />
              Para Criar Seu
              <br />
              MVP com IA  
            </h1>

            <p className="text-white/90 mt-8 text-xl max-w-2xl">
              Seu mvp em minutos, tire suas ideias do papel com IA      
              <br />
              Precisa lançar rápido? Vamos te ajudar a chegar lá 👇
            </p>
          </div>
          
          <div className="w-full lg:w-[40%] mt-8 lg:mt-0 flex flex-col items-center">
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/3DDLUzmY8Ds?si=ZAgmqkUbpqmNCrYy" 
                title="Vídeo demonstrativo do Databutton" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="rounded-lg shadow-2xl"
              ></iframe>
            </div>
            <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
              <Link
                href="https://agentesintegrados.com.br/signup"
                className="btn-outline"
              >
                Comece Grátis
              </Link>
              <Link
                href="https://www.youtube.com/diegofornalha"
                target="_blank"
                rel="noopener noreferrer"
                className="channel-link"
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
