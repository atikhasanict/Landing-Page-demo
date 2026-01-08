'use client'

interface PricingPlan {
  name: string
  price: string
  description: string
  features: string[]
  highlighted: boolean
}

const plans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$29',
    description: 'Perfect for small teams',
    features: [
      'Up to 5 team members',
      '10 GB storage',
      'Basic analytics',
      'Email support',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$79',
    description: 'For growing businesses',
    features: [
      'Up to 25 team members',
      '100 GB storage',
      'Advanced analytics',
      'Priority support',
      'Custom integrations',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations',
    features: [
      'Unlimited team members',
      'Unlimited storage',
      'Custom analytics',
      '24/7 phone support',
      'Dedicated account manager',
    ],
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 transition transform hover:scale-105 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-blue-600 to-cyan-600 text-white shadow-2xl ring-2 ring-blue-500'
                  : 'bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700'
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p
                className={`mb-4 ${
                  plan.highlighted
                    ? 'text-blue-100'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                {plan.description}
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== 'Custom' && (
                  <span
                    className={`ml-2 ${
                      plan.highlighted
                        ? 'text-blue-100'
                        : 'text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    /month
                  </span>
                )}
              </div>
              <button
                className={`w-full py-3 rounded-lg font-semibold transition mb-6 ${
                  plan.highlighted
                    ? 'bg-white text-blue-600 hover:bg-gray-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Get Started
              </button>
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-3">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
