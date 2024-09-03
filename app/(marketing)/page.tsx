import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image";
import { IconHome } from "@/components/icon/icon-home";

export default function IndexPage() {
  return (
    <>
      <section
        id="hero"
        className="bg-cover bg-center h-[400px] flex items-center justify-center"
      >
        <div className="bg-white/80 dark:bg-gray-900/80 p-8 rounded-lg text-center max-w-2xl">
          <h1 className="text-3xl font-bold mb-4">ようこそ、当社のショッピングセンターへ</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            町で最高のショッピング体験をお楽しみください。幅広い店舗、魅力的なイベントなどをご覧ください。
          </p>
          <Button>今すぐ検索</Button>
        </div>
      </section>
      <section id="about" className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">私たちについて</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                当社のショッピングセンターは20年以上にわたり、地域の中心として活躍してきました。すべてのお客様に歓迎され、楽しい体験を提供することを目指しています。
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                多様な店舗やレストラン、ワクワクするイベントやアクティビティなど、誰もが楽しめるものがたくさんあります。地域の活性化と人々の交流を促進することが私たちの使命です。
              </p>
            </div>
            <div>
              <Image
                src="/1bg.png"
                width="600"
                height="400"
                alt="私たちについて"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="shops" className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-6">当社の店舗</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Card>
              <Image
                src="/shop1.png"
                width="300"
                height="200"
                alt="店舗1"
                className="rounded-t-lg object-cover"
              />
              <CardContent>
                <h3 className="text-lg font-bold mb-2">店舗1</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  最新のファッショントレンドと高品質な商品を取り揃えた、プレミアムな衣料品店です。
                </p>
              </CardContent>
            </Card>
            <Card>
              <Image
                src="/shop1.png"
                width="300"
                height="200"
                alt="店舗2"
                className="rounded-t-lg object-cover"
              />
              <CardContent>
                <h3 className="text-lg font-bold mb-2">店舗2</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  お部屋の雰囲気を一新する、幅広い家具・インテリア用品を取り揃えています。
                </p>
              </CardContent>
            </Card>
            <Card>
              <Image
                src="/shop1.png"
                width="300"
                height="200"
                alt="店舗3"
                className="rounded-t-lg object-cover"
              />
              <CardContent>
                <h3 className="text-lg font-bold mb-2">店舗3</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  地元の職人が手作りする、美味しいお菓子やベーカリー商品をお楽しみください。
                </p>
              </CardContent>
            </Card>
            <Card>
              <Image
                src="/shop1.png"
                width="300"
                height="200"
                alt="店舗4"
                className="rounded-t-lg object-cover"
              />
              <CardContent>
                <h3 className="text-lg font-bold mb-2">店舗4</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  様々なシーンで活躍する、ユニークなギフト商品を取り揃えています。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section id="events" className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">今後のイベント</h2>
            <Link href="#" className="text-blue-500 hover:underline" prefetch={false}>
              すべてのイベントを見る
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card>
              <Image
                src="/calendar1.png"
                width="400"
                height="250"
                alt="イベント1"
                className="rounded-t-lg object-cover"
              />
              <CardContent>
                <h3 className="text-lg font-bold mb-2">夏のサイドウォークセール</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  年間恒例の夏のサイドウォークセールを開催します。割引やスペシャルオファーをお見逃しなく。
                </p>
                <div className="flex items-center">
                  <IconHome.CalendarIcon className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400">2023年6月15日</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <Image
                src="/calendar1.png"
                width="400"
                height="250"
                alt="イベント2"
                className="rounded-t-lg object-cover"
              />
              <CardContent>
                <h3 className="text-lg font-bold mb-2">新学期スタート記念イベント</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  新学期の始まりを祝うべく、特別割引やアクティビティなどをご用意しています。
                </p>
                <div className="flex items-center">
                  <IconHome.CalendarIcon className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400">2023年7月1日</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <Image
                src="/calendar1.png"
                width="400"
                height="250"
                alt="イベント3"
                className="rounded-t-lg object-cover"
              />
              <CardContent>
                <h3 className="text-lg font-bold mb-2">秋のファッションショー</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  当社の年間恒例ファッションショーで、最新の秋のトレンドをチェックしましょう。
                </p>
                <div className="flex items-center">
                  <IconHome.CalendarIcon className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400">2023年8月1日</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section id="news" className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-6">最新ニュース</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card>
              <Image
                src="/news1.png"
                width="400"
                height="250"
                alt="ニュース1"
                className="rounded-t-lg object-cover"
              />
              <CardContent>
                <h3 className="text-lg font-bold mb-2">新店舗オープン</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  高品質な商品を取り揃えた、新しい店舗がオープンしました。ぜひお立ち寄りください。
                </p>
                <Link href="#" className="text-blue-500 hover:underline" prefetch={false}>
                  続きを読む
                </Link>
              </CardContent>
            </Card>
            <div />
          </div>
        </div>
      </section>
    </>
  );
}
