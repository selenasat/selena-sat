"use client";

import { motion, useReducedMotion } from "framer-motion";

const projects = [
  {
    number: "01",
    visual: "speech-therapy",
    title: "Interactive Speech Therapy Web Application",
    type: "Full-Stack · AI · UI/UX",
    status: "Collaborative Project",
    description:
      "A collaborative web application designed to provide interactive speech therapy exercises for patients and tools for speech-language pathologists. I contributed to the frontend experience and full-stack functionality, including responsive interfaces, speech interaction, and AI-assisted feedback.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Python",
      "SQLite",
      "Whisper",
    ],
    features: [
      "Interactive Speech Exercises",
      "AI-assisted Feedback",
      "Patient & Speech-Language Pathologist Progress Tracking",
      "Responsive Web Experience",
    ],
    linkType: "Case Study",
    href: "/speech-therapy",
  },

  {
    number: "02",
    visual: "palette",
    title: "Persona Palette",
    type: "Full-Stack · Computer Vision · UI/UX",
    status: "In Progress",
    description:
      "A cross-platform application that analyzes user photos to identify color season, face shape, and body shape, then turns those results into personalized fashion and beauty recommendations.",
    technologies: [
      "Python",
      "Django",
      "React",
      "React Native",
      "OpenCV",
      "PostgreSQL",
      "Figma",
      "AWS S3",
    ],
    features: [
      "Color Season Analysis",
      "Face Shape Detection",
      "Body Shape Classification",
      "Personalized Fashion & Beauty Recommendations",
    ],
    github: "https://github.com/selenasat/PersonaPaletteApp",
  },

  {
    number: "03",
    visual: "terraform",
    title: "Terraform Serverless Document Processor",
    type: "Cloud · DevOps · Infrastructure as Code",
    status: "In Progress",
    description:
      "An event-driven document processing system built with AWS services and Infrastructure as Code using Terraform.",
    technologies: [
      "AWS S3",
      "Lambda",
      "DynamoDB",
      "SNS",
      "IAM",
      "CloudWatch",
      "Terraform",
    ],
    features: [
      "Event-Driven Document Processing",
      "Infrastructure as Code with Terraform",
      "Automated Infrastructure Validation",
      "CI/CD Deployment Workflow",
    ],
    github:
      "https://github.com/selenasat/terraform-serverless-document-processor",
  },

  {
    number: "04",
    visual: "github-actions",
    title: "GitHub Actions CI Workflow",
    type: "DevOps · CI/CD · Automation",
    status: "Completed",
    description:
      "A hands-on CI/CD project exploring automated code quality workflows with GitHub Actions.",
    technologies: ["GitHub Actions", "Super Linter", "YAML", "Python", "CI/CD"],
    features: [
      "Workflow Configuration",
      "Automated Linting",
      "GitHub Actions runners",
      "Troubleshooting failed workflows",
    ],
    github: "https://github.com/selenasat/ci-cd-pipeline-template",
  },
];

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section id="projects" className="px-6 md:px-10 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="mb-20">
          <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-4">
            Selected Work
          </p>

          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight">
            Things I&apos;ve built.
          </h2>
        </div>

        {/* Projects */}
        <div className="space-y-24">
          {projects.map((project) => (
            <motion.article
              key={project.number}
              className="group"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
              whileInView={
                shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Project visual */}
              <div className="relative min-h-[360px] aspect-auto sm:aspect-[4/3] md:aspect-[16/8.5] bg-neutral-200 rounded-[2rem] overflow-hidden mb-8">
                {/* SLP Project Visual */}
                {project.visual === "speech-therapy" && (
                  <div className="absolute inset-0 bg-[#e9e6df] p-3 sm:p-5 md:p-10">
                    <div className="h-full rounded-[1.5rem] bg-[#f8f6f2] border border-neutral-200 p-4 sm:p-6 md:p-8 flex flex-col justify-between">
                      {/* Visual header */}
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                            Speech Session
                          </p>

                          <p className="mt-2 text-lg md:text-xl font-medium tracking-tight">
                            Practice speaking with intention
                          </p>
                        </div>

                        <span className="text-xs text-neutral-400">
                          SESSION 01
                        </span>
                      </div>

                      {/* Speech feedback */}
                      <div className="max-w-xl w-full">
                        <div className="flex items-end justify-between mb-3">
                          <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                            Volume
                          </p>

                          <p className="text-2xl md:text-3xl font-medium">
                            82 dB
                          </p>
                        </div>

                        <div className="h-2 rounded-full bg-neutral-200 overflow-hidden">
                          <div className="h-full w-[78%] bg-neutral-900 rounded-full" />
                        </div>

                        <div className="grid grid-cols-3 gap-3 mt-6">
                          <div className="rounded-xl border border-neutral-200 p-3 sm:p-4">
                            <p className="text-[10px] sm:text-xs text-neutral-400">
                              Volume
                            </p>

                            <p className="mt-1 sm:mt-2 text-base sm:text-lg font-medium">
                              82%
                            </p>
                          </div>

                          <div className="rounded-xl border border-neutral-200 p-3 sm:p-4">
                            <p className="text-[10px] sm:text-xs text-neutral-400">
                              Clarity
                            </p>
                            <p className="mt-1 sm:mt-2 text-base sm:text-lg font-medium">
                              76%
                            </p>
                          </div>

                          <div className="rounded-xl border border-neutral-200 p-3 sm:p-4">
                            <p className="text-[10px] sm:text-xs text-neutral-400">
                              Intent
                            </p>
                            <p className="mt-1 sm:mt-2 text-base sm:text-lg font-medium">
                              88%
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Visual footer */}
                      <div className="flex items-center justify-between text-xs text-neutral-400">
                        <span>Interactive exercise</span>
                        <span>AI-assisted feedback</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Persona Palette Visual */}
                {project.visual === "palette" && (
                  <div className="absolute inset-0 bg-[#e7e2dc] p-3 sm:p-5 md:p-8">
                    <div className="h-full rounded-[1.5rem] bg-[#f8f6f2] border border-neutral-200 p-4 sm:p-5 md:p-7 flex flex-col">
                      {/* Header */}
                      <div className="flex items-start justify-between shrink-0">
                        <div>
                          <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-neutral-400">
                            Persona Palette
                          </p>

                          <p className="mt-1 md:mt-2 text-base md:text-xl font-medium tracking-tight">
                            Discover your visual identity
                          </p>
                        </div>

                        <span className="text-[10px] md:text-xs text-neutral-400">
                          ANALYSIS 01
                        </span>
                      </div>

                      {/* Main Analysis */}
                      <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-8 flex-1 py-5">
                        {/* Color palette */}
                        <div className="flex -space-x-3 shrink-0">
                          <div className="w-11 h-11 md:w-14 md:h-14 rounded-full bg-[#172554] border-4 border-[#f8f6f2]" />
                          <div className="w-11 h-11 md:w-14 md:h-14 rounded-full bg-[#312e81] border-4 border-[#f8f6f2]" />
                          <div className="w-11 h-11 md:w-14 md:h-14 rounded-full bg-[#701a75] border-4 border-[#f8f6f2]" />
                          <div className="w-11 h-11 md:w-14 md:h-14 rounded-full bg-[#be123c] border-4 border-[#f8f6f2]" />
                          <div className="w-11 h-11 md:w-14 md:h-14 rounded-full bg-[#e5e7eb] border-4 border-[#f8f6f2]" />
                        </div>

                        {/* Analysis result */}
                        <div className="text-center md:text-left">
                          <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-neutral-400">
                            Example Analysis
                          </p>

                          <p className="mt-1 text-2xl md:text-4xl font-medium tracking-tight">
                            Cool Winter
                          </p>

                          <p className="mt-1 text-xs md:text-sm text-neutral-500">
                            High contrast · Cool undertones
                          </p>
                        </div>
                      </div>

                      {/* Analysis Cards */}
                      <div className="grid grid-cols-3 gap-2 md:gap-3 shrink-0">
                        <div className="rounded-lg md:rounded-xl border border-neutral-200 p-2 sm:p-3 md:p-4">
                          <p className="text-[10px] md:text-xs text-neutral-400">
                            Face Shape
                          </p>

                          <p className="mt-1 md:mt-2 text-xs md:text-sm font-medium">
                            Oval
                          </p>
                        </div>

                        <div className="rounded-lg md:rounded-xl border border-neutral-200 p-2 sm:p-3 md:p-4">
                          <p className="text-[10px] md:text-xs text-neutral-400">
                            Body Shape
                          </p>

                          <p className="mt-1 md:mt-2 text-xs md:text-sm font-medium">
                            Analysis
                          </p>
                        </div>

                        <div className="rounded-lg md:rounded-xl border border-neutral-200 p-2 sm:p-3 md:p-4">
                          <p className="text-[9px] sm:text-xs leading-tight tracking-tight text-neutral-400">
                            Recommendations
                          </p>

                          <p className="mt-1 md:mt-2 text-xs md:text-sm font-medium">
                            Personalized
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Terraform Serverless Visual */}
                {project.visual === "terraform" && (
                  <div className="absolute inset-0 bg-[#e7e2dc] p-3 sm:p-5 md:p-10">
                    <div className="h-full rounded-[1.5rem] bg-[#f8f6f2] border border-neutral-200 p-4 sm:p-6 md:p-8 flex flex-col justify-between">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                            Serverless Pipeline
                          </p>

                          <p className="mt-2 text-lg md:text-xl font-medium tracking-tight">
                            Event-driven document processing
                          </p>
                        </div>

                        <span className="text-xs text-neutral-400">
                          AWS · TERRAFORM
                        </span>
                      </div>

                      {/* Architecture */}
                      <div className="flex flex-nowrap items-center justify-center gap-1 sm:gap-3 md:gap-6 px-0 sm:px-2 md:px-4">
                        {/* S3 */}
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl border border-neutral-200 flex items-center justify-center transition-transform duration-300 hover:-translate-y-1">
                            <span className="text-[9px] sm:text-xs">
                              S3
                            </span>
                          </div>

                          <span className="mt-1 sm:mt-2 text-[9px] sm:text-xs text-neutral-400">
                            Upload
                          </span>
                        </div>

                        {/* Arrow */}
                        <span className="text-neutral-300 text-base sm:text-lg md:text-xl">
                          →
                        </span>

                        {/* Lambda */}
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl border border-neutral-200 flex items-center justify-center transition-transform duration-300 hover:-translate-y-1">
                            <span className="text-[9px] sm:text-xs ">
                              Lambda
                            </span>
                          </div>

                          <span className="mt-1 sm:mt-2 text-[9px] sm:text-xs text-neutral-400">
                            Process
                          </span>
                        </div>

                        {/* Arrow */}
                        <span className="text-neutral-300 text-base sm:text-lg md:text-xl">
                          →
                        </span>

                        {/* DynamoDB */}
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl border border-neutral-200 flex items-center justify-center transition-transform duration-300 hover:-translate-y-1">
                            <span className="text-[9px] sm:text-xs ">
                              DynamoDB
                            </span>
                          </div>

                          <span className="mt-1 sm:mt-2 text-[9px] sm:text-xs text-neutral-400">
                            Store
                          </span>
                        </div>

                        {/* Arrow */}
                        <span className="text-neutral-300 text-base sm:text-lg md:text-xl">
                          →
                        </span>

                        {/* SNS */}
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl border border-neutral-200 flex items-center justify-center transition-transform duration-300 hover:-translate-y-1">
                            <span className="text-[9px] sm:text-xs">
                              SNS
                            </span>
                          </div>

                          <span className="mt-1 sm:mt-2 text-[9px] sm:text-xs text-neutral-400">
                            Notify
                          </span>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between text-xs text-neutral-400">
                        <span>Infrastructure as Code</span>
                        <span>Terraform managed</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* GitHub Actions Visual */}
                {project.visual === "github-actions" && (
                  <div className="absolute inset-0 bg-[#e7e2dc] p-3 sm:p-5 md:p-10">
                    <div className="h-full rounded-[1.5rem] bg-[#f8f6f2] border border-neutral-200 p-4 sm:p-6 md:p-8 flex flex-col justify-between">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                            CI Workflow
                          </p>

                          <p className="mt-2 text-lg md:text-xl font-medium tracking-tight">
                            Automated code quality checks
                          </p>
                        </div>

                        <span className="text-xs text-neutral-400">
                          GITHUB ACTIONS
                        </span>
                      </div>

                      {/* Workflow */}
                      <div className="flex flex-nowrap items-center justify-center gap-1 sm:gap-4">
                        {/* Push */}
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 px-3 py-2 sm:px-4 sm:py-3 rounded-2xl border border-neutral-200 flex items-center justify-center">
                            <span className="text-xs md:text-sm font-medium">
                              Push
                            </span>
                          </div>

                          <span className="mt-1 sm:mt-2 text-[9px] sm:text-xs text-neutral-400">
                            Code change
                          </span>
                        </div>

                        <span className="text-neutral-300 text-lg">→</span>

                        {/* Workflow */}
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 px-3 py-2 sm:px-4 sm:py-3 rounded-2xl border border-neutral-200 flex items-center justify-center">
                            <span className="text-xs md:text-sm font-medium">
                              Action
                            </span>
                          </div>

                          <span className="mt-1 sm:mt-2 text-[9px] sm:text-xs text-neutral-400">
                            Workflow
                          </span>
                        </div>

                        <span className="text-neutral-300 text-lg">→</span>

                        {/* Lint */}
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 px-3 py-2 sm:px-4 sm:py-3 rounded-2xl border border-neutral-200 flex items-center justify-center">
                            <span className="text-xs md:text-sm font-medium">
                              Lint
                            </span>
                          </div>

                          <span className="mt-1 sm:mt-2 text-[9px] sm:text-xs text-neutral-400">
                            Super Linter
                          </span>
                        </div>

                        <span className="text-neutral-300 text-lg">→</span>

                        {/* Result */}
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 px-3 py-2 sm:px-4 sm:py-3 rounded-2xl border border-neutral-200 flex items-center justify-center">
                            <span className="text-xs md:text-sm font-medium">
                              Pass
                            </span>
                          </div>

                          <span className="mt-1 sm:mt-2 text-[9px] sm:text-xs text-neutral-400">
                            Validation
                          </span>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between text-xs text-neutral-400">
                        <span>Automated quality checks</span>
                        <span>CI/CD</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Placeholder for projects without a custom visual */}
                {!project.visual && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                      Project {project.number}
                    </p>
                  </div>
                )}
              </div>

              {/* Project information */}
              <div className="grid md:grid-cols-[80px_1fr] gap-6 md:gap-8">
                <p className="text-sm text-neutral-400">{project.number}</p>

                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <p className="uppercase tracking-[0.2em] text-xs text-neutral-400">
                      {project.type}
                    </p>

                    <span className="text-xs text-neutral-400">·</span>

                    <p className="text-xs text-neutral-500">{project.status}</p>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-neutral-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project technologies */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-neutral-300 px-3 py-1 text-xs text-neutral-500"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Project features */}
                  {project.features && (
                    <div className="mt-8">
                      <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-3">
                        Highlights
                      </p>

                      <ul className="list-none space-y-2 text-sm text-neutral-500 p-0">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <span className="text-neutral-300">→</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* GitHub link */}
                  <div className="mt-6 flex flex-wrap items-center gap-6">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex text-sm font-medium text-neutral-900 hover:text-neutral-500 transition-colors"
                      >
                        View GitHub Repository ↗
                      </a>
                    )}

                    {project.href && project.linkType === "Case Study" && (
                      <a
                        href={project.href}
                        className="inline-flex text-sm font-medium text-neutral-900 hover:text-neutral-500 transition-colors"
                      >
                        {project.linkType} ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
