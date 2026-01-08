'use client'

interface Feature {
  title: string
  description: string
  icon: string
}

const features: Feature[] = [
  {
    title: 'Lightning Fast',
    description: 'Optimized performance with sub-second load times',
    icon: '⚡',
  },
  {
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with 99.99% uptime SLA',
    icon: '🔒',
  },
  {
    title: 'Easy Integration',
    description: 'Seamless integration with your favorite tools',
    icon: '🔗',
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock customer support team',
    icon: '👥',
  },
  {
    title: 'Real-time Analytics',
    description: 'Detailed insights and real-time reporting',
    icon: '📊',
  },
  {
    title: 'Scalable Solution',
    description: 'Grows with your business needs',
    icon: '📈',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to succeed in one platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400 transition bg-gray-50 dark:bg-slate-900"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
