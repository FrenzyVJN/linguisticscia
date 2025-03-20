import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function GrammarPage() {
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
          <h1 className="text-3xl font-bold tracking-tight">Tamil Grammar</h1>
          <p className="text-muted-foreground mt-2">
            Tamil grammar has several unique features that distinguish it from other languages. Explore the fundamental
            aspects of Tamil grammar below.
          </p>
        </div>

        <Tabs defaultValue="nouns" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="nouns">Nouns</TabsTrigger>
            <TabsTrigger value="verbs">Verbs</TabsTrigger>
            <TabsTrigger value="sentence">Sentence Structure</TabsTrigger>
            <TabsTrigger value="cases">Cases</TabsTrigger>
          </TabsList>

          <TabsContent value="nouns" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Tamil Nouns (பெயர்ச்சொல்)</CardTitle>
                <CardDescription>
                  Tamil nouns are classified based on rationality, gender, number, and case.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Rational vs. Irrational Nouns</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">Tamil nouns are divided into two main categories:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <strong>Rational (உயர்திணை):</strong> Refers to humans and deities
                        </li>
                        <li>
                          <strong>Irrational (அஃறிணை):</strong> Refers to animals, objects, and concepts
                        </li>
                      </ul>
                      <div className="mt-4 p-4 bg-muted rounded-md">
                        <p className="font-medium">Examples:</p>
                        <p>Rational: மனிதன் (man), பெண் (woman), குழந்தை (child)</p>
                        <p>Irrational: நாய் (dog), மரம் (tree), வீடு (house)</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Gender in Tamil Nouns</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">Tamil has three genders for rational nouns:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <strong>Masculine (ஆண்பால்):</strong> For male humans and deities
                        </li>
                        <li>
                          <strong>Feminine (பெண்பால்):</strong> For female humans and deities
                        </li>
                        <li>
                          <strong>Neuter (ஒன்றன்பால்):</strong> For all irrational nouns
                        </li>
                      </ul>
                      <div className="mt-4 p-4 bg-muted rounded-md">
                        <p className="font-medium">Examples:</p>
                        <p>Masculine: அவன் (he), மாணவன் (male student)</p>
                        <p>Feminine: அவள் (she), மாணவி (female student)</p>
                        <p>Neuter: அது (it), புத்தகம் (book)</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Number in Tamil Nouns</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">Tamil nouns have singular and plural forms:</p>
                      <div className="mt-4 p-4 bg-muted rounded-md">
                        <p className="font-medium">Examples of pluralization:</p>
                        <p>மரம் (tree) → மரங்கள் (trees)</p>
                        <p>பையன் (boy) → பையன்கள் (boys)</p>
                        <p>பெண் (girl) → பெண்கள் (girls)</p>
                        <p>வீடு (house) → வீடுகள் (houses)</p>
                      </div>
                      <p className="mt-4">
                        The most common plural suffix is கள் (kaḷ), but there are other forms as well.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="verbs" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Tamil Verbs (வினைச்சொல்)</CardTitle>
                <CardDescription>
                  Tamil verbs are inflected for tense, mood, aspect, voice, and person-number-gender agreement.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Verb Tenses</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">Tamil has three basic tenses:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <strong>Past (இறந்த காலம்)</strong>
                        </li>
                        <li>
                          <strong>Present (நிகழ் காலம்)</strong>
                        </li>
                        <li>
                          <strong>Future (எதிர் காலம்)</strong>
                        </li>
                      </ul>
                      <div className="mt-4 p-4 bg-muted rounded-md">
                        <p className="font-medium">Examples with the verb "செய்" (to do):</p>
                        <p>Past: செய்தேன் (I did)</p>
                        <p>Present: செய்கிறேன் (I am doing)</p>
                        <p>Future: செய்வேன் (I will do)</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Verb Conjugation</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">Tamil verbs are conjugated according to person, number, and gender:</p>
                      <div className="mt-4 p-4 bg-muted rounded-md">
                        <p className="font-medium">Examples with the verb "படி" (to read) in present tense:</p>
                        <p>நான் படிக்கிறேன் (I read)</p>
                        <p>நீ படிக்கிறாய் (You read)</p>
                        <p>அவன் படிக்கிறான் (He reads)</p>
                        <p>அவள் படிக்கிறாள் (She reads)</p>
                        <p>அது படிக்கிறது (It reads)</p>
                        <p>நாங்கள் படிக்கிறோம் (We read)</p>
                        <p>நீங்கள் படிக்கிறீர்கள் (You all read)</p>
                        <p>அவர்கள் படிக்கிறார்கள் (They read)</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Imperative Forms</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">Tamil has several imperative forms:</p>
                      <div className="mt-4 p-4 bg-muted rounded-md">
                        <p className="font-medium">Examples:</p>
                        <p>வா (Come! - informal)</p>
                        <p>வாருங்கள் (Come! - formal/plural)</p>
                        <p>படி (Read! - informal)</p>
                        <p>படியுங்கள் (Read! - formal/plural)</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sentence" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Tamil Sentence Structure</CardTitle>
                <CardDescription>
                  Tamil follows a Subject-Object-Verb (SOV) word order, unlike English which follows Subject-Verb-Object
                  (SVO).
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Basic Sentence Structure</h3>
                    <div className="p-4 bg-muted rounded-md">
                      <p className="font-medium">English (SVO):</p>
                      <p className="mb-2">I read a book.</p>
                      <p className="font-medium">Tamil (SOV):</p>
                      <p>நான் புத்தகத்தை படிக்கிறேன்.</p>
                      <p className="text-sm text-muted-foreground">nāṉ puttakattai paṭikkiṟēṉ.</p>
                      <p className="text-sm text-muted-foreground">I book-ACC read-PRES-1SG.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Negation</h3>
                    <div className="p-4 bg-muted rounded-md">
                      <p className="font-medium">Affirmative:</p>
                      <p className="mb-2">நான் சாப்பிடுகிறேன். (I eat.)</p>
                      <p className="font-medium">Negative:</p>
                      <p>நான் சாப்பிடவில்லை. (I do not eat.)</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Questions</h3>
                    <div className="p-4 bg-muted rounded-md">
                      <p className="font-medium">Statement:</p>
                      <p className="mb-2">அவன் வந்தான். (He came.)</p>
                      <p className="font-medium">Question:</p>
                      <p>அவன் வந்தானா? (Did he come?)</p>
                      <p className="text-sm text-muted-foreground">
                        The question particle 'ஆ' (ā) is added to the end.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cases" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Tamil Case System</CardTitle>
                <CardDescription>
                  Tamil has eight cases that show the relationship between nouns and other parts of the sentence.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 border rounded-md">
                    <h3 className="font-medium">1. Nominative (எழுவாய் வேற்றுமை)</h3>
                    <p className="text-sm">The subject of the sentence</p>
                    <p className="text-sm mt-2">Example: மரம் (maram) - tree</p>
                  </div>

                  <div className="p-4 border rounded-md">
                    <h3 className="font-medium">2. Accusative (செயப்படுபொருள் வேற்றுமை)</h3>
                    <p className="text-sm">The direct object</p>
                    <p className="text-sm mt-2">Example: மரத்தை (marattai) - the tree (as object)</p>
                  </div>

                  <div className="p-4 border rounded-md">
                    <h3 className="font-medium">3. Instrumental (கருவி வேற்றுமை)</h3>
                    <p className="text-sm">Indicates the means by which an action is done</p>
                    <p className="text-sm mt-2">Example: மரத்தால் (marattāl) - by the tree</p>
                  </div>

                  <div className="p-4 border rounded-md">
                    <h3 className="font-medium">4. Dative (கொடை வேற்றுமை)</h3>
                    <p className="text-sm">Indicates the recipient or purpose</p>
                    <p className="text-sm mt-2">Example: மரத்திற்கு (marattirku) - to/for the tree</p>
                  </div>

                  <div className="p-4 border rounded-md">
                    <h3 className="font-medium">5. Ablative (நீங்கல் வேற்றுமை)</h3>
                    <p className="text-sm">Indicates separation or source</p>
                    <p className="text-sm mt-2">Example: மரத்திலிருந்து (marattiliruntu) - from the tree</p>
                  </div>

                  <div className="p-4 border rounded-md">
                    <h3 className="font-medium">6. Genitive (உடைமை வேற்றுமை)</h3>
                    <p className="text-sm">Indicates possession</p>
                    <p className="text-sm mt-2">Example: மரத்தின் (marattin) - of the tree</p>
                  </div>

                  <div className="p-4 border rounded-md">
                    <h3 className="font-medium">7. Locative (இடவேற்றுமை)</h3>
                    <p className="text-sm">Indicates location</p>
                    <p className="text-sm mt-2">Example: மரத்தில் (marattil) - in/on the tree</p>
                  </div>

                  <div className="p-4 border rounded-md">
                    <h3 className="font-medium">8. Vocative (விளி வேற்றுமை)</h3>
                    <p className="text-sm">Used for addressing someone</p>
                    <p className="text-sm mt-2">Example: மரமே (maramē) - O tree!</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

