"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Loader2 } from "lucide-react"
import Link from "next/link"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get("q") || "")
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const q = searchParams.get("q")
    if (q) {
      setQuery(q)
      performSearch(q)
    }
  }, [searchParams])

  const performSearch = async (searchQuery) => {
    if (!searchQuery.trim()) return

    setLoading(true)
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`)
      const data = await response.json()
      setResults(data.results || [])
    } catch (error) {
      console.error("Error searching:", error)
      setResults([])
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim()) {
      window.history.pushState({}, "", `/buscar?q=${encodeURIComponent(query)}`)
      performSearch(query)
    }
  }

  return (
    <main className="min-h-screen py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">Buscar</h1>
          <p className="text-lg text-muted-foreground">Encuentra artículos, guías y destinos</p>
        </div>

        <form onSubmit={handleSubmit} className="mb-12">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Buscar destinos, guías, artículos..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" disabled={loading}>
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
            </Button>
          </div>
        </form>

        {loading && (
          <div className="text-center py-12">
            <Loader2 className="h-8 w-8 animate-spin mx-auto text-muted-foreground" />
            <p className="mt-4 text-muted-foreground">Buscando...</p>
          </div>
        )}

        {!loading && results.length > 0 && (
          <div>
            <p className="text-sm text-muted-foreground mb-6">
              {results.length} resultado{results.length !== 1 ? "s" : ""} para "{query}"
            </p>
            <div className="space-y-6">
              {results.map((result) => (
                <Link key={result._id} href={result.url}>
                  <Card className="transition-all hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        {result.image && (
                          <img
                            src={result.image || "/placeholder.svg"}
                            alt={result.title}
                            className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                          />
                        )}
                        <div className="flex-1 min-w-0">
                          <Badge variant="secondary" className="mb-2">
                            {result.type}
                          </Badge>
                          <h3 className="text-xl font-semibold text-foreground mb-2">{result.title}</h3>
                          {result.excerpt && (
                            <p className="text-sm text-muted-foreground line-clamp-2">{result.excerpt}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {!loading && query && results.length === 0 && (
          <div className="text-center py-12">
            <Search className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No se encontraron resultados para "{query}"</p>
            <p className="text-sm text-muted-foreground mt-2">Intenta con otros términos de búsqueda</p>
          </div>
        )}
      </div>
    </main>
  )
}
