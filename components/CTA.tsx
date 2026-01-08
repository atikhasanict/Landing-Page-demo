'use client'

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          Join thousands of teams that have already accelerated their growth with our platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition transform hover:scale-105">
            Start Your Free Trial
          </button>
          <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition">
            Schedule a Demo
          </button>
        </div>
        <p className="text-blue-100 mt-6 text-sm">
          Free for 14 days. No credit card required.
        </p>
      </div>
    </section>
  )
}
