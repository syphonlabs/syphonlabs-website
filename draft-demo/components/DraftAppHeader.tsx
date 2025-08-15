"use client"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { ChevronDown, User, Settings, LogOut } from "lucide-react"
import { useAuth } from "@/features/auth/AuthProvider"

interface DraftAppHeaderProps {
  onLogoClick?: () => void
  onDashboardClick?: () => void
}

export default function DraftAppHeader({ onLogoClick, onDashboardClick }: DraftAppHeaderProps) {
  const [showAccountMenu, setShowAccountMenu] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const accountRef = useRef<HTMLDivElement>(null)
  const { user } = useAuth()

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (accountRef.current && !accountRef.current.contains(event.target as Node)) {
        setShowAccountMenu(false)
      }
    }

    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setShowAccountMenu(false)
      }
    }

    if (showAccountMenu) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleEscapeKey)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscapeKey)
    }
  }, [showAccountMenu])

  const getInitials = (name: string | undefined, email: string | undefined) => {
    if (name) {
      return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    }
    if (email) {
      return email.slice(0, 2).toUpperCase()
    }
    return "RJ"
  }

  const initials = getInitials(user?.user_metadata?.full_name, user?.email)

  return (
    <>
      <div className="sticky top-0 z-50 bg-stone-50/80 border-b border-white/10">
        <div className="px-4 py-2">
          <div className="flex items-center justify-between">
            <div
              className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={onLogoClick}
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <Image
                  src="/images/syphon-logo.png"
                  alt="Syphon Draft Logo"
                  width={40}
                  height={40}
                  className="rounded-xl"
                />
              </div>
              <div>
                <h1 className="font-semibold text-gray-900 text-lg">Draft</h1>
                <p className="text-xs text-gray-500">by Syphon Labs</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={onDashboardClick}
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-indigo-700 hover:bg-gray-100 transition-all"
              >
                Dashboard
              </button>

              <div className="relative flex-shrink-0" ref={accountRef}>
                <button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={showAccountMenu}
                  aria-controls="account-menu"
                  className="flex items-center space-x-2 hover:bg-gray-100 rounded-full p-2 transition-all focus:outline-none"
                  onClick={() => setShowAccountMenu((v) => !v)}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-700 to-blue-700 flex items-center justify-center shadow-sm">
                    <span className="text-white font-bold text-xs" aria-hidden>
                      {initials}
                    </span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${showAccountMenu ? "rotate-180" : ""}`} />
                </button>

                {showAccountMenu && (
                  <div
                    className="absolute right-0 top-full mt-2 w-80 glass rounded-xl border border-white/10 shadow-xl z-50"
                    role="menu"
                    id="account-menu"
                  >
                    <div className="p-4 space-y-4">
                      {/* User Information Section */}
                      <div className="flex items-center space-x-3 pb-4 border-b border-white/10">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-700 to-blue-700 flex items-center justify-center">
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold">
                            {user?.user_metadata?.full_name || user?.email || "Reuben Jacob"}
                          </h3>
                          <p className="text-sm text-gray-500">{user?.email || "reuben@example.com"}</p>
                        </div>
                      </div>

                      {/* Navigation Options */}
                      <div className="space-y-2 pt-2">
                        <button
                          className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-all text-left"
                          onClick={() => {
                            setShowAccountMenu(false)
                            setShowSettings(true)
                          }}
                        >
                          <Settings className="w-4 h-4" />
                          <span className="text-sm">Account Settings</span>
                        </button>

                        <button className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-red-50 hover:text-red-600 transition-all text-left">
                          <LogOut className="w-4 h-4" />
                          <span className="text-sm">Sign Out</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .glass {
          background: rgba(255,255,255,0.8);
          border: 1px solid rgba(67,56,202,0.2);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
      `}</style>
    </>
  )
}
