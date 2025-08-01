import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Users, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const stats = [
    {
      icon: GraduationCap,
      value: "3",
      label: "Anos de Experiência",
      description: "Dedicados ao ensino de matemática"
    },
    {
      icon: Users,
      value: "60+",
      label: "Alunos Atendidos",
      description: "Com resultados comprovados"
    },
    {
      icon: Award,
      value: "95%",
      label: "Taxa de Aprovação",
      description: "Dos alunos melhoram as notas"
    },
    {
      icon: TrendingUp,
      value: "3° ao 9°",
      label: "Anos do ensino fundamental",
      description: ""
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Sobre o Professor
              <span className="block text-primary">Marcelo Augusto</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Especialista em matemática com foco no ensino fundamental, do 3° ao 9° ano. 
                Minha missão é transformar a relação dos estudantes com a matemática, 
                tornando-a mais compreensível e interessante.
              </p>
              
              <p>
                Utilizo metodologias personalizadas que respeitam o ritmo de cada aluno, 
                identificando suas dificuldades específicas e desenvolvendo estratégias 
                eficazes para superá-las.
              </p>
              
              <p>
                Acredito que todo aluno pode alcançar excelência em matemática quando 
                recebe o apoio adequado e uma abordagem pedagógica direcionada às suas necessidades.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Metodologia Diferenciada:</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-success rounded-full mr-4 shadow-soft"></div>
                  <span className="text-muted-foreground">Diagnóstico inicial das dificuldades</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-success rounded-full mr-4 shadow-soft"></div>
                  <span className="text-muted-foreground">Plano de ensino personalizado</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-success rounded-full mr-4 shadow-soft"></div>
                  <span className="text-muted-foreground">Acompanhamento contínuo do progresso</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-success rounded-full mr-4 shadow-soft"></div>
                  <span className="text-muted-foreground">Comunicação constante com pais</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-success rounded-full mr-4 shadow-soft"></div>
                  <span className="text-muted-foreground">Preparação específica para provas</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-success rounded-full mr-4 shadow-soft"></div>
                  <span className="text-muted-foreground">Recuperação de conteúdos defasados</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center p-8 hover:scale-105 transform hover:shadow-strong bg-gradient-purple border border-primary/20">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center shadow-glow">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <div className={`text-3xl font-bold text-primary mb-3 ${stat.value === "3° ao 9°" ? "whitespace-nowrap leading-tight" : ""}`}>{stat.value}</div>
                    <div className="font-semibold text-gray-100 mb-2">{stat.label}</div>
                    <div className="text-sm text-gray-300">{stat.description}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;