import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function AlphabetPage() {
  // Tamil vowels (uyir)
  const vowels = [
    { letter: "அ", transliteration: "a", example: "அம்மா (ammā) - mother" },
    { letter: "ஆ", transliteration: "ā", example: "ஆடு (āṭu) - goat" },
    { letter: "இ", transliteration: "i", example: "இலை (ilai) - leaf" },
    { letter: "ஈ", transliteration: "ī", example: "ஈ (ī) - fly" },
    { letter: "உ", transliteration: "u", example: "உலகம் (ulakam) - world" },
    { letter: "ஊ", transliteration: "ū", example: "ஊர் (ūr) - village" },
    { letter: "எ", transliteration: "e", example: "எலி (eli) - rat" },
    { letter: "ஏ", transliteration: "ē", example: "ஏணி (ēṇi) - ladder" },
    { letter: "ஐ", transliteration: "ai", example: "ஐந்து (aintu) - five" },
    { letter: "ஒ", transliteration: "o", example: "ஒன்று (oṉṟu) - one" },
    { letter: "ஓ", transliteration: "ō", example: "ஓடு (ōṭu) - run" },
    { letter: "ஔ", transliteration: "au", example: "ஔவை (auvai) - name" },
  ]

  // Tamil consonants (mei) - showing just a subset
  const consonants = [
    { letter: "க்", transliteration: "k", example: "கல் (kal) - stone" },
    { letter: "ங்", transliteration: "ṅ", example: "சங்கு (caṅku) - conch" },
    { letter: "ச்", transliteration: "c", example: "சட்டை (caṭṭai) - shirt" },
    { letter: "ஞ்", transliteration: "ñ", example: "ஞாயிறு (ñāyiṟu) - sun" },
    { letter: "ட்", transliteration: "ṭ", example: "வீடு (vīṭu) - house" },
    { letter: "ண்", transliteration: "ṇ", example: "மண் (maṇ) - soil" },
    { letter: "த்", transliteration: "t", example: "தமிழ் (tamiḻ) - Tamil" },
    { letter: "ந்", transliteration: "n", example: "நன்றி (naṉṟi) - thanks" },
    { letter: "ப்", transliteration: "p", example: "பால் (pāl) - milk" },
    { letter: "ம்", transliteration: "m", example: "மரம் (maram) - tree" },
    { letter: "ய்", transliteration: "y", example: "யாழ் (yāḻ) - harp" },
    { letter: "ர்", transliteration: "r", example: "அரசு (aracu) - government" },
  ]

  // Tamil compound letters (uyirmei) - showing just a subset with 'க' (ka)
  const compounds = [
    { letter: "க", transliteration: "ka", example: "கதவு (katavu) - door" },
    { letter: "கா", transliteration: "kā", example: "காடு (kāṭu) - forest" },
    { letter: "கி", transliteration: "ki", example: "கிளி (kiḷi) - parrot" },
    { letter: "கீ", transliteration: "kī", example: "கீரை (kīrai) - spinach" },
    { letter: "கு", transliteration: "ku", example: "குரங்கு (kuraṅku) - monkey" },
    { letter: "கூ", transliteration: "kū", example: "கூடை (kūṭai) - basket" },
    { letter: "கெ", transliteration: "ke", example: "கெண்டி (keṇṭi) - ladle" },
    { letter: "கே", transliteration: "kē", example: "கேள்வி (kēḷvi) - question" },
    { letter: "கை", transliteration: "kai", example: "கை (kai) - hand" },
    { letter: "கொ", transliteration: "ko", example: "கொடி (koṭi) - flag" },
    { letter: "கோ", transliteration: "kō", example: "கோழி (kōḻi) - chicken" },
    { letter: "கௌ", transliteration: "kau", example: "கௌரவம் (kauravam) - honor" },
  ]

  return (
    <div className="container py-10 border min-w-screen px-8">
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
          <h1 className="text-3xl font-bold tracking-tight">Tamil Alphabet</h1>
          <p className="text-muted-foreground mt-2">
            The Tamil script consists of 12 vowels (உயிரெழுத்து - uyireḻuttu), 18 consonants (மெய்யெழுத்து - meyyeḻuttu),
            and 216 compound characters (உயிர்மெய்யெழுத்து - uyirmeyyeḻuttu).
          </p>
        </div>

        <Tabs defaultValue="vowels" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="vowels">Vowels (உயிரெழுத்து)</TabsTrigger>
            <TabsTrigger value="consonants">Consonants (மெய்யெழுத்து)</TabsTrigger>
            <TabsTrigger value="compounds">Compounds (உயிர்மெய்யெழுத்து)</TabsTrigger>
          </TabsList>

          <TabsContent value="vowels" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Tamil Vowels (உயிரெழுத்து)</CardTitle>
                <CardDescription>
                  Tamil has 12 vowels, which are divided into 5 short (kuril) and 7 long (nedil) vowels.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {vowels.map((item, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="text-4xl font-bold mb-2 text-primary">{item.letter}</div>
                      <div className="text-sm font-medium">{item.transliteration}</div>
                      <div className="text-xs text-muted-foreground mt-1">{item.example}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="consonants" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Tamil Consonants (மெய்யெழுத்து)</CardTitle>
                <CardDescription>Tamil has 18 consonants, including hard, soft, and medial consonants.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {consonants.map((item, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="text-4xl font-bold mb-2 text-primary">{item.letter}</div>
                      <div className="text-sm font-medium">{item.transliteration}</div>
                      <div className="text-xs text-muted-foreground mt-1">{item.example}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="compounds" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Tamil Compound Letters (உயிர்மெய்யெழுத்து)</CardTitle>
                <CardDescription>
                  Tamil compound letters are formed by combining consonants with vowels. Here are examples with the
                  consonant 'க்' (k).
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {compounds.map((item, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="text-4xl font-bold mb-2 text-primary">{item.letter}</div>
                      <div className="text-sm font-medium">{item.transliteration}</div>
                      <div className="text-xs text-muted-foreground mt-1">{item.example}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12 bg-muted/50 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Learning Resources</h2>
          <p className="mb-4">Practice your Tamil alphabet skills with our interactive resources and audio guides.</p>
          <div className="grid gap-4 md:grid-cols-2">
            <Button className="w-full">Alphabet Pronunciation Guide</Button>
            <Button variant="outline" className="w-full">
              Writing Practice Sheets
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

