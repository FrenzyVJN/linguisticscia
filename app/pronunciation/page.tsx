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
      tamil: "உண் - to eat",
      transliteration: "அவன் மெதுவாக உண்கிறான்.",
      english: "He is eating slowly.",
      audioSrc: "/eat/audio_1.mp3",
    },
    {
      tamil: "தின் - to munch",
      transliteration: "மாடுகள் பசுமை நிறைந்த புல்லை மென்று தின்றன.",
      english: "The cows munched on the green grass.",
      audioSrc: "/eat/audio_2.mp3",
    },
    {
      tamil: "விழுங்கு - to swallow",
      transliteration: "அவள் அவசரமாக உணவை விழுங்கிவிட்டாள்.",
      english: "She hastily swallowed the food.",
      audioSrc: "/eat/audio_3.mp3",
    },
    {
      tamil: "சாப்பிடு - to eat/consume",
      transliteration: "குழந்தை மண்ணை சாப்பிட்டது.",
      english: "The child ate sand.",
      audioSrc: "/eat/audio_4.mp3",
    },
    {
      tamil: "விழுங்கு - to swallow",
      transliteration: "அவன் மருந்தை விழுங்கிவிட்டான்.",
      english: "He swallowed the medicine.",
      audioSrc: "/eat/audio_5.mp3",
    },
    {
      tamil: "மென்று சாப்பிடு - To chew and eat",
      transliteration: "மிட்டாயை  மென்று சாப்பிடு, அப்படியே முழுங்காதே!",
      english: "Chew the candy, don’t just swallow it.",
      audioSrc: "/eat/audio_6.mp3",
    },
    {
      tamil: "உண் - To eat",
      transliteration: "விருந்தை உண்டு மகிழுங்கள்!",
      english: "Enjoy the feast!",
      audioSrc: "/eat/audio_7.mp3",
    },
    {
      tamil: "கடி - to bite",
      transliteration: "அவன் வாயில் பேனா வைத்துக்கொண்டு கடிக்கிறான்.",
      english: "He is biting a pen in his mouth.",
      audioSrc: "/eat/audio_8.mp3",
    },
    {
      tamil: "புசி - To graze",
      transliteration: "பசு பசியாக இருந்ததால், புல்லை புசித்து விட்டது.",
      english: "The cow was hungry, so it ate the grass.",
      audioSrc: "/eat/audio_9.mp3",
    }
  ]

  const numbers = [
    {
      tamil: "பருகு - to sip/drink",
      transliteration: "அவன் தீர்த்தத்தை பருகினான்.",
      english: "He drank the holy water.",
      audioSrc: "/drink/drink_audio_1.mp3",
    },
    {
      tamil: "உட்கொள் - to intake",
      transliteration: "நீர் அதிகம் உட்கொள்ளுங்கள்.",
      english: "Drink plenty of water.",
      audioSrc: "/drink/drink_audio_2.mp3",
    },
    {
      tamil: "சவை - to taste",
      transliteration: "அவன் காஷ்மீரி பானத்தை சுவைத்தான்.",
      english: "He tasted the Kashmiri drink.",
      audioSrc: "/drink/drink_audio_3.mp3",
    },
    {
      tamil: "குடி - to drink",
      transliteration: "அவன் வெந்நீர் குடிக்கிறான்.",
      english: "He is drinking hot water.",
      audioSrc: "/drink/drink_audio_4.mp3",
    },
    {
      tamil: "முடி - to finish",
      transliteration: "ஓட்டத்திற்குப் பிறகு, அவள் ஒரு குவளை  தண்ணீரை முடித்து விட்டாள்",
      english: "After the run, she finished a vessel full of water.",
      audioSrc: "/drink/drink_audio_5.mp3",
    },
    {
      tamil:"உறி - to suck",
      transliteration: "தேநீரை மெதுவாக உறிஞ்சு  குடி",
      english:"Drink the tea with patience.",
      audioSrc: "/drink/drink_audio_6.mp3",
    },
    {
      tamil:"ருசி - to taste",
      transliteration: "அவள் தேநீரை ரசித்து ருசித்தாள்.",
      english:"She sipped and enjoyed the tea.",
      audioSrc: "/drink/drink_audio_7.mp3",
    },
    {
      tamil: "தணி - to quench",
      transliteration: "தண்ணீர் குடித்து என் தாகத்தைத் தணித்தேன்.",
      english: "I quenched my thirst by drinking water.",
      audioSrc: "/drink/drink_audio_8.mp3",
    },
    {
      tamil: "குடி - to drink",
      transliteration: "அவன் காபி குடிக்கிறான்.",
      english: "He is drinking coffee.",
      audioSrc: "/drink/drink_audio_9.mp3",
    },
    {
      tamil: "அருந்து - to drink",
      transliteration: "கடலின் அழகை கண்கள் அருந்தின.",
      english: "Eyes enjoyed the beauty of the sea.",
      audioSrc: "/drink/drink_audio_10.mp3",
    },
    {
      tamil:"குடி - to drink",
      transliteration:"குடி குடியை கெடுக்கும்.",
      english:"Alcohol ruins households.",
      audioSrc:"/drink/drink_audio_11.mp3"
    },
    {
      tamil:"குடி - to drink",
      transliteration:"உப்பை தின்னவன் தண்ணி குடிக்கணும்",
      english:"The one who ate salt has to drink water.",
      audioSrc:"/drink/drink_audio_12.mp3"
    },
    {
      tamil:" உறி - To suck",
      transliteration:"இன்றைய வெயில் எனது சக்தியைக் உறிஞ்சு விட்டது",
      english:"Today’s heat has sucked up all my energy.",
      audioSrc:"/drink/drink_audio_13.mp3"
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
            <TabsTrigger value="phrases">Eat</TabsTrigger>
            <TabsTrigger value="numbers">Drink</TabsTrigger>
            <TabsTrigger value="common">Common Words</TabsTrigger>
          </TabsList>

          <TabsContent value="phrases" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Eat</CardTitle>
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

