"use client"

import { createContext, useContext, type ReactNode } from "react"

interface User {
  email?: string
  user_metadata?: {
    full_name?: string
  }
}

interface AuthContextType {
  user: User | null
}

const AuthContext = createContext<AuthContextType>({ user: null })

export function useAuth() {
  return useContext(AuthContext)
}

interface AuthProviderProps {
  children: ReactNode
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const mockUser: User = {
    email: "sarah@example.com",
    user_metadata: {
      full_name: "Sarah Johnson",
    },
  }

  return <AuthContext.Provider value={{ user: mockUser }}>{children}</AuthContext.Provider>
}
