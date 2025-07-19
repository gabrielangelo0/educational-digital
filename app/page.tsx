"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Play, Users, Clock, Award, CheckCircle, ArrowRight, BookOpen, Target, Zap, Settings } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <header className="border-b border-gray-700 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">EduMaster</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#cursos" className="text-gray-200 hover:text-white transition-colors font-medium">
              Cursos
            </a>
            <a href="#sobre" className="text-gray-200 hover:text-white transition-colors font-medium">
              Sobre
            </a>
            <a href="#depoimentos" className="text-gray-200 hover:text-white transition-colors font-medium">
              Depoimentos
            </a>
            <Link href="/admin">
              <Button
                variant="outline"
                className="border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white bg-transparent font-medium"
              >
                <Settings className="w-4 h-4 mr-2" />
                Admin
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white bg-transparent font-medium"
            >
              Login
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-purple-500/20 text-purple-200 border-purple-500/30 font-medium">
            🚀 Mais de 10.000 alunos formados
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Transforme sua
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Carreira Digital
            </span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Aprenda com os melhores profissionais do mercado e domine as tecnologias mais demandadas. Cursos práticos,
            projetos reais e certificação reconhecida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-medium"
            >
              <Play className="w-5 h-5 mr-2" />
              Começar Agora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-500 text-gray-200 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg bg-transparent font-medium"
            >
              Ver Demonstração
            </Button>
          </div>
          <div className="flex items-center justify-center gap-8 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span className="font-medium">10k+ Alunos</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="font-medium">4.9/5 Avaliação</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span className="font-medium">Certificado</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cursos Section */}
      <section id="cursos" className="py-20 px-4 bg-gray-900/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Nossos Cursos</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Escolha o curso ideal para sua jornada profissional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Curso 1 */}
            <Card className="bg-gray-800/70 border-gray-600 hover:border-purple-500/50 transition-all duration-300 group backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-full h-48 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg mb-4 flex items-center justify-center">
                  <Target className="w-16 h-16 text-white" />
                </div>
                <Badge className="w-fit bg-purple-500/20 text-purple-200 border-purple-500/30 mb-2 font-medium">
                  Mais Popular
                </Badge>
                <CardTitle className="text-white group-hover:text-purple-300 transition-colors">
                  Desenvolvimento Full Stack
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Domine React, Node.js, TypeScript e muito mais
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-300">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">120h</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span className="font-medium">2.5k alunos</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="font-medium">4.9</span>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-white">R$ 497</span>
                    <span className="text-lg text-gray-400 line-through">R$ 997</span>
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/30 font-medium">50% OFF</Badge>
                  </div>
                  <p className="text-sm text-gray-300 font-medium">ou 12x de R$ 49,70</p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-200">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Projetos práticos reais</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-200">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Mentoria individual</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-200">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Certificado reconhecido</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium">
                  Matricular Agora
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Curso 2 */}
            <Card className="bg-gray-800/70 border-gray-600 hover:border-blue-500/50 transition-all duration-300 group backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-full h-48 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg mb-4 flex items-center justify-center">
                  <Zap className="w-16 h-16 text-white" />
                </div>
                <CardTitle className="text-white group-hover:text-blue-300 transition-colors">
                  Data Science & IA
                </CardTitle>
                <CardDescription className="text-gray-300">Python, Machine Learning e Análise de Dados</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-300">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">90h</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span className="font-medium">1.8k alunos</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="font-medium">4.8</span>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-white">R$ 397</span>
                    <span className="text-lg text-gray-400 line-through">R$ 797</span>
                  </div>
                  <p className="text-sm text-gray-300 font-medium">ou 12x de R$ 39,70</p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-200">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Datasets reais</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-200">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Projetos de portfólio</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-200">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Suporte vitalício</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium">
                  Matricular Agora
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Curso 3 */}
            <Card className="bg-gray-800/70 border-gray-600 hover:border-green-500/50 transition-all duration-300 group backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="w-full h-48 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg mb-4 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-white" />
                </div>
                <CardTitle className="text-white group-hover:text-green-300 transition-colors">UX/UI Design</CardTitle>
                <CardDescription className="text-gray-300">Figma, Design System e Prototipação</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-300">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">80h</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span className="font-medium">1.2k alunos</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="font-medium">4.9</span>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-white">R$ 297</span>
                    <span className="text-lg text-gray-400 line-through">R$ 597</span>
                  </div>
                  <p className="text-sm text-gray-300 font-medium">ou 12x de R$ 29,70</p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-200">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Cases reais de mercado</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-200">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Feedback personalizado</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-200">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Comunidade exclusiva</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium">
                  Matricular Agora
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">O que nossos alunos dizem</h2>
            <p className="text-gray-300 text-lg">Histórias reais de transformação profissional</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-gray-600 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-200 mb-6 leading-relaxed">
                  "Consegui minha primeira vaga como desenvolvedor após 6 meses do curso. O conteúdo é excepcional e o
                  suporte é incrível!"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback className="bg-purple-600 text-white font-medium">JS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-white">João Silva</p>
                    <p className="text-sm text-gray-300">Desenvolvedor Full Stack</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-600 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-200 mb-6 leading-relaxed">
                  "Migrei de área e hoje trabalho como Data Scientist em uma multinacional. O curso mudou minha vida
                  profissional completamente!"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback className="bg-blue-600 text-white font-medium">MS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-white">Maria Santos</p>
                    <p className="text-sm text-gray-300">Data Scientist</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-600 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-200 mb-6 leading-relaxed">
                  "Como designer, o curso me deu uma base sólida em UX/UI. Hoje lidero uma equipe de design em uma
                  startup!"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback className="bg-green-600 text-white font-medium">PC</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-white">Pedro Costa</p>
                    <p className="text-sm text-gray-300">UX/UI Designer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Pronto para transformar sua carreira?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de profissionais que já mudaram suas vidas com nossos cursos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-medium"
            >
              Começar Agora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-500 text-gray-200 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg bg-transparent font-medium"
            >
              Falar com Consultor
            </Button>
          </div>
          <p className="text-sm text-gray-300 mt-6 font-medium">
            ✅ Garantia de 30 dias • ✅ Suporte vitalício • ✅ Certificado reconhecido
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-700 bg-gray-900 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">EduMaster</span>
              </div>
              <p className="text-gray-300 text-sm">Transformando carreiras através da educação digital de qualidade.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Cursos</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Full Stack
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Data Science
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    UX/UI Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    DevOps
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Empresa</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sobre nós
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Instrutores
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Carreiras
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Suporte</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Central de Ajuda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
            <p>&copy; 2024 EduMaster. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
