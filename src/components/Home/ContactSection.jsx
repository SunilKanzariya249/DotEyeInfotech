import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Send } from 'lucide-react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [status, setStatus] = useState({
    submitting: false,
    info: { error: false, msg: null }
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    setStatus({
      submitting: true,
      info: { error: false, msg: null }
    })

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

    if (!accessKey || accessKey === 'your_access_key_here') {
      setStatus({
        submitting: false,
        info: {
          error: true,
          msg: 'Form is not configured. Please add your Access Key.'
        }
      })
      return
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Website Inquiry: ${formData.subject}`,
          from_name: `${formData.name} via DotEyeInfotech`,
          replyto: formData.email,
          'Client Name': formData.name,
          'Client Email': formData.email,
          'Inquiry Subject': formData.subject,
          'Message Details': formData.message
        })
      })

      const json = await response.json()

      if (response.status === 200) {
        setStatus({
          submitting: false,
          info: {
            error: false,
            msg: 'Message sent successfully! We will get back to you soon.'
          }
        })

        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })

        setTimeout(() => {
          setStatus({
            submitting: false,
            info: { error: false, msg: null }
          })
        }, 5000)
      } else {
        setStatus({
          submitting: false,
          info: {
            error: true,
            msg: json.message || 'Something went wrong.'
          }
        })
      }
    } catch (error) {
      setStatus({
        submitting: false,
        info: {
          error: true,
          msg: 'Network error. Please try again later.'
        }
      })
    }
  }

  return (
    <section
      className="py-16 md:py-24 bg-slate-50 dark:bg-[#0F172A] relative overflow-hidden"
      id="contact"
    >
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-1/2 md:w-1/3 h-1/2 bg-accent/5 rounded-tl-[60px] md:rounded-tl-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary dark:text-accent font-medium text-sm mb-4"
          >
            Get In Touch
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-sora text-slate-900 dark:text-white leading-tight"
          >
            Let's Build Something{' '}
            <span className="text-gradient">Great</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12 max-w-6xl mx-auto">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-white dark:bg-[#1e293b]/80 p-5 sm:p-6 md:p-8 lg:p-10 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm h-full flex flex-col justify-center">

              <h3 className="text-xl sm:text-2xl font-bold font-sora text-slate-900 dark:text-white mb-6">
                Contact Information
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Fill up the form and our team will get back to you within 24 hours. Let's discuss your next big idea.
              </p>

              <div className="space-y-6">

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary dark:text-accent shrink-0">
                    <Mail size={20} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm text-slate-500 font-medium mb-1">
                      Email Us
                    </p>

                    <p className="text-sm sm:text-base break-all text-slate-900 dark:text-white font-medium">
                      kanzariyasunil249@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary dark:text-accent shrink-0">
                    <Phone size={20} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500 font-medium mb-1">
                      Call Us
                    </p>

                    <p className="text-sm sm:text-base text-slate-900 dark:text-white font-medium">
                      +91 9316642648
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary dark:text-accent shrink-0">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500 font-medium mb-1">
                      Location
                    </p>

                    <p className="text-sm sm:text-base text-slate-900 dark:text-white font-medium leading-snug">
                      Morbi, Gujarat,<br />
                      India
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-[#1e293b]/80 p-5 sm:p-6 md:p-8 lg:p-10 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">

              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Your Name
                    </label>

                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-secondary/50 text-slate-900 dark:text-white transition-all text-sm sm:text-base"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Email Address
                    </label>

                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-secondary/50 text-slate-900 dark:text-white transition-all text-sm sm:text-base"
                      placeholder="john@example.com"
                    />
                  </div>

                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Subject
                  </label>

                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        subject: e.target.value
                      })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-secondary/50 text-slate-900 dark:text-white transition-all text-sm sm:text-base"
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Message
                  </label>

                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value
                      })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-secondary/50 text-slate-900 dark:text-white transition-all resize-none text-sm sm:text-base"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                {status.info.msg && (
                  <div
                    className={`p-4 rounded-xl text-sm font-medium ${
                      status.info.error
                        ? 'bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400'
                        : 'bg-green-50 text-green-600 dark:bg-green-500/10 dark:text-green-400'
                    }`}
                  >
                    {status.info.msg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status.submitting}
                  className={`w-full py-4 rounded-xl bg-gradient-to-r from-secondary to-accent text-white font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/30 text-sm sm:text-base ${
                    status.submitting
                      ? 'opacity-70 cursor-not-allowed'
                      : 'hover:from-blue-700 hover:to-blue-500'
                  }`}
                >
                  {status.submitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default ContactSection