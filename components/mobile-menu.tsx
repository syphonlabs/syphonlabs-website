"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, ChevronDown, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden absolute right-4 top-1/2 -translate-y-1/2">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] sm:w-[320px] h-auto max-h-[400px] top-16 border-0 bg-transparent p-0 [&>button]:hidden">
        <SheetTitle className="sr-only">Mobile navigation menu</SheetTitle>
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 m-4 overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <img src="/Syphon Labs Logo 2.png" alt="Syphon Labs logo" className="h-8 w-8 rounded-full bg-transparent" style={{ backgroundColor: 'transparent' }} />
                <div>
                  <h2 className="text-lg font-bold text-gray-900 whitespace-nowrap">Syphon Labs</h2>
                  <p className="text-xs text-gray-500">AI-powered solutions</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className="h-8 w-8 hover:bg-gray-100 rounded-lg transition-colors">
                <X className="h-4 w-4 text-gray-600" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            
            <nav className="space-y-2">
              <Collapsible open={productsOpen} onOpenChange={setProductsOpen}>
                <CollapsibleTrigger className="w-full flex items-center justify-between p-3 rounded-xl text-left hover:bg-gray-50 transition-colors">
                  <span className="font-medium text-gray-900">Products</span>
                  <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4 space-y-1">
                  <Link
                    href="/draft"
                    className="block p-3 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    <div className="font-medium">Draft</div>
                    <div className="text-sm text-gray-500">AI resume optimization</div>
                  </Link>
                  <Link
                    href="/recruiter"
                    className="block p-3 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    <div className="font-medium">Recruiter</div>
                    <div className="text-sm text-gray-500">AI recruitment automation</div>
                  </Link>
                </CollapsibleContent>
              </Collapsible>
              
              <Link
                href="/about"
                className="block w-full p-3 rounded-xl text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(false)}
              >
                <span className="font-medium text-gray-900">About</span>
              </Link>
              
              <Link
                href="/blog"
                className="block w-full p-3 rounded-xl text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(false)}
              >
                <span className="font-medium text-gray-900">Blog</span>
              </Link>
            </nav>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
