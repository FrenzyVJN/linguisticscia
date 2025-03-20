import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container py-10">
      <div className="flex items-center mb-8">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/" className="flex items-center">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      <div className="space-y-12 min-w-screen px-14">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight mb-4">About Tamil Linguistics</h1>
          <p className="text-xl text-muted-foreground">
            Exploring one of the world's oldest classical languages through interactive learning and cultural context.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">The Tamil Language</h2>
            <div className="space-y-4">
              <p>
                Tamil is a Dravidian language predominantly spoken in the Indian state of Tamil Nadu and in Sri Lanka,
                Singapore, Malaysia, and among the Tamil diaspora worldwide. With a literary history spanning over 2,000
                years, Tamil is one of the longest-surviving classical languages in the world.
              </p>
              <p>
                The language is known for its rich phonology, complex grammar, and extensive literature that includes
                poetry, prose, religious texts, and philosophical works. The oldest Tamil literature, known as Sangam
                literature, dates back to 300 BCE - 300 CE.
              </p>
              <p>
                Today, Tamil is an official language in India, Sri Lanka, and Singapore, with approximately 75 million
                native speakers globally.
              </p>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Tamil script on palm leaf manuscript"
              width={400}
              height={300}
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative aspect-video overflow-hidden rounded-xl">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Modern Tamil usage in technology"
              width={600}
              height={400}
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-bold mb-4">Our Project</h2>
            <div className="space-y-4">
              <p>
                This Tamil Linguistics project aims to provide a comprehensive, interactive platform for learning and
                exploring the Tamil language. Whether you're a student, researcher, or language enthusiast, our
                resources are designed to make Tamil accessible and engaging.
              </p>
              <p>
                Our approach combines traditional linguistic analysis with modern teaching methodologies, incorporating
                audio pronunciations, interactive exercises, and cultural context to provide a holistic learning
                experience.
              </p>
              <p>
                We believe that language learning should be immersive and contextual, which is why we've included not
                just grammar and vocabulary, but also insights into Tamil literature, history, and cultural practices.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-muted rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Key Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Interactive Learning</h3>
              <p className="text-muted-foreground">
                Engage with Tamil through interactive exercises and audio-visual content.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Comprehensive Grammar</h3>
              <p className="text-muted-foreground">Detailed explanations of Tamil grammar with practical examples.</p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Audio Pronunciation</h3>
              <p className="text-muted-foreground">Listen to native speakers pronounce words and phrases correctly.</p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Cultural Context</h3>
              <p className="text-muted-foreground">
                Learn about Tamil culture, literature, and history alongside the language.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="mb-6">
            Have questions or suggestions about our Tamil Linguistics project? We'd love to hear from you!
          </p>
          <div className="flex justify-center gap-4">
            <Button>Email Us</Button>
            <Button variant="outline">Join Our Community</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

