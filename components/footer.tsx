import Link from "next/link"
import { Mail, Phone, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-14">
      <div className="container">
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:space-y-0">
          <div className="md:col-span-2 lg:col-span-1">
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
              <a
                href="https://www.linkedin.com/company/syphon-labs/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Syphon Labs on LinkedIn"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/SyphonLabs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Syphon Labs on X"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Mobile: Products and Company side by side */}
          <div className="grid grid-cols-2 gap-8 md:contents md:ml-48 lg:ml-72">
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
            <div className="pl-24 md:pl-0 md:ml-8 lg:ml-12">
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
          </div>
          
          <div className="md:ml-24 lg:ml-36">
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
      </div>
    </footer>
  )
}
