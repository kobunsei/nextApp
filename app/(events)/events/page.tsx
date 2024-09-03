import DashBoardShell from "@/components/dashboard/dashboard-shell";
import { IconNotifications } from "@/components/icon/icon-notifications";
import { IconEvents } from "@/components/icon/icon-events";
import { redirect } from "next/navigation";
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export default async function DashboardPage() {

  return (
    <DashBoardShell>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">イベントカレンダー</CardTitle>
            <Button variant="ghost" size="icon" className="rounded-full">
              <IconEvents.PlusIcon className="w-4 h-4" />
              <span className="sr-only">イベントを追加</span>
            </Button>
          </CardHeader>
          <CardContent>
            <Calendar />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">イベントリスト</CardTitle>
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <IconEvents.FilterIcon className="w-4 h-4 mr-2" />
                    フィルター
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <DropdownMenuLabel>フィルター</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <div className="flex items-center justify-between">
                      <span>日付</span>
                      <IconEvents.CalendarIcon className="w-4 h-4" />
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="flex items-center justify-between">
                      <span>カテゴリ</span>
                      <IconEvents.TagIcon className="w-4 h-4" />
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="flex items-center justify-between">
                      <span>場所</span>
                      <IconEvents.MapPinIcon className="w-4 h-4" />
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <IconEvents.ListOrderedIcon className="w-4 h-4 mr-2" />
                    並べ替え
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <DropdownMenuLabel>並べ替え</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <div className="flex items-center justify-between">
                      <span>日付</span>
                      <IconEvents.CalendarIcon className="w-4 h-4" />
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="flex items-center justify-between">
                      <span>イベント名</span>
                      <IconEvents.AlignLeftIcon className="w-4 h-4" />
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="flex items-center justify-between">
                      <span>場所</span>
                      <IconEvents.MapPinIcon className="w-4 h-4" />
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">日付</TableHead>
                <TableHead>イベント</TableHead>
                <TableHead>場所</TableHead>
                <TableHead>詳細</TableHead>
                <TableHead className="text-right">アクション</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">6月15日</TableCell>
                <TableCell>夏のサイドウォークセール</TableCell>
                <TableCell>メインモール</TableCell>
                <TableCell>年に一度の大規模セール</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <IconEvents.MoveHorizontalIcon className="w-4 h-4" />
                        <span className="sr-only">アクション</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>イベントを表示</DropdownMenuItem>
                      <DropdownMenuItem>イベントを編集</DropdownMenuItem>
                      <DropdownMenuItem>イベントをキャンセル</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">7月1日</TableCell>
                <TableCell>新学期セレブレーション</TableCell>
                <TableCell>アウトドアエリア</TableCell>
                <TableCell>新学期を祝うイベント</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <IconEvents.MoveHorizontalIcon className="w-4 h-4" />
                        <span className="sr-only">アクション</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>イベントを表示</DropdownMenuItem>
                      <DropdownMenuItem>イベントを編集</DropdownMenuItem>
                      <DropdownMenuItem>イベントをキャンセル</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">8月1日</TableCell>
                <TableCell>秋のファッションショー</TableCell>
                <TableCell>メインステージ</TableCell>
                <TableCell>最新のファッショントレンドを紹介</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <IconEvents.MoveHorizontalIcon className="w-4 h-4" />
                        <span className="sr-only">アクション</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>イベントを表示</DropdownMenuItem>
                      <DropdownMenuItem>イベントを編集</DropdownMenuItem>
                      <DropdownMenuItem>イベントをキャンセル</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">9月1日</TableCell>
                <TableCell>ホリデーマーケット</TableCell>
                <TableCell>アウトドアエリア</TableCell>
                <TableCell>ホリデーシーズンの特別イベント</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <IconEvents.MoveHorizontalIcon className="w-4 h-4" />
                        <span className="sr-only">アクション</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>イベントを表示</DropdownMenuItem>
                      <DropdownMenuItem>イベントを編集</DropdownMenuItem>
                      <DropdownMenuItem>イベントをキャンセル</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">イベントの詳細</CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              参加する
            </Button>
            <Button variant="outline" size="sm">
              キャンセルする
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">夏のサイドウォークセール</h3>
              <p className="text-gray-500 dark:text-gray-400">6月15日 |</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </DashBoardShell>
  );
}
