'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, User, ChevronDown } from 'lucide-react'

interface FormData {
  name: string
  email: string
  interest: string
}

const interestOptions = [
  'Shark Bait Shampoo',
  'Dino Glue Styling Gel',
  'Galaxy Gel',
  'Hero Hold',
  'All Products',
  'Just Updates'
]

export default function EmailCaptureForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    interest: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [showDropdown, setShowDropdown] = useState(false)

  const validateForm = () => {
    const newErrors: Partial<FormData> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.interest) {
      newErrors.interest = 'Please select an interest'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name,
          interest: formData.interest
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe')
      }

      setStatus('success')
      setMessage("You're in! Welcome to the Legend Club!")
      setFormData({ name: '', email: '', interest: '' })
    } catch (error: any) {
      console.error('Subscription error:', error)
      setStatus('error')
      setMessage(error.message || 'Oops! Something went wrong. Please try again.')
    }
  }

  return (
    <section id="email-signup" className="py-16 bg-gradient-to-br from-ll-purple to-purple-600">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-fredoka">
            Join the Legend Club
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Be the first to know when our legendary products launch. No spam, just epic updates and launch-day surprises.
          </p>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name Field */}
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border-2 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50 transition-all ${
                    errors.name ? 'border-red-300' : 'border-white/30'
                  }`}
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-200 text-sm mt-1 text-left"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </div>

              {/* Email Field */}
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border-2 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50 transition-all ${
                    errors.email ? 'border-red-300' : 'border-white/30'
                  }`}
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-200 text-sm mt-1 text-left"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>
            </div>

            {/* Interest Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowDropdown(!showDropdown)}
                className={`w-full pl-4 pr-10 py-3 rounded-lg border-2 bg-white/90 backdrop-blur-sm text-left focus:outline-none focus:ring-2 focus:ring-white/50 transition-all ${
                  errors.interest ? 'border-red-300' : 'border-white/30'
                } ${formData.interest ? 'text-gray-900' : 'text-gray-500'}`}
              >
                {formData.interest || 'What interests you most?'}
                <ChevronDown className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-transform ${
                  showDropdown ? 'rotate-180' : ''
                }`} />
              </button>

              {showDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 z-10"
                >
                  {interestOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, interest: option })
                        setShowDropdown(false)
                      }}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      {option}
                    </button>
                  ))}
                </motion.div>
              )}

              {errors.interest && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-200 text-sm mt-1 text-left"
                >
                  {errors.interest}
                </motion.p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={status === 'loading'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Joining...' : 'Join the Waitlist'}
            </motion.button>

            {/* Status Message */}
            {message && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-center p-3 rounded-lg ${
                  status === 'error' ? 'bg-red-500/20 text-red-200' : 'bg-green-500/20 text-green-200'
                }`}
              >
                {message}
              </motion.div>
            )}
          </motion.form>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-white/70 text-sm mt-6"
          >
            🔒 Your info is safe with us. We'll only use it to send you epic updates.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
} 