
"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, BrainCircuit, Clock, Share2, Twitter, Facebook, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useEffect } from "react"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import SiteFooter from "@/components/SiteFooter"


interface BlogPostProps {
  post:
  | {
    title: string
    date: string
    author: string
    category: string
    readTime: string
    image: string
    content: string
  }
  | undefined
  relatedPosts: {
    slug: string
    title: string
    category: string
    image: string
  }[]
}

export default function BlogPostClient({ post, relatedPosts }: BlogPostProps) {


  const { toast } = useToast()

  useEffect(() => {
    if (!post) {
      toast({
        title: "Post not found",
        description: "The requested blog post could not be found.",
        variant: "destructive",
      })
    }
  }, [post, toast])

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Beitrag nicht gefunden</h1>
          <p className="mb-6">Der gesuchte Blogbeitrag existiert nicht oder wurde verschoben.</p>
          <Button asChild>
            <Link href="./">Zurück zu Hauptseite</Link>
          </Button>
        </div>
      </div>
    )
  }

  const handleShare = (platform: string) => {
    const url = window.location.href
    const text = `Check out this article: ${post.title}`

    let shareUrl = ""

    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`
        break
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        break
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        break
      default:
        // Copy to clipboard
        navigator.clipboard.writeText(url)
        toast({
          title: "Link copied",
          description: "The article link has been copied to your clipboard.",
        })
        return


    }

    if (shareUrl) {
      window.open(shareUrl, "_blank")
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* Logo */}
          <Link href="/Blog" className="flex items-center">
            <Image
              src="/element-2.png"
              alt="DIE BIANCO"
              width={180}
              height={60}
              className="h-[60px] w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-sm">
            <Link href="/Blog" className="text-gray-400 hover:text-white transition">
              Home
            </Link>
            <Link href="/Blog/articles" className="text-gray-400 hover:text-white transition">
              Artikel
            </Link>
            <Link href="/ueber-uns" className="text-gray-400 hover:text-white transition">
              Über uns
            </Link>
          </nav>

          {/* Desktop Button */}
          <Button
            variant="outline"
            className="hidden md:inline-flex border-[#d4c6a6] text-[#d4c6a6] hover:bg-[#d4c6a6] hover:text-black"
          >
            Abonnieren
          </Button>

          {/* Mobile Burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white"
            aria-label="Menü öffnen"
          >
            <Menu size={26} />
          </button>
        </div>

        {/* Mobile Menu – ruhig, kein Effekt */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-800 bg-black">
            <nav className="flex flex-col px-6 py-4 gap-4 text-sm">
              <Link href="/Blog" className="text-gray-300">
                Home
              </Link>
              <Link href="/Blog/articles" className="text-gray-300">
                Artikel
              </Link>
              <Link href="/ueber-uns" className="text-gray-300">
                Über uns
              </Link>
              <Button
                variant="outline"
                className="mt-4 border-[#d4c6a6] text-[#d4c6a6]"
              >
                Abonnieren
              </Button>
            </nav>
          </div>
        )}
      </header>




      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Link href="Blog/articles/" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zurük zu Artikeln
          </Link>

          <div className="flex items-center gap-2 text-sm text-[#d4c6a6] mb-4">
            <BrainCircuit className="h-5 w-5" />
            <span>{post.category}</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">{post.title}</h1>

          <div className="flex items-center gap-4 text-sm text-gray-400 mb-8">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
            <div>{post.date}</div>
            <div>By {post.author}</div>
          </div>

          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-gray-800 mb-8">
            <Image
              src={post.image || "/placeholder.svg"}
              alt="Article hero image showing GAN-generated art"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex justify-between items-center mb-8">
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-8 px-3 border-gray-800 hover:bg-gray-900 bg-transparent"
                onClick={() => handleShare("twitter")}
              >
                <Twitter className="h-4 w-4 mr-1" />
                Share
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 px-3 border-gray-800 hover:bg-gray-900 bg-transparent"
                onClick={() => handleShare("facebook")}
              >
                <Facebook className="h-4 w-4 mr-1" />
                Share
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="h-8 px-3 border-gray-800 hover:bg-gray-900 bg-transparent"
                onClick={() => handleShare("linkedin")}
              >
                <Linkedin className="h-4 w-4 mr-1" />
                Share
              </Button>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="h-8 px-3 border-gray-800 hover:bg-gray-900 bg-transparent"
              onClick={() => handleShare("clipboard")}
            >
              <Share2 className="h-4 w-4 mr-1" />
              Share
            </Button>
          </div>


          <article className="flex flex-col gap-3 font-sans">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <h3 className="text-xl font-bold mb-6">Ähnliche Artikel</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <Link href={`/blog/${relatedPost.slug}/`} className="group" key={index}>
                  <div className="space-y-3">
                    <div className="relative h-48 rounded-lg overflow-hidden border border-gray-800 group-hover:border-[#d4c6a6]/50 transition-colors">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={`${relatedPost.title} thumbnail`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-xs text-[#d4c6a6] mb-2">
                        <BrainCircuit className="h-4 w-4" />
                        <span>{relatedPost.category}</span>
                      </div>
                      <h3 className="font-medium group-hover:text-[#d4c6a6] transition-colors">{relatedPost.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
