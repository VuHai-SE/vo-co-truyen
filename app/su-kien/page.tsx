import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function SuKien() {
  return (
    <main className="pt-40 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Sự Kiện</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt={`Sự kiện ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-2">Sự kiện võ cổ truyền #{i + 1}</h2>
                <p className="text-gray-600">
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

