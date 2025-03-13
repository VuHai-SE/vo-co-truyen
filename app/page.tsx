import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ChevronRight,
  Calendar,
  Trophy,
  Users,
  BookOpen,
  Award,
  ArrowRight,
  Facebook,
  Phone,
  MapPin,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Võ Cổ Truyền Việt Nam"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">✨ Võ Cổ Truyền Việt Nam ✨</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Hành trình gìn giữ và phát triển tinh hoa võ thuật Việt Nam, từ lịch sử hào hùng đến sân chơi quốc tế.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Tham gia ngay!
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Xem video giới thiệu
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-red-700">Giới Thiệu - Lịch Sử Hình Thành</h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Võ cổ truyền Việt Nam đã có hơn 2000 năm lịch sử, hình thành từ quá trình dựng nước và giữ nước. Là sự
                  kết tinh của nhiều dòng võ, phù hợp với thể trạng người Việt, mang bản sắc riêng biệt với hệ thống bài
                  quyền, binh khí đa dạng.
                </p>
                <p className="text-gray-700">
                  Sau ngày đất nước thống nhất, vào khoảng cuối thập niên 80, cùng với sự phát triển chung của cả nước,
                  phong trào tập luyện Võ tại TP.HCM nhằm rèn luyện sức khỏe trong quần chúng nhân dân tăng cao.
                </p>
                <p className="text-gray-700">
                  Năm 1989: Hội Võ Cổ Truyền TP.HCM được thành lập với sự góp sức của các lão võ sư, võ sư, HLV.
                </p>
                <p className="text-gray-700">
                  Năm 2014: Thành lập Liên đoàn Võ Cổ Truyền TP.HCM, đánh dấu bước phát triển mạnh mẽ, đưa võ cổ truyền
                  vào giảng dạy, thi đấu chuyên nghiệp.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Lịch sử Võ Cổ Truyền"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-red-700">
            Cột Mốc Quan Trọng Của Liên Đoàn Võ Cổ Truyền TP.HCM
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-200"></div>

            <div className="space-y-12">
              {/* 1989 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-red-600">1989</h3>
                  <p className="text-gray-700">
                    Thành lập Hội Võ Cổ Truyền TP.HCM với Võ Sư Lê Kim Hòa làm chủ tịch hội.
                  </p>
                </div>
                <div className="z-10 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0">
                  <div className="h-32 md:h-40 relative rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Thành lập Hội Võ Cổ Truyền TP.HCM"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* 1990 */}
              <div className="flex flex-col md:flex-row-reverse items-center">
                <div className="md:w-1/2 md:pl-12 mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-red-600">1990</h3>
                  <p className="text-gray-700">
                    Hội cử các Võ sư tham gia cùng đoàn võ thuật TP.HCM sang Belarus giao lưu biểu diễn và huấn luyện.
                  </p>
                </div>
                <div className="z-10 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div className="md:w-1/2 md:pr-12 md:text-right mt-4 md:mt-0">
                  <div className="h-32 md:h-40 relative rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Giao lưu quốc tế"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* 2014 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-red-600">2014</h3>
                  <p className="text-gray-700">
                    Chính thức thành lập Liên đoàn Võ Cổ Truyền TP.HCM. Ban chấp hành nhiệm kỳ 1 năm 2014-2018 do Võ sư
                    Lê Kim Hòa làm chủ tịch.
                  </p>
                </div>
                <div className="z-10 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0">
                  <div className="h-32 md:h-40 relative rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Thành lập Liên đoàn Võ Cổ Truyền TP.HCM"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* 2018 */}
              <div className="flex flex-col md:flex-row-reverse items-center">
                <div className="md:w-1/2 md:pl-12 mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-red-600">2018</h3>
                  <p className="text-gray-700">
                    Đại hội BCH nhiệm kỳ 2 năm 2018-2023. Thành lập Hội đồng Võ Sư TP.HCM và Phân viện-Học viện VCT Thế
                    Giới.
                  </p>
                </div>
                <div className="z-10 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div className="md:w-1/2 md:pr-12 md:text-right mt-4 md:mt-0">
                  <div className="h-32 md:h-40 relative rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Đại hội BCH nhiệm kỳ 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* 2023-2024 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-red-600">2023-2024</h3>
                  <p className="text-gray-700">
                    Đại hội BCH nhiệm kỳ 3 năm 2023-2028. Sau khi cố ĐVS QT Lê Kim Hòa qua đời, bà Hà Thị Yến Oanh được
                    bầu làm Chủ tịch Liên đoàn.
                  </p>
                </div>
                <div className="z-10 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0">
                  <div className="h-32 md:h-40 relative rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Đại hội BCH nhiệm kỳ 3"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-red-700">
            Những Hoạt Động Tiêu Biểu - Đưa Võ Cổ Truyền Vươn Xa
          </h2>

          <Tabs defaultValue="competitions" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="competitions">Giải Đấu</TabsTrigger>
              <TabsTrigger value="festivals">Liên Hoan</TabsTrigger>
              <TabsTrigger value="education">Giáo Dục</TabsTrigger>
              <TabsTrigger value="military">Quân Đội</TabsTrigger>
            </TabsList>

            <TabsContent value="competitions" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="overflow-hidden">
                  <div className="h-48 relative">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Giải Vô địch Võ Cổ Truyền Toàn quốc"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 flex items-center">
                      <Trophy className="w-5 h-5 mr-2 text-red-600" />
                      Giải Vô địch Võ Cổ Truyền Toàn quốc
                    </h3>
                    <p className="text-gray-700">
                      Sự kiện hàng năm quy tụ võ sĩ từ 63 tỉnh thành, tạo cơ hội cho các võ sĩ cọ xát, nâng cao kỹ năng
                      và kinh nghiệm thi đấu.
                    </p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="h-48 relative">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Giải Trẻ Võ Cổ Truyền TP.HCM"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 flex items-center">
                      <Trophy className="w-5 h-5 mr-2 text-red-600" />
                      Giải Trẻ Võ Cổ Truyền TP.HCM
                    </h3>
                    <p className="text-gray-700">
                      Nhằm phát hiện và bồi dưỡng tài năng trẻ, tạo điều kiện cho các em thể hiện khả năng và rèn luyện
                      bản lĩnh thi đấu.
                    </p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="h-48 relative">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Giải Võ Cổ truyền TP.HCM Mở rộng"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 flex items-center">
                      <Trophy className="w-5 h-5 mr-2 text-red-600" />
                      Giải Võ Cổ truyền TP.HCM Mở rộng
                    </h3>
                    <p className="text-gray-700">
                      Giải đấu mở rộng, thu hút sự tham gia của các võ sĩ từ nhiều tỉnh, thành và quốc gia khác, tạo cơ
                      hội giao lưu học hỏi.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="festivals" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="overflow-hidden">
                  <div className="h-48 relative">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Liên hoan Võ thuật Quốc tế TP.HCM"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-red-600" />
                      Liên hoan Võ thuật Quốc tế TP.HCM
                    </h3>
                    <p className="text-gray-700">
                      Sự kiện giao lưu văn hóa võ thuật với nhiều quốc gia, quảng bá võ cổ truyền Việt Nam đến bạn bè
                      quốc tế.
                    </p>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="h-48 relative">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Hội diễn Võ Cổ Truyền TP.HCM"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-red-600" />
                      Hội diễn Võ Cổ Truyền TP.HCM
                    </h3>
                    <p className="text-gray-700">
                      Tôn vinh và bảo tồn các giá trị văn hóa của võ cổ truyền Việt Nam, biểu diễn các bài quyền, binh
                      khí và kỹ thuật đặc sắc.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="education" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-red-600" />
                    Đưa Võ Cổ Truyền vào các trường học
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Từ năm 2018, Liên đoàn Võ cổ truyền TP.HCM đã tích cực đưa võ cổ truyền vào các trường học. Trong
                    năm đó, họ tổ chức thành công giải học sinh các trường phổ thông với sự tham gia của 14 đoàn.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-center p-4 border rounded-lg">
                      <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                        <BookOpen className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Đại học Thể dục Thể thao TP.HCM</h4>
                        <p className="text-sm text-gray-600">Hợp tác đào tạo</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 border rounded-lg">
                      <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                        <BookOpen className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Đại học Sư phạm TDTT TP.HCM</h4>
                        <p className="text-sm text-gray-600">Hợp tác đào tạo</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 border rounded-lg">
                      <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                        <BookOpen className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Đại học Tôn Đức Thắng</h4>
                        <p className="text-sm text-gray-600">Hợp tác đào tạo</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 border rounded-lg">
                      <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-4">
                        <BookOpen className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Đại học Cần Thơ</h4>
                        <p className="text-sm text-gray-600">Hợp tác đào tạo</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="military" className="space-y-6">
              <Card>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="h-64 md:h-auto relative">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Võ Cổ Truyền trong quân đội"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-red-600" />
                      Đưa Võ Cổ Truyền vào giáo án tập luyện trong quân đội
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Liên đoàn Võ Cổ Truyền TP.HCM đã phối hợp với các đơn vị quân đội để đưa võ cổ truyền vào chương
                      trình huấn luyện, giúp nâng cao thể lực và kỹ năng chiến đấu cho các chiến sĩ.
                    </p>
                    <p className="text-gray-700">
                      Các bài tập võ cổ truyền được điều chỉnh phù hợp với đặc thù huấn luyện quân sự, kết hợp giữa
                      truyền thống và hiện đại, góp phần xây dựng quân đội nhân dân Việt Nam ngày càng vững mạnh.
                    </p>
                  </CardContent>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Key Figures Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-red-700">
            Những Nhân Vật Tiêu Biểu - Lãnh Đạo Liên Đoàn
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                <div className="h-64 md:h-auto relative">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Cố ĐVS QT Lê Kim Hòa"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-2 p-6">
                  <h3 className="text-xl font-bold mb-2">Cố ĐVS QT Lê Kim Hòa (1950-2024)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Chưởng môn sáng lập Môn phái Thanh Long Võ Đạo</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Phó CT kiêm trưởng BCM Liên đoàn Võ thuật cổ truyền Việt Nam</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Phó CT kiêm Trưởng ban chuyên môn Liên đoàn Thế giới Võ cổ truyền Việt Nam (WFVV)</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Chủ tịch LĐ VCT TP.HCM nhiệm kỳ 1, 2, 3</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Có công lớn trong việc quảng bá và phát triển võ cổ truyền</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                <div className="h-64 md:h-auto relative">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="ĐVS Hà Thị Yến Oanh"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-2 p-6">
                  <h3 className="text-xl font-bold mb-2">ĐVS Hà Thị Yến Oanh</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Sinh năm 1974</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Tân Chủ tịch Liên đoàn Võ Cổ Truyền TP.HCM (từ 30/08/2024)</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Có nhiều đóng góp cho sự phát triển của Võ Cổ Truyền Việt Nam</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Tiếp nối sự nghiệp phát triển Võ Cổ Truyền của cố ĐVS QT Lê Kim Hòa</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-red-700 text-white">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">✨ Bạn muốn học Võ Cổ Truyền? Hãy tham gia ngay! ✨</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Tham gia cùng chúng tôi để trải nghiệm tinh hoa võ thuật Việt Nam, rèn luyện thể chất và tinh thần.
          </p>
          <Button size="lg" className="bg-white text-red-700 hover:bg-gray-100">
            Đăng ký ngay <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-4">
                <Facebook className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Kết nối với chúng tôi</h3>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-gray-200">
                  Facebook
                </Link>
                <Link href="#" className="hover:text-gray-200">
                  YouTube
                </Link>
                <Link href="#" className="hover:text-gray-200">
                  Zalo
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Liên hệ trực tiếp</h3>
              <p>Hotline: 090xxxxxxx</p>
              <p>Email: info@vocotruyen.com</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Địa chỉ</h3>
              <p>Văn phòng Liên đoàn Võ Cổ Truyền TP.HCM</p>
              <p>Thành phố Hồ Chí Minh, Việt Nam</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">Liên Đoàn Võ Cổ Truyền TP.HCM</h2>
              <p className="text-gray-400">© {new Date().getFullYear()} - Tất cả quyền được bảo lưu</p>
            </div>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-red-500">
                Trang chủ
              </Link>
              <Link href="#" className="hover:text-red-500">
                Giới thiệu
              </Link>
              <Link href="#" className="hover:text-red-500">
                Hoạt động
              </Link>
              <Link href="#" className="hover:text-red-500">
                Liên hệ
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

