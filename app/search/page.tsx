import { Suspense } from "react"
import SearchResults from "@/components/search-results"
import Header from "@/components/header"

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Suspense fallback={<div className="max-w-7xl mx-auto px-8 py-20">Loading...</div>}>
        <SearchResults />
      </Suspense>
    </main>
  )
}
