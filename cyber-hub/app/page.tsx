import Navbar from "@/components/navbar"
import NewsTicker from "@/components/news-ticker"
import KaliHeader from "@/components/kali-header"
import SectionsIndex from "@/components/sections/sections-index"
import SectionsGrid from "@/components/sections/sections-grid"
import NewsFeed from "@/components/news-feed"
import PasswordStrength from "@/components/password-strength"
import ContactPanel from "@/components/contact-panel"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen w-full scroll-smooth bg-[#050907] text-zinc-100">
      <Navbar />
      <NewsTicker />
      <KaliHeader />

      <div id="sections" className="container mx-auto px-4 py-8">
        <SectionsIndex />
        <SectionsGrid />
      </div>

      <section className="container mx-auto px-4 py-12">
        <div className="mb-6 flex items-center gap-3">
          <h2 className="text-xl font-semibold">Kiber xavfsizlik yangiliklari</h2>
        </div>
        <NewsFeed />
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="mb-6 flex items-center gap-3">
          <h2 className="text-xl font-semibold">Parol kuchini tekshirish</h2>
        </div>
        <PasswordStrength />
      </section>

      <ContactPanel />
      <Footer />
    </main>
  )
}
