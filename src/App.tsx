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
  DollarSign
} from 'lucide-react';
import { motion } from 'motion/react';
import { SalesNotification } from './components/SalesNotification';

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
        {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[300px] md:h-[500px] bg-electric-purple/20 blur-[80px] md:blur-[120px] rounded-full -translate-y-1/2 opacity-50 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-gold/10 blur-[80px] md:blur-[100px] rounded-full translate-x-1/3 opacity-40 pointer-events-none" />

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
      <section className="container mx-auto px-6 pt-12 pb-20 md:pt-24 md:pb-32 relative z-10 flex flex-col items-center">
        <div className="flex flex-col text-center space-y-6 md:space-y-8 max-w-5xl mx-auto w-full items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric-purple/10 border border-electric-purple/30 text-electric-purple text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider mb-2"
          >
            <Store className="w-3.5 h-3.5 md:w-4 md:h-4" />
            <span>OPERAÇÃO PROFISSIONAL E LUCRATIVA</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.15] md:leading-[1.1] tracking-tight"
          >
            <span className="text-gold block mb-1 md:mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Dono de Açaiteria ou Sorveteria:</span> Você sabe exatamente quanto do seu faturamento <span className="text-electric-purple">realmente vira lucro</span> no fim do mês?
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center max-w-3xl mx-auto mb-4 space-y-6"
          >
            <p className="text-base sm:text-lg md:text-xl text-zinc-300 font-normal leading-relaxed">
              O Gestão Mix foi criado para açaiterias e sorveterias que precisam parar de vender no escuro.<br className="hidden md:block" />
              Descubra o custo REAL de cada montagem, calcule automaticamente as taxas do iFood, controle estoque, pedidos e saiba exatamente quanto sobra no seu bolso em cada venda.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 w-full">
              {[
                'Precificação Inteligente',
                'Controle Real de Lucro',
                'Gestão Delivery iFood',
                'Estoque Automático',
                'PDV Rápido e Organizado'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full">
                  <span className="text-gold font-bold">✔</span>
                  <span className="text-xs md:text-sm font-semibold text-white tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

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
              Tudo o que você precisa para <span className="text-electric-purple">parar de perder dinheiro</span> na sua operação
            </h2>
            <p className="text-zinc-400 text-base md:text-lg">O Gestão Mix foi desenvolvido para profissionalizar açaiterias e sorveterias que precisam controlar custos, organizar pedidos e aumentar o lucro real da operação.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            <div className="bg-[#12001e] border border-white/10 rounded-2xl p-6 hover:border-gold/50 transition-all flex flex-col items-start text-left">
              <Calculator className="w-8 h-8 text-gold mb-4" />
              <h3 className="text-lg font-bold mb-2">Precificação Inteligente</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Descubra exatamente quanto custa cada açaí, milk-shake ou montagem. O sistema calcula ingredientes, adicionais, embalagens, taxas e sua margem de lucro automaticamente.</p>
            </div>
            
            <div className="bg-[#12001e] border border-white/10 rounded-2xl p-6 hover:border-green-500/50 transition-all flex flex-col items-start text-left">
              <Box className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Controle de Estoque Automático</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Cada venda dá baixa automática nos insumos. Nunca mais descubra no meio do movimento que acabou Nutella, leite em pó ou morango.</p>
            </div>

            <div className="bg-[#12001e] border border-white/10 rounded-2xl p-6 hover:border-electric-purple/50 transition-all flex flex-col items-start text-left">
              <Monitor className="w-8 h-8 text-electric-purple mb-4" />
              <h3 className="text-lg font-bold mb-2">PDV Rápido e Organizado</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Atenda clientes com agilidade no balcão, mesas e delivery sem travamentos, filas ou pedidos bagunçados.</p>
            </div>
            
            <div className="bg-[#12001e] border border-white/10 rounded-2xl p-6 hover:border-orange-500/50 transition-all flex flex-col items-start text-left">
              <Bike className="w-8 h-8 text-orange-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Gestão Delivery e iFood</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Saiba exatamente quanto cobrar no iFood considerando taxas, embalagens e margem de lucro para não vender no prejuízo.</p>
            </div>

            <div className="bg-[#12001e] border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-all flex flex-col items-start text-left">
              <PieChart className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Relatórios e Lucro Real</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Veja faturamento, margem, produtos mais lucrativos e tenha clareza completa da saúde financeira da operação.</p>
            </div>

            <div className="bg-[#12001e] border border-white/10 rounded-2xl p-6 hover:border-red-500/50 transition-all flex flex-col items-start text-left">
              <ClipboardList className="w-8 h-8 text-red-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Produção Organizada</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Pedidos enviados automaticamente para cozinha e montagem, evitando erros, gritaria e atrasos.</p>
            </div>
            
            <div className="bg-[#12001e] border border-white/10 rounded-2xl p-6 hover:border-teal-400/50 transition-all flex flex-col items-start text-left relative overflow-hidden lg:col-span-3 sm:col-span-2 md:col-start-auto max-w-xl md:max-w-none mx-auto md:mx-0 w-full lg:w-1/3 mt-0 lg:mt-4 lg:mx-auto">
               <div className="absolute top-0 right-0 p-2 bg-teal-500 text-white text-[9px] font-bold rounded-bl-lg">PWA</div>
              <Smartphone className="w-8 h-8 text-teal-400 mb-4" />
              <h3 className="text-lg font-bold mb-2">App no Celular (PWA)</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">Acompanhe vendas, estoque e resultados diretamente do celular em tempo real.</p>
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
                             <div className="bg-green-500 text-white text-xs font-bold py-1.5 px-3 rounded-lg w-full text-center">Pronto</div>
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
                             <div className="bg-green-500 text-white text-xs font-bold py-1.5 px-3 rounded-lg w-full text-center">Pronto</div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>

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

      {/* Offer Section */}
      <section id="oferta" className="py-16 md:py-24 relative z-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto rounded-[2rem] md:rounded-[3rem] bg-dark-card border border-gold/50 shadow-[0_0_40px_rgba(255,215,0,0.1)] md:shadow-[0_0_80px_rgba(255,215,0,0.15)] relative p-1 md:p-1.5 group">
          {/* Animated Gradient Border effect */}
          <div className="absolute inset-0 rounded-[2rem] md:rounded-[3rem] bg-gradient-to-r from-gold via-electric-purple to-gold opacity-40 blur-md group-hover:opacity-70 transition-opacity duration-500"></div>
          
          <div className="bg-deep-purple/95 backdrop-blur-2xl rounded-[1.85rem] md:rounded-[2.85rem] px-6 py-12 md:p-16 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            
            {/* Context/Texts */}
            <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-electric-purple/20 text-electric-purple uppercase tracking-widest text-[10px] md:text-xs font-bold mb-6 border border-electric-purple/30 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                PLANO COMPLETO
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 drop-shadow-md leading-[1.1]">
                O melhor sistema,<br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">agora em assinatura acessível</span>
              </h2>
              
              <p className="text-zinc-400 mb-8 max-w-md text-sm md:text-base leading-relaxed">
                Pare de perder o controle do seu negócio. Assine o Gestão Mix e tenha acesso a todas as ferramentas profissionais que você precisa para lucrar mais.
              </p>
              
              <div className="space-y-4 md:space-y-5 w-full max-w-sm">
                {[
                  'Acesso Ilimitado a Todas Ferramentas',
                  'Frente de Caixa (PDV) Prático e Rápido',
                  'Calculadora de Lucro e Monitor iFood',
                  'Atualizações e Novas Funcionalidades',
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
            <div className="md:w-[45%] w-full bg-black/40 border border-white/10 rounded-3xl p-6 md:p-10 flex flex-col items-center shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-[50px]"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-electric-purple/15 blur-[50px]"></div>
               
               <div className="relative z-10 w-full flex flex-col items-center">
                  <h3 className="text-xl md:text-2xl font-black text-white mb-2 text-center tracking-tight">ACESSO COMPLETO AO GESTÃO MIX</h3>
                  <p className="text-zinc-400 text-sm md:text-base mb-6 text-center max-w-sm">
                    Tudo o que você precisa para controlar sua açaiteria ou sorveteria em um único sistema.
                  </p>
                  
                  <div className="flex items-end justify-center gap-1.5 md:gap-2 text-white mb-6">
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
                  
                  <a href="https://pay.hotmart.com/A106056595I?checkoutMode=10" target="_blank" rel="noopener noreferrer" className="w-full px-4 py-4 rounded-2xl bg-gradient-to-r from-gold-light via-gold to-gold-dark text-black shadow-[0_10px_30px_rgba(255,215,0,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all flex flex-col items-center justify-center">
                    <span className="font-black text-xl md:text-2xl uppercase tracking-wide drop-shadow-sm">Começar Agora</span>
                    <span className="text-xs font-bold opacity-80 mt-1">Acesso imediato após confirmação da assinatura.</span>
                  </a>
                  
                  <div className="mt-6 flex flex-col items-center justify-center gap-2 text-xs md:text-sm text-zinc-400 w-full bg-white/5 p-4 rounded-xl border border-white/10">
                    <div className="flex items-center gap-2 font-bold text-white text-sm md:text-base"><ShieldCheck className="w-5 h-5 text-electric-purple" /> GARANTIA DE 7 DIAS</div>
                    <span className="text-center font-medium leading-relaxed">Teste sem risco. Se não gostar, solicite o reembolso dentro do prazo da plataforma.</span>
                  </div>
                  
                  <p className="mt-5 text-xs text-zinc-400 font-medium text-center">Assine agora e comece a controlar seu lucro hoje mesmo</p>
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

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5531998162792?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20o%20sistema%20Gest%C3%A3o%20Mix."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-4 md:bottom-8 md:right-8 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all z-[9999] flex items-center justify-center cursor-pointer group"
        aria-label="Fale conosco no WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 md:w-8 md:h-8">
          <path d="M12.004 0C5.378 0 0 5.378 0 12.004c0 2.115.553 4.148 1.603 5.952L.373 22l4.167-1.1c1.734.965 3.655 1.474 5.464 1.474 6.626 0 12.004-5.378 12.004-12.004S18.63 0 12.004 0zm0 21c-1.637 0-3.238-.42-4.664-1.22l-.332-.196-3.275.86.877-3.18-.216-.34A9.957 9.957 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.405-7.393c-.296-.148-1.754-.866-2.025-.965-.27-.099-.469-.148-.667.148-.197.297-.765.965-.938 1.163-.173.198-.346.223-.642.074-.296-.148-1.25-.46-2.383-1.468-.88-.785-1.475-1.753-1.648-2.05-.173-.297-.018-.458.13-.606.134-.133.296-.346.444-.52.148-.173.198-.297.296-.495.099-.198.05-.371-.024-.52-.074-.148-.667-1.608-.915-2.203-.242-.578-.487-.5-.667-.508-.173-.008-.371-.008-.569-.008-.198 0-.52.074-.791.371-.27.297-1.038 1.015-1.038 2.476s1.063 2.87 1.211 3.068c.148.198 2.091 3.193 5.066 4.478.708.307 1.261.49 1.694.627.711.226 1.36.194 1.872.118.574-.085 1.754-.717 2.001-1.411.247-.693.247-1.288.173-1.411-.074-.124-.271-.198-.568-.347z"/>
        </svg>
      </a>

      {/* Sales Notifications */}
      <SalesNotification />
    </>
  );
}
