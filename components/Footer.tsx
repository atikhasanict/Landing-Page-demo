'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              SaaS
            </div>
            <p className="text-gray-400 text-sm">
              The modern platform for growing businesses.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-blue-400 transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400 transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400 transition">
                  Security
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-blue-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400 transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400 transition">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-blue-400 transition">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400 transition">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} SaaS. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-blue-400 transition">
                Twitter
              </Link>
              <Link href="#" className="hover:text-blue-400 transition">
                GitHub
              </Link>
              <Link href="#" className="hover:text-blue-400 transition">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
