import {
  CheckCircle2,
  IceCream2,
  ShieldCheck,
  Box,
  CircleDollarSign,
  Monitor,
  TrendingUp,
  PlayCircle,
  CalendarDays,
  MessageCircle,
  ArrowRight
} from 'lucide-react';

export default function Obrigado() {
  return (
    <>
      <div className="min-h-screen bg-dark-bg text-zinc-300 font-sans selection:bg-electric-purple/30 selection:text-white flex flex-col">
        {/* Header (Simplified) */}
        <header className="py-6 px-6 relative z-10 border-b border-white/5 bg-black/20 backdrop-blur-md">
          <div className="container mx-auto flex items-center justify-center md:justify-start gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-[0_0_15px_rgba(255,215,0,0.3)]">
              <IceCream2 className="text-[#12001e] w-6 h-6 -rotate-6" />
            </div>
            <span className="font-display font-black text-2xl tracking-tight text-white drop-shadow-sm">
              Gestão<span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">Mix</span>
            </span>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 relative">
          {/* Background Elements */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-electric-purple/20 rounded-full blur-[120px] opacity-30 mix-blend-screen animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[150px] opacity-20 mix-blend-screen"></div>
          </div>

          <section className="py-16 md:py-24 relative z-10 px-6">
            <div className="container mx-auto max-w-4xl">
              
              {/* Hero / Confirmation */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-500/20 text-green-500 mb-8 border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white tracking-tight leading-tight">
                  🎉 Parabéns! Sua assinatura foi <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">confirmada com sucesso</span>.
                </h1>
                <p className="text-xl md:text-2xl font-medium text-zinc-300 mb-4">
                  Seja muito bem-vindo ao Gestão Mix.
                </p>
                <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
                  Agora você terá uma plataforma completa para gerenciar sua sorveteria ou açaíteria com mais controle, organização e lucratividade.
                </p>
              </div>

              {/* Próximos Passos */}
              <div className="bg-dark-card/40 border border-white/10 rounded-[2rem] p-6 md:p-12 shadow-2xl backdrop-blur-sm mb-16 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light"></div>
                
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-10 text-center">
                  Próximos Passos
                </h2>

                <div className="space-y-6">
                  {/* Passo 1 - Acessar o Sistema (Destaque Principal) */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden group hover:border-gold/30 transition-colors">
                    <div className="absolute -right-20 -top-20 w-40 h-40 bg-gold/10 rounded-full blur-[50px] group-hover:bg-gold/20 transition-colors"></div>
                    <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                      <span className="font-display font-black text-2xl text-gold">1</span>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-xl font-bold text-white mb-2">Acesse o Gestão Mix</h3>
                      <p className="text-zinc-400 mb-6 md:mb-0">Clique no botão abaixo para entrar na plataforma.</p>
                    </div>
                    <a 
                      href="https://gestao-acaiteria-sorveteria.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-light via-gold to-gold-dark text-[#12001e] px-8 py-4 rounded-xl font-black text-lg transition-all shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] hover:scale-105 uppercase shrink-0"
                    >
                      Acessar o Sistema <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Passo 2 - Videoaulas */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <span className="font-display font-bold text-xl text-zinc-300">2</span>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-lg font-bold text-white mb-1">Assista às videoaulas disponíveis na Hotmart</h3>
                      <p className="text-zinc-400 text-sm">Antes de começar, recomendamos assistir às aulas para conhecer todas as funcionalidades do sistema e aproveitar ao máximo a plataforma.</p>
                    </div>
                    <a 
                      href="#INSERIR_LINK_HOTMART"
                      className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-bold transition-colors hover:bg-white/20 border border-white/5 shrink-0"
                    >
                      <PlayCircle className="w-5 h-5" /> Assistir às Videoaulas
                    </a>
                  </div>

                  {/* Passo 3 - Demonstração */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <span className="font-display font-bold text-xl text-zinc-300">3</span>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-lg font-bold text-white mb-1">Agende uma demonstração personalizada</h3>
                      <p className="text-zinc-400 text-sm">Se preferir, nossa equipe pode apresentar o sistema e tirar todas as suas dúvidas em uma demonstração rápida.</p>
                    </div>
                    <a 
                      href="#INSERIR_LINK_AGENDAMENTO"
                      className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-bold transition-colors hover:bg-white/20 border border-white/5 shrink-0"
                    >
                      <CalendarDays className="w-5 h-5" /> Agendar Demonstração
                    </a>
                  </div>

                  {/* Passo 4 - Suporte */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <span className="font-display font-bold text-xl text-zinc-300">4</span>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-lg font-bold text-white mb-1">Precisa de ajuda?</h3>
                      <p className="text-zinc-400 text-sm">Nossa equipe está pronta para ajudar.</p>
                    </div>
                    <a 
                      href="https://wa.me/5531998162792?text=Ol%C3%A1%21%20Acabei%20de%20assinar%20o%20Gest%C3%A3o%20Mix%20e%20preciso%20de%20ajuda."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366]/20 text-[#25D366] px-6 py-3 rounded-lg font-bold transition-colors hover:bg-[#25D366]/30 border border-[#25D366]/30 shrink-0"
                    >
                      <MessageCircle className="w-5 h-5" /> Falar com Suporte
                    </a>
                  </div>
                </div>
              </div>

              {/* Recursos do Sistema */}
              <div className="mb-16">
                <h2 className="text-2xl font-display font-bold text-center text-white mb-8">
                  Tudo pronto para você começar
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {/* Card 1 */}
                  <div className="bg-dark-elem/60 border border-white/5 rounded-xl p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                      <Box className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Controle de Estoque</h3>
                      <p className="text-sm text-zinc-400">Gerencie insumos e produtos finalizados com baixa automática a cada venda.</p>
                    </div>
                  </div>
                  
                  {/* Card 2 */}
                  <div className="bg-dark-elem/60 border border-white/5 rounded-xl p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-electric-purple/10 flex items-center justify-center shrink-0">
                      <CircleDollarSign className="w-6 h-6 text-electric-purple" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Precificação Inteligente</h3>
                      <p className="text-sm text-zinc-400">Descubra exatamente o custo e o lucro real de cada item do seu cardápio.</p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-dark-elem/60 border border-white/5 rounded-xl p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                      <Monitor className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">PDV Completo</h3>
                      <p className="text-sm text-zinc-400">Frente de caixa rápido para vendas no balcão e gestão de mesas.</p>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-dark-elem/60 border border-white/5 rounded-xl p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Gestão Financeira</h3>
                      <p className="text-sm text-zinc-400">Controle de fluxo de caixa, relatórios de vendas e indicadores de desempenho.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mensagem Final */}
              <div className="text-center max-w-2xl mx-auto bg-gradient-to-br from-white/5 to-transparent border border-white/5 p-8 rounded-3xl">
                <h2 className="text-2xl font-display font-bold text-white mb-4">
                  Estamos felizes em ter você conosco!
                </h2>
                <p className="text-zinc-400 mb-4 leading-relaxed">
                  O Gestão Mix foi desenvolvido para ajudar empresários do ramo de sorvetes e açaí a tomarem decisões mais inteligentes, reduzirem perdas e aumentarem seus lucros.
                </p>
                <p className="text-gold font-medium">
                  Conte com nossa equipe durante toda a sua jornada.
                </p>
              </div>

            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/5 py-10 relative z-10 mt-auto">
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
