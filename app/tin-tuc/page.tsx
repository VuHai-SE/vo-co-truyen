import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function TinTuc() {
  return (
    <main className="pt-40 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Tin Tức</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Tin tức võ cổ truyền"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h2 className="font-bold mb-2 hover:text-red-600">
                  <Link href={`/tin-tuc/${i + 1}`}>Tin tức võ cổ truyền #{i + 1}</Link>
                </h2>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}

