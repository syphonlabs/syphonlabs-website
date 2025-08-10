"use client"

import type React from "react"

import { useState } from "react"
import { Search, Mic, FileText, ImageIcon, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SmartSearchShowcase() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [activeTab, setActiveTab] = useState("all")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) return

    setIsSearching(true)
    setTimeout(() => {
      setIsSearching(false)
      setShowResults(true)
    }, 1500)
  }

  const searchResults = [
    {
      type: "document",
      icon: <FileText className="h-5 w-5 text-violet-500" />,
      name: "2023_Tax_Return.pdf",
      preview: "Your 2023 tax return filed on April 12, 2023. Contains W-2 forms and...",
      match: "Content match: 'tax documents from last year'",
      date: "Apr 12, 2023",
      path: "Documents/Taxes/2023/",
    },
    {
      type: "document",
      icon: <FileText className="h-5 w-5 text-violet-500" />,
      name: "Tax_Receipts_2023.xlsx",
      preview: "Spreadsheet containing all tax-deductible expenses for 2023 fiscal year...",
      match: "Content match: 'tax documents from last year'",
      date: "Mar 28, 2023",
      path: "Documents/Finances/Receipts/",
    },
    {
      type: "image",
      icon: <ImageIcon className="h-5 w-5 text-violet-500" />,
      name: "W2_Scan.jpg",
      preview: "Scanned image of W-2 form from employer. OCR detected tax information...",
      match: "OCR text match: 'W-2 tax form 2023'",
      date: "Feb 15, 2023",
      path: "Documents/Scans/",
    },
    {
      type: "document",
      icon: <FileText className="h-5 w-5 text-violet-500" />,
      name: "Tax_Instructions_2023.pdf",
      preview: "IRS instructions for filing 2023 tax returns. Contains guidelines for...",
      match: "Content match: 'tax documents 2023'",
      date: "Jan 10, 2023",
      path: "Downloads/",
    },
  ]

  const recommendations = [
    {
      icon: <FileText className="h-5 w-5 text-violet-500" />,
      name: "Tax_Deduction_Guide.pdf",
      reason: "Related to your tax documents search",
    },
    {
      icon: <FileText className="h-5 w-5 text-violet-500" />,
      name: "2023_Investment_Summary.xlsx",
      reason: "You might need this for your taxes",
    },
  ]

  return (
    <Card className="overflow-hidden border-2 shadow-lg">
      <CardContent className="p-0">
        <div className="bg-gradient-to-r from-violet-50 to-violet-100 p-6">
          <div className="mx-auto max-w-2xl">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search files using natural language..."
                className="pl-10 pr-20 py-6 text-lg rounded-full border-2 border-violet-200 focus-visible:ring-violet-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button
                type="submit"
                size="sm"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-violet-500 hover:bg-violet-600 rounded-full px-4"
                disabled={isSearching}
              >
                {isSearching ? "Searching..." : "Search"}
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-24 top-1/2 -translate-y-1/2 text-gray-400 hover:text-violet-500"
              >
                <Mic className="h-5 w-5" />
              </Button>
            </form>

            {!searchQuery && !showResults && (
              <div className="mt-4 text-center text-gray-500">
                <p>Try searching for:</p>
                <div className="mt-2 flex flex-wrap justify-center gap-2">
                  <Badge
                    variant="outline"
                    className="cursor-pointer hover:bg-violet-100"
                    onClick={() => setSearchQuery("find my tax documents from last year")}
                  >
                    "find my tax documents from last year"
                  </Badge>
                  <Badge
                    variant="outline"
                    className="cursor-pointer hover:bg-violet-100"
                    onClick={() => setSearchQuery("photos from my vacation in Italy")}
                  >
                    "photos from my vacation in Italy"
                  </Badge>
                  <Badge
                    variant="outline"
                    className="cursor-pointer hover:bg-violet-100"
                    onClick={() => setSearchQuery("presentations containing budget data")}
                  >
                    "presentations containing budget data"
                  </Badge>
                </div>
              </div>
            )}

            {showResults && searchQuery && (
              <div className="mt-6">
                <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
                  <div className="flex items-center justify-between">
                    <TabsList className="bg-violet-100">
                      <TabsTrigger value="all">All Results</TabsTrigger>
                      <TabsTrigger value="documents">Documents</TabsTrigger>
                      <TabsTrigger value="images">Images</TabsTrigger>
                    </TabsList>
                    <span className="text-sm text-gray-500">Found 4 results for "{searchQuery}"</span>
                  </div>

                  <TabsContent value="all" className="mt-4">
                    <div className="space-y-4">
                      {searchResults.map((result, index) => (
                        <div
                          key={index}
                          className="rounded-lg border bg-white p-4 hover:bg-gray-50 transition cursor-pointer"
                        >
                          <div className="flex items-start gap-3">
                            <div className="mt-1">{result.icon}</div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h3 className="font-medium">{result.name}</h3>
                                <span className="text-xs text-gray-500">{result.date}</span>
                              </div>
                              <p className="mt-1 text-sm text-gray-600">{result.preview}</p>
                              <div className="mt-2 flex items-center justify-between">
                                <span className="text-xs text-violet-600 font-medium">{result.match}</span>
                                <span className="text-xs text-gray-500">{result.path}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="documents" className="mt-4">
                    <div className="space-y-4">
                      {searchResults
                        .filter((r) => r.type === "document")
                        .map((result, index) => (
                          <div
                            key={index}
                            className="rounded-lg border bg-white p-4 hover:bg-gray-50 transition cursor-pointer"
                          >
                            <div className="flex items-start gap-3">
                              <div className="mt-1">{result.icon}</div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <h3 className="font-medium">{result.name}</h3>
                                  <span className="text-xs text-gray-500">{result.date}</span>
                                </div>
                                <p className="mt-1 text-sm text-gray-600">{result.preview}</p>
                                <div className="mt-2 flex items-center justify-between">
                                  <span className="text-xs text-violet-600 font-medium">{result.match}</span>
                                  <span className="text-xs text-gray-500">{result.path}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="images" className="mt-4">
                    <div className="space-y-4">
                      {searchResults
                        .filter((r) => r.type === "image")
                        .map((result, index) => (
                          <div
                            key={index}
                            className="rounded-lg border bg-white p-4 hover:bg-gray-50 transition cursor-pointer"
                          >
                            <div className="flex items-start gap-3">
                              <div className="mt-1">{result.icon}</div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <h3 className="font-medium">{result.name}</h3>
                                  <span className="text-xs text-gray-500">{result.date}</span>
                                </div>
                                <p className="mt-1 text-sm text-gray-600">{result.preview}</p>
                                <div className="mt-2 flex items-center justify-between">
                                  <span className="text-xs text-violet-600 font-medium">{result.match}</span>
                                  <span className="text-xs text-gray-500">{result.path}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-8 rounded-lg border bg-violet-50 p-4">
                  <h3 className="flex items-center gap-2 font-medium text-violet-700">
                    <Star className="h-4 w-4" />
                    AI Recommendations
                  </h3>
                  <div className="mt-3 space-y-3">
                    {recommendations.map((rec, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 rounded-md bg-white p-3 hover:bg-gray-50 transition cursor-pointer"
                      >
                        {rec.icon}
                        <div>
                          <p className="font-medium">{rec.name}</p>
                          <p className="text-xs text-gray-500">{rec.reason}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
