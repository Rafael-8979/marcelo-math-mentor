import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted to-background relative">
      {/* Background overlay for better visual appeal */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-success/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Agende Sua Aula Gratuita
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Entre em contato e descubra como posso ajudar seu filho a alcançar 
            excelência em matemática com metodologia personalizada e comprovada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Main Contact Card */}
          <div className="lg:col-span-2">
            <Card className="bg-card/95 backdrop-blur-sm shadow-strong border-border">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-primary">
                  Primeira Aula Gratuita!
                </CardTitle>
                <CardDescription className="text-lg text-card-foreground/80">
                  Conheça a metodologia e veja como posso ajudar seu filho
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-center text-card-foreground/70">
                  Na primeira aula, faço um diagnóstico completo das necessidades do aluno 
                  e apresento um plano personalizado de estudos.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow">
                    <Phone className="w-5 h-5 mr-2" />
                    Ligar Agora
                  </Button>
                  <Button size="lg" className="flex-1 bg-success hover:bg-success/90 text-success-foreground shadow-glow">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </Button>
                </div>

                <div className="text-center pt-4">
                  <p className="text-sm text-card-foreground/60">
                    Resposta garantida em até 2 horas
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-card/95 backdrop-blur-sm shadow-glow border-border">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 text-primary mr-3" />
                  <div>
                    <p className="font-semibold text-card-foreground">Telefone</p>
                    <p className="text-card-foreground/70">(11) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-primary mr-3" />
                  <div>
                    <p className="font-semibold text-card-foreground">E-mail</p>
                    <p className="text-card-foreground/70">marcelo@professor.com</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-primary mr-3" />
                  <div>
                    <p className="font-semibold text-card-foreground">Atendimento</p>
                    <p className="text-card-foreground/70">Presencial em domicílio</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-primary mr-3" />
                  <div>
                    <p className="font-semibold text-card-foreground">Horários</p>
                    <p className="text-card-foreground/70">Seg a Sáb: 8h às 20h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/95 backdrop-blur-sm shadow-soft border-border">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-3 text-card-foreground">Benefícios Exclusivos</h3>
                <ul className="space-y-2 text-sm text-card-foreground/70">
                  <li className="flex items-center justify-center gap-2">
                    <span className="text-success">✓</span> Material didático incluso
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <span className="text-success">✓</span> Relatório de progresso mensal
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <span className="text-success">✓</span> Suporte via WhatsApp
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <span className="text-success">✓</span> Flexibilidade de horários
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;