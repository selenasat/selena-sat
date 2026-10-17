"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          website: formData.get("website"), 
        }),
      });

      if (!response.ok) {
        throw new Error("Message could not be sent.");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="px-6 md:px-10 py-32 border-t border-neutral-200"
    >
      <div className="max-w-7xl mx-auto">
        {/* Intro */}
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-6">
            Contact
          </p>

          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight">
            Let&apos;s talk.
          </h2>

          <p className="mt-8 max-w-2xl text-lg text-neutral-600 leading-relaxed">
            Have a project in mind, an interesting opportunity, or just want to
            say hello? I&apos;d love to hear from you.
          </p>

          <p className="mt-4 max-w-2xl text-neutral-500 leading-relaxed">
            I&apos;m open to conversations about software engineering
            opportunities, creative projects, collaborations, and ideas worth
            building.
          </p>
        </div>

        {/* Contact Form */}
        <div className="mt-20 max-w-2xl">
          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* Honeypot field: hidden from real visitors */}
            <div
              aria-hidden="true"
              className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
            >
              <label htmlFor="website">Leave this field empty</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-neutral-900"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                placeholder="Your name"
                maxLength={100}
                required
                disabled={status === "sending"}
                className="mt-3 block w-full border-0 border-b border-neutral-300 bg-transparent px-0 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 disabled:opacity-50"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-900"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="your-email@example.com"
                maxLength={254}
                required
                disabled={status === "sending"}
                className="mt-3 block w-full border-0 border-b border-neutral-300 bg-transparent px-0 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 disabled:opacity-50"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-neutral-900"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about a project, collaboration, opportunity, or just say hello..."
                rows={5}
                maxLength={5000}
                required
                disabled={status === "sending"}
                className="mt-3 block w-full resize-none border-0 border-b border-neutral-300 bg-transparent px-0 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 disabled:opacity-50"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-full bg-neutral-900 px-6 py-3 text-sm text-white transition-all duration-200 hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-4"
            >
              {status === "sending" ? "Sending..." : "Send message ↗"}
            </button>

            <div aria-live="polite" role="status">
              {status === "success" && (
                <p className="text-sm text-neutral-600">
                  Thanks for reaching out! Your message was submitted
                  successfully.
                </p>
              )}

              {status === "error" && (
                <p className="text-sm text-red-600">
                  We couldn&apos;t send your message. Please try again or email
                  me directly at satselena.dev@gmail.com.
                </p>
              )}
            </div>
          </form>
        </div>

        {/* Social Links */}
        <div className="mt-24 pt-10 border-t border-neutral-200">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 mb-5">
            Find me online
          </p>

          <div className="flex flex-wrap gap-6">
            <a
              href="https://www.linkedin.com/in/selenasat/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/selenasat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              GitHub ↗
            </a>

            <a
              href="mailto:satselena.dev@gmail.com"
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Email ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
