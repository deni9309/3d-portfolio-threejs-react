import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef()

  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setLoading(true)

    try {
      emailjs.send(
        'service_y9decrv',
        'template_txz67ll',
        {
          from_name: form.name,
          to_name: 'Denitsa',
          from_email: form.email,
          to_email: 'deni9309@gmail.com',
          message: form.message,
        },
        'iFgj5MhnzrPwuuWsM',
      )

      setForm({ name: '', email: '', message: '' })

      alert('Your message has been sent!')
    } catch (error) {
      console.error(error.message)
      alert('Something went wrong! Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="c-space my-20">
      <div className="relative flex flex-col items-center justify-center border-x-2 border-b-2 border-[#111111] rounded-xl bg-black-200 before::content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-10 before:rounded-t-xl before:bg-gradient-to-r before:from-[#111111] before:via-[#505050] before:to-[#111111]">
        <span className="absolute top-3.5 left-3 rounded-full size-3 bg-red-600/70 shadow-[0_0_10px_2px_rgb(220_38_38/0.8)]" />
        <span className="absolute top-3.5 left-7 rounded-full size-3 bg-yellow-600/80 shadow-[0_0_10px_2px_rgb(202_138_4/0.8)]" />
        <span className="absolute top-3.5 left-11 rounded-full size-3 bg-green-600/80 shadow-[0_0_10px_2px_rgb(22_163_74/0.8)]" />
        <span className="absolute top-1 right-3 font-medium text-2xl text-white-500/80">
          +
        </span>

        <div className="contact-container mb-2">
          <h3 className="head-text !leading-normal">Contact Me</h3>
          <p className="text-lg text-white-600 mt-3">
            I&apos;m eager to connect with industry professionals and explore
            new career opportunities. Let&apos;s discuss how my skills can
            contribute to your team&apos;s success!
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col mt-12 mb-4 space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input caret-green-500"
                placeholder="John Doe"
                autoComplete="name"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input caret-green-500"
                placeholder="johndoe@example.com"
                autoComplete="email"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                required
                className="field-input caret-green-500"
                placeholder="Your message &hellip;"
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
