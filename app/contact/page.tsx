'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Please enter a valid email'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormValues = z.infer<typeof schema>

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label className="block font-mono text-[11px] tracking-[0.15em] uppercase text-mid mb-2">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-orange">{error}</p>}
    </div>
  )
}

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormValues) => {
    setStatus('loading')
    setErrorMsg('')
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
        setErrorMsg(body.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please try again.')
    }
  }

  const inputClass =
    'w-full px-4 py-3.5 bg-white border border-warm rounded text-sm text-ink placeholder:text-mid focus:outline-none focus:border-ink transition-colors duration-200'

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 px-12 max-md:px-6">
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-orange mb-4">
          Get in Touch
        </p>
        <h1 className="font-display text-[clamp(48px,7vw,100px)] leading-[0.95] tracking-[0.01em]">
          Let&apos;s Talk<br /><span className="text-orange">Revenue.</span>
        </h1>
      </section>

      {/* Form + info */}
      <section className="px-12 pb-28 max-md:px-6 border-t border-warm pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16 max-w-5xl">
          {/* Form */}
          <div>
            {status === 'success' ? (
              <div className="py-16 text-center border border-warm rounded-xl bg-white">
                <div className="w-3 h-3 rounded-full bg-orange mx-auto mb-6" />
                <h2 className="font-display text-4xl mb-4">Message received.</h2>
                <p className="text-mid font-light leading-relaxed max-w-sm mx-auto">
                  We&apos;ll review your message and get back to you within one business day.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 font-mono text-sm text-mid hover:text-orange transition-colors"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Field label="Your Name" error={errors.name?.message}>
                    <input
                      {...register('name')}
                      type="text"
                      placeholder="Jane Smith"
                      className={inputClass}
                      disabled={status === 'loading'}
                    />
                  </Field>
                  <Field label="Work Email" error={errors.email?.message}>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="jane@company.com"
                      className={inputClass}
                      disabled={status === 'loading'}
                    />
                  </Field>
                </div>
                <Field label="Company (optional)" error={errors.company?.message}>
                  <input
                    {...register('company')}
                    type="text"
                    placeholder="Acme Inc."
                    className={inputClass}
                    disabled={status === 'loading'}
                  />
                </Field>
                <Field label="How can we help?" error={errors.message?.message}>
                  <textarea
                    {...register('message')}
                    rows={6}
                    placeholder="Tell us about your GTM challenges, what you're trying to achieve, and where you're stuck..."
                    className={`${inputClass} resize-none`}
                    disabled={status === 'loading'}
                  />
                </Field>

                {status === 'error' && (
                  <p className="text-sm text-orange">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto bg-ink text-cream px-10 py-4 rounded font-mono text-sm tracking-wide border-2 border-ink hover:bg-orange hover:border-orange transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending…' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-10 pt-2">
            <div>
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-orange mb-3">
                Email
              </p>
              <a
                href="mailto:hello@integrostrategies.com"
                className="text-sm font-mono text-mid hover:text-orange transition-colors"
              >
                hello@integrostrategies.com
              </a>
            </div>
            <div>
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-orange mb-3">
                Response Time
              </p>
              <p className="text-sm text-mid font-light leading-relaxed">
                We respond to every inquiry within one business day. No automated replies, no gatekeeping — you&apos;ll hear from a senior member of the team.
              </p>
            </div>
            <div>
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-orange mb-3">
                What to Expect
              </p>
              <ul className="space-y-3">
                {[
                  '30-min discovery call, no pitch deck',
                  'Honest assessment of fit',
                  'Proposal within 3 business days if there\'s a match',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-mid font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
