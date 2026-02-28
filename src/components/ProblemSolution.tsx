import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { useAudience } from '../context/AudienceContext';

const ProblemSolution = () => {
  const { audience, content } = useAudience();
  const { problems, solutions } = content;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const solutionItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="solucion" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl opacity-20 pointer-events-none">
        <div className="absolute left-0 top-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-[100px]" />
        <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            El desafío que nadie ha resuelto... <span className="text-secondary">hasta ahora</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            La brecha entre la gestión de emergencias tradicional y lo que la tecnología actual permite es inmensa.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start relative">
          {/* Divider (Desktop) */}
          <div className="hidden lg:flex absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2 justify-center">
            <div className="sticky top-1/2 -translate-y-1/2 z-20">
              <div className="bg-[#0A1128] p-2 rounded-full border border-white/10">
                <span className="block w-10 h-10 rounded-full bg-gradient-to-br from-red-500/20 to-secondary/20 backdrop-blur-md flex items-center justify-center text-xs font-bold text-white border border-white/5">VS</span>
              </div>
            </div>
          </div>

          {/* Problems Column */}
          <AnimatePresence mode="wait">
          <motion.div
            key={`problems-${audience}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-8 pl-2">
              <div className="w-2 h-8 bg-red-500 rounded-full" />
              <h3 className="text-2xl font-bold text-white">Sistemas Tradicionales</h3>
            </div>
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-red-500/5 hover:border-red-500/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 rounded-lg bg-red-500/10 text-red-400 group-hover:scale-110 transition-transform">
                    <X size={18} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors">{problem.title}</h4>
                    <p className="text-gray-400 text-sm mt-1 group-hover:text-gray-300 transition-colors">{problem.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          </AnimatePresence>

          {/* Solutions Column */}
          <AnimatePresence mode="wait">
          <motion.div
            key={`solutions-${audience}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-8 pl-2 lg:justify-end">
              <h3 className="text-2xl font-bold text-white text-right">SYREIAX GLOBAL</h3>
              <div className="w-2 h-8 bg-secondary rounded-full" />
            </div>
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                variants={solutionItemVariants}
                className="group relative p-6 rounded-2xl glass-card hover:bg-secondary/5 hover:border-secondary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary/5"
              >
                <div className="flex items-start gap-4 flex-row-reverse lg:flex-row">
                  <div className="mt-1 p-2 rounded-lg bg-secondary/10 text-secondary group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(78,205,196,0.3)]">
                    <Check size={18} />
                  </div>
                  <div className="text-right lg:text-left flex-1">
                    <h4 className="text-lg font-bold text-white group-hover:text-secondary transition-colors">{solution.title}</h4>
                    <p className="text-gray-400 text-sm mt-1 group-hover:text-gray-300 transition-colors">{solution.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;