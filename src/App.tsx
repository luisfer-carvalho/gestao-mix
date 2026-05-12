import {
  Store,
  Bike,
  Calculator,
  ShieldCheck,
  CheckCircle2,
  IceCream2,
  Smartphone,
  TrendingUp,
  Star,
  Quote,
  MapPin
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const notifications = [
  { name: 'Carlos E.', city: 'São Paulo, SP', action: 'comprou o Gestão Mix', time: 'Há 2 min' },
  { name: 'Mariana S.', city: 'Rio de Janeiro, RJ', action: 'comprou o Gestão Mix', time: 'Há 5 min' },
  { name: 'Rafael L.', city: 'Belo Horizonte, MG', action: 'comprou o Gestão Mix', time: 'Há 12 min' },
  { name: 'Ana P.', city: 'Curitiba, PR', action: 'comprou o Gestão Mix', time: 'Há 1 min' },
  { name: 'João V.', city: 'Salvador, BA', action: 'comprou o Gestão Mix', time: 'Há 8 min' },
  { name: 'Fernanda C.', city: 'Goiânia, GO', action: 'comprou o Gestão Mix', time: 'Há 4 min' },
];

export default function App() {
  const [currentNotificationIndex, setCurrentNotificationIndex] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout>;
    let nextTimer: ReturnType<typeof setTimeout>;

    const cycleNotification = () => {
      setShowNotification(true);
      
      hideTimer = setTimeout(() => {
        setShowNotification(false);
      }, 4000); // Exibe por 4 segundos

      nextTimer = setTimeout(() => {
        setCurrentNotificationIndex((prev) => (prev + 1) % notifications.length);
      }, 4500); // Prepara próxima após ocultar
    };

    const initialTimeout = setTimeout(() => {
      cycleNotification();
      const interval = setInterval(cycleNotification, 8000); // A cada 8 segundos totais
      return () => clearInterval(interval);
    }, 2000);

    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, []);

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
          href="https://pay.hotmart.com/P105729842M?checkoutMode=10"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-gold transition-colors text-xs md:text-sm font-semibold bg-white/5 md:bg-transparent px-4 py-2 md:p-0 rounded-full md:rounded-none border border-white/10 md:border-none"
        >
          Garantir Acesso <TrendingUp className="w-4 h-4 hidden md:block" />
        </a>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-12 pb-20 md:pt-24 md:pb-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          <div className="lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left space-y-6 lg:pr-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric-purple/10 border border-electric-purple/30 text-electric-purple text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider mb-2"
            >
              <Store className="w-3.5 h-3.5 md:w-4 md:h-4" />
              <span>O Sistema Definitivo para Açaiterias e Sorveterias</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.15] md:leading-[1.1] tracking-tight"
            >
              <span className="text-gold block mb-1 md:mb-2">Pare de vender no escuro!</span> Controle sua Açaiteria e Sorveteria com um sistema completo
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl"
            >
              Diferencie loja e iFood, faça a gestão de insumos, calcule a precificação exata de qualquer produto e descubra o seu <strong className="text-white">lucro real</strong> no fim do mês. Dê adeus às planilhas complexas.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-4 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <a 
                href="https://pay.hotmart.com/P105729842M?checkoutMode=10"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 md:px-8 md:py-4.5 rounded-full bg-gradient-to-r from-gold-light via-gold to-gold-dark text-black font-extrabold text-base md:text-lg text-center shadow-[0_0_30px_rgba(255,215,0,0.4)] hover:shadow-[0_0_40px_rgba(255,215,0,0.6)] hover:scale-105 transition-all animate-pulse"
              >
                QUERO CONTROLAR MEU NEGÓCIO
              </a>
            </motion.div>

            {/* Social Proof Text */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-8 pt-6 sm:pt-8 border-t border-white/10 w-full"
            >
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="flex -space-x-3">
                  {[
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
                    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop"
                  ].map((src, i) => (
                    <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-zinc-800 border-2 border-deep-purple overflow-hidden flex items-center justify-center shrink-0">
                      <img src={src} alt="Empreendedor" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-[10px] md:text-xs text-zinc-400 mt-1"><strong className="text-white">4.9/5</strong> de satisfação</span>
                </div>
              </div>
              <div className="hidden sm:block w-px h-10 bg-white/10"></div>
              <p className="text-xs md:text-sm text-zinc-400 max-w-[200px] text-center sm:text-left mx-auto sm:mx-0">
                Mais de <strong className="text-white text-base md:text-lg block">3.500+ locais</strong> no Brasil lucrando mais.
              </p>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full mt-10 md:mt-12 lg:mt-0 relative hidden sm:block">
            {/* System Mockup Graphic */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-2xl bg-dark-card border border-white/10 shadow-2xl overflow-hidden flex h-[360px]"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-electric-purple to-gold z-20"></div>
              
              {/* Sidebar (Based on screenshot) */}
              <div className="w-1/3 max-w-[140px] bg-[#4a148c] border-r border-[#380b6e] flex flex-col pt-4 z-10 shrink-0">
                 <div className="flex flex-col gap-1 mb-6 px-3">
                   <div className="flex items-center gap-1.5">
                     <div className="w-4 h-4 bg-transparent rounded flex items-center justify-center shrink-0">
                       <IceCream2 className="w-4 h-4 text-pink-400" />
                     </div>
                     <span className="text-[11px] font-bold text-white tracking-tight truncate">Gestão Mix</span>
                   </div>
                   <span className="text-[8px] text-zinc-300 ml-5 leading-tight">📍 Açaiteria &amp;<br/>Sorveteria</span>
                 </div>
                 <div className="flex flex-col overflow-y-auto w-full pb-4" style={{ scrollbarWidth: 'none' }}>
                    <div className="flex items-center gap-1.5 px-3 py-2 bg-white/10 text-white border-l-2 border-pink-400 w-full mb-1">
                       <span className="text-[9px] font-semibold">Visão Geral</span>
                    </div>
                    {[
                      'PDV / Vendas', 'Insumos / Estoque', 'Açaís Montados', 'Milk-shakes', 'Produtos Revenda', 'Custo da Operação', 'Configuração', 'Minha Conta'
                    ].map(item => (
                      <div key={item} className="flex items-center gap-1.5 px-3 py-2 text-zinc-300 hover:bg-white/5 hover:text-white cursor-default transition-colors w-full">
                         <span className="text-[9px] truncate">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Main Content (Based on screenshot) */}
              <div className="flex-1 p-4 flex flex-col z-10 bg-[#f8f9fa] overflow-hidden text-zinc-800">
                <div className="flex items-center gap-2 mb-3 mt-1">
                  <span className="text-zinc-900 text-[14px] font-bold">Visão Geral</span>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-3">
                  {/* Faturamento */}
                  <div className="rounded border border-zinc-200 bg-white p-2.5 flex items-center gap-2 shadow-sm">
                    <div className="w-6 h-6 bg-green-100 text-green-600 font-bold rounded flex items-center justify-center text-[10px] shrink-0">$</div>
                    <div className="flex flex-col">
                       <span className="text-[8px] text-zinc-500 mb-0.5">Faturamento Total</span>
                       <span className="font-display font-bold text-[13px] text-zinc-800 leading-none">R$ 235,97</span>
                    </div>
                  </div>
                  {/* Lucro Bruto */}
                  <div className="rounded border border-zinc-200 bg-white p-2.5 flex items-center gap-2 shadow-sm">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 font-bold rounded flex items-center justify-center text-[10px] shrink-0"><TrendingUp className="w-3 h-3" /></div>
                    <div className="flex flex-col">
                       <span className="text-[8px] text-zinc-500 mb-0.5">Lucro Bruto (Aprox.)</span>
                       <span className="font-display font-bold text-[13px] text-zinc-800 leading-none">R$ 144,59</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 flex-1">
                  {/* Produtos Mais Vendidos */}
                  <div className="rounded border border-zinc-200 bg-white p-2.5 flex flex-col shadow-sm">
                    <div className="flex items-center gap-1 mb-2 border-b border-zinc-100 pb-1.5">
                      <span className="text-zinc-400 text-[9px]">🛒</span>
                      <span className="text-[10px] font-bold text-zinc-800">Produtos Mais Vendidos</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center bg-zinc-50 p-1.5 rounded text-[9px]">
                        <span className="text-zinc-600 truncate">Milkshake 500 ml</span>
                        <span className="text-purple-600 font-medium bg-purple-100 px-1 rounded text-[8px] shrink-0">7 un</span>
                      </div>
                      <div className="flex justify-between items-center bg-zinc-50 p-1.5 rounded text-[9px]">
                        <span className="text-zinc-600 truncate">Açai Gratidão 500 ml</span>
                        <span className="text-purple-600 font-medium bg-purple-100 px-1 rounded text-[8px] shrink-0">4 un</span>
                      </div>
                    </div>
                  </div>

                  {/* Estoque Baixo */}
                  <div className="rounded border border-zinc-200 bg-white p-2.5 flex flex-col shadow-sm">
                    <div className="flex items-center gap-1 mb-2 border-b border-zinc-100 pb-1.5">
                      <span className="text-red-500 text-[9px] font-bold">!</span>
                      <span className="text-[10px] font-bold text-zinc-800">Estoque Baixo</span>
                    </div>
                    <div className="space-y-1.5 overflow-y-auto pr-1" style={{ scrollbarWidth: 'none' }}>
                      {[
                        { name: 'Mousse de maracuja', val: '0 g', min: '0 g' },
                        { name: 'sacola', val: '-11 un', min: '0 un' },
                        { name: 'copo 300 ml', val: '0 un', min: '0 un' },
                      ].map((item, i) => (
                        <div key={i} className="flex justify-between items-center bg-red-50 p-1 rounded text-[9px]">
                          <span className="text-zinc-700 truncate pr-1 text-[8px]">{item.name}</span>
                          <div className="flex items-center gap-1 shrink-0">
                            <span className="text-red-600 font-bold text-[8px]">Atual: {item.val}</span>
                            <span className="text-zinc-400 text-[7px]">Mín: {item.min}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Visual Elements */}
            <motion.div 
              initial={{opacity:0, scale:0.8}}
              animate={{opacity:1, scale:1}}
              transition={{duration:0.5, delay:0.6}}
              className="hidden lg:flex absolute -right-6 md:-right-12 top-10 bg-dark-card border border-white/10 p-4 rounded-xl shadow-xl items-center gap-3 backdrop-blur-md z-30"
            >
              <div className="w-10 h-10 rounded-full bg-electric-purple/20 flex items-center justify-center">
                <Bike className="w-5 h-5 text-electric-purple" />
              </div>
              <div>
                <p className="text-xs text-zinc-400">Taxa iFood Separada</p>
                <p className="text-sm font-bold text-white">Lucro Real Garantido</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-dark-card/80 py-16 md:py-24 relative overflow-hidden backdrop-blur-sm border-y border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4 md:mb-6">Tudo o que você precisa, <span className="text-electric-purple">sem dor de cabeça</span></h2>
            <p className="text-zinc-400 text-base md:text-lg">Desenhado especificamente para a dinâmica rápida e a necessidade de controle exato de açaiterias e sorveterias.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Feature 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-[#12001e] border border-white/10 rounded-3xl p-6 md:p-8 hover:border-gold/50 transition-all group flex flex-col items-start lg:items-center lg:text-center text-left"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calculator className="w-7 h-7 md:w-8 md:h-8 text-gold" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-display mb-3">Gestão de Insumos e Precificação</h3>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                Saiba o custo exato da Nutella, do Leite Condensado e de todos os seus adicionais. Precifique corretamente qualquer produto, do açaí ao sorvete, e proteja sua margem real.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-[#12001e] border border-white/10 rounded-3xl p-6 md:p-8 hover:border-electric-purple/50 transition-all group flex flex-col items-start lg:items-center lg:text-center text-left"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-electric-purple/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Smartphone className="w-7 h-7 md:w-8 md:h-8 text-electric-purple" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-display mb-3">PDV Ágil de Balcão</h3>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                Agilidade extrema para não formar fila no balcão nos dias de pico. Interface intuitiva que qualquer funcionário aprende a usar em 5 minutos.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-[#12001e] border border-white/10 rounded-3xl p-6 md:p-8 hover:border-gold/50 transition-all group relative overflow-hidden flex flex-col items-start lg:items-center lg:text-center text-left"
            >
              <div className="absolute -right-4 -top-4 w-32 h-32 bg-electric-purple/20 blur-3xl rounded-full"></div>
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10">
                <Bike className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-display mb-3 relative z-10">Precificação Delivery (iFood)</h3>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base relative z-10">
                Chega de vender para pagar taxa. Saiba exatamente por quanto vender no iFood para cobrir os custos e o aplicativo, garantindo que o lucro vá para o seu bolso.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Showcase / Examples Section */}
      <section className="py-16 md:py-24 bg-black/40 border-y border-white/5 relative z-10 px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 md:mb-6">Veja o Gestão Mix <span className="text-electric-purple">na prática</span></h2>
            <p className="text-zinc-400 text-base md:text-lg">Telas simples, intuitivas e focadas no que realmente importa para dar resultado em tempo real.</p>
          </div>

          <div className="space-y-20 md:space-y-28">
            {/* Example 1 */}
            <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-14">
              <div className="lg:w-1/2 w-full text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-electric-purple/10 border border-electric-purple/30 text-electric-purple text-xs md:text-sm font-bold mb-4 uppercase tracking-wider">
                  <Calculator className="w-4 h-4" /> Controle de Insumos
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display mb-4 md:mb-5">Precificação milimétrica do seu cardápio</h3>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6 md:mb-8 font-medium">
                  Saiba exatamente qual é o custo da montagem do seu açaí. Adicione Leite em Pó, Nutella, Morango e o sistema calcula o custo por grama, blindando sua margem de lucro.
                </p>
                <div className="flex flex-col gap-3 md:gap-4 justify-center lg:justify-start items-center lg:items-start text-sm md:text-base">
                  <div className="flex items-center gap-3 text-zinc-200 bg-white/5 w-full md:w-auto px-4 py-2.5 rounded-xl border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0" /> Custo fracionado por grama ou unidade
                  </div>
                  <div className="flex items-center gap-3 text-zinc-200 bg-white/5 w-full md:w-auto px-4 py-2.5 rounded-xl border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0" /> Sugestão inteligente de preço de venda (Markup)
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                 <div className="bg-dark-card border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-electric-purple/10 to-transparent"></div>
                    <div className="relative z-10">
                      <h4 className="font-bold text-white mb-4 border-b border-white/10 pb-2">Ficha Técnica: Açaí 500ml</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center text-sm bg-white/5 p-3 rounded-lg">
                           <span className="text-zinc-300">Açaí Puro (400g)</span>
                           <span className="font-mono text-zinc-400">R$ 4,80</span>
                        </div>
                        <div className="flex justify-between items-center text-sm bg-white/5 p-3 rounded-lg">
                           <span className="text-zinc-300">Leite Condensado (50g)</span>
                           <span className="font-mono text-zinc-400">R$ 1,20</span>
                        </div>
                        <div className="flex justify-between items-center text-sm bg-white/5 p-3 rounded-lg">
                           <span className="text-zinc-300">Morango (50g)</span>
                           <span className="font-mono text-zinc-400">R$ 0,90</span>
                        </div>
                        <div className="flex justify-between items-center pt-3 border-t border-white/10 mt-2">
                           <span className="font-bold text-white">Custo Total:</span>
                           <span className="font-bold text-red-400 text-lg">R$ 6,90</span>
                        </div>
                        <div className="flex justify-between items-center">
                           <span className="font-bold text-white">Preço Sugerido (150% markup):</span>
                           <span className="font-bold text-green-400 text-lg">R$ 17,25</span>
                        </div>
                      </div>
                    </div>
                 </div>
              </div>
            </div>

            {/* Example 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 md:gap-14 pt-8 md:pt-12 border-t border-white/5">
              <div className="lg:w-1/2 w-full text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs md:text-sm font-bold mb-4 uppercase tracking-wider">
                  <Smartphone className="w-4 h-4" /> Frente de Caixa
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display mb-4 md:mb-5">Venda em 3 toques na tela</h3>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6 md:mb-8 font-medium">
                  Atendentes não precisam de manual. O PDV foi desenhado para ser visual, rápido e evitar a formação de filas no balcão nos dias de calor e movimento intenso.
                </p>
                <div className="flex flex-col gap-3 md:gap-4 justify-center lg:justify-start items-center lg:items-start text-sm md:text-base">
                  <div className="flex items-center gap-3 text-zinc-200 bg-white/5 w-full md:w-auto px-4 py-2.5 rounded-xl border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0" /> Painel com botões grandes e visuais
                  </div>
                  <div className="flex items-center gap-3 text-zinc-200 bg-white/5 w-full md:w-auto px-4 py-2.5 rounded-xl border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0" /> Fechamento de caixa veloz e integrado ao estoque
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                 <div className="bg-white text-zinc-800 rounded-2xl p-4 shadow-2xl relative overflow-hidden flex flex-col sm:flex-row h-auto sm:h-[340px]">
                    <div className="w-full sm:w-1/2 lg:w-[55%] border-b sm:border-b-0 sm:border-r border-zinc-200 pb-4 sm:pb-0 sm:pr-4 flex flex-col">
                       <h4 className="font-bold text-zinc-800 mb-3 text-[13px] md:text-sm flex items-center justify-between">
                         Categorias <span className="text-[10px] bg-zinc-100 px-2 py-0.5 rounded text-zinc-500">Deslize ↓</span>
                       </h4>
                       <div className="grid grid-cols-2 gap-2 mb-4 shrink-0">
                         <div className="bg-purple-100 text-purple-800 p-2 rounded-lg text-center text-xs font-bold cursor-default border border-purple-200 shadow-sm">Açaís</div>
                         <div className="bg-zinc-100 text-zinc-500 p-2 rounded-lg text-center text-xs font-bold cursor-default">Milkshakes</div>
                         <div className="bg-zinc-100 text-zinc-500 p-2 rounded-lg text-center text-xs font-bold cursor-default">Picolés</div>
                         <div className="bg-zinc-100 text-zinc-500 p-2 rounded-lg text-center text-xs font-bold cursor-default">Bebidas</div>
                       </div>
                       <h4 className="font-bold text-zinc-800 mb-3 text-[13px] md:text-sm">Cardápio</h4>
                       <div className="grid grid-cols-2 gap-2 overflow-y-auto pb-2" style={{ scrollbarWidth: 'none' }}>
                         <div className="bg-white border border-zinc-200 p-2 md:p-3 rounded-lg shadow-sm text-center text-xs font-medium cursor-default hover:border-purple-300 transition-colors">Açaí 300ml<br/><span className="text-green-600 font-bold mt-1 block">R$ 12,00</span></div>
                         <div className="bg-white border-2 text-purple-800 border-purple-500 p-2 md:p-3 rounded-lg shadow-sm text-center text-xs font-medium cursor-default relative overflow-hidden">
                           Açaí 500ml<br/><span className="text-green-600 font-bold mt-1 block">R$ 18,00</span>
                           <div className="absolute top-0 right-0 bg-purple-500 text-white text-[9px] md:text-[10px] px-1.5 py-0.5 rounded-bl font-bold">x1</div>
                         </div>
                       </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-[45%] pt-4 sm:pt-0 sm:pl-4 flex flex-col">
                       <h4 className="font-bold text-zinc-800 mb-3 text-[13px] md:text-sm">Resumo do Pedido</h4>
                       <div className="flex-1 overflow-y-auto min-h-[100px] sm:min-h-0" style={{ scrollbarWidth: 'none' }}>
                          <div className="flex justify-between text-xs font-bold mb-2 items-center bg-zinc-100 p-2 rounded-md">
                            <span>1x Açaí 500ml</span>
                            <span className="font-mono text-zinc-700">R$ 18,00</span>
                          </div>
                          <div className="flex justify-between text-[11px] items-center text-zinc-600 pl-2 mb-1 border-l-2 border-zinc-200 ml-1">
                            <span>Leite Ninho</span>
                            <span className="font-mono">+ R$ 2,50</span>
                          </div>
                          <div className="flex justify-between text-[11px] items-center text-zinc-600 pl-2 mb-3 border-l-2 border-zinc-200 ml-1">
                            <span>Morango Fresco</span>
                            <span className="font-mono">+ R$ 3,00</span>
                          </div>
                       </div>
                       <div className="border-t border-zinc-200 pt-3 mt-4 sm:mt-auto">
                          <div className="flex justify-between font-bold text-sm md:text-base mb-3 items-end">
                            <span className="text-zinc-600">Total</span>
                            <span className="text-green-600 text-xl font-display">R$ 23,50</span>
                          </div>
                          <button className="w-full bg-green-500 hover:bg-green-600 transition-colors text-white rounded-xl py-3.5 text-sm md:text-base font-bold shadow-lg uppercase tracking-wider active:scale-[0.98]">Concluir Pagamento</button>
                       </div>
                    </div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 relative z-10 px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4">Quem usa, <span className="text-gold">recomenda</span></h2>
            <p className="text-zinc-400 text-base md:text-lg">Resultados reais de empreendedores do ramo de açaí e sorvete que transformaram a gestão de seus negócios.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5" />
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
              <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 text-red-400 uppercase tracking-widest text-[10px] md:text-xs font-bold mb-6 border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                Lote Promocional Limitado
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 drop-shadow-md leading-[1.1]">
                Condição Especial:<br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">Acesso Vitalício Único</span>
              </h2>
              
              <p className="text-zinc-400 mb-8 max-w-md text-sm md:text-base leading-relaxed">
                Garanta o sistema completo Gestão Mix de forma definitiva. Esqueça as mensalidades altas e taxas abusivas. Pague apenas uma vez e seja dono da sua gestão.
              </p>
              
              <div className="space-y-4 md:space-y-5 w-full max-w-sm">
                {[
                  'Acesso Permanente ao Painel de Gestão',
                  'Frente de Caixa (PDV) Rápido Integrado',
                  'Precificação Delivery e Simulador iFood',
                  'Suporte Direto via WhatsApp'
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
            <a href="#" className="hover:text-electric-purple transition-colors mt-1 inline-block">Precisa de ajuda? Suporte</a>
          </div>
        </div>
      </footer>

      {/* Sales Notification Popup */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50 bg-dark-card border border-white/10 rounded-xl p-3 shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex items-center gap-3 max-w-[260px] md:max-w-[280px] backdrop-blur-md"
          >
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 border border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
            </div>
            <div>
              <p className="text-[11px] md:text-xs text-zinc-300 leading-snug">
                <strong className="text-white">{notifications[currentNotificationIndex].name}</strong> {notifications[currentNotificationIndex].action}
              </p>
              <div className="flex items-center gap-1.5 mt-1 text-[9px] md:text-[10px] text-zinc-500 font-medium tracking-tight">
                <span className="flex items-center gap-0.5"><MapPin className="w-2.5 h-2.5" /> {notifications[currentNotificationIndex].city}</span>
                <span>•</span>
                <span className="text-electric-purple mix-blend-screen">{notifications[currentNotificationIndex].time}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
