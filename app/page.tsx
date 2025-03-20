import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, BookOpen, Headphones, Globe, GraduationCap } from "lucide-react"
import HeroSection from "@/components/hero-section"
import FeatureCard from "@/components/feature-card"
import AudioPlayer from "@/components/audio-player"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 flex h-16 items-center max-w-6xl">
          <div className="hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="hidden font-bold sm:inline-block">தமிழ் | Tamil Linguistics</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/#features" className="transition-colors hover:text-foreground/80">
                Features
              </Link>
              <Link href="/alphabet" className="transition-colors hover:text-foreground/80">
                Alphabet
              </Link>
              <Link href="/grammar" className="transition-colors hover:text-foreground/80">
                Grammar
              </Link>
              <Link href="/pronunciation" className="transition-colors hover:text-foreground/80">
                Pronunciation
              </Link>
              <Link href="/about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button variant="outline" className="ml-auto hidden md:flex">
                <GraduationCap className="mr-2 h-4 w-4" />
                Start Learning
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <HeroSection />

        <section id="features" className="container mx-auto px-4 py-12 md:py-24 lg:py-32 max-w-6xl min-w-screen">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Explore the Tamil Language</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Discover one of the world's oldest classical languages with our comprehensive learning resources.
            </p>
          </div>

          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-8 mt-8">
            <FeatureCard
              icon={<BookOpen className="h-6 w-6" />}
              title="Rich History"
              description="Learn about Tamil's 2000+ year literary tradition and cultural significance."
            />
            <FeatureCard
              icon={<Headphones className="h-6 w-6" />}
              title="Audio Pronunciation"
              description="Listen to native speakers pronounce words and phrases correctly."
            />
            <FeatureCard
              icon={<Globe className="h-6 w-6" />}
              title="Global Language"
              description="Explore how Tamil is used across South India, Sri Lanka, Singapore, and diaspora communities."
            />
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 md:py-24 lg:py-32 bg-muted/50 max-w-6xl min-w-screen">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Learn Tamil Pronunciation</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Practice your pronunciation with our audio examples recorded by native speakers.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 mt-12">
            <AudioPlayer
              title="Basic Greetings - வணக்கம் (Vanakkam)"
              description="The most common Tamil greeting, similar to 'hello'"
              audioSrc="webfiles/vanakkam.mp3"
            />

            <AudioPlayer
              title="How are you? - நீங்கள் எப்படி இருக்கிறீர்கள்? (Neengal eppadi irukkireergal?)"
              description="Formal way to ask someone how they are doing"
              audioSrc="/webfiles/howareyou.mp3"
            />

            <AudioPlayer
              title="Thank you - நன்றி (Nandri)"
              description="Expressing gratitude in Tamil"
              audioSrc="/webfiles/thankyou.mp3"
            />
          </div>

          <div className="mt-12 flex justify-center">
            <Button className="gap-2">
              View All Pronunciation Examples
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row max-w-6xl">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Tamil Linguistics Project. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
