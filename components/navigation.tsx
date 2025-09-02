"use client"
import Link from "next/link"
import { ChevronDown, Users, Building2, FileText, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navigation() {
  return (
    <nav className="hidden md:flex items-center gap-6">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="group relative overflow-hidden rounded-full px-5 py-2 text-sm font-semibold text-gray-800 bg-gray-50 border border-gray-200 hover:text-white hover:shadow-md transition-colors"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-blue-700 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            <span className="relative flex items-center gap-1">
              Products
              <ChevronDown className="h-4 w-4" />
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="z-[60] w-[440px] p-2 rounded-2xl shadow-xl ring-1 ring-gray-200 bg-white">
          {/* Items */}
          <div className="grid gap-2">
            {/* Syphon Draft (first) */}
            <DropdownMenuItem asChild className="p-0">
              <Link
                href="/draft"
                className="group flex items-start gap-4 p-4 rounded-xl border border-gray-100 bg-white hover:bg-indigo-50/60 transition-colors"
              >
                <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600/90 flex items-center justify-center text-white shadow-sm">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <div className="font-semibold text-gray-900">Syphon Draft</div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-medium">Flagship</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">Optimize resumes and cover letters in under 60 seconds.</p>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </DropdownMenuItem>

            {/* Syphon Recruiter */}
            <DropdownMenuItem asChild className="p-0">
              <Link
                href="/recruiter"
                className="group flex items-start gap-4 p-4 rounded-xl border border-gray-100 bg-white hover:bg-blue-50/60 transition-colors"
              >
                <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600/90 flex items-center justify-center text-white shadow-sm">
                  <Users className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <div className="font-semibold text-gray-900">Syphon Recruiter</div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-medium">Coming Soon</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">Streamline hiring with AI matching, screening, and analytics.</p>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
      
      <Link href="/about">
        <Button
          variant="ghost"
          className="group relative overflow-hidden rounded-full px-5 py-2 text-sm font-semibold text-gray-800 bg-gray-50 border border-gray-200 hover:text-white hover:shadow-md transition-colors"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-blue-700 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
          <span className="relative flex items-center gap-1">
            <Building2 className="h-4 w-4" />
            About
          </span>
        </Button>
      </Link>
      
      <Link href="/blog">
        <Button
          variant="ghost"
          className="group relative overflow-hidden rounded-full px-5 py-2 text-sm font-semibold text-gray-800 bg-gray-50 border border-gray-200 hover:text-white hover:shadow-md transition-colors"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-blue-700 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
          <span className="relative flex items-center gap-1">
            <FileText className="h-4 w-4" />
            Blog
          </span>
        </Button>
      </Link>
    </nav>
  )
}
