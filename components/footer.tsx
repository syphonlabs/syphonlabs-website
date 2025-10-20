import Link from "next/link"
import { Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src="/Syphon Labs Logo 2.png" alt="Syphon Labs logo" className="h-10 w-10 rounded-full" />
              <span className="text-2xl font-bold whitespace-nowrap">Syphon Labs</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building the future of AI-powered productivity tools for modern teams.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:admin@syphonlabs.com"
                aria-label="Email Syphon Labs"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="tel:+13474167797"
                aria-label="Call Syphon Labs at +1 347 416 7797"
                title="Call +1 347 416 7797"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-6 text-lg">Products</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/draft" className="hover:text-white transition-colors">
                  Syphon Draft
                </Link>
              </li>
              <li>
                <Link href="/recruiter" className="hover:text-white transition-colors">
                  Syphon Recruiter
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>

            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-6 text-lg">Support</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Syphon Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
