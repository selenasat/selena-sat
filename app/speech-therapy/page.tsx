import Link from "next/link";

export default function SpeechTherapy() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] text-[#111111]">
      {/* Header */}
      <header className="px-6 md:px-10 pt-8">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/#projects"
            className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
          >
            ← Back to projects
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 md:px-10 pt-20 md:pt-28 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl">
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Case Study · Full-Stack · UI/UX · Speech Interaction
            </p>

            <h1 className="max-w-5xl text-5xl sm:text-6xl md:text-8xl font-semibold leading-[0.95] tracking-tight">
              Interactive Speech Therapy Web Application
            </h1>

            <p className="mt-8 max-w-3xl text-lg md:text-xl leading-relaxed text-neutral-600">
              A collaborative web application designed to support interactive
              speech therapy exercises and provide both clients and
              speech-language pathologists with a more connected digital
              experience.
            </p>
          </div>

          {/* Snapshot */}
          <div className="mt-16 border-t border-neutral-200 pt-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                  Role
                </p>
                <p className="mt-2 text-sm text-neutral-700">
                  Frontend · UI/UX · Full-Stack Contributions
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                  Focus
                </p>
                <p className="mt-2 text-sm text-neutral-700">
                  Client Experience · SLP Workflow · Speech Interaction
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                  Environment
                </p>
                <p className="mt-2 text-sm text-neutral-700">
                  Collaborative Product Development
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio-safe visual */}
      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#e9e6df] p-5 sm:p-8 md:p-12">
            <div className="rounded-[1.5rem] border border-neutral-200 bg-[#f8f6f2] p-5 sm:p-8 md:p-10">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                    Client Experience
                  </p>
                  <h2 className="mt-2 text-xl font-medium">
                    Speech Exercise Flow
                  </h2>
                </div>

                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-500">
                  Conceptual
                </span>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  ["01", "Browse", "Explore available exercises"],
                  ["02", "Practice", "Record and interact with speech exercises"],
                  ["03", "Review", "View feedback and progress"],
                ].map(([number, title, description]) => (
                  <div
                    key={number}
                    className="rounded-2xl border border-neutral-200 bg-white p-5"
                  >
                    <p className="text-xs text-neutral-400">{number}</p>
                    <h3 className="mt-8 text-lg font-medium">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                      {description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3 overflow-hidden">
                <div className="h-1.5 flex-1 rounded-full bg-neutral-200">
                  <div className="h-full w-[72%] rounded-full bg-neutral-800" />
                </div>
                <span className="text-xs text-neutral-400">Progress</span>
              </div>
            </div>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-neutral-400">
            Visual shown here is an original portfolio recreation created to
            communicate my contributions. It does not reproduce proprietary
            application screens or company branding.
          </p>
        </div>
      </section>

      {/* 01 Problem */}
      <section className="px-6 md:px-10 py-20 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[120px_1fr] gap-8">
          <p className="text-sm text-neutral-400">01</p>

          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              The Challenge
            </p>

            <h2 className="mt-5 text-3xl md:text-5xl font-medium leading-tight tracking-tight">
              Making speech therapy interactions feel clear, connected, and
              usable.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-neutral-600">
              The application brought together interactive exercises, speech
              interaction, progress information, and separate experiences for
              clients and speech-language pathologists. My work focused heavily
              on making those experiences understandable through navigation,
              page structure, visual hierarchy, and interaction design.
            </p>
          </div>
        </div>
      </section>

      {/* 02 Role */}
      <section className="px-6 md:px-10 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[120px_1fr] gap-8">
          <p className="text-sm text-neutral-400">02</p>

          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              My Role
            </p>

            <h2 className="mt-5 text-3xl md:text-5xl font-medium leading-tight tracking-tight">
              I worked primarily across the frontend experience and UI/UX.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-neutral-600">
              My contributions included building and refining application
              screens, navigation flows, exercise experiences, client-facing
              interactions, and speech-language pathologist workflows. I also
              worked on responsive styling and visual consistency across the
              application.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-5">
              {[
                "SLP dashboard experience",
                "Client search and profile workflow",
                "Role-specific navigation",
                "Exercise browsing and preview",
                "Speech interaction UI",
                "Volume feedback visualization",
                "Progress visualization",
                "Responsive interface styling",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 border-b border-neutral-200 pb-4"
                >
                  <span className="text-neutral-400">✦</span>
                  <span className="text-sm text-neutral-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 03 Client */}
      <section className="px-6 md:px-10 py-20 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[120px_1fr] gap-8">
          <p className="text-sm text-neutral-400">03</p>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Client Experience
            </p>

            <div className="grid lg:grid-cols-2 gap-12 mt-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
                  From choosing an exercise to reviewing progress.
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-neutral-600">
                  I helped shape the client-side flow around discovering
                  exercises, previewing an activity, starting a speech
                  exercise, receiving feedback, and navigating to progress and
                  other parts of the application.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  "Browse available exercises",
                  "Search and select an exercise",
                  "Preview exercise details",
                  "Start an interactive speech exercise",
                  "Record and review speech",
                  "Navigate through progress and profile areas",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl border border-neutral-200 p-4"
                  >
                    <span className="text-xs text-neutral-400">
                      0{index + 1}
                    </span>
                    <span className="text-sm text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 SLP */}
      <section className="px-6 md:px-10 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[120px_1fr] gap-8">
          <p className="text-sm text-neutral-400">04</p>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              SLP Experience
            </p>

            <h2 className="mt-5 max-w-4xl text-3xl md:text-5xl font-medium leading-tight tracking-tight">
              A separate workflow for managing and reviewing clients.
            </h2>

            <p className="mt-8 max-w-4xl text-lg leading-relaxed text-neutral-600">
              I contributed to the speech-language pathologist experience by
              building interface flows for viewing clients, searching client
              lists, opening individual client profiles, and initiating the
              client invitation workflow.
            </p>

            <div className="mt-12 rounded-[2rem] border border-neutral-200 p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  ["Dashboard", "Client overview"],
                  ["Search", "Find clients"],
                  ["Profile", "Review information"],
                  ["Invite", "Start client onboarding"],
                ].map(([title, description]) => (
                  <div
                    key={title}
                    className="rounded-2xl bg-neutral-50 p-5"
                  >
                    <h3 className="font-medium">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 Speech */}
      <section className="px-6 md:px-10 py-20 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[120px_1fr] gap-8">
          <p className="text-sm text-neutral-500">05</p>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Speech Interaction
            </p>

            <div className="grid lg:grid-cols-2 gap-12 mt-8">
              <div>
                <h2 className="text-3xl md:text-5xl font-medium leading-tight tracking-tight">
                  Making audio interaction visible to the user.
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-neutral-400">
                  I worked on the interface around speech exercises, recording,
                  playback, feedback, and volume visualization. One example was
                  refining the volume meter so it could respond within a
                  constrained, responsive interface rather than relying on a
                  fixed desktop width.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-400">
                    Microphone input
                  </span>
                  <span className="text-xs text-neutral-500">
                    Audio level
                  </span>
                </div>

                <div className="mt-12">
                  <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-[64%] rounded-full bg-white" />
                  </div>

                  <div className="mt-3 flex justify-between text-xs text-neutral-500">
                    <span>Low</span>
                    <span>Moderate</span>
                    <span>High</span>
                  </div>
                </div>

                <div className="mt-12 flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-white" />
                  <p className="text-sm text-neutral-400">
                    Recording interface feedback
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 UI/UX */}
      <section className="px-6 md:px-10 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[120px_1fr] gap-8">
          <p className="text-sm text-neutral-400">06</p>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              UI / UX Work
            </p>

            <h2 className="mt-5 max-w-4xl text-3xl md:text-5xl font-medium leading-tight tracking-tight">
              Turning functional screens into a more cohesive product
              experience.
            </h2>

            <p className="mt-8 max-w-4xl text-lg leading-relaxed text-neutral-600">
              A significant part of my contribution was visual refinement.
              Across dashboards, forms, exercise pages, profiles, navigation,
              progress views, and messaging, I worked on layout, spacing,
              typography, controls, cards, buttons, and responsive behavior.
            </p>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                "Navigation",
                "Forms",
                "Dashboards",
                "Cards",
                "Progress",
                "Exercise UI",
                "Profiles",
                "Responsive Layout",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-neutral-200 p-5"
                >
                  <p className="text-sm text-neutral-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 07 Technical */}
      <section className="px-6 md:px-10 py-20 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[120px_1fr] gap-8">
          <p className="text-sm text-neutral-400">07</p>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Technical Work
            </p>

            <h2 className="mt-5 max-w-4xl text-3xl md:text-5xl font-medium leading-tight tracking-tight">
              Working across components, state, navigation, and API-connected
              interfaces.
            </h2>

            <p className="mt-8 max-w-4xl text-lg leading-relaxed text-neutral-600">
              The project gave me experience working inside an existing React
              application and connecting multiple screens into a cohesive
              product flow. My work included component-level UI changes,
              application state and page transitions, client-side data
              requests, speech exercise interfaces, and responsive styling.
            </p>

            <div className="mt-12 flex flex-wrap gap-3">
              {[
                "React",
                "JavaScript",
                "CSS",
                "Component Design",
                "State Management",
                "Client-Side Navigation",
                "API Requests",
                "Responsive UI",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 08 Outcome */}
      <section className="px-6 md:px-10 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[120px_1fr] gap-8">
          <p className="text-sm text-neutral-400">08</p>

          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Outcome
            </p>

            <h2 className="mt-5 text-3xl md:text-5xl font-medium leading-tight tracking-tight">
              A stronger understanding of building software for different
              people within the same product.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-neutral-600">
              Working on both client-facing and SLP-facing experiences helped
              me think beyond individual screens. I had to consider how
              navigation, information hierarchy, interaction feedback, and
              progress information fit together across different user roles.
            </p>
          </div>
        </div>
      </section>

      {/* 09 Reflection */}
      <section className="px-6 md:px-10 py-20 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[120px_1fr] gap-8">
          <p className="text-sm text-neutral-400">09</p>

          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Reflection
            </p>

            <blockquote className="mt-8 text-2xl md:text-4xl leading-tight tracking-tight">
              “Good product development is not just about making a feature
              work. It is about making the experience understandable to the
              person using it.”
            </blockquote>

            <p className="mt-8 text-lg leading-relaxed text-neutral-600">
              This project strengthened my interest in the intersection of
              software engineering and product design. It also taught me how
              much thoughtful interface work can influence the usability of a
              technically complex application.
            </p>
          </div>
        </div>
      </section>

      {/* Disclosure */}
      <section className="px-6 md:px-10 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[2rem] bg-neutral-100 p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
              Portfolio Note
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-500">
              This project was developed collaboratively for a company. The
              visuals on this page are original portfolio recreations created
              to communicate my contributions and do not reproduce proprietary
              application screens, company branding, private source code, or
              confidential information.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 py-24 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              More Projects
            </p>

            <h2 className="mt-5 max-w-2xl text-4xl md:text-6xl font-medium leading-tight tracking-tight">
              See what else I&apos;ve been building.
            </h2>
          </div>

          <Link
            href="/#projects"
            className="inline-flex w-fit rounded-full bg-white px-6 py-3 text-sm text-neutral-900 transition-transform duration-200 hover:-translate-y-1"
          >
            Back to projects →
          </Link>
        </div>
      </section>
    </main>
  );
}