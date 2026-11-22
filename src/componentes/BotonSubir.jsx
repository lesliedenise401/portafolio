import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BotonSubir = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const manejarScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", manejarScroll, { passive: true });
    return () => window.removeEventListener("scroll", manejarScroll);
  }, []);

  const subir = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={subir}
          aria-label="Volver arriba"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#ffadc6] hover:bg-[#ffc1d4] text-[#2d2428] flex items-center justify-center shadow-lg transition-colors duration-200"
        >
          <ArrowUp size={22} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BotonSubir;