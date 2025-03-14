import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function LienHe() {
  return (
    <main className="pt-40 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Liên Hệ</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-bold mb-4">Thông tin liên hệ</h2>
            <div className="space-y-4">
              <p>
                <strong>Địa chỉ:</strong>
                <br />
                Văn phòng Liên đoàn Võ Cổ Truyền TP.HCM
                <br />
                Thành phố Hồ Chí Minh, Việt Nam
              </p>
              <p>
                <strong>Email:</strong>
                <br />
                vocotruyentphcmvn@gmail.com
              </p>
              <p>
                <strong>Điện thoại:</strong>
                <br />
                0907 399 567
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Gửi tin nhắn</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Họ và tên
                </label>
                <Input id="name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input id="email" type="email" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Tin nhắn
                </label>
                <Textarea id="message" rows={4} />
              </div>
              <Button type="submit">Gửi tin nhắn</Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

