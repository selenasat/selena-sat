"use client";

import { motion, useReducedMotion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
} as const;

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
} as const;

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  const staples = [
    { label: "Learning", value: "Next.js & Framer Motion" },
    { label: "Cooking", value: "Mentaiko Pasta" },
    { label: "Drinking", value: "Iced Matcha Latte with a splash of Chai" },
    { label: "Building", value: "Persona Palette App" },
  ];

  return (
    <section id="about" className="px-8 py-32 border-t border-neutral-200">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-6"
        >
          About Me
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl font-semibold leading-tight text-neutral-900"
        >
          Beyond the Code
        </motion.h2>

        <div className="mt-10 text-lg text-neutral-600 leading-relaxed space-y-6">
          <p>
            I’ve always been fascinated by the space where technical engineering
            meets human-centric design. My background in high-precision,
            quality-critical environments has shaped how I approach
            software—with an emphasis on logical rigor, attention to detail, and
            systemic reliability. Pairing that foundation with web development
            and UI/UX design allows me to build applications that are both
            robust under the hood and intuitive on the surface.
          </p>

          <p>
            For me, building for the web is about more than just writing clean
            code—it&apos;s about creating an experience that feels effortless for the
            user. My toolkit is diverse: I&apos;m especially interested in
            cloud-based AWS solutions and SQL databases, while also enjoying the
            creative side of prototyping interfaces in Figma and exploring AI
            and machine learning.
          </p>

          <div className="pt-6">
            <h3 className="text-xl font-medium text-neutral-900 mb-4 italic">
              The &quot;Offline&quot; Version
            </h3>
            <p>
              If we aren&apos;t talking shopping, we&apos;re probably talking food. I&apos;m a
              food blogger and a dedicated matcha enthusiast who loves the
              process of learning new recipes (the kitchen is basically my
              second sandbox). Most of my downtime is spent with my kid and our
              dog, usually outdoors or brainstorming my next personal project.
            </p>
          </div>
        </div>

        {/* Current Staples Section */}
        <div className="mt-16 pt-12 border-t border-neutral-100">
          <p className="text-xs uppercase tracking-widest text-neutral-400 mb-8">
            Current Staples
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {staples.map((staple) => (
              <motion.div key={staple.label} variants={itemVariants}>
                <p className="text-sm font-medium text-neutral-900">
                  {staple.label}
                </p>

                <p className="text-sm text-neutral-500 mt-1">{staple.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* What I'm Interested In */}
        <div className="mt-28 pt-16 border-t border-neutral-200">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-10">
            What I&apos;m Interested In
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-0"
          >
            <motion.div
              variants={itemVariants}
              whileHover={shouldReduceMotion ? undefined : { x: 8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="py-8 border-b border-neutral-200"
            >
              <h3 className="text-2xl md:text-3xl font-medium text-neutral-900">
                Software Engineering
              </h3>
              <p className="mt-3 max-w-2xl text-base md:text-lg text-neutral-500 leading-relaxed">
                Building reliable software and understanding how the pieces work
                together from development to deployment.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={shouldReduceMotion ? undefined : { x: 8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="py-8 border-b border-neutral-200"
            >
              <h3 className="text-2xl md:text-3xl font-medium text-neutral-900">
                Full-Stack Development
              </h3>
              <p className="mt-3 max-w-2xl text-base md:text-lg text-neutral-500 leading-relaxed">
                Creating thoughtful applications where frontend experiences,
                backend logic, databases, and APIs work together.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={shouldReduceMotion ? undefined : { x: 8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="py-8 border-b border-neutral-200"
            >
              <h3 className="text-2xl md:text-3xl font-medium text-neutral-900">
                Cloud & Infrastructure
              </h3>
              <p className="mt-3 max-w-2xl text-base md:text-lg text-neutral-500 leading-relaxed">
                Learning how applications are deployed, monitored, and
                maintained through cloud infrastructure and automation.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={shouldReduceMotion ? undefined : { x: 8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="py-8 border-b border-neutral-200"
            >
              <h3 className="text-2xl md:text-3xl font-medium text-neutral-900">
                AI & Computer Vision
              </h3>
              <p className="mt-3 max-w-2xl text-base md:text-lg text-neutral-500 leading-relaxed">
                Exploring how intelligent systems can make applications more
                useful, personalized, and interactive.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={shouldReduceMotion ? undefined : { x: 8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="py-8 border-b border-neutral-200"
            >
              <h3 className="text-2xl md:text-3xl font-medium text-neutral-900">
                UI / UX
              </h3>
              <p className="mt-3 max-w-2xl text-base md:text-lg text-neutral-500 leading-relaxed">
                Designing interfaces that feel intuitive, purposeful, and
                enjoyable to use.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={shouldReduceMotion ? undefined : { x: 8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="py-8"
            >
              <h3 className="text-2xl md:text-3xl font-medium text-neutral-900">
                DevOps & Automation
              </h3>
              <p className="mt-3 max-w-2xl text-base md:text-lg text-neutral-500 leading-relaxed">
                Improving development workflows through testing, automation,
                CI/CD, and reliable engineering practices.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Technical Toolkit */}
        <div className="mt-28 pt-16 border-t border-neutral-200">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-10">
            Technical Toolkit
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-900">
                Languages
              </h3>

              <p className="mt-3 text-base md:text-lg text-neutral-500 leading-relaxed">
                C · C++ · Java · JavaScript · TypeScript · Python · PHP · SQL
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-900">
                Frontend & Full-Stack
              </h3>

              <p className="mt-3 text-base md:text-lg text-neutral-500 leading-relaxed">
                React · Next.js · React Native · Tailwind CSS · Node.js · HTML ·
                CSS
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-900">
                Databases
              </h3>

              <p className="mt-3 text-base md:text-lg text-neutral-500 leading-relaxed">
                SQLite · PostgreSQL · MySQL · MongoDB · DynamoDB
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-900">
                Cloud & Infrastructure
              </h3>

              <p className="mt-3 text-base md:text-lg text-neutral-500 leading-relaxed">
                AWS · Terraform · Docker
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-900">
                AI & Machine Learning
              </h3>

              <p className="mt-3 text-base md:text-lg text-neutral-500 leading-relaxed">
                Whisper · OpenAI · OpenCV
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-900">
                Testing & CI/CD
              </h3>

              <p className="mt-3 text-base md:text-lg text-neutral-500 leading-relaxed">
                Mocha · Chai · GitHub Actions · Super Linter
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-900">
                UI & Interaction Design
              </h3>

              <p className="mt-3 text-base md:text-lg text-neutral-500 leading-relaxed">
                Figma · Framer Motion
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-900">
                Developer Tools
              </h3>

              <p className="mt-3 text-base md:text-lg text-neutral-500 leading-relaxed">
                Git · GitHub · VS Code · Visual Studio
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
