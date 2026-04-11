'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormValues = z.infer<typeof schema>

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormValues) => {
    setStatus('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setStatus('success')
        reset()
      } else {
        const body = await res.json().catch(() => ({}))
        setStatus('error')
        setErrorMessage(body.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Network error. Please try again.')
    }
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className="px-12 max-md:px-6 pt-40 pb-16 relative overflow-hidden">
        <div
          className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(212,80,26,0.07) 0%, transparent 70%)',
          }}
        />
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-orange mb-4">
          Get In Touch
        </p>
        <h1
          className="font-display leading-none tracking-tight max-w-3xl"
          style={{ fontSize: 'clamp(48px, 7vw, 96px)' }}
        >
          Let&apos;s Talk
          <br />
          <span className="text-orange">Revenue.</span>
        </h1>
      </section>

      {/* ── FORM + INFO ── */}
      <section className="px-12 max-md:px-6 py-16 border-t border-warm">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-20 max-w-5xl">
          {/* Form */}
          <div>
            {status === 'success' ? (
              <div className="py-16 text-center border border-warm rounded-xl bg-white">
                <div className="w-3 h-3 bg-orange rounded-full mx-auto mb-6" />
                <h2 className="font-display text-3xl mb-4">Message received.</h2>
                <p className="text-mid font-light text-base leading-relaxed max-w-sm mx-auto">
                  Thanks for reaching out. We typically respond within one
                  business day — usually faster. We&apos;ll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block font-mono text-[11px] tracking-[0.12em] uppercase text-ink mb-2"
                  >
                    Name <span className="text-orange">*</span>
                  </label>
                  <input
                    {...register('name')}
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 bg-white border border-warm rounded text-sm text-ink placeholder:text-mid focus:outline-none focus:border-ink transition-colors disabled:opacity-60"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-orange">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block font-mono text-[11px] tracking-[0.12em] uppercase text-ink mb-2"
                  >
                    Email <span className="text-orange">*</span>
                  </label>
                  <input
                    {...register('email')}
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 bg-white border border-warm rounded text-sm text-ink placeholder:text-mid focus:outline-none focus:border-ink transition-colors disabled:opacity-60"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-orange">{errors.email.message}</p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block font-mono text-[11px] tracking-[0.12em] uppercase text-ink mb-2"
                  >
                    Company{' '}
                    <span className="text-mid normal-case tracking-normal font-body text-[11px]">
                      (optional)
                    </span>
                  </label>
                  <input
                    {...register('company')}
                    id="company"
                    type="text"
                    placeholder="Your company name"
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 bg-white border border-warm rounded text-sm text-ink placeholder:text-mid focus:outline-none focus:border-ink transition-colors disabled:opacity-60"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block font-mono text-[11px] tracking-[0.12em] uppercase text-ink mb-2"
                  >
                    Message <span className="text-orange">*</span>
                  </label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={6}
                    placeholder="Tell us about your business, your goals, and what you're trying to solve. The more context, the better."
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 bg-white border border-warm rounded text-sm text-ink placeholder:text-mid focus:outline-none focus:border-ink transition-colors resize-y disabled:opacity-60"
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-orange">{errors.message.message}</p>
                  )}
                </div>

                {status === 'error' && (
                  <div className="px-4 py-3 border border-orange/30 rounded bg-orange/5 text-sm text-orange">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-ink text-cream px-8 py-4 rounded text-sm font-mono tracking-wide border-2 border-ink hover:bg-orange hover:border-orange transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
                >
                  {status === 'loading' ? 'Sending…' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="lg:pt-2">
            <div className="border border-warm rounded-lg p-8 bg-white">
              <div className="w-2 h-2 bg-orange rounded-full mb-5" />
              <h2 className="font-display text-2xl mb-2">
                hello@integrostrategies.com
              </h2>
              <p className="text-sm text-mid font-light leading-relaxed mb-8">
                We respond to every inquiry within one business day — often the
                same day. No auto-responders. A real human will read your
                message.
              </p>

              <div className="border-t border-warm pt-6 space-y-4">
                <div>
                  <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-orange mb-1">
                    Best for
                  </p>
                  <p className="text-sm text-mid font-light">
                    SaaS companies at Series A through growth stage looking to
                    accelerate pipeline, reduce churn, or build a scalable GTM
                    motion.
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-orange mb-1">
                    Response time
                  </p>
                  <p className="text-sm text-mid font-light">
                    Within 1 business day, usually same-day for enquiries
                    received before 3pm ET.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 px-2">
              <p className="font-mono text-[11px] tracking-[0.08em] uppercase text-mid mb-3">
                Not ready to talk yet?
              </p>
              <p className="text-sm text-mid font-light leading-relaxed">
                Explore our{' '}
                <a
                  href="/services"
                  className="text-orange hover:underline underline-offset-2"
                >
                  service lines
                </a>{' '}
                or learn more{' '}
                <a
                  href="/about"
                  className="text-orange hover:underline underline-offset-2"
                >
                  about Integro
                </a>{' '}
                before reaching out.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
