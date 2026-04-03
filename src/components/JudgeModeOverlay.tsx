"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useJudgeMode } from "./Providers";

export function JudgeModeOverlay() {
  const { judgeMode, toggleJudgeMode } = useJudgeMode();

  return (
    <AnimatePresence>
      {judgeMode && (
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
          className="fixed inset-0 z-[70] flex flex-col justify-end pointer-events-none will-change-transform"
        >
          {/* Overlay background */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 0.6 }} 
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 pointer-events-auto"
            onClick={toggleJudgeMode}
          />
          
          <div className="relative w-full max-w-4xl mx-auto rounded-t-3xl border-t border-x overflow-auto shadow-[0_0_30px_rgba(30,140,122,0.15)] pointer-events-auto h-[80vh]" style={{ background: "var(--bg-secondary)", borderColor: "var(--border)" }}>
            <div className="sticky top-0 w-full flex justify-between items-center p-6 border-b z-10" style={{ background: "var(--background)", borderColor: "var(--border)" }}>
              <h2 className="text-2xl font-black uppercase text-white flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                Judge Interface
              </h2>
              <button onClick={toggleJudgeMode} className="text-white/60 hover:text-white p-2 text-2xl leading-none">&times;</button>
            </div>
            
            <div className="p-8 space-y-12">
              <section>
                <h3 className="text-xl font-bold mb-4" style={{ color: "var(--primary)" }}>[01] Problem Statement Evaluation</h3>
                <p className="text-lg leading-relaxed" style={{ color: "rgba(200,200,210,0.8)" }}>
                  Judges, evaluate the clarity and scope of the problem. Does the solution directly address the core issue? 
                  Look for projects that define a sharp scope and directly mitigate the problem at scale without unnecessary overhead.
                </p>
              </section>
              
              <section>
                <h3 className="text-xl font-bold mb-4" style={{ color: "var(--primary)" }}>[02] Technical Innovation</h3>
                <p className="text-lg leading-relaxed" style={{ color: "rgba(200,200,210,0.8)" }}>
                  Has the team built something technically complex or creatively simple? We prioritize custom implementations over wrappers. 
                  Assess their algorithmic efficiency, UI/UX performance, and overall system architecture.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-4" style={{ color: "var(--primary)" }}>[03] Tech Stack & Execution</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  {['React/NextJS', 'Python/FastAPI', 'Solidity/Web3', 'TensorFlow/PyTorch'].map(tech => (
                    <div key={tech} className="p-4 rounded-xl border text-center font-mono text-sm" style={{ borderColor: 'var(--border)', background: 'rgba(255,255,255,0.05)' }}>
                      {tech}
                    </div>
                  ))}
                </div>
              </section>
              
              <section>
                <h3 className="text-xl font-bold mb-4" style={{ color: "var(--primary)" }}>[04] Real-world Impact</h3>
                <p className="text-lg leading-relaxed" style={{ color: "rgba(200,200,210,0.8)" }}>
                  How viable is this project in the real world? Evaluate the go-to-market strategy, scalability potential, and actual social or commercial benefit this provides.
                </p>
              </section>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
