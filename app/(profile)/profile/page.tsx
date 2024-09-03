import DashBoardShell from "@/components/dashboard/dashboard-shell";
import { IconNotifications } from "@/components/icon/icon-notifications";
import { IconProfile } from "@/components/icon/icon-profile";
import { redirect } from "next/navigation";
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import Image from "next/image";

export default async function DashboardPage() {

  return (
    <DashBoardShell>
      <Card>
        <CardHeader>
          <CardTitle>プロフィール</CardTitle>
          <CardDescription>プロフィール情報を更新してください。</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">名前</Label>
            <Input id="name" placeholder="名前を入力してください" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">メールアドレス</Label>
            <Input id="email" placeholder="メールアドレスを入力してください" type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">電話番号</Label>
            <Input id="phone" placeholder="電話番号を入力してください" type="tel" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">住所</Label>
            <Textarea id="address" placeholder="住所を入力してください" className="min-h-[100px]" />
          </div>
        </CardContent>
        <CardHeader>
          <CardTitle>店舗情報</CardTitle>
          <CardDescription>店舗情報を更新してください。</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="store-name">店舗名</Label>
            <Input id="store-name" placeholder="店舗名を入力してください" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="store-address">店舗住所</Label>
            <Textarea id="store-address" placeholder="店舗住所を入力してください" className="min-h-[100px]" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="store-phone">店舗電話番号</Label>
            <Input id="store-phone" placeholder="店舗電話番号を入力してください" type="tel" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="store-logo">店舗ロゴ</Label>
            <Image
              id="store-logo"
              src="/people1.png"
              width="140"
              height="70"
              alt="店舗ロゴ"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="ml-auto">保存</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>パスワード</CardTitle>
          <CardDescription>パスワードを変更してください。</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">現在のパスワード</Label>
            <Input id="current-password" type="password" placeholder="現在のパスワードを入力してください" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">新しいパスワード</Label>
            <Input id="new-password" type="password" placeholder="新しいパスワードを入力してください" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">パスワードの確認</Label>
            <Input id="confirm-password" type="password" placeholder="新しいパスワードを再入力してください" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="ml-auto">変更する</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>通知設定</CardTitle>
          <CardDescription>通知設定を変更してください。</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-notifications">メール通知</Label>
              <Switch id="email-notifications" />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              メールでの通知を受け取るかどうかを設定できます。
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="push-notifications">プッシュ通知</Label>
              <Switch id="push-notifications" />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              デバイスへのプッシュ通知を受け取るかどうかを設定できます。
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="ml-auto">保存</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>アカウント設定</CardTitle>
          <CardDescription>アカウント設定を変更してください。</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="login-activity">ログイン履歴</Label>
              <Button variant="ghost" size="icon">
                <IconProfile.EyeIcon className="h-4 w-4" />
                <span className="sr-only">ログイン履歴を表示</span>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <div className="font-medium">2023年6月17日</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">10:30 AM</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">東京, 日本</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-medium">2023年6月16日</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">3:45 PM</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">ロサンゼルス, 米国</div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="ml-auto">保存</Button>
        </CardFooter>
      </Card>
    </DashBoardShell>
  );
}
