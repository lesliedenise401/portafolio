import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Users, Code } from "lucide-react";
import { datosPortafolio } from "../datos/datosPortafolio";

const Contacto = () => {
  const { contacto, redesSociales } = datosPortafolio;

  const iconosRedes = {
    Users: Users,
    Code: Code,
    Mail: Mail,
  };

  return (
    <section id="contacto" className="bg-[#ffeaf1] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-[#2d2428] text-center mb-12"
        >
          Contacto
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl border border-[#ffd6e3] p-6 space-y-4 shadow-sm"
          >
            <a
              href={`mailto:${contacto?.correo}`}
              className="flex items-center gap-3 text-[#6b5a61] hover:text-[#2d2428] transition-colors"
            >
              <span className="w-10 h-10 rounded-full bg-[#ffeaf1] border border-[#ffd6e3] flex items-center justify-center">
                <Mail size={18} className="text-[#ffadc6]" />
              </span>
              <span className="break-all">{contacto?.correo}</span>
            </a>
            <div className="flex items-center gap-3 text-[#6b5a61]">
              <span className="w-10 h-10 rounded-full bg-[#ffeaf1] border border-[#ffd6e3] flex items-center justify-center">
                <MapPin size={18} className="text-[#ffadc6]" />
              </span>
              <span>{contacto?.ubicacion}</span>
            </div>
            <div className="flex items-center gap-3 text-[#6b5a61]">
              <span className="w-10 h-10 rounded-full bg-[#ffeaf1] border border-[#ffd6e3] flex items-center justify-center">
                <Phone size={18} className="text-[#ffadc6]" />
              </span>
              <span>{contacto?.telefono}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl border border-[#ffd6e3] p-6 flex flex-col items-center justify-center gap-4 shadow-sm"
          >
            <p className="text-[#6b5a61] text-center">
              Conecta conmigo en mis redes sociales.
            </p>
            <div className="flex gap-3">
              {redesSociales?.map((red) => {
                const Icono = iconosRedes[red?.icono] ?? Mail;
                return (
                  <a
                    key={red?.nombre}
                    href={red?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={red?.nombre}
                    className="w-11 h-11 rounded-full bg-[#ffeaf1] border border-[#ffd6e3] flex items-center justify-center text-[#6b5a61] hover:text-[#2d2428] hover:border-[#ffadc6] hover:bg-white transition-all duration-200"
                  >
                    <Icono size={20} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;