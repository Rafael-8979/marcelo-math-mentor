import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-math.jpg";

const HeroSection = () => {
  const whatsappNumber = "5515981364458";
  const whatsappMessage = "Olá! Gostaria de agendar uma aula de matemática.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Chalkboard Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-black to-gray-950">
        {/* Chalkboard texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-950/30 via-gray-950/50 to-black/80"></div>
        
        {/* Chalkboard Math Background - Hand-drawn style */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25 blur-[0.5px]">
          {/* Mathematical formulas scattered like chalk on blackboard */}
          <div className="absolute top-16 left-8 text-gray-300/80 text-lg font-mono transform -rotate-12 drop-shadow-sm">
            ∫ f(x)dx
          </div>
          <div className="absolute top-32 right-12 text-gray-200/70 text-xl font-mono transform rotate-6 drop-shadow-sm">
            x = (-b ± √(b²-4ac))/2a
          </div>
          <div className="absolute top-48 left-1/4 text-gray-300/90 text-2xl font-bold transform -rotate-6 drop-shadow-sm">
            π ≈ 3.14159
          </div>
          <div className="absolute bottom-40 right-1/4 text-gray-200/75 text-lg font-mono transform rotate-12 drop-shadow-sm">
            lim(x→∞) 1/x = 0
          </div>
          <div className="absolute bottom-24 left-16 text-gray-300/85 text-xl transform -rotate-8 drop-shadow-sm">
            sin²θ + cos²θ = 1
          </div>
          <div className="absolute top-64 right-8 text-gray-200/65 text-base font-mono transform rotate-15 drop-shadow-sm">
            d/dx(x²) = 2x
          </div>
          <div className="absolute bottom-56 left-1/3 text-gray-300/75 text-lg transform rotate-8 drop-shadow-sm">
            E = mc²
          </div>
          <div className="absolute top-28 left-2/3 text-gray-200/70 text-base font-mono transform -rotate-10 drop-shadow-sm">
            log₂(8) = 3
          </div>
          
          {/* Geometric shapes and symbols */}
          <div className="absolute top-20 right-1/3 text-gray-300/60 text-4xl transform rotate-45 drop-shadow-sm">
            △
          </div>
          <div className="absolute bottom-32 left-8 text-gray-200/70 text-3xl transform -rotate-12 drop-shadow-sm">
            ∑
          </div>
          <div className="absolute top-44 left-12 text-gray-300/50 text-2xl transform rotate-20 drop-shadow-sm">
            ∝
          </div>
          <div className="absolute bottom-16 right-20 text-gray-200/80 text-xl transform -rotate-6 drop-shadow-sm">
            ∀x ∈ ℝ
          </div>
          <div className="absolute top-72 right-1/4 text-gray-300/60 text-lg transform rotate-14 drop-shadow-sm">
            f'(x) = df/dx
          </div>
          
          {/* Hand-drawn style lines and arrows */}
          <div className="absolute top-40 left-20 w-24 h-px bg-gray-300/40 transform rotate-12 shadow-sm"></div>
          <div className="absolute bottom-48 right-16 w-20 h-px bg-gray-200/50 transform -rotate-8 shadow-sm"></div>
          
          {/* More scattered formulas for authentic chalkboard feel */}
          <div className="absolute top-8 left-1/2 text-gray-300/40 text-sm font-mono transform rotate-18 drop-shadow-sm">
            √(a² + b²)
          </div>
          <div className="absolute bottom-8 left-1/2 text-gray-200/50 text-base transform -rotate-15 drop-shadow-sm">
            Δy/Δx → dy/dx
          </div>
          <div className="absolute top-56 left-4 text-gray-300/70 text-lg transform rotate-25 drop-shadow-sm">
            ∞ &gt; n ∀n ∈ ℕ
          </div>
          <div className="absolute bottom-64 right-4 text-gray-200/60 text-base font-mono transform -rotate-20 drop-shadow-sm">
            (a+b)² = a²+2ab+b²
          </div>
          
          {/* Additional chalk dust effect */}
          <div className="absolute top-1/3 left-1/2 text-gray-400/30 text-xs transform rotate-45 drop-shadow-sm">
            ∂f/∂x
          </div>
          <div className="absolute bottom-1/3 right-1/3 text-gray-300/35 text-sm transform -rotate-30 drop-shadow-sm">
            ∅ ⊂ A
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight font-display text-white drop-shadow-lg">
            Professor
            <span className="block text-primary bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent drop-shadow-lg">Marcelo Augusto</span>
            <span className="block text-3xl md:text-4xl font-semibold font-sans text-gray-100 drop-shadow-md">Melenchon</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed drop-shadow-md">
            Especialista em Matemática do 3° ao 9° ano
          </p>
          
          <div className="text-lg md:text-xl mb-8 text-gray-200/90 font-medium">
            <span className="inline-block mx-2">📚 Reforço Escolar</span>
            <span className="inline-block mx-2">📝 Preparação para Provas</span>
            <span className="inline-block mx-2">🔄 Recuperação de Conteúdo</span>
          </div>

          <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-2xl mx-auto drop-shadow-sm">
            Transformo dificuldades em conquistas através de um ensino personalizado 
            e métodos inovadores para cada aluno alcançar seu máximo potencial.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                Agendar Aula
              </Button>
            </a>
            <Link to="/methods">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm bg-white/10 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                Conhecer Métodos
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white animate-bounce">
        <div className="w-8 h-12 border-2 border-white/90 rounded-full flex justify-center backdrop-blur-md bg-white/20 shadow-lg">
          <div className="w-1.5 h-4 bg-white rounded-full mt-2 animate-pulse shadow-sm"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;