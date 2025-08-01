import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Users, Target, BookOpen, TrendingUp, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Methods = () => {
  const whatsappNumber = "5515981364458"; // Número no formato internacional
  const whatsappMessage = "Olá! Gostaria de conhecer mais sobre a metodologia de ensino e agendar uma aula.";
  
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const phoneLink = `tel:+${whatsappNumber}`;

  const methodSteps = [
    {
      icon: Users,
      title: "Diagnóstico Inicial",
      description: "Avaliação completa das dificuldades e conhecimentos prévios do aluno",
      details: [
        "Teste diagnóstico personalizado",
        "Identificação de lacunas no aprendizado",
        "Análise do perfil de aprendizagem",
        "Definição de objetivos específicos"
      ]
    },
    {
      icon: Target,
      title: "Plano Personalizado",
      description: "Desenvolvimento de estratégia de ensino adaptada ao perfil do aluno",
      details: [
        "Metodologia adequada ao ritmo individual",
        "Material didático selecionado",
        "Cronograma de estudos flexível",
        "Metas progressivas e alcançáveis"
      ]
    },
    {
      icon: BookOpen,
      title: "Aulas Práticas",
      description: "Aplicação da metodologia com foco na compreensão e fixação",
      details: [
        "Explicações claras e didáticas",
        "Exercícios direcionados às dificuldades",
        "Técnicas de memorização eficazes",
        "Resolução de problemas passo a passo"
      ]
    },
    {
      icon: TrendingUp,
      title: "Acompanhamento Contínuo",
      description: "Monitoramento do progresso e ajustes na metodologia quando necessário",
      details: [
        "Avaliações regulares de progresso",
        "Feedback constante aos pais",
        "Ajustes na metodologia conforme necessário",
        "Relatórios mensais de desenvolvimento"
      ]
    }
  ];

  const benefits = [
    "Aumento da confiança em matemática",
    "Melhoria significativa nas notas",
    "Desenvolvimento do raciocínio lógico",
    "Preparação eficaz para provas",
    "Autonomia nos estudos",
    "Base sólida para séries posteriores"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-8 bg-gradient-to-r from-primary/10 to-success/10">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar ao início
          </Link>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Metodologia de Ensino
              <span className="block text-primary">Comprovada e Eficaz</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubra como transformo dificuldades em conquistas através de uma abordagem 
              personalizada que respeita o ritmo de cada aluno.
            </p>
          </div>
        </div>
      </header>

      {/* Method Steps */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Como Funciona a Metodologia
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Um processo estruturado em 4 etapas para garantir o sucesso do seu filho
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {methodSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={index} className="relative overflow-hidden border-border hover:shadow-glow transition-all">
                  <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10">
                    {index + 1}
                  </div>
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{step.title}</CardTitle>
                        <CardDescription>{step.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-success mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{detail}</span>
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

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Resultados Comprovados
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Veja os benefícios que seus alunos conquistam com a metodologia personalizada
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                  <span className="text-card-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-success/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Pronto para Começar?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Agende uma aula e veja na prática como a metodologia pode 
            transformar a relação do seu filho com a matemática.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button size="lg" className="w-full bg-success hover:bg-success/90 text-success-foreground shadow-glow">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </a>
            <a
              href={phoneLink}
              className="flex-1"
            >
              <Button size="lg" variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-soft">
                <Phone className="w-5 h-5 mr-2" />
                Ligar Agora
              </Button>
            </a>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            Resposta garantida em até 2 horas • (15) 98136-4458
          </p>
        </div>
      </section>
    </div>
  );
};

export default Methods;