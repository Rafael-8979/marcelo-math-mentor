import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Agende Sua Aula Gratuita
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Entre em contato e descubra como posso ajudar seu filho a alcançar 
            excelência em matemática com metodologia personalizada e comprovada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Main Contact Card */}
          <div className="lg:col-span-2">
            <Card className="bg-primary-foreground/95 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-primary">
                  Primeira Aula Gratuita!
                </CardTitle>
                <CardDescription className="text-lg">
                  Conheça a metodologia e veja como posso ajudar seu filho
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-center text-muted-foreground">
                  Na primeira aula, faço um diagnóstico completo das necessidades do aluno 
                  e apresento um plano personalizado de estudos.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" className="flex-1">
                    <Phone className="w-5 h-5 mr-2" />
                    Ligar Agora
                  </Button>
                  <Button variant="success" size="lg" className="flex-1">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </Button>
                </div>

                <div className="text-center pt-4">
                  <p className="text-sm text-muted-foreground">
                    Resposta garantida em até 2 horas
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-primary-foreground/95 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 text-primary mr-3" />
                  <div>
                    <p className="font-semibold">Telefone</p>
                    <p className="text-muted-foreground">(11) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-primary mr-3" />
                  <div>
                    <p className="font-semibold">E-mail</p>
                    <p className="text-muted-foreground">marcelo@professor.com</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-primary mr-3" />
                  <div>
                    <p className="font-semibold">Atendimento</p>
                    <p className="text-muted-foreground">Presencial em domicílio</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-primary mr-3" />
                  <div>
                    <p className="font-semibold">Horários</p>
                    <p className="text-muted-foreground">Seg a Sáb: 8h às 20h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground/95 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-3">Benefícios Exclusivos</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Material didático incluso</li>
                  <li>✓ Relatório de progresso mensal</li>
                  <li>✓ Suporte via WhatsApp</li>
                  <li>✓ Flexibilidade de horários</li>
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