"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { ChevronLeft, Play, Pause } from "lucide-react"
import AudioPlayer from "@/components/audio-player"

export default function PronunciationPage() {
  const [activeAudio, setActiveAudio] = useState<string | null>(null)

  const basicPhrases = [
    {
      tamil: "வணக்கம்",
      transliteration: "Vaṇakkam",
      english: "Hello",
      audioSrc: "/audio/vanakkam.mp3",
    },
    {
      tamil: "நன்றி",
      transliteration: "Naṉṟi",
      english: "Thank you",
      audioSrc: "/audio/nandri.mp3",
    },
    {
      tamil: "எப்படி இருக்கிறீர்கள்?",
      transliteration: "Eppaṭi irukkiṟīrkaḷ?",
      english: "How are you?",
      audioSrc: "/audio/how-are-you.mp3",
    },
    {
      tamil: "நான் நன்றாக இருக்கிறேன்",
      transliteration: "Nāṉ naṉṟāka irukkiṟēṉ",
      english: "I am fine",
      audioSrc: "/audio/i-am-fine.mp3",
    },
    {
      tamil: "உங்கள் பெயர் என்ன?",
      transliteration: "Uṅkaḷ peyar eṉṉa?",
      english: "What is your name?",
      audioSrc: "/audio/what-is-your-name.mp3",
    },
    {
      tamil: "என் பெயர்...",
      transliteration: "Eṉ peyar...",
      english: "My name is...",
      audioSrc: "/audio/my-name-is.mp3",
    },
  ]

  const numbers = [
    {
      tamil: "ஒன்று",
      transliteration: "Oṉṟu",
      english: "One",
      audioSrc: "/audio/one.mp3",
    },
    {
      tamil: "இரண்டு",
      transliteration: "Iraṇṭu",
      english: "Two",
      audioSrc: "/audio/two.mp3",
    },
    {
      tamil: "மூன்று",
      transliteration: "Mūṉṟu",
      english: "Three",
      audioSrc: "/audio/three.mp3",
    },
    {
      tamil: "நான்கு",
      transliteration: "Nāṉku",
      english: "Four",
      audioSrc: "/audio/four.mp3",
    },
    {
      tamil: "ஐந்து",
      transliteration: "Aintu",
      english: "Five",
      audioSrc: "/audio/five.mp3",
    },
  ]

  const commonWords = [
    {
      tamil: "அம்மா",
      transliteration: "Ammā",
      english: "Mother",
      audioSrc: "/audio/mother.mp3",
    },
    {
      tamil: "அப்பா",
      transliteration: "Appā",
      english: "Father",
      audioSrc: "/audio/father.mp3",
    },
    {
      tamil: "தண்ணீர்",
      transliteration: "Taṇṇīr",
      english: "Water",
      audioSrc: "/audio/water.mp3",
    },
    {
      tamil: "உணவு",
      transliteration: "Uṇavu",
      english: "Food",
      audioSrc: "/audio/food.mp3",
    },
    {
      tamil: "வீடு",
      transliteration: "Vīṭu",
      english: "House",
      audioSrc: "/audio/house.mp3",
    },
  ]

  // Function to play audio
  const playAudio = (src: string) => {
    // Stop currently playing audio if any
    if (activeAudio) {
      const currentAudio = document.getElementById(activeAudio) as HTMLAudioElement
      if (currentAudio) {
        currentAudio.pause()
        currentAudio.currentTime = 0
      }
    }

    // Play new audio
    const audio = document.getElementById(src) as HTMLAudioElement
    if (audio) {
      audio.play()
      setActiveAudio(src)

      // Reset when audio ends
      audio.onended = () => {
        setActiveAudio(null)
      }
    }
  }

  return (
    <div className="container py-10 min-w-screen px-8">
      <div className="flex items-center mb-8">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/" className="flex items-center">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tamil Pronunciation</h1>
          <p className="text-muted-foreground mt-2">
            Learn how to pronounce Tamil words and phrases with our audio guides. Click on any phrase to hear its
            pronunciation.
          </p>
        </div>

        <Tabs defaultValue="phrases" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="phrases">Basic Phrases</TabsTrigger>
            <TabsTrigger value="numbers">Numbers</TabsTrigger>
            <TabsTrigger value="common">Common Words</TabsTrigger>
          </TabsList>

          <TabsContent value="phrases" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Tamil Phrases</CardTitle>
                <CardDescription>Essential phrases to help you start communicating in Tamil.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {basicPhrases.map((phrase, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row md:items-center p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-1">
                        <p className="text-xl font-bold text-primary">{phrase.tamil}</p>
                        <p className="text-sm font-medium">{phrase.transliteration}</p>
                        <p className="text-sm text-muted-foreground">{phrase.english}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-10 w-10 rounded-full shrink-0 mt-2 md:mt-0"
                        onClick={() => playAudio(phrase.audioSrc)}
                      >
                        {activeAudio === phrase.audioSrc ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                      </Button>
                      <audio id={phrase.audioSrc} src={phrase.audioSrc} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="numbers" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Tamil Numbers</CardTitle>
                <CardDescription>Learn how to count in Tamil.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {numbers.map((number, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row md:items-center p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-1">
                        <p className="text-xl font-bold text-primary">{number.tamil}</p>
                        <p className="text-sm font-medium">{number.transliteration}</p>
                        <p className="text-sm text-muted-foreground">{number.english}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-10 w-10 rounded-full shrink-0 mt-2 md:mt-0"
                        onClick={() => playAudio(number.audioSrc)}
                      >
                        {activeAudio === number.audioSrc ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                      </Button>
                      <audio id={number.audioSrc} src={number.audioSrc} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="common" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Common Tamil Words</CardTitle>
                <CardDescription>Frequently used words in everyday Tamil conversations.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {commonWords.map((word, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row md:items-center p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-1">
                        <p className="text-xl font-bold text-primary">{word.tamil}</p>
                        <p className="text-sm font-medium">{word.transliteration}</p>
                        <p className="text-sm text-muted-foreground">{word.english}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-10 w-10 rounded-full shrink-0 mt-2 md:mt-0"
                        onClick={() => playAudio(word.audioSrc)}
                      >
                        {activeAudio === word.audioSrc ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                      </Button>
                      <audio id={word.audioSrc} src={word.audioSrc} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Advanced Pronunciation Features</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <AudioPlayer
              title="Tamil Pronunciation Guide"
              description="A comprehensive guide to Tamil pronunciation with examples"
              audioSrc="/audio/pronunciation-guide.mp3"
            />

            <AudioPlayer
              title="Tamil Tongue Twisters"
              description="Practice your pronunciation with these challenging phrases"
              audioSrc="/audio/tongue-twisters.mp3"
            />
          </div>

          <div className="mt-8 p-6 bg-muted rounded-lg">
            <h3 className="text-xl font-bold mb-4">Pronunciation Tips</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Tamil has retroflex consonants (ட், ண், ற்) that are pronounced with the tongue curled back.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Pay attention to the difference between short and long vowels (e.g., அ vs ஆ).</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Practice the unique 'zh' sound (ழ) which is not found in many other languages.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Tamil has a rhythmic quality - try to maintain the natural rhythm when speaking.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Listen carefully to native speakers and try to mimic their intonation patterns.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

