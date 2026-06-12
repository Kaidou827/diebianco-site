"use client"
import Script from 'next/script'
import ArticleCard from "@/components/ArticleCard"
import { blogPosts } from "@/app/Blog/[slug]/page"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BrainCircuit, Clock, Github, Linkedin, Mail, Rss, Twitter } from "lucide-react"
import { useRouter } from "next/navigation"
import SiteFooter from "@/components/SiteFooter"

// Static article data for GitHub Pages
const articles = Object.keys(blogPosts).map((slug) => ({
  slug,
  title: blogPosts[slug].title,
  description: blogPosts[slug].content
    .replace(/<[^>]+>/g, "") // HTML-Tags entfernen
    .slice(0, 120) + "...", // kurze Vorschau
  category: blogPosts[slug].category,
  date: blogPosts[slug].date,
  image: blogPosts[slug].image,
}))

export default function ArticlesPage() {
  const router = useRouter()



  return (
    <div className="min-h-screen text-white bg-[rgba(150,143,135,1)]">


      <main className="container mx-auto px-4 py-12">
        <section id="leistungen-section" className="py-24 md:py-32 bg-[#a09a93] relative overflow-hidden">
          {/* Elegant decorative elements */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

          {/* Subtle light effect */}

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="font-serif text-xl md:text-2xl text-white mb-2">Alle Artikeln </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#D4C6A6] to-transparent mx-auto"></div>
            </div>

            {/* Service Cards - Redesigned with Icons and Less Text */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <ArticleCard
                  key={index}
                  title={article.title}
                  description={article.description}
                  category={article.category}
                  date={article.date}
                  slug={article.slug}
                  image={article.image}
                />
              ))}

            </div>

          </div>
        </section>
      </main>
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#b4b1aa]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-black/20 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-white/20">
            <div className="text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Bereit für deinen neuen Look?</h2>
              <p className="text-white/80 text-lg mb-8">
                Vereinbare jetzt einen Termin und entdecke, welcher Schnitt perfekt zu dir passt.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex justify-center items-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#D4C6A6] to-[#B8A082] rounded-full hover:from-[#B8A082] hover:to-[#D4C6A6] hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4C6A6]/50 focus:ring-offset-2 shadow-lg"
              >
                Jetzt Termin vereinbaren
              </Link>
            </div>
          </div>
        </div>
      </section>



      <SiteFooter />
    </div>
  )
}
function ArticleCard({ title, description, category, date, slug = "", image }) {
  return (
    <Link href={`/Blog/${slug}/`} className="group">
      <div className="space-y-3 py-0">
        <div className="relative h-48 rounded-lg overflow-hidden border border-gray-800 group-hover:border-[#d4c6a6]/50 transition-colors">
          <Image src={image || "/placeholder.svg"} alt={`${title} thumbnail`} fill className="object-cover" />
        </div>
        <div className="bg-transparent">
          <div className="flex items-center gap-2 text-xs text-[#d4c6a6] mb-2">
            <BrainCircuit className="h-4 w-4" />
            <span>{category}</span>
          </div>
          <h2 className="group-hover:text-white transition-colors font-extrabold tracking-wider tabular-nums text-[rgba(194,174,143,1)] border-background border-0 text-lg">{title}</h2>
          <p className="text-white-400 text-sm mt-2 line-clamp-2 font-bold">{description}</p>
          <div className="flex items-center gap-1 mt-3 text-xs text-Black">
            <Clock className="h-3 w-3" />
            <span>{date}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
