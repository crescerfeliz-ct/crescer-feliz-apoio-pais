"use client"

import { useState } from "react"
import { Heart, Moon, Utensils, Zap, CheckCircle, Star, ArrowRight, X, ShoppingCart, Users, TrendingUp, Award, Sparkles, Cloud, Sun } from "lucide-react"

type QuizStep = 1 | 2 | 3 | 4 | "result"

interface QuizAnswers {
  mainChallenge: string
  childAge: string
  urgency: string
  previousAttempts: string
}

export default function LandingPage() {
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizStep, setQuizStep] = useState<QuizStep>(1)
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswers>({
    mainChallenge: "",
    childAge: "",
    urgency: "",
    previousAttempts: "",
  })

  const handleQuizAnswer = (field: keyof QuizAnswers, value: string) => {
    setQuizAnswers({ ...quizAnswers, [field]: value })
    
    if (quizStep === 1) setQuizStep(2)
    else if (quizStep === 2) setQuizStep(3)
    else if (quizStep === 3) setQuizStep(4)
    else if (quizStep === 4) setQuizStep("result")
  }

  const resetQuiz = () => {
    setQuizStep(1)
    setQuizAnswers({
      mainChallenge: "",
      childAge: "",
      urgency: "",
      previousAttempts: "",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b-4 border-yellow-300 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 via-pink-400 to-purple-400 rounded-3xl flex items-center justify-center shadow-xl rotate-12 hover:rotate-0 transition-transform">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="text-2xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 bg-clip-text text-transparent block leading-tight">
                Crescer Feliz
              </span>
              <span className="text-xs font-bold text-purple-600">Apoio para Pais</span>
            </div>
          </div>
          <button
            onClick={() => setShowQuiz(true)}
            className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 text-white px-6 py-3 rounded-full font-bold hover:shadow-2xl hover:scale-110 transition-all text-lg"
          >
            Começar Agora
            <Sparkles className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-yellow-200 text-purple-700 px-5 py-3 rounded-full text-base font-black mb-6 shadow-lg border-4 border-yellow-300">
                <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                Mais de 10.000 famílias felizes!
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-6">
                Transforme Desafios em{" "}
                <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Sorrisos
                </span>
                {" "}✨
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-700 mb-8 leading-relaxed font-medium">
                O app mágico que ajuda pais a cuidar de crianças com ansiedade, 
                sono irregular, alimentação e hiperatividade! 🌈
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => setShowQuiz(true)}
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 text-white px-10 py-5 rounded-full font-black text-xl hover:shadow-2xl hover:scale-110 transition-all border-4 border-white shadow-xl"
                >
                  Fazer Quiz Divertido
                  <Sparkles className="w-6 h-6" />
                </button>
                <button className="flex items-center justify-center gap-3 bg-white text-purple-600 px-10 py-5 rounded-full font-black text-xl border-4 border-purple-300 hover:border-pink-400 hover:shadow-xl transition-all">
                  Ver Mágica 🎪
                </button>
              </div>

              <div className="flex items-center gap-6 text-base text-gray-700 font-bold">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center border-3 border-white shadow-lg">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span>Super fácil!</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center border-3 border-white shadow-lg">
                    <Star className="w-5 h-5 text-white fill-white" />
                  </div>
                  <span>Resultados em 7 dias</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-[3rem] shadow-2xl p-8 border-8 border-purple-300 relative overflow-hidden">
                {/* Decorative clouds */}
                <Cloud className="absolute top-4 right-4 w-12 h-12 text-blue-200 opacity-50" />
                <Sun className="absolute top-4 left-4 w-10 h-10 text-yellow-300 opacity-70" />
                
                <div className="grid grid-cols-2 gap-4 relative z-10">
                  <div className="bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl p-6 text-center border-4 border-purple-300 shadow-lg hover:scale-105 transition-transform">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Heart className="w-10 h-10 text-purple-600" />
                    </div>
                    <h3 className="font-black text-gray-800 mb-1 text-lg">Ansiedade</h3>
                    <p className="text-sm text-gray-700 font-bold">Técnicas mágicas! ✨</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-200 to-cyan-200 rounded-3xl p-6 text-center border-4 border-blue-300 shadow-lg hover:scale-105 transition-transform">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Moon className="w-10 h-10 text-blue-600" />
                    </div>
                    <h3 className="font-black text-gray-800 mb-1 text-lg">Sono</h3>
                    <p className="text-sm text-gray-700 font-bold">Noites tranquilas! 🌙</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-200 to-emerald-200 rounded-3xl p-6 text-center border-4 border-green-300 shadow-lg hover:scale-105 transition-transform">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Utensils className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="font-black text-gray-800 mb-1 text-lg">Alimentação</h3>
                    <p className="text-sm text-gray-700 font-bold">Comida gostosa! 🍎</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-200 to-yellow-200 rounded-3xl p-6 text-center border-4 border-orange-300 shadow-lg hover:scale-105 transition-transform">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Zap className="w-10 h-10 text-orange-600" />
                    </div>
                    <h3 className="font-black text-gray-800 mb-1 text-lg">Energia</h3>
                    <p className="text-sm text-gray-700 font-bold">Diversão saudável! ⚡</p>
                  </div>
                </div>
              </div>
              
              {/* Floating stickers */}
              <div className="absolute -top-8 -right-8 bg-yellow-400 text-yellow-900 px-6 py-3 rounded-full font-black text-lg shadow-2xl rotate-12 border-4 border-white animate-bounce">
                🎉 Oferta Especial!
              </div>
              <div className="absolute -bottom-6 -left-6 bg-pink-400 text-white px-6 py-3 rounded-full font-black text-base shadow-2xl -rotate-12 border-4 border-white">
                ⭐ Super Aprovado!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16 sm:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Seu filho(a) passa por isso? 🤔
            </h2>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-bold">
              Sabemos como é difícil ver as crianças enfrentando desafios
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-red-100 to-pink-100 border-4 border-red-300 rounded-3xl p-8 shadow-xl hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-red-400 rounded-2xl flex items-center justify-center mb-4 shadow-lg border-4 border-white">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Ansiedade 😰</h3>
              <p className="text-gray-700 font-semibold text-lg">
                Medos, preocupações e nervosismo que atrapalham o dia a dia
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 border-4 border-blue-300 rounded-3xl p-8 shadow-xl hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-blue-400 rounded-2xl flex items-center justify-center mb-4 shadow-lg border-4 border-white">
                <Moon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Sono Ruim 😴</h3>
              <p className="text-gray-700 font-semibold text-lg">
                Dificuldade para dormir, pesadelos e noites agitadas
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-emerald-100 border-4 border-green-300 rounded-3xl p-8 shadow-xl hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-green-400 rounded-2xl flex items-center justify-center mb-4 shadow-lg border-4 border-white">
                <Utensils className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Comida Difícil 🍽️</h3>
              <p className="text-gray-700 font-semibold text-lg">
                Recusa de alimentos e refeições estressantes
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-100 to-yellow-100 border-4 border-orange-300 rounded-3xl p-8 shadow-xl hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-orange-400 rounded-2xl flex items-center justify-center mb-4 shadow-lg border-4 border-white">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Muita Energia ⚡</h3>
              <p className="text-gray-700 font-semibold text-lg">
                Dificuldade de concentração e energia sem parar
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setShowQuiz(true)}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 text-white px-10 py-5 rounded-full font-black text-2xl hover:shadow-2xl hover:scale-110 transition-all border-4 border-white shadow-xl"
            >
              Encontrar a Solução Mágica! ✨
              <Sparkles className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24 px-4 bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Tudo que você precisa! 🎁
            </h2>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-bold">
              Ferramentas mágicas para transformar a rotina da família
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all border-4 border-purple-300 hover:scale-105">
              <div className="w-16 h-16 bg-purple-200 rounded-3xl flex items-center justify-center mb-4 border-4 border-purple-400">
                <CheckCircle className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Diário Mágico 📔</h3>
              <p className="text-gray-700 mb-4 font-semibold text-lg">
                Acompanhe o humor e comportamentos para entender melhor
              </p>
              <ul className="space-y-2 text-base text-gray-700 font-semibold">
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0 fill-yellow-500" />
                  <span>Descubra padrões</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0 fill-yellow-500" />
                  <span>Veja o progresso</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0 fill-yellow-500" />
                  <span>Histórico completo</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all border-4 border-blue-300 hover:scale-105">
              <div className="w-16 h-16 bg-blue-200 rounded-3xl flex items-center justify-center mb-4 border-4 border-blue-400">
                <TrendingUp className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Dicas Incríveis 💡</h3>
              <p className="text-gray-700 mb-4 font-semibold text-lg">
                Estratégias práticas que realmente funcionam
              </p>
              <ul className="space-y-2 text-base text-gray-700 font-semibold">
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0 fill-yellow-500" />
                  <span>Rotinas de sono</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0 fill-yellow-500" />
                  <span>Comida saudável</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0 fill-yellow-500" />
                  <span>Calma e tranquilidade</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all border-4 border-cyan-300 hover:scale-105">
              <div className="w-16 h-16 bg-cyan-200 rounded-3xl flex items-center justify-center mb-4 border-4 border-cyan-400">
                <Heart className="w-10 h-10 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Exercícios Divertidos 🎯</h3>
              <p className="text-gray-700 mb-4 font-semibold text-lg">
                Respiração e meditação para fazer juntos
              </p>
              <ul className="space-y-2 text-base text-gray-700 font-semibold">
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0 fill-yellow-500" />
                  <span>Respiração 4-4-4</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0 fill-yellow-500" />
                  <span>Meditações guiadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0 fill-yellow-500" />
                  <span>Relaxamento total</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all border-4 border-green-300 hover:scale-105">
              <div className="w-16 h-16 bg-green-200 rounded-3xl flex items-center justify-center mb-4 border-4 border-green-400">
                <Users className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Lembretes Amigos 🔔</h3>
              <p className="text-gray-700 mb-4 font-semibold text-lg">
                Notificações para manter a rotina em dia
              </p>
              <ul className="space-y-2 text-base text-gray-700 font-semibold">
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0 fill-yellow-500" />
                  <span>Horários personalizados</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0 fill-yellow-500" />
                  <span>Fácil de usar</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0 fill-yellow-500" />
                  <span>Rotinas prontas</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all border-4 border-pink-300 hover:scale-105">
              <div className="w-16 h-16 bg-pink-200 rounded-3xl flex items-center justify-center mb-4 border-4 border-pink-400">
                <Award className="w-10 h-10 text-pink-600" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Ajuda Profissional 🏆</h3>
              <p className="text-gray-700 mb-4 font-semibold text-lg">
                Conteúdo feito por especialistas em crianças
              </p>
              <ul className="space-y-2 text-base text-gray-700 font-semibold">
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0 fill-yellow-500" />
                  <span>Cientificamente aprovado</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0 fill-yellow-500" />
                  <span>Sempre atualizado</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0 fill-yellow-500" />
                  <span>Comunidade de apoio</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all border-4 border-orange-300 hover:scale-105">
              <div className="w-16 h-16 bg-orange-200 rounded-3xl flex items-center justify-center mb-4 border-4 border-orange-400">
                <ShoppingCart className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">Para Sempre Seu! ♾️</h3>
              <p className="text-gray-700 mb-4 font-semibold text-lg">
                Pague uma vez e use para sempre
              </p>
              <ul className="space-y-2 text-base text-gray-700 font-semibold">
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0 fill-yellow-500" />
                  <span>Sem mensalidades</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0 fill-yellow-500" />
                  <span>Todas as atualizações</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0 fill-yellow-500" />
                  <span>Garantia de 30 dias</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Famílias Felizes! 🌟
            </h2>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-bold">
              Veja como outras famílias transformaram suas vidas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 border-4 border-purple-300 shadow-xl hover:scale-105 transition-transform">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-800 mb-6 font-bold text-lg">
                "Em 2 semanas minha filha começou a dormir melhor! 
                As técnicas de respiração são mágicas! ✨"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-purple-400 rounded-full flex items-center justify-center text-white font-black text-xl border-4 border-white shadow-lg">
                  MC
                </div>
                <div>
                  <p className="font-black text-gray-900 text-lg">Maria Clara</p>
                  <p className="text-sm text-gray-700 font-bold">Mãe de 2 filhos 👧👦</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-8 border-4 border-blue-300 shadow-xl hover:scale-105 transition-transform">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-800 mb-6 font-bold text-lg">
                "O diário me ajudou a entender meu filho! 
                Agora conseguimos gerenciar muito melhor! 🎯"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-blue-400 rounded-full flex items-center justify-center text-white font-black text-xl border-4 border-white shadow-lg">
                  RS
                </div>
                <div>
                  <p className="font-black text-gray-900 text-lg">Roberto Silva</p>
                  <p className="text-sm text-gray-700 font-bold">Pai de 1 filho 👦</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 border-4 border-green-300 shadow-xl hover:scale-105 transition-transform">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-800 mb-6 font-bold text-lg">
                "As dicas de alimentação transformaram tudo! 
                Meu filho agora come vegetais! Incrível! 🥦"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-green-400 rounded-full flex items-center justify-center text-white font-black text-xl border-4 border-white shadow-lg">
                  AP
                </div>
                <div>
                  <p className="font-black text-gray-900 text-lg">Ana Paula</p>
                  <p className="text-sm text-gray-700 font-bold">Mãe de 3 filhos 👧👦👶</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-24 px-4 bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-white">
            Oferta Super Especial! 🎉
          </h2>
          <p className="text-2xl text-white mb-12 font-bold">
            Invista na felicidade da sua família hoje!
          </p>

          <div className="bg-white rounded-[3rem] p-8 sm:p-12 border-8 border-yellow-300 shadow-2xl">
            <div className="mb-8">
              <p className="text-purple-600 text-xl mb-2 font-bold">De R$ 497,00 por apenas</p>
              <div className="flex items-center justify-center gap-3">
                <span className="text-7xl sm:text-8xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">R$ 197</span>
                <div className="text-left">
                  <p className="text-base text-gray-700 font-bold">pagamento único</p>
                  <p className="text-base text-gray-700 font-bold">para sempre! ♾️</p>
                </div>
              </div>
              <p className="text-yellow-600 font-black mt-4 text-2xl">
                🔥 Apenas 50 vagas com este preço!
              </p>
            </div>

            <div className="space-y-4 mb-8 text-left max-w-md mx-auto">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center border-3 border-white shadow-lg flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-gray-800">Acesso completo ao app</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center border-3 border-white shadow-lg flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-gray-800">Todas as funcionalidades</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center border-3 border-white shadow-lg flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-gray-800">Atualizações gratuitas sempre</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center border-3 border-white shadow-lg flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-gray-800">Suporte prioritário</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center border-3 border-white shadow-lg flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-gray-800">Garantia de 30 dias</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center border-3 border-white shadow-lg flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-gray-800">Bônus: Guia completo em PDF 📚</span>
              </div>
            </div>

            <button
              onClick={() => setShowQuiz(true)}
              className="w-full bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 text-white px-8 py-6 rounded-full font-black text-2xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3 border-4 border-white shadow-xl"
            >
              Fazer Quiz e Garantir Vaga! 🎯
              <Sparkles className="w-7 h-7" />
            </button>

            <p className="text-purple-600 text-base mt-6 font-bold">
              ✓ Pagamento 100% seguro • ✓ Garantia total de 30 dias
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Pronto para a Transformação? 🚀
          </h2>
          <p className="text-2xl text-gray-700 mb-8 max-w-2xl mx-auto font-bold">
            Faça o quiz gratuito e descubra como o Crescer Feliz pode ajudar!
          </p>
          <button
            onClick={() => setShowQuiz(true)}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 text-white px-12 py-6 rounded-full font-black text-2xl hover:shadow-2xl hover:scale-110 transition-all border-4 border-white shadow-xl"
          >
            Começar Quiz Grátis Agora! ✨
            <Sparkles className="w-7 h-7" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 via-pink-400 to-purple-400 rounded-3xl flex items-center justify-center shadow-xl">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <span className="text-3xl font-black">Crescer Feliz</span>
          </div>
          <p className="text-lg mb-4 font-bold">
            Transformando desafios em sorrisos desde 2024! 🌈
          </p>
          <p className="text-sm font-semibold">
            © 2024 Crescer Feliz. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Quiz Modal */}
      {showQuiz && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[3rem] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-8 border-purple-300">
            <div className="sticky top-0 bg-gradient-to-r from-purple-400 to-pink-400 border-b-4 border-yellow-300 p-6 flex items-center justify-between rounded-t-[2.5rem]">
              <h3 className="text-3xl font-black text-white">
                {quizStep === "result" ? "Seu Resultado! 🎉" : `Pergunta ${quizStep} de 4`}
              </h3>
              <button
                onClick={() => {
                  setShowQuiz(false)
                  resetQuiz()
                }}
                className="w-12 h-12 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center transition-all shadow-lg"
              >
                <X className="w-6 h-6 text-purple-600" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              {/* Question 1 */}
              {quizStep === 1 && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-black text-gray-900 mb-6">
                    Qual é o principal desafio com seu filho(a)? 🤔
                  </h4>
                  <div className="space-y-4">
                    {[
                      { value: "anxiety", label: "Ansiedade e preocupações 😰", icon: Heart, color: "purple" },
                      { value: "sleep", label: "Dificuldades com o sono 😴", icon: Moon, color: "blue" },
                      { value: "food", label: "Problemas com alimentação 🍽️", icon: Utensils, color: "green" },
                      { value: "hyperactivity", label: "Hiperatividade e energia ⚡", icon: Zap, color: "orange" },
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleQuizAnswer("mainChallenge", option.value)}
                        className={`w-full flex items-center gap-4 p-6 bg-${option.color}-50 hover:bg-${option.color}-100 border-4 border-${option.color}-300 rounded-2xl transition-all text-left hover:scale-105 shadow-lg`}
                      >
                        <div className={`w-12 h-12 bg-${option.color}-400 rounded-xl flex items-center justify-center border-3 border-white shadow-lg`}>
                          <option.icon className="w-7 h-7 text-white" />
                        </div>
                        <span className="font-black text-gray-900 text-lg flex-1">{option.label}</span>
                        <ArrowRight className="w-6 h-6 text-gray-600" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Question 2 */}
              {quizStep === 2 && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-black text-gray-900 mb-6">
                    Qual é a idade do seu filho(a)? 👶👧👦
                  </h4>
                  <div className="space-y-4">
                    {[
                      { value: "0-5", label: "0 a 5 anos 👶" },
                      { value: "6-10", label: "6 a 10 anos 👧" },
                      { value: "11-14", label: "11 a 14 anos 👦" },
                      { value: "15+", label: "15 anos ou mais 🧑" },
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleQuizAnswer("childAge", option.value)}
                        className="w-full flex items-center justify-between p-6 bg-purple-50 hover:bg-purple-100 border-4 border-purple-300 rounded-2xl transition-all hover:scale-105 shadow-lg"
                      >
                        <span className="font-black text-gray-900 text-lg">{option.label}</span>
                        <ArrowRight className="w-6 h-6 text-gray-600" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Question 3 */}
              {quizStep === 3 && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-black text-gray-900 mb-6">
                    Há quanto tempo enfrenta esse desafio? ⏰
                  </h4>
                  <div className="space-y-4">
                    {[
                      { value: "recent", label: "Menos de 3 meses" },
                      { value: "moderate", label: "3 a 12 meses" },
                      { value: "long", label: "Mais de 1 ano" },
                      { value: "chronic", label: "Sempre foi assim" },
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleQuizAnswer("urgency", option.value)}
                        className="w-full flex items-center justify-between p-6 bg-blue-50 hover:bg-blue-100 border-4 border-blue-300 rounded-2xl transition-all hover:scale-105 shadow-lg"
                      >
                        <span className="font-black text-gray-900 text-lg">{option.label}</span>
                        <ArrowRight className="w-6 h-6 text-gray-600" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Question 4 */}
              {quizStep === 4 && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-black text-gray-900 mb-6">
                    Já tentou outras soluções antes? 🔍
                  </h4>
                  <div className="space-y-4">
                    {[
                      { value: "none", label: "Não, esta é minha primeira tentativa" },
                      { value: "few", label: "Sim, tentei algumas coisas" },
                      { value: "many", label: "Sim, já tentei várias abordagens" },
                      { value: "professional", label: "Sim, com acompanhamento profissional" },
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleQuizAnswer("previousAttempts", option.value)}
                        className="w-full flex items-center justify-between p-6 bg-green-50 hover:bg-green-100 border-4 border-green-300 rounded-2xl transition-all hover:scale-105 shadow-lg"
                      >
                        <span className="font-black text-gray-900 text-lg">{option.label}</span>
                        <ArrowRight className="w-6 h-6 text-gray-600" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Result */}
              {quizStep === "result" && (
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl p-8 text-center border-4 border-purple-400">
                    <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-xl">
                      <Sparkles className="w-12 h-12 text-white" />
                    </div>
                    <h4 className="text-3xl font-black text-gray-900 mb-3">
                      Perfeito! Crescer Feliz é Ideal para Você! 🎉
                    </h4>
                    <p className="text-gray-800 mb-6 font-bold text-lg">
                      Com base nas suas respostas, nosso app pode ajudar 
                      muito no desafio que você enfrenta! ✨
                    </p>
                  </div>

                  <div className="bg-white border-4 border-purple-300 rounded-3xl p-6">
                    <h5 className="font-black text-gray-900 mb-4 text-xl">Seu plano personalizado inclui:</h5>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Star className="w-6 h-6 text-yellow-500 mt-0.5 flex-shrink-0 fill-yellow-500" />
                        <span className="text-gray-800 font-bold">
                          Estratégias específicas para {quizAnswers.mainChallenge === "anxiety" ? "ansiedade 😰" : 
                          quizAnswers.mainChallenge === "sleep" ? "sono 😴" : 
                          quizAnswers.mainChallenge === "food" ? "alimentação 🍽️" : "hiperatividade ⚡"}
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Star className="w-6 h-6 text-yellow-500 mt-0.5 flex-shrink-0 fill-yellow-500" />
                        <span className="text-gray-800 font-bold">
                          Conteúdo adaptado para {quizAnswers.childAge} anos
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Star className="w-6 h-6 text-yellow-500 mt-0.5 flex-shrink-0 fill-yellow-500" />
                        <span className="text-gray-800 font-bold">
                          Ferramentas de acompanhamento diário
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Star className="w-6 h-6 text-yellow-500 mt-0.5 flex-shrink-0 fill-yellow-500" />
                        <span className="text-gray-800 font-bold">
                          Exercícios práticos para usar agora
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border-4 border-yellow-400 rounded-3xl p-6 text-center">
                    <p className="text-2xl font-black text-gray-900 mb-2">
                      🎉 Oferta Especial para Você!
                    </p>
                    <p className="text-5xl font-black text-purple-600 mb-2">
                      R$ 197,00
                    </p>
                    <p className="text-base text-gray-700 mb-4 font-bold">
                      Pagamento único • Para sempre • Garantia de 30 dias
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      alert("Redirecionando para o checkout...")
                    }}
                    className="w-full bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 text-white px-8 py-6 rounded-full font-black text-2xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3 border-4 border-white shadow-xl"
                  >
                    <ShoppingCart className="w-6 h-6" />
                    Garantir Minha Vaga Agora! 🎯
                  </button>

                  <p className="text-center text-base text-gray-600 font-bold">
                    ✓ Pagamento 100% seguro • ✓ Dinheiro de volta garantido
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
