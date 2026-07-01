import {
  Store,
  Bike,
  Calculator,
  ShieldCheck,
  CheckCircle2,
  IceCream2,
  Smartphone,
  TrendingUp,
  TrendingDown,
  PieChart,
  ClipboardList,
  Monitor,
  Printer,
  FileText,
  Users,
  Box,
  AlertTriangle,
  Star,
  Home,
  MenuSquare,
  UtensilsCrossed,
  ShoppingCart,
  CupSoda,
  BaggageClaim,
  Settings,
  CircleDollarSign,
  User,
  ChevronDown,
  DollarSign,
  MessageCircle,
  Plus,
  Minus,
  Scale,
  ArrowDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';

const FaqItem = ({ question, answer }: { question: string, answer: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <div 
        role="button"
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
        className="w-full py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
      >
        <span className="font-bold text-lg text-zinc-200">{question}</span>
        {isOpen ? <Minus className="w-5 h-5 text-electric-purple shrink-0" /> : <Plus className="w-5 h-5 text-gold shrink-0" />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-5 text-zinc-400 text-sm md:text-base leading-relaxed space-y-3">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SystemMockupGraphic = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    className="relative rounded-2xl bg-[#fafafa] border border-white/10 shadow-2xl overflow-hidden flex h-[400px] md:h-[550px] w-full max-w-5xl mx-auto"
  >
    {/* Sidebar */}
    <div className="hidden md:flex w-[220px] bg-[#6610f2] flex-col justify-between z-10 shrink-0 text-white">
      <div>
        <div className="p-5 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
            <IceCream2 className="w-5 h-5 text-pink-300" />
          </div>
          <div>
            <span className="text-sm font-bold tracking-tight block leading-tight">Gestão Mix</span>
            <span className="text-[9px] text-white/60 font-medium">📍 Sistema para Açaiteria</span>
          </div>
        </div>

        <div className="flex flex-col mt-2 px-2 space-y-0.5" style={{ scrollbarWidth: 'none' }}>
          <div className="flex items-center gap-3 px-3 py-2 bg-black/20 rounded-lg text-white w-full cursor-pointer">
            <Home className="w-4 h-4" />
            <span className="text-xs font-semibold">Visão Geral</span>
          </div>
          {[
            { icon: ClipboardList, label: 'Pedidos / Mesas' },
            { icon: UtensilsCrossed, label: 'Produção / Cozinha' },
          ].map(item => (
            <div key={item.label} className="flex items-center gap-3 px-3 py-2 text-white/70 hover:bg-white/10 hover:text-white rounded-lg cursor-default transition-colors w-full">
              <item.icon className="w-4 h-4" />
              <span className="text-xs">{item.label}</span>
            </div>
          ))}

          <div className="flex items-center gap-3 px-3 py-2 text-white/70 hover:bg-white/10 hover:text-white rounded-lg cursor-default transition-colors w-full bg-white/5 border-l-2 border-[#6610f2]">
             {/* The image shows PDV / Vendas as active but in the original mock Visão Geral was active. We'll make PDV slightly highlighted */}
            <Monitor className="w-4 h-4" />
            <span className="text-xs">PDV / Vendas</span>
          </div>

          {[
            { icon: Box, label: 'Insumos / Estoque' },
            { icon: IceCream2, label: 'Açais Montados' },
            { icon: CupSoda, label: 'Milk-shakes' },
            { icon: BaggageClaim, label: 'Produtos Revenda' },
            { icon: Calculator, label: 'Custo da Operação' },
            { icon: Settings, label: 'Configurações' },
            { icon: FileText, label: 'Fiscal / Certificado' },
            { icon: User, label: 'Minha Conta' }
          ].map(item => (
            <div key={item.label} className="flex items-center gap-3 px-3 py-2 text-white/70 hover:bg-white/10 hover:text-white rounded-lg cursor-default transition-colors w-full">
              <item.icon className="w-4 h-4 shrink-0" />
              <span className="text-xs truncate">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 bg-black/10 flex items-center justify-between cursor-pointer">
         <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
               <User className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-medium">Usuário</span>
         </div>
         <ChevronDown className="w-3.5 h-3.5 text-white/50" />
      </div>
    </div>

    {/* Main Content */}
    <div className="flex-1 p-5 md:p-6 flex flex-col z-10 bg-[#fafafa] overflow-y-auto text-zinc-800" style={{ scrollbarWidth: 'none' }}>
      <div className="flex items-center gap-2 mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-zinc-800">Visão Geral</h1>
        <span className="text-xs text-zinc-400 mt-1">(Hoje)</span>
      </div>

      {/* Top 4 Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="rounded-xl border border-zinc-200 bg-white p-4 flex justify-between items-center shadow-sm">
          <div className="flex flex-col">
             <span className="text-[10px] md:text-xs text-zinc-500 mb-1">Faturamento Hoje</span>
             <span className="font-display font-bold text-lg md:text-xl text-zinc-900 leading-none">R$ 545,23</span>
          </div>
          <div className="w-8 h-8 md:w-10 md:h-10 bg-green-50 text-green-500 rounded-lg flex items-center justify-center shrink-0">
             <DollarSign className="w-5 h-5" />
          </div>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-4 flex justify-between items-center shadow-sm">
          <div className="flex flex-col">
             <span className="text-[10px] md:text-xs text-zinc-500 mb-1">Lucro Bruto Hoje</span>
             <span className="font-display font-bold text-lg md:text-xl text-zinc-900 leading-none">R$ 302,15</span>
          </div>
          <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center shrink-0">
             <TrendingUp className="w-5 h-5" />
          </div>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-4 flex justify-between items-center shadow-sm">
          <div className="flex flex-col">
             <span className="text-[10px] md:text-xs text-zinc-500 mb-1">Vendas Realizadas Hoje</span>
             <span className="font-display font-bold text-lg md:text-xl text-zinc-900 leading-none">12</span>
          </div>
          <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-50 text-purple-500 rounded-lg flex items-center justify-center shrink-0">
             <ShoppingCart className="w-5 h-5" />
          </div>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-4 flex justify-between items-center shadow-sm">
          <div className="flex flex-col">
             <span className="text-[10px] md:text-xs text-zinc-500 mb-1">Ticket Médio Hoje</span>
             <span className="font-display font-bold text-lg md:text-xl text-zinc-900 leading-none">R$ 45,44</span>
          </div>
          <div className="w-8 h-8 md:w-10 md:h-10 bg-pink-50 text-pink-500 rounded-lg flex items-center justify-center shrink-0">
             <DollarSign className="w-5 h-5" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1">
        
        {/* Left Column */}
        <div className="flex flex-col gap-4">
           {/* Produtos Mais Vendidos */}
           <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm flex-1">
              <div className="flex items-center gap-2 mb-4">
                 <ShoppingCart className="w-4 h-4 text-zinc-400" />
                 <h2 className="text-sm font-bold text-zinc-800">Produtos Mais Vendidos</h2>
              </div>
              <div className="space-y-2">
                 {[
                    { name: 'Açaí esperança 300 ml', qty: '4 un' },
                    { name: 'Açaí Esperança 500 ml', qty: '4 un' },
                    { name: 'Sorvete Pote 2 l tradicional', qty: '3 un' },
                    { name: 'Cobertura 1,300 G sabores', qty: '3 un' },
                    { name: 'Milkshake 300 ml', qty: '3 un' },
                 ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center bg-[#fafafa] p-2.5 rounded-lg border border-zinc-100">
                       <span className="text-[11px] md:text-xs text-zinc-700">{item.name}</span>
                       <span className="text-[#6610f2] font-semibold bg-[#6610f2]/10 px-2 py-0.5 rounded text-[10px]">{item.qty}</span>
                    </div>
                 ))}
              </div>
           </div>
           
           {/* Produtos com Maior Margem */}
           <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm flex-1">
              <div className="flex items-center gap-2 mb-4">
                 <h2 className="text-sm font-bold text-zinc-800">Produtos com Maior Margem</h2>
              </div>
              <div className="space-y-2">
                 {[
                    { name: 'Milkshake 300 ml', val: '57.5%' },
                    { name: 'Açai Gratidão 300 ml', val: '49.9%' }
                 ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center bg-[#fafafa] p-2.5 rounded-lg border border-zinc-100">
                       <span className="text-[11px] md:text-xs text-zinc-700">{item.name}</span>
                       <span className="text-green-600 font-bold text-xs">{item.val}</span>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
           {/* Estoque Baixo */}
           <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm flex-1">
              <div className="flex items-center gap-2 mb-4 border-b border-zinc-100 pb-3">
                 <AlertTriangle className="w-4 h-4 text-red-500" />
                 <h2 className="text-sm font-bold text-zinc-800">Estoque Baixo</h2>
              </div>
              <div className="space-y-2">
                 {[
                    { name: 'Mousse de maracuja', qtd: '0 g', min: '0 g' },
                    { name: 'sacola', qtd: '-50 un', min: '0 un' },
                    { name: 'copo 300 ml', qtd: '-16 un', min: '0 un' },
                    { name: 'creme avelã', qtd: '-128 g', min: '0 g' },
                    { name: 'creme de ovomaltine', qtd: '0 g', min: '0 g' }
                 ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center bg-red-50/40 p-2.5 rounded-lg border border-red-100/50">
                       <span className="text-[11px] md:text-xs text-zinc-700">{item.name}</span>
                       <div className="flex items-center gap-3">
                          <span className="text-red-600 font-bold text-[10px] md:text-[11px]">Atual: {item.qtd}</span>
                          <span className="text-zinc-400 text-[10px] md:text-[11px]">Mín: {item.min}</span>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* Insumos Mais Utilizados */}
           <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm flex-1">
              <div className="flex items-center gap-2 mb-4">
                 <h2 className="text-sm font-bold text-zinc-800">Insumos Mais Utilizados</h2>
              </div>
              <div className="space-y-2">
                 {[
                    { name: 'sacola', usage: 'Usado em 18 cardápio(s)' },
                    { name: 'Leite em pó', usage: 'Usado em 17 cardápio(s)' }
                 ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center bg-[#fafafa] p-2.5 rounded-lg border border-zinc-100">
                       <span className="text-[11px] md:text-xs text-zinc-700">{item.name}</span>
                       <span className="text-[#6610f2]/80 bg-[#6610f2]/10 px-2 py-0.5 rounded text-[10px]">{item.usage}</span>
                    </div>
                 ))}
              </div>
           </div>
        </div>

      </div>
    </div>
  </motion.div>
);

export default function App() {
  return (
    <>
      <div className="min-h-screen bg-deep-purple text-white overflow-x-hidden relative selection:bg-electric-purple selection:text-white font-sans">
        {/* Decorative Background Elements Simple */}
      <div className="absolute top-0 left-0 w-full h-[300px] md:h-[500px] bg-electric-purple/5 rounded-full -translate-y-1/2 opacity-30 pointer-events-none" />

      {/* Header / Nav */}
      <header className="container mx-auto px-6 py-4 md:py-6 flex justify-center items-center relative z-10">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-gold rounded-lg flex items-center justify-center -rotate-6 shadow-[0_0_15px_rgba(255,215,0,0.3)]">
            <IceCream2 className="text-black w-5 h-5 md:w-6 md:h-6" />
          </div>
          <span className="font-display font-bold text-xl md:text-2xl tracking-tight text-white">
            Gestão<span className="text-gold">Mix</span>
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-8 pb-16 md:pt-12 md:pb-24 relative z-10 flex flex-col items-center">
        <div className="flex flex-col text-center space-y-5 md:space-y-6 max-w-4xl mx-auto w-full items-center">
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.15] md:leading-[1.1] tracking-tight uppercase"
          >
            <span className="text-gold text-3xl sm:text-4xl md:text-5xl lg:text-6xl block mb-2 md:mb-3">Dono de Açaiteria e Sorveteria:</span>
            VOCÊ SABE QUANTO <span className="text-electric-purple text-transparent bg-clip-text bg-gradient-to-r from-electric-purple to-purple-400">REALMENTE LUCRA</span> EM CADA COPO DE AÇAÍ?
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center max-w-3xl mx-auto mb-4 space-y-6"
          >
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 font-medium leading-relaxed max-w-2xl">
              Descubra automaticamente seus custos, margem de lucro, estoque e pedidos em um único sistema.
            </p>
          </motion.div>

          {/* Large Image Hero */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full max-w-5xl relative mt-4 mb-8 flex items-center justify-center overflow-hidden group"
          >
            {/* Optional glow effect behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-electric-purple/30 blur-[120px] rounded-full opacity-50"></div>
            <img 
              src="https://i.postimg.cc/SRs9vG95/Chat-GPT-Image-7-de-jun-de-2026-15-29-50.jpg" 
              alt="Sistema Gestão Mix" 
              className="relative z-10 w-full h-auto rounded-[2rem] shadow-[0_0_50px_rgba(139,92,246,0.2)] border border-white/10"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
          >
            <a 
              href="#oferta"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#oferta')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4.5 rounded-full bg-gradient-to-r from-gold-light via-gold to-gold-dark text-black font-extrabold text-lg text-center shadow-[0_0_30px_rgba(255,215,0,0.4)] hover:shadow-[0_0_40px_rgba(255,215,0,0.6)] hover:scale-105 transition-all outline-none"
            >
              QUERO DESCOBRIR MEU LUCRO
            </a>
          </motion.div>

        </div>
      </section>
      
      {/* SEÇÃO 2 - BENEFÍCIO PRINCIPAL */}
      <section className="bg-[#12001e]/80 py-16 md:py-24 relative overflow-hidden backdrop-blur-sm border-y border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16 max-w-7xl mx-auto">
            
            {/* Texto à esquerda */}
            <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display leading-[1.1] md:leading-[1.1] tracking-tight mb-5 md:mb-6 uppercase">
                CRIE A FICHA TÉCNICA DE CADA <span className="text-electric-purple text-transparent bg-clip-text bg-gradient-to-r from-electric-purple to-purple-400">PRODUTO MONTADO</span> EM SUA AÇAÍTERIA!
              </h2>
              
              <p className="text-zinc-300 text-lg md:text-xl font-medium mb-8 leading-relaxed max-w-md lg:max-w-none">
                O Gestão Mix calcula automaticamente seus insumos, taxas, margem de lucro e preço ideal de venda.
              </p>

              {/* Bloco Visual de Resultado - Compacto */}
              <div className="w-full bg-dark-card border border-white/10 rounded-[1.5rem] p-5 mb-8 shadow-2xl flex flex-col gap-3 max-w-sm mx-auto lg:mx-0">
                <div className="flex justify-between items-center text-base md:text-lg font-bold bg-white/5 p-4 rounded-xl border border-white/5">
                   <span className="text-zinc-300">Preço de Venda:</span>
                   <span className="text-white text-xl">R$ 25,00</span>
                </div>
                <div className="flex justify-between items-center text-base md:text-lg font-bold bg-white/5 p-4 rounded-xl border border-white/5">
                   <span className="text-zinc-400">Custo Total:</span>
                   <span className="text-red-400 text-xl">- R$ 12,50</span>
                </div>
                <div className="flex justify-between items-center text-lg md:text-xl font-black bg-green-500/10 p-5 rounded-xl border border-green-500/20 mt-1">
                   <span className="text-green-400">Lucro Real:</span>
                   <span className="text-green-400 text-2xl md:text-3xl">R$ 12,50</span>
                </div>
              </div>

              {/* Benefícios */}
              <div className="flex flex-col gap-4 w-full max-w-sm mx-auto lg:mx-0">
                {[
                  'Controle completo dos insumos',
                  'Preço ideal para Balcão e iFood',
                  'Margem de lucro automática',
                  'Ficha técnica profissional'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-left">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-green-400 font-bold text-sm">✓</span>
                    </div>
                    <span className="text-white text-lg md:text-xl font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Imagem da ficha técnica à direita */}
            <div className="w-full lg:w-[55%] relative group flex justify-center mt-6 lg:mt-0">
              {/* Soft shadow/Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-electric-purple/20 blur-[80px] lg:blur-[120px] rounded-full opacity-70"></div>
              
              {/* Image Container */}
              <div className="relative z-10 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border-2 border-white/10 shadow-[0_20px_60px_rgba(139,92,246,0.2)] lg:group-hover:scale-[1.02] transition-transform duration-700 w-full max-w-2xl mx-auto">
                <img 
                  src="https://i.postimg.cc/d32Rws6j/Chat-GPT-Image-7-de-jun-de-2026-15-50-41.jpg" 
                  alt="Ficha Técnica Gestão Mix" 
                  className="w-full h-auto block object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 3 - COMO O SISTEMA AJUDA */}
      <section className="py-16 md:py-24 relative z-10 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col gap-16 md:gap-24">
            
            {/* Card 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-6 border border-gold/20 shadow-[0_0_15px_rgba(255,215,0,0.1)]">
                  <PieChart className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">Descubra seu lucro real</h3>
                <p className="text-zinc-400 text-lg md:text-xl font-medium leading-relaxed">Veja automaticamente o lucro de cada produto.</p>
              </div>
              <div className="w-full md:w-1/2 rounded-[2rem] flex items-center justify-center group relative shadow-2xl overflow-hidden border border-white/10 p-2 md:p-6 bg-gradient-to-br from-white/5 to-transparent">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gold/20 blur-[100px] rounded-full opacity-50 transition-opacity duration-700"></div>
                <img 
                  src="https://i.postimg.cc/brnGjmzC/Chat-GPT-Image-7-de-jun-de-2026-16-04-59.jpg" 
                  alt="Dashboard de Lucro Gestão Mix" 
                  className="relative z-10 w-full h-auto rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform group-hover:scale-[1.02] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
              <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-16 h-16 bg-electric-purple/10 rounded-2xl flex items-center justify-center mb-6 border border-electric-purple/20 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                  <Box className="w-8 h-8 text-electric-purple" />
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">Nunca seja pego de surpresa</h3>
                <p className="text-zinc-400 text-lg md:text-xl font-medium leading-relaxed">Receba alertas antes dos insumos acabarem.</p>
              </div>
              <div className="w-full md:w-1/2 rounded-[2rem] flex items-center justify-center group relative shadow-2xl overflow-hidden border border-white/10 p-2 md:p-6 bg-gradient-to-br from-white/5 to-transparent">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-electric-purple/20 blur-[100px] rounded-full opacity-50 transition-opacity duration-700"></div>
                <img 
                  src="https://i.postimg.cc/sxMYGPVd/Chat-GPT-Image-7-de-jun-de-2026-16-13-07.jpg" 
                  alt="Estoque Gestão Mix" 
                  className="relative z-10 w-full h-auto rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform group-hover:scale-[1.02] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Card 2.5 - Venda por Peso */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 pt-8 md:pt-12 border-t border-white/5">
              <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                  <Scale className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 uppercase leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-200">Venda por peso sem precisar de balança integrada</h3>
                <p className="text-zinc-300 text-lg md:text-xl font-medium leading-relaxed mb-6">
                  Informe apenas o valor da venda e o sistema calcula automaticamente quantos gramas foram vendidos.
                </p>
                <p className="text-sm md:text-base text-zinc-500 mb-8 max-w-sm">
                  Ideal para açaiterias e sorveterias que vendem produtos por peso e desejam controlar vendas e estoque sem investir em integração com balanças.
                </p>
                
                <div className="flex flex-col gap-3 w-full md:w-auto">
                  {['Controle automático de peso vendido', 'Sem balança integrada', 'Baixa automática de estoque', 'Relatórios mais precisos', 'Controle real de faturamento'].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                      <span className="text-zinc-300 font-medium text-sm md:text-base">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="w-full md:w-1/2 rounded-[2rem] flex flex-col items-center justify-center group relative shadow-2xl border border-white/10 p-6 md:p-8 bg-gradient-to-br from-white/5 to-transparent overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-green-500/20 blur-[100px] rounded-full opacity-50"></div>
                
                {/* Visual Demonstration Custom UI */}
                <div className="relative z-10 w-full max-w-sm flex flex-col gap-4">
                  
                  {/* Step 1 */}
                  <div className="bg-dark-elem/80 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex justify-between items-center shadow-lg">
                    <span className="text-zinc-400 font-medium text-sm">Preço do KG:</span>
                    <span className="text-white font-bold text-lg">R$ 58,99</span>
                  </div>
                  
                  <div className="flex justify-center -my-2.5 z-20">
                    <div className="w-8 h-8 rounded-full bg-dark-bg border border-white/10 flex items-center justify-center shadow-md">
                       <ArrowDown className="w-4 h-4 text-green-500" />
                    </div>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 flex justify-between items-center shadow-[0_0_15px_rgba(34,197,94,0.1)] relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
                    <span className="text-green-50 font-medium pl-2">Venda realizada:</span>
                    <span className="text-green-400 font-black text-xl">R$ 30,00</span>
                  </div>
                  
                  <div className="flex justify-center -my-2.5 z-20">
                    <div className="w-8 h-8 rounded-full bg-dark-bg border border-white/10 flex items-center justify-center shadow-md">
                       <ArrowDown className="w-4 h-4 text-green-500" />
                    </div>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="bg-dark-elem/80 backdrop-blur-sm border border-white/10 rounded-xl p-5 flex flex-col items-center text-center shadow-lg">
                    <span className="text-zinc-400 font-medium text-sm mb-1">Peso calculado automaticamente:</span>
                    <span className="text-white font-black text-3xl tracking-tight">509<span className="text-lg text-zinc-500 ml-1">g</span></span>
                  </div>
                  
                  {/* Step 4 Updates */}
                  <div className="mt-4 bg-black/40 rounded-xl p-4 border border-white/5">
                    <p className="text-xs text-zinc-500 uppercase tracking-wider font-bold mb-3 text-center">Atualizações Automáticas</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-white/5 text-zinc-300 border border-white/10 flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-500" /> Estoque</span>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-white/5 text-zinc-300 border border-white/10 flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-500" /> Relatórios</span>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-white/5 text-zinc-300 border border-white/10 flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-500" /> Faturamento</span>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                  <ClipboardList className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">Gerencie pedidos e vendas Balcão/Mesas</h3>
                <p className="text-zinc-400 text-lg md:text-xl font-medium leading-relaxed">Centralize toda a operação em um só lugar.</p>
              </div>
              <div className="w-full md:w-1/2 rounded-[2rem] flex items-center justify-center group relative shadow-2xl overflow-hidden border border-white/10 p-2 md:p-6 bg-gradient-to-br from-white/5 to-transparent">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/20 blur-[100px] rounded-full opacity-50 transition-opacity duration-700"></div>
                <img 
                  src="https://i.postimg.cc/WbPKct8X/Chat-GPT-Image-7-de-jun-de-2026-16-23-31.jpg" 
                  alt="Pedidos e Vendas Gestão Mix" 
                  className="relative z-10 w-full h-auto rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform group-hover:scale-[1.02] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 4 - ANTES E DEPOIS */}
      <section className="py-16 md:py-24 bg-black/40 border-y border-white/5 relative z-10 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-12 md:mb-16">A diferença na prática</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {/* Antes */}
            <div className="bg-red-500/5 border border-red-500/20 rounded-[2rem] p-8 md:p-10 flex flex-col h-full shadow-[0_10px_40px_rgba(239,68,68,0.05)]">
              <h3 className="text-xl md:text-2xl font-bold text-red-500 mb-8 border-b border-red-500/20 pb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">❌</span> 
                Sem Gestão Mix
              </h3>
              <ul className="space-y-6 flex-1">
                {['Faz contas manualmente', 'Não sabe a margem real', 'Perde dinheiro sem perceber', 'Controle difícil'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-zinc-300 text-lg md:text-xl font-medium">
                    <span className="text-red-500 font-bold mt-1 text-base">✗</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Depois */}
            <div className="bg-green-500/5 border border-green-500/20 rounded-[2rem] p-8 md:p-10 flex flex-col h-full shadow-[0_10px_40px_rgba(34,197,94,0.05)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 className="text-xl md:text-2xl font-bold text-green-400 mb-8 border-b border-green-500/20 pb-4 flex items-center gap-3 relative z-10">
                <span className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">✅</span> 
                Com Gestão Mix
              </h3>
              <ul className="space-y-6 flex-1 relative z-10">
                {['Lucro calculado automaticamente', 'Estoque organizado', 'Custos controlados', 'Mais segurança nas decisões'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-white text-lg md:text-xl font-bold">
                    <span className="text-green-400 font-bold mt-1 text-base">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href="https://pay.hotmart.com/A106056595I?checkoutMode=10"
              className="inline-flex items-center justify-center px-8 py-5 md:px-12 md:py-6 rounded-full bg-gradient-to-r from-gold-light via-gold to-gold-dark text-black font-extrabold text-lg md:text-xl md:text-2xl transition-all shadow-[0_0_30px_rgba(255,215,0,0.4)] hover:shadow-[0_0_40px_rgba(255,215,0,0.6)] hover:scale-105 uppercase tracking-wide cursor-pointer"
            >
              Garantir meu acesso agora &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 relative z-10 px-6 bg-dark-card/30">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4">Quem usa, <span className="text-gold">recomenda</span></h2>
            <p className="text-zinc-400 text-base md:text-lg">Resultados reais de empreendedores do ramo de açaí e sorvete que transformaram a gestão de seus negócios.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                text: "Antes eu não sabia se o iFood dava lucro ou prejuízo. Com o Gestão Mix, separei as taxas e finalmente vi a cor do dinheiro. Simplesmente incrível.",
                author: "Carlos E.",
                role: "Dono de Açaiteria",
                stars: 5,
                image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop"
              },
              {
                text: "O PDV é muito rápido. No domingo de calor a fila andava muito devagar, hoje atendemos o dobro de clientes no mesmo tempo e sem dor de cabeça.",
                author: "Mariana S.",
                role: "Proprietária de Sorveteria",
                stars: 5,
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
              },
              {
                text: "Acabou a falta de Nutella e Morango no meio do expediente. O alerta de estoque crítico salvou minha operação mais de uma vez. Recomendo de olhos fechados.",
                author: "Roberto A.",
                role: "Gerente de Loja",
                stars: 5,
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-dark-card border border-white/10 rounded-2xl p-8 relative flex flex-col justify-between shadow-xl hover:border-gold/30 transition-colors">
                <div className="relative z-10">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.stars)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-zinc-300 mb-8 italic leading-relaxed text-sm md:text-base">"{testimonial.text}"</p>
                </div>
                <div className="flex items-center gap-4 relative z-10 border-t border-white/10 pt-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-electric-purple to-deep-purple overflow-hidden flex items-center justify-center border-2 border-white/20 shadow-lg">
                     {testimonial.image ? (
                        <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                     ) : (
                        <span className="text-sm font-bold text-white">{testimonial.author.charAt(0)}</span>
                     )}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.author}</h4>
                    <p className="text-xs text-zinc-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Offer Clarification Section */}
      <section className="py-16 md:py-24 relative z-10 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Você vende ou <span className="text-electric-purple">realmente lucra?</span></h2>
          <p className="text-zinc-400 text-lg md:text-xl mb-4 font-medium">
            Faturamento não é lucro.
          </p>
          <p className="text-zinc-400 text-base md:text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
            Sem controle de custos, estoque e margem, muitos negócios vendem todos os dias sem saber quanto realmente sobra no final do mês.
          </p>
          <p className="text-zinc-200 text-lg md:text-xl font-bold bg-white/5 inline-block px-6 py-3 rounded-xl border border-white/10">
            O Gestão Mix foi criado para acabar com essa dúvida.
          </p>
        </div>
      </section>

      {/* Offer Section */}
      <section id="oferta" className="py-16 md:py-24 relative z-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto rounded-[2rem] md:rounded-[3rem] bg-dark-card border border-gold/50 shadow-[0_0_40px_rgba(255,215,0,0.1)] md:shadow-[0_0_80px_rgba(255,215,0,0.15)] relative p-1 md:p-1.5 group">
          {/* Offer Card Content */}
          <div className="bg-deep-purple/95 backdrop-blur-2xl rounded-[1.85rem] md:rounded-[2.85rem] px-6 py-12 md:p-16 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 border-2 border-gold/40">
            
            {/* Context/Texts */}
            <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-electric-purple/20 text-electric-purple uppercase tracking-widest text-[10px] md:text-xs font-bold mb-6 border border-electric-purple/30 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                PLANO COMPLETO
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 drop-shadow-md leading-[1.1]">
                Pare de perder dinheiro <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">sem perceber.</span>
              </h2>
              
              <div className="space-y-4 md:space-y-5 w-full mt-8">
                {[
                  'Saiba exatamente quanto você ganha em cada venda',
                  'Descubra quais produtos geram mais lucro',
                  'Controle estoque e desperdícios automaticamente',
                  'Frente de caixa rápida e simples',
                  'Monitor de custos e margem em tempo real',
                  'Atualizações constantes incluídas',
                  'Suporte especializado',
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-electric-purple/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-electric-purple" />
                    </div>
                    <span className="text-zinc-200 text-sm md:text-base font-medium text-left">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Pricing Box */}
            <div className="md:w-[45%] w-full bg-black/40 border border-white/10 rounded-3xl p-6 md:p-10 flex flex-col items-center shadow-2xl relative overflow-hidden">
               <div className="relative z-10 w-full flex flex-col items-center">
                  
                  {/* Highlight Block Above Price */}
                  <div className="w-full bg-electric-purple/10 border border-electric-purple/30 rounded-xl p-3 mb-8">
                     <p className="text-white font-bold text-center text-sm md:text-base leading-tight">
                        "Corrigir apenas <span className="text-gold">um produto</span> com margem errada já pode pagar a mensalidade do Gestão Mix."
                     </p>
                  </div>
                  
                  <div className="flex items-end justify-center gap-1.5 md:gap-2 text-white mb-2">
                    <span className="text-2xl md:text-3xl font-display font-bold pb-2 md:pb-4 text-zinc-400">R$</span>
                    <span className="text-6xl md:text-[5.5rem] leading-none font-black font-display tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-300">49,90</span>
                    <span className="text-lg md:text-xl text-zinc-400 font-bold pb-2 md:pb-4 uppercase">/ Mês</span>
                  </div>
                  
                  <div className="mb-8 w-full flex flex-col gap-3 text-sm md:text-base text-zinc-300 text-left px-2 sm:px-6">
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" /> <span className="font-medium">Sem fidelidade</span></div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" /> <span className="font-medium">Cancele quando quiser</span></div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" /> <span className="font-medium">Atualizações inclusas</span></div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" /> <span className="font-medium">Suporte incluso</span></div>
                  </div>
                  
                  <a href="https://pay.hotmart.com/A106056595I?checkoutMode=10" className="w-full px-4 py-4 rounded-2xl bg-gradient-to-r from-gold-light via-gold to-gold-dark text-black shadow-[0_10px_30px_rgba(255,215,0,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all flex flex-col items-center justify-center">
                    <span className="font-black text-xl md:text-2xl uppercase tracking-wide drop-shadow-sm">Começar Agora</span>
                    <span className="text-xs font-bold opacity-80 mt-1">Acesso imediato após confirmação.</span>
                  </a>
                  
                  <div className="mt-6 flex flex-col items-center justify-center gap-2 text-xs md:text-sm text-zinc-400 w-full bg-white/5 p-4 rounded-xl border border-white/10">
                    <div className="flex items-center gap-2 font-bold text-white text-sm md:text-base"><ShieldCheck className="w-5 h-5 text-electric-purple" /> GARANTIA DE 7 DIAS</div>
                    <span className="text-center font-medium leading-relaxed">Teste sem risco. Se não gostar, solicite o reembolso dentro do prazo da plataforma.</span>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 relative z-10 px-6 bg-black/40 border-t border-white/5">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Perguntas Frequentes</h2>
            <p className="text-zinc-400">Tire suas dúvidas e veja como é fácil começar.</p>
          </div>
          
          <div className="bg-dark-card border border-white/10 rounded-3xl p-6 md:p-8 shadow-xl">
            <FaqItem 
              question="Como recebo acesso ao sistema após a compra?" 
              answer={
                <>
                  <p>Assim que seu pagamento for aprovado pela Hotmart, você recebe acesso <span className="text-electric-purple font-bold">imediatamente</span>.</p>
                  <p>Dentro da área de membros você encontrará o link do sistema e as instruções para criar seu usuário e senha.</p>
                  <p>Em poucos minutos você já pode começar a utilizar o Gestão Mix.</p>
                </>
              } 
            />
            <FaqItem 
              question="Posso testar sem risco?" 
              answer={
                <>
                  <p>A compra é protegida pela <span className="text-electric-purple font-bold">Garantia Incondicional de 7 Dias da Hotmart</span>.</p>
                  <p>Se dentro desse período você entender que o Gestão Mix não atende sua necessidade, basta solicitar o reembolso e receberá 100% do valor pago.</p>
                  <p>Sem burocracia.</p>
                  <p>Sem questionamentos.</p>
                  <p>Sem risco para você.</p>
                </>
              } 
            />
            <FaqItem 
              question="Preciso assinar contrato ou ficar preso ao sistema?" 
              answer={
                <>
                  <p>Não.</p>
                  <p>O Gestão Mix funciona por assinatura mensal <span className="text-electric-purple font-bold">sem fidelidade</span>.</p>
                  <p>Você pode cancelar quando quiser diretamente pela Hotmart.</p>
                </>
              } 
            />
            <FaqItem 
              question="O suporte está incluso na assinatura?" 
              answer={
                <>
                  <p>Sim.</p>
                  <p>O <span className="text-electric-purple font-bold">suporte já está incluso</span> no valor da assinatura.</p>
                  <p>Você não paga nada adicional para receber ajuda, tirar dúvidas ou obter orientações sobre o uso do sistema.</p>
                </>
              } 
            />
            <FaqItem 
              question="O sistema vale a pena para uma açaiteria pequena?" 
              answer={
                <>
                  <p>Sim.</p>
                  <p>Inclusive é nas operações menores que o controle de custos gera mais resultado.</p>
                  <p>Muitos estabelecimentos descobrem que estão vendendo produtos com lucro muito menor do que imaginavam.</p>
                  <p>O Gestão Mix ajuda a identificar isso rapidamente.</p>
                </>
              } 
            />
            <FaqItem 
              question="R$49,90 por mês não é caro?" 
              answer={
                <>
                  <p>Na prática, não.</p>
                  <p>Um único produto com preço corrigido, uma taxa do iFood identificada ou um desperdício evitado pode gerar uma economia maior que o valor da mensalidade.</p>
                  <p>O objetivo do sistema é fazer você ganhar mais dinheiro do que investe.</p>
                </>
              } 
            />
            <FaqItem 
              question="Vou receber ajuda para configurar o sistema?" 
              answer={
                <>
                  <p>Sim. Você não ficará sozinho.</p>
                  <p>Ao se tornar assinante, você terá acesso ao suporte especializado para tirar dúvidas, aprender a configurar o sistema e utilizar todos os recursos da melhor forma possível.</p>
                </>
              } 
            />
            <FaqItem 
              question="E se eu tiver dificuldade para usar?" 
              answer={
                <>
                  <p>Sem problemas.</p>
                  <p>Nosso suporte está disponível para ajudar você durante a implantação e utilização do sistema.</p>
                  <p>O objetivo é fazer você extrair o máximo resultado da ferramenta, mesmo que nunca tenha usado um sistema de gestão antes.</p>
                </>
              } 
            />
            <FaqItem 
              question="Quanto tempo demora para começar a usar?" 
              answer={
                <p>Na maioria dos casos, em menos de 30 minutos você já consegue cadastrar seus primeiros produtos, configurar seus insumos e começar a acompanhar seus lucros.</p>
              } 
            />
            <FaqItem 
              question="Vou perder meus dados se cancelar?" 
              answer={
                <>
                  <p>Não.</p>
                  <p>Seus dados permanecem armazenados por um período de segurança, permitindo que você reative sua assinatura futuramente sem precisar cadastrar tudo novamente.</p>
                </>
              } 
            />
            <FaqItem 
              question="Posso acessar pelo celular?" 
              answer={
                <>
                  <p>Sim.</p>
                  <p>O Gestão Mix funciona em computadores, notebooks, tablets e celulares.</p>
                  <p>Você pode acompanhar sua operação de qualquer lugar.</p>
                </>
              } 
            />
            <FaqItem 
              question="Minha equipe pode utilizar o sistema?" 
              answer={
                <>
                  <p>Sim.</p>
                  <p>Você pode cadastrar funcionários e definir permissões específicas para cada função, como caixa, atendimento, cozinha e gerência.</p>
                </>
              } 
            />
          </div>
        </div>
      </section>

      {/* WhatsApp Doubts Section */}
      <section className="py-16 relative z-10 px-6 bg-black/40">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">Ainda tem dúvidas?</h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto text-sm md:text-base">
            Nossa equipe está pronta para mostrar como o Gestão Mix pode ajudar você a controlar custos, estoque e lucro da sua operação.
          </p>
          <a
            href="https://wa.me/5531998162792?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20o%20sistema%20Gest%C3%A3o%20Mix."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-sm md:text-base hover:bg-[#20bd5a] transition-colors shadow-[0_0_20px_rgba(37,211,102,0.2)] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)]"
          >
            <MessageCircle className="w-5 h-5" />
            FALAR NO WHATSAPP
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 relative z-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <IceCream2 className="text-zinc-600 w-5 h-5 -rotate-6" />
            <span className="font-display font-medium text-lg text-zinc-400">
              GestãoMix
            </span>
          </div>
          
          <div className="flex gap-4">
             <div className="flex items-center gap-1 text-sm text-zinc-500">
               <ShieldCheck className="w-4 h-4" /> Ambiente Seguro
             </div>
          </div>
          
          <div className="text-xs text-zinc-600 text-center md:text-right">
            <p>© {new Date().getFullYear()} Gestão Mix - Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5531998162792?text=Ol%C3%A1%21%20Gostaria%20de%20conhecer%20melhor%20o%20Gest%C3%A3o%20Mix."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300"
        aria-label="Falar no WhatsApp"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="ml-[1px] mt-[1px]"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

    </>
  );
}
