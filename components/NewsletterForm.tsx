'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
})

type FormValues = z.infer<typeof schema>

export default function NewsletterForm() {
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
      const res = await fetch('/api/newsletter', {
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

  if (status === 'success') {
    return (
      <div className="flex items-center gap-3 py-2">
        <span className="w-2 h-2 rounded-full bg-orange flex-shrink-0" />
        <p className="text-sm font-mono text-mid">
          You&apos;re on the list. We&apos;ll be in touch.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
      <div className="flex gap-2">
        <div className="flex-1">
          <input
            {...register('email')}
            type="email"
            placeholder="your@email.com"
            className="w-full px-4 py-2.5 bg-warm border border-warm rounded text-sm text-ink placeholder:text-mid focus:outline-none focus:border-ink transition-colors"
            disabled={status === 'loading'}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-orange">{errors.email.message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-5 py-2.5 bg-ink text-cream text-sm font-mono rounded tracking-wide hover:bg-orange transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {status === 'loading' ? 'Sending…' : 'Subscribe'}
        </button>
      </div>
      {status === 'error' && (
        <p className="mt-2 text-xs text-orange">{errorMessage}</p>
      )}
    </form>
  )
}
