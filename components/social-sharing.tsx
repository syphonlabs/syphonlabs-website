"use client"

import { Share2, Twitter, Linkedin, Facebook, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

interface SocialSharingProps {
  title: string
  url: string
  description?: string
}

export default function SocialSharing({ title, url, description }: SocialSharingProps) {
  const [isClient, setIsClient] = useState(false)
  const [shareUrl, setShareUrl] = useState('')
  
  useEffect(() => {
    setIsClient(true)
    setShareUrl(window.location.origin + url)
  }, [url])
  
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description || '')
  const encodedUrl = encodeURIComponent(shareUrl)

  const shareLinks = isClient ? {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`
  } : {
    twitter: '#',
    linkedin: '#',
    facebook: '#',
    email: '#'
  }

  const handleNativeShare = async () => {
    if (isClient) {
      if (navigator.share) {
        try {
          await navigator.share({
            title,
            text: description,
            url: shareUrl,
          })
        } catch (err) {
          console.log('Error sharing:', err)
        }
      } else {
        // Fallback for PC - copy URL to clipboard
        try {
          await navigator.clipboard.writeText(shareUrl)
          // You could add a toast notification here
          console.log('URL copied to clipboard')
        } catch (err) {
          console.log('Error copying to clipboard:', err)
        }
      }
    }
  }

  return (
    <div className="flex items-center gap-2">
      {/* Generic share button for PC */}
      <Button
        variant="ghost"
        size="sm"
        onClick={handleNativeShare}
        className="flex items-center justify-center h-8 w-8 p-0 hover:bg-gray-100"
      >
        <Share2 className="h-4 w-4 text-black" />
      </Button>
      
      {/* Social media buttons */}
      <Button
        variant="ghost"
        size="sm"
        asChild
        className="h-7 w-7 p-0 hover:bg-gray-100"
      >
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on X (Twitter)"
          className="flex items-center justify-center"
        >
          <svg className="h-4 w-4 text-black" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
      </Button>
      
      <Button
        variant="ghost"
        size="sm"
        asChild
        className="h-7 w-7 p-0 hover:bg-gray-100"
      >
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className="flex items-center justify-center"
        >
          <Linkedin className="h-4 w-4 text-[#0077B5]" />
        </a>
      </Button>
      
      <Button
        variant="ghost"
        size="sm"
        asChild
        className="h-7 w-7 p-0 hover:bg-gray-100"
      >
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Facebook"
          className="flex items-center justify-center"
        >
          <Facebook className="h-4 w-4 text-[#1877F2]" />
        </a>
      </Button>
      
      <Button
        variant="ghost"
        size="sm"
        asChild
        className="h-7 w-7 p-0 hover:bg-gray-100"
      >
        <a
          href={shareLinks.email}
          aria-label="Share via Email"
          className="flex items-center justify-center"
        >
          <Mail className="h-4 w-4 text-black" />
        </a>
      </Button>
    </div>
  )
}