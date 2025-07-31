import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Target, Clock, Users } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Reforço Escolar",
      description: "Acompanhamento personalizado para fortalecer o aprendizado e superar dificuldades específicas em matemática.",
      features: ["Revisão de conteúdos", "Exercícios direcionados", "Acompanhamento contínuo"]
    },
    {
      icon: Target,
      title: "Preparação para Provas",
      description: "Preparação intensiva e estratégica para avaliações escolares, vestibulares e concursos.",
      features: ["Simulados práticos", "Técnicas de resolução", "Gestão de tempo"]
    },
    {
      icon: Users,
      title: "Atendimento Presencial",
      description: "Aulas presenciais com interação direta para um aprendizado mais efetivo e personalizado.",
      features: ["Atenção individual", "Material didático", "Ambiente focado"]
    },
    {
      icon: Clock,
      title: "Horários Flexíveis",
      description: "Adaptação total aos horários do aluno para garantir consistência nos estudos.",
      features: ["Agenda personalizada", "Horários alternativos", "Reagendamento fácil"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Serviços Especializados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Metodologia comprovada com foco no desenvolvimento individual de cada aluno,
            garantindo resultados efetivos e duradouros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group cursor-pointer transform hover:scale-105">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;