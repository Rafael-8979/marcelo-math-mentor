import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-math.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Stronger dark overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute inset-0 bg-black/40"></div>
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
            <Button variant="default" size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              Agendar Aula Gratuita
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm bg-white/10 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              Conhecer Métodos
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/80 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
          <div className="w-1 h-3 bg-white/90 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;