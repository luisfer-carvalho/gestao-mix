import {
  Store,
  Bike,
  Calculator,
  ShieldCheck,
  CheckCircle2,
  IceCream2,
  Smartphone,
  TrendingUp,
  PieChart,
  ClipboardList,
  Monitor,
  Printer,
  FileText,
  Users,
  Box,
  AlertTriangle,
  Star
} from 'lucide-react';
import { motion } from 'motion/react';

const SystemMockupGraphic = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    className="relative rounded-2xl bg-dark-card border border-white/10 shadow-2xl overflow-hidden flex h-[350px] md:h-[450px] w-full max-w-4xl mx-auto"
  >
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-electric-purple to-gold z-20"></div>
    
    {/* Sidebar */}
    <div className="hidden sm:flex w-1/3 max-w-[180px] bg-[#4a148c] border-r border-[#380b6e] flex-col pt-4 z-10 shrink-0">
       <div className="flex flex-col gap-1 mb-6 px-4">
         <div className="flex items-center gap-1.5">
           <div className="w-5 h-5 bg-transparent rounded flex items-center justify-center shrink-0">
             <IceCream2 className="w-5 h-5 text-pink-400" />
           </div>
           <span className="text-xs font-bold text-white tracking-tight truncate">Gestão Mix</span>
         </div>
         <span className="text-[9px] text-zinc-300 ml-6 leading-tight">📍 Minha Açaiteria</span>
       </div>
       <div className="flex flex-col overflow-y-auto w-full pb-4 space-y-1" style={{ scrollbarWidth: 'none' }}>
          <div className="flex items-center gap-2 px-4 py-2.5 bg-white/10 text-white border-l-2 border-pink-400 w-full">
             <span className="text-[10px] font-semibold">Painel Principal</span>
          </div>
          {[
            'Frente de Caixa (PDV)', 'Estoque e Insumos', 'Meus Produtos', 'Calculadora de Margem', 'Relatórios Fáceis', 'Configurações'
          ].map(item => (
            <div key={item} className="flex items-center gap-2 px-4 py-2.5 text-zinc-300 hover:bg-white/5 hover:text-white cursor-default transition-colors w-full">
               <span className="text-[10px] truncate">{item}</span>
            </div>
          ))}
       </div>
    </div>

    {/* Main Content */}
    <div className="flex-1 p-3 md:p-5 flex flex-col z-10 bg-[#f8f9fa] overflow-hidden text-zinc-800">
      <div className="flex justify-between items-center mb-4 md:mb-5 mt-1">
        <span className="text-zinc-900 text-base md:text-lg font-bold">Resumo Financeiro da Semana</span>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        {/* Faturamento */}
        <div className="rounded-xl border border-zinc-200 bg-white p-3 md:p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 text-green-600 font-bold rounded-lg flex items-center justify-center text-sm md:text-base shrink-0">$</div>
          <div className="flex flex-col">
             <span className="text-[10px] md:text-xs text-zinc-500 mb-0.5 font-medium">Total em Vendas</span>
             <span className="font-display font-bold text-base md:text-xl text-zinc-800 leading-none">R$ 14.850,20</span>
          </div>
        </div>
        {/* Lucro Bruto */}
        <div className="rounded-xl border border-zinc-200 bg-white p-3 md:p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-100 text-purple-600 font-bold rounded-lg flex items-center justify-center shrink-0"><TrendingUp className="w-4 h-4 md:w-5 md:h-5" /></div>
          <div className="flex flex-col">
             <span className="text-[10px] md:text-xs text-zinc-500 mb-0.5 font-medium">Lucro Livre (Sobra Real)</span>
             <span className="font-display font-bold text-base md:text-xl text-zinc-800 leading-none">R$ 6.320,40</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1 overflow-hidden">
        {/* Produtos Mais Vendidos */}
        <div className="rounded-xl border border-zinc-200 bg-white p-3 flex flex-col shadow-sm">
          <div className="flex items-center gap-2 mb-3 border-b border-zinc-100 pb-2">
            <span className="text-zinc-400 text-sm">🔥</span>
            <span className="text-xs md:text-sm font-bold text-zinc-800">Mais Vendidos Hoje</span>
          </div>
          <div className="space-y-2 overflow-y-auto pr-1" style={{ scrollbarWidth: 'none' }}>
            <div className="flex justify-between items-center bg-zinc-50 p-2 md:p-2.5 rounded-lg border border-zinc-100/50">
              <span className="text-zinc-700 text-[10px] md:text-xs font-medium truncate">Açaí 500ml (Completo)</span>
              <span className="text-purple-600 font-bold bg-purple-100 px-1.5 py-0.5 rounded text-[10px] shrink-0">42 un</span>
            </div>
            <div className="flex justify-between items-center bg-zinc-50 p-2 md:p-2.5 rounded-lg border border-zinc-100/50">
              <span className="text-zinc-700 text-[10px] md:text-xs font-medium truncate">Barca de Açaí 1L</span>
              <span className="text-purple-600 font-bold bg-purple-100 px-1.5 py-0.5 rounded text-[10px] shrink-0">15 un</span>
            </div>
            <div className="flex justify-between items-center bg-zinc-50 p-2 md:p-2.5 rounded-lg border border-zinc-100/50">
              <span className="text-zinc-700 text-[10px] md:text-xs font-medium truncate">Milkshake Ninho 300ml</span>
              <span className="text-purple-600 font-bold bg-purple-100 px-1.5 py-0.5 rounded text-[10px] shrink-0">11 un</span>
            </div>
          </div>
        </div>

        {/* Estoque Baixo */}
        <div className="rounded-xl border border-zinc-200 bg-white p-3 flex flex-col shadow-sm">
          <div className="flex items-center gap-2 mb-3 border-b border-zinc-100 pb-2">
            <span className="text-red-500 font-bold flex items-center justify-center bg-red-100 w-5 h-5 rounded-full text-[10px]">!</span>
            <span className="text-xs md:text-sm font-bold text-zinc-800">Comprar Urgente</span>
          </div>
          <div className="space-y-2 overflow-y-auto pr-1" style={{ scrollbarWidth: 'none' }}>
            {[
              { name: 'Creme de Avelã (Pote)', val: '200g', min: '1 Kg' },
              { name: 'Leite Condensado', val: '1 un', min: '5 un' },
              { name: 'Copo Bolha 500ml', val: '15 un', min: '50 un' },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center bg-red-50/50 p-2 md:p-2.5 rounded-lg border border-red-100">
                <span className="text-zinc-800 font-medium truncate pr-2 text-[10px] md:text-xs">{item.name}</span>
                <div className="flex flex-col items-end shrink-0 leading-tight">
                  <span className="text-red-600 font-bold text-[10px] md:text-xs">Resta: {item.val}</span>
                  <span className="text-zinc-400 text-[8px] md:text-[9px]">Aviso: {item.min}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-deep-purple text-white overflow-hidden selection:bg-electric-purple selection:text-white font-sans">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[300px] md:h-[500px] bg-electric-purple/20 blur-[80px] md:blur-[120px] rounded-full -translate-y-1/2 opacity-50 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-gold/10 blur-[80px] md:blur-[100px] rounded-full translate-x-1/3 opacity-40 pointer-events-none" />

      {/* Header / Nav */}
      <header className="container mx-auto px-6 py-4 md:py-6 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-gold rounded-lg flex items-center justify-center -rotate-6 shadow-[0_0_15px_rgba(255,215,0,0.3)]">
            <IceCream2 className="text-black w-5 h-5 md:w-6 md:h-6" />
          </div>
          <span className="font-display font-bold text-xl md:text-2xl tracking-tight text-white">
            Gestão<span className="text-gold">Mix</span>
          </span>
        </div>
        <a 
          href="#oferta"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#oferta')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex items-center gap-2 hover:text-gold transition-colors text-xs md:text-sm font-semibold bg-white/5 md:bg-transparent px-4 py-2 md:p-0 rounded-full md:rounded-none border border-white/10 md:border-none"
        >
          Garantir Acesso <TrendingUp className="w-4 h-4 hidden md:block" />
        </a>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-12 pb-20 md:pt-24 md:pb-32 relative z-10 flex flex-col items-center">
        <div className="flex flex-col text-center space-y-6 md:space-y-8 max-w-5xl mx-auto w-full items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric-purple/10 border border-electric-purple/30 text-electric-purple text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider mb-2"
          >
            <Store className="w-3.5 h-3.5 md:w-4 md:h-4" />
            <span>OPERAÇÃO PROFISSIONAL E ORGANIZADA</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.15] md:leading-[1.1] tracking-tight"
          >
            <span className="text-gold block mb-1 md:mb-2">VOCÊ VENDE MUITO...</span> MAS SABE QUANTO REALMENTE LUCRA?
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-zinc-300 font-normal leading-relaxed max-w-3xl mx-auto mb-4"
          >
            Acabe com a bagunça nos pedidos, furos no estoque e o fechamento de caixa manual. Tenha o controle total do seu negócio e descubra sua verdadeira margem de lucro.
          </motion.p>

          <div className="w-full relative mt-4 mb-8" style={{ perspective: 1000 }}>
            <SystemMockupGraphic />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
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
              QUERO CONTROLAR MEU NEGÓCIO
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="bg-dark-card/80 py-16 md:py-24 relative overflow-hidden backdrop-blur-sm border-y border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4 md:mb-6">
              Tudo o que você precisa, <span className="text-electric-purple">em um só lugar</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg">Feito profissionalizar e organizar totalmente as vendas de açaiterias e sorveterias, eliminando o papel.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-[#12001e] border border-white/10 rounded-2xl p-6 hover:border-electric-purple/50 transition-all flex flex-col items-start text-left">
              <Monitor className="w-8 h-8 text-electric-purple mb-4" />
              <h3 className="text-lg font-bold mb-2">PDV Ágil</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Pedidos de balcão e mesas lançados em poucos cliques. Sem travar e fácil de usar no movimento.</p>
            </div>
            
            <div className="bg-[#12001e] border border-white/10 rounded-2xl p-6 hover:border-gold/50 transition-all flex flex-col items-start text-left">
              <Calculator className="w-8 h-8 text-gold mb-4" />
              <h3 className="text-lg font-bold mb-2">Precificação Exata</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Cálculo minucioso do custo por grama, adicionais e margem de lucro real para nunca ter prejuízo.</p>
            </div>

            <div className="bg-[#12001e] border border-white/10 rounded-2xl p-6 hover:border-green-500/50 transition-all flex flex-col items-start text-left">
              <Box className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Controle de Estoque</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Baixa automática de insumos a cada venda. Chega de descobrir que a Nutella acabou no meio do domingo.</p>
            </div>

            <div className="bg-[#12001e] border border-white/10 rounded-2xl p-6 hover:border-red-500/50 transition-all flex flex-col items-start text-left">
              <ClipboardList className="w-8 h-8 text-red-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Produção Organizada</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Monitor de pedidos para a cozinha montar as taças e barcas sem gritaria e sem erros.</p>
            </div>
            
            <div className="bg-[#12001e] border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-all flex flex-col items-start text-left">
              <PieChart className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Relatórios e Gráficos</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Painéis visuais detalhados gerados automaticamente. Exporte para PDF e saiba suas métricas.</p>
            </div>

            <div className="bg-[#12001e] border border-white/10 rounded-2xl p-6 hover:border-purple-400/50 transition-all flex flex-col items-start text-left">
              <Store className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-bold mb-2">Fechamento de Caixa</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Fechamento seguro de turnos e sangrias, acabando com furos no dinheiro e cálculos no papel.</p>
            </div>

            <div className="bg-[#12001e] border border-white/10 rounded-2xl p-6 hover:border-orange-500/50 transition-all flex flex-col items-start text-left">
              <AlertTriangle className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Módulo Fiscal (NFC-e)</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Emissão de cupons fiscais e preparado para as normas do sefaz, sem sistemas paralelos.</p>
            </div>

            <div className="bg-[#12001e] border border-white/10 rounded-2xl p-6 hover:border-teal-400/50 transition-all flex flex-col items-start text-left relative overflow-hidden">
               <div className="absolute top-0 right-0 p-2 bg-teal-500 text-white text-[9px] font-bold rounded-bl-lg">PWA</div>
              <Smartphone className="w-8 h-8 text-teal-400 mb-4" />
              <h3 className="text-lg font-bold mb-2">App de Bolso</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Instale o painel como um aplicativo no celular e faça a gestão em tempo real de qualquer lugar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Area: Realidade da Sorveteria */}
      <section className="py-16 md:py-24 bg-black/40 border-y border-white/5 relative z-10 px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 md:mb-6">
              Feito para a realidade de <span className="text-electric-purple">Sorveterias e Açaiterias</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg">Entendemos a operação e desenvolvemos soluções diretas para a desorganização e perda de dinheiro que os sistemas comuns ignoram.</p>
          </div>

          <div className="space-y-20 md:space-y-28">
            {/* Example 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-14">
              <div className="lg:w-1/2 w-full text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs md:text-sm font-bold mb-4 uppercase tracking-wider">
                  <Calculator className="w-4 h-4" /> Adeus Prejuízos Ocultos
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display mb-4 md:mb-5">Controle o desperdício e a precificação</h3>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6 md:mb-8 font-medium">
                  Não permita que o excesso de Nutella roube seu lucro. Calcule precisamente o custo de montagem fracionada (por kilo ou ML), inclua as taxas do iFood e descubra sua verdadeira margem de lucro em cada pedido.
                </p>
                <div className="flex flex-col gap-3 md:gap-4 justify-center lg:justify-start items-center lg:items-start text-sm md:text-base">
                  <div className="flex items-center gap-3 text-zinc-200 bg-white/5 w-full md:w-auto px-4 py-2.5 rounded-xl border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-electric-purple shrink-0" /> Fórmulas baseadas em rendimento real
                  </div>
                  <div className="flex items-center gap-3 text-zinc-200 bg-white/5 w-full md:w-auto px-4 py-2.5 rounded-xl border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-electric-purple shrink-0" /> Baixa imediata de complementos no estoque
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                 <div className="bg-dark-card border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 to-transparent pointer-events-none"></div>
                    <div className="relative z-10">
                      <h4 className="font-bold text-white mb-4 border-b border-white/10 pb-2 flex items-center gap-2"><PieChart className="w-4 h-4 text-zinc-400" /> Relatório de Custo: Taça Sensação</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center text-sm bg-white/5 p-3 rounded-lg border-l-4 border-electric-purple">
                           <span className="text-zinc-300 font-medium">Açaí Premium (500g)</span>
                           <span className="font-mono text-zinc-400">R$ 5,20</span>
                        </div>
                        <div className="flex justify-between items-center text-sm bg-white/5 p-3 rounded-lg border-l-4 border-zinc-600">
                           <span className="text-zinc-300">Morango Fresco (100g)</span>
                           <span className="font-mono text-zinc-400">R$ 1,80</span>
                        </div>
                        <div className="flex justify-between items-center text-sm bg-white/5 p-3 rounded-lg border-l-4 border-zinc-600">
                           <span className="text-zinc-300">Creme de Avelã (50g)</span>
                           <span className="font-mono text-zinc-400">R$ 3,10</span>
                        </div>
                        <div className="flex justify-between items-center pt-3 border-t border-white/10 mt-2">
                           <span className="font-bold text-white">Custo Total de Insumos:</span>
                           <span className="font-bold text-red-400 text-lg">R$ 10,10</span>
                        </div>
                        <div className="flex justify-between items-center bg-black/30 p-2 rounded mt-1">
                           <span className="text-sm font-medium text-zinc-400">+ Tributos e Embalagem:</span>
                           <span className="font-bold text-red-300 text-sm">R$ 2,50</span>
                        </div>
                        <div className="flex justify-between items-center pt-2">
                           <span className="font-bold text-white">Preço de Venda Sugerido:</span>
                           <span className="font-bold text-green-400 text-xl font-display">R$ 25,20</span>
                        </div>
                      </div>
                    </div>
                 </div>
              </div>
            </div>

            {/* Example 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 md:gap-14 pt-8 md:pt-12 border-t border-white/5">
              <div className="lg:w-1/2 w-full text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-electric-purple/10 border border-electric-purple/30 text-electric-purple text-xs md:text-sm font-bold mb-4 uppercase tracking-wider">
                  <Monitor className="w-4 h-4" /> Operação Sem Caos
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display mb-4 md:mb-5">Esqueça os pedidos bagunçados</h3>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6 md:mb-8 font-medium">
                  Organize o salão e delivery perfeitamente. Lances no Caixa via Tablet ou Computador vão direto para o Monitor de Produção, emitindo as comandas de montagem claremente e evitando gritaria no dia a dia.
                </p>
                <div className="flex flex-col gap-3 md:gap-4 justify-center lg:justify-start items-center lg:items-start text-sm md:text-base">
                  <div className="flex items-center gap-3 text-zinc-200 bg-white/5 w-full md:w-auto px-4 py-2.5 rounded-xl border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0" /> PDV que emite comandas e cupons fiscais
                  </div>
                  <div className="flex items-center gap-3 text-zinc-200 bg-white/5 w-full md:w-auto px-4 py-2.5 rounded-xl border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0" /> Multiusuários integrados em tempo real
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                 <div className="bg-white text-zinc-800 rounded-2xl p-4 shadow-2xl relative overflow-hidden flex flex-col h-auto sm:h-[360px]">
                    <div className="flex items-center justify-between border-b border-zinc-200 pb-3 mb-3">
                       <h4 className="font-bold text-zinc-800 text-sm">Monitor de Produção (KDS)</h4>
                       <div className="text-[10px] font-bold text-purple-600 bg-purple-100 px-2 py-1 rounded">3 PEDIDOS NA FILA</div>
                    </div>
                    <div className="flex gap-4 overflow-x-auto pb-4 flex-1" style={{ scrollbarWidth: 'none' }}>
                       {/* Ticket 1 */}
                       <div className="w-full sm:w-[220px] shrink-0 bg-yellow-50 border border-yellow-200 rounded-xl p-3 flex flex-col h-full shadow-sm">
                          <div className="flex justify-between items-center mb-2 pb-2 border-b border-yellow-200/50">
                             <span className="font-black text-lg text-yellow-800">#104</span>
                             <span className="text-[10px] font-bold text-yellow-700 bg-yellow-200 px-1.5 py-0.5 rounded">Balcão</span>
                          </div>
                          <div className="text-sm font-bold text-zinc-800 mb-1">1x Barca de Açaí 1L</div>
                          <ul className="text-xs text-zinc-600 space-y-1 ml-1 mb-auto list-disc pl-3">
                             <li className="font-medium text-red-600">Sem Leite Condensado</li>
                             <li>Adic. Kiwi</li>
                             <li>Adic. Leite Ninho</li>
                             <li>Confete separado</li>
                          </ul>
                          <div className="mt-3 pt-2 border-t border-yellow-200/50 flex justify-end">
                             <button className="bg-green-500 hover:bg-green-600 text-white text-xs font-bold py-1.5 px-3 rounded-lg w-full transition-colors active:scale-95">Pronto</button>
                          </div>
                       </div>
                       {/* Ticket 2 */}
                       <div className="w-full sm:w-[220px] shrink-0 bg-purple-50 border border-purple-200 rounded-xl p-3 flex flex-col h-full shadow-sm">
                          <div className="flex justify-between items-center mb-2 pb-2 border-b border-purple-200/50">
                             <span className="font-black text-lg text-purple-800">#105</span>
                             <span className="text-[10px] font-bold text-purple-700 bg-purple-200 px-1.5 py-0.5 rounded flex items-center gap-1">iFood</span>
                          </div>
                          <div className="text-sm font-bold text-zinc-800 mb-1">2x Milkshake Morango</div>
                          <ul className="text-xs text-zinc-600 space-y-1 ml-1 mb-auto list-disc pl-3">
                             <li>Chantilly extra nas duas</li>
                             <li>Embalar para viagem duplo</li>
                          </ul>
                          <div className="mt-3 pt-2 border-t border-purple-200/50 flex justify-end">
                             <button className="bg-green-500 hover:bg-green-600 text-white text-xs font-bold py-1.5 px-3 rounded-lg w-full transition-colors active:scale-95">Pronto</button>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="oferta" className="py-16 md:py-24 relative z-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto rounded-[2rem] md:rounded-[3rem] bg-dark-card border border-gold/50 shadow-[0_0_40px_rgba(255,215,0,0.1)] md:shadow-[0_0_80px_rgba(255,215,0,0.15)] relative p-1 md:p-1.5 group">
          {/* Animated Gradient Border effect */}
          <div className="absolute inset-0 rounded-[2rem] md:rounded-[3rem] bg-gradient-to-r from-gold via-electric-purple to-gold opacity-40 blur-md group-hover:opacity-70 transition-opacity duration-500"></div>
          
          <div className="bg-deep-purple/95 backdrop-blur-2xl rounded-[1.85rem] md:rounded-[2.85rem] px-6 py-12 md:p-16 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            
            {/* Context/Texts */}
            <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 text-red-400 uppercase tracking-widest text-[10px] md:text-xs font-bold mb-6 border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                Lote Promocional Limitado
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 drop-shadow-md leading-[1.1]">
                Condição Especial:<br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">Sem Mensalidades, Pague Uma Só Vez</span>
              </h2>
              
              <p className="text-zinc-400 mb-8 max-w-md text-sm md:text-base leading-relaxed">
                Pare de rasgar dinheiro com aluguel de sistemas. Garanta o Gestão Mix completo de forma definitiva: você paga hoje e usa o sistema para sempre. Sem taxas ocultas.
              </p>
              
              <div className="space-y-4 md:space-y-5 w-full max-w-sm">
                {[
                  'Acesso Total Liberado Para Sempre',
                  'Frente de Caixa (PDV) Prático e Rápido',
                  'Calculadora de Lucro e Monitor iFood',
                  'Suporte de Verdade Direto no WhatsApp'
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-electric-purple/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-electric-purple" />
                    </div>
                    <span className="text-zinc-200 text-sm md:text-base font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Pricing Box */}
            <div className="md:w-[45%] w-full bg-black/40 border border-white/10 rounded-3xl p-6 md:p-10 flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-[50px]"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-electric-purple/15 blur-[50px]"></div>
               
               <div className="relative z-10 w-full flex flex-col items-center">
                  <span className="text-zinc-500 line-through text-lg block mb-1">De R$ 297,00</span>
                  <span className="text-zinc-300 text-sm font-medium mb-2">por apenas um único pagamento de</span>
                  
                  <div className="flex items-start justify-center gap-1.5 md:gap-2 text-white mb-4">
                    <span className="text-2xl md:text-3xl font-display font-bold mt-2 md:mt-3">R$</span>
                    <span className="text-6xl md:text-[6rem] leading-none font-black font-display tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-300">49</span>
                    <span className="text-2xl md:text-3xl md:mt-1 font-display font-bold text-zinc-300">,90</span>
                  </div>
                  
                  <div className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 text-gold text-xs md:text-sm font-bold border border-gold/20">
                    <CheckCircle2 className="w-4 h-4" /> ZERO Mensalidades
                  </div>
                  
                  <a href="https://pay.hotmart.com/P105729842M?checkoutMode=10" target="_blank" rel="noopener noreferrer" className="w-full px-6 py-4 md:py-5 rounded-2xl bg-gradient-to-r from-gold-light via-gold to-gold-dark text-black font-black text-lg md:text-xl shadow-[0_10px_30px_rgba(255,215,0,0.3)] hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_10px_40px_rgba(255,215,0,0.5)] transition-all flex items-center justify-center gap-2 uppercase tracking-wide">
                    Liberar Meu Acesso <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
                  
                  <div className="mt-5 flex items-center justify-center gap-4 text-[10px] md:text-xs text-zinc-500 w-full">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5" /> Compra 100% segura</span>
                    <span className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 fill-current" /> Acesso Imediato</span>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 mt-10">
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
  );
}
