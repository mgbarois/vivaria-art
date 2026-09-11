import { useState, type FormEvent } from 'react'

const FORM_ID = import.meta.env.VITE_FORMSPREE_ID

type Status = 'idle' | 'sending' | 'sent' | 'error'

function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  const configured = Boolean(FORM_ID) && FORM_ID !== 'your-form-id'

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!configured) return

    const form = event.currentTarget
    const data = new FormData(form)
    setStatus('sending')

    try {
      const response = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section text-center">
      <h2>Get in touch</h2>
      <p className="mx-auto mb-6 max-w-[50ch]">
        Questions, custom orders, collaborations, or just want to say hi? Shoot
        me a message!
      </p>

      {!configured && (
        <p className="mx-auto mb-6 max-w-[50ch] rounded-[14px] border border-border bg-forest px-5 py-4 text-[0.9rem]">
          The contact form isn't wired up yet. Sign up at{' '}
          <a href="https://formspree.io" target="_blank" rel="noreferrer">
            formspree.io
          </a>
          , create a form, and add its ID to a <code>.env</code> file as{' '}
          <code>VITE_FORMSPREE_ID</code> (see <code>.env.example</code>).
        </p>
      )}

      {status === 'sent' ? (
        <p className="font-semibold text-paper">
          Thanks for reaching out! I'll get back to you soon.
        </p>
      ) : (
        <form
          className="mx-auto flex max-w-[480px] flex-col gap-2 text-left"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name" className="mt-3 text-[0.85rem] font-semibold text-paper">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="rounded-lg border border-border bg-forest px-[0.8rem] py-[0.65rem] font-body text-paper focus:outline-2 focus:outline-accent focus:outline-offset-1"
          />

          <label htmlFor="email" className="mt-3 text-[0.85rem] font-semibold text-paper">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="rounded-lg border border-border bg-forest px-[0.8rem] py-[0.65rem] font-body text-paper focus:outline-2 focus:outline-accent focus:outline-offset-1"
          />

          <label htmlFor="message" className="mt-3 text-[0.85rem] font-semibold text-paper">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="rounded-lg border border-border bg-forest px-[0.8rem] py-[0.65rem] font-body text-paper focus:outline-2 focus:outline-accent focus:outline-offset-1"
          />

          <button
            className="btn-primary mt-5 self-start"
            type="submit"
            disabled={!configured || status === 'sending'}
          >
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>

          {status === 'error' && (
            <p className="text-[0.9rem] text-accent-soft">
              Something went wrong sending that — please try again, or reach out
              on Instagram instead.
            </p>
          )}
        </form>
      )}
    </section>
  )
}

export default Contact
