import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag } from 'lucide-react';

const salesData = [
  { name: 'Maria S.', item: 'Barca de Açaí 1L', city: 'Belo Horizonte', time: 'Agora mesmo' },
  { name: 'João P.', item: 'Açaí 500ml', city: 'Contagem', time: 'Há 2 min' },
  { name: 'Ana M.', item: 'Milkshake Ninho', city: 'Betim', time: 'Há 5 min' },
  { name: 'Carlos E.', item: 'Taça Vulcão', city: 'Belo Horizonte', time: 'Há 1 min' },
  { name: 'Juliana F.', item: 'Açaí 700ml', city: 'Nova Lima', time: 'Agora mesmo' },
  { name: 'Lucas R.', item: 'Fondue de Açaí', city: 'Contagem', time: 'Há 3 min' },
  { name: 'Fernanda L.', item: 'Açaí 300ml', city: 'Belo Horizonte', time: 'Agora mesmo' },
  { name: 'Ricardo T.', item: 'Sorvete 2 Bolas', city: 'Ibirité', time: 'Há 4 min' },
];

export function SalesNotification() {
  const [currentSale, setCurrentSale] = useState(salesData[0]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Start the cycle
    const intervalId = setInterval(() => {
      // Pick a random sale
      const randomIndex = Math.floor(Math.random() * salesData.length);
      setCurrentSale(salesData[randomIndex]);
      setIsVisible(true);

      // Hide after 4 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    }, 8000);

    // Initial show after 2 seconds
    let initialTimeout: any;
    let initialHideTimeout: any;
    
    initialTimeout = setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * salesData.length);
      setCurrentSale(salesData[randomIndex]);
      setIsVisible(true);
      
      initialHideTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    }, 2000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(initialTimeout);
      clearTimeout(initialHideTimeout);
    };
  }, []);

  return (
    <div className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-[9998] pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="bg-zinc-900/90 backdrop-blur-md border border-white/10 rounded-2xl p-3 sm:p-4 shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex items-center gap-3 md:gap-4 max-w-[280px] sm:max-w-[320px]"
          >
            <div className="w-10 h-10 rounded-full bg-electric-purple/20 border border-electric-purple/50 flex items-center justify-center shrink-0">
              <ShoppingBag className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-[10px] sm:text-xs text-white/70 mb-0.5"><strong className="text-white font-medium">{currentSale.name}</strong> de {currentSale.city}</p>
              <p className="text-xs sm:text-sm text-white font-bold tracking-tight leading-tight">Comprou {currentSale.item}</p>
              <p className="text-[9px] sm:text-[10px] text-gold mt-1">{currentSale.time}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
