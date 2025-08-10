"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col gap-6 py-6">
          <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/Syphon Labs Logo 2.png" alt="Syphon Labs" className="h-8 w-8 rounded-full" />
              <span className="text-xl font-bold">Syphon Labs</span>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="flex flex-col gap-4">
            <Link
              href="#features"
              className="text-lg font-medium text-gray-600 hover:text-gray-900"
              onClick={() => setOpen(false)}
            >
              Features
            </Link>

            <Collapsible open={productsOpen} onOpenChange={setProductsOpen}>
              <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-medium text-gray-600 hover:text-gray-900">
                Products
                <ChevronDown className={`h-4 w-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 pt-2 space-y-2">
                <Link
                  href="/"
                  className="block text-base text-gray-600 hover:text-gray-900"
                  onClick={() => setOpen(false)}
                >
                  <div className="font-medium">Syphon Explorer</div>
                  <div className="text-sm text-gray-500">AI-powered file system</div>
                </Link>
                <Link
                  href="/recruiter"
                  className="block text-base text-gray-600 hover:text-gray-900"
                  onClick={() => setOpen(false)}
                >
                  <div className="font-medium">Syphon Recruiter</div>
                  <div className="text-sm text-gray-500">AI recruitment automation</div>
                </Link>
              </CollapsibleContent>
            </Collapsible>

            <Link
              href="/how-it-works"
              className="text-lg font-medium text-gray-600 hover:text-gray-900"
              onClick={() => setOpen(false)}
            >
              How it works
            </Link>
            <Link
              href="#pricing"
              className="text-lg font-medium text-gray-600 hover:text-gray-900"
              onClick={() => setOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="text-lg font-medium text-gray-600 hover:text-gray-900"
              onClick={() => setOpen(false)}
            >
              FAQ
            </Link>
          </nav>
          <div className="flex flex-col gap-2">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Log in
            </Button>
            <Button
              className="bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-600 hover:to-indigo-700"
              onClick={() => setOpen(false)}
            >
              Sign up
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
