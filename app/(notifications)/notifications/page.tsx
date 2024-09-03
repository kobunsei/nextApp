import DashBoardShell from "@/components/dashboard/dashboard-shell";
import { IconNotifications } from "@/components/icon/icon-notifications";
import { IconSales } from "@/components/icon/icon-sales";
import { redirect } from "next/navigation";
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export default async function DashboardPage() {

  return (
    <DashBoardShell>
      <div className="grid gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-sm font-medium">未読通知</CardTitle>
              <CardDescription className="text-xs text-gray-500 dark:text-gray-400">
                新しい通知が 3 件あります
              </CardDescription>
            </div>
            <Button variant="ghost" size="icon" className="rounded-full">
              <IconNotifications.BellIcon className="w-4 h-4" />
              <span className="sr-only">通知を確認</span>
            </Button>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">最近の通知</CardTitle>
            <Button variant="ghost" size="icon" className="rounded-full">
              <IconNotifications.FilterIcon className="w-4 h-4" />
              <span className="sr-only">通知をフィルター</span>
            </Button>
          </CardHeader>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">日付</TableHead>
                <TableHead>タイプ</TableHead>
                <TableHead>内容</TableHead>
                <TableHead className="text-right">アクション</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">2023-06-15</TableCell>
                <TableCell>
                  <div className="inline-block rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-600 dark:bg-blue-800 dark:text-blue-200">
                    販売
                  </div>
                </TableCell>
                <TableCell>新しい商品が販売されました。</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <IconNotifications.MoveHorizontalIcon className="w-4 h-4" />
                        <span className="sr-only">アクション</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>通知を表示</DropdownMenuItem>
                      <DropdownMenuItem>通知を削除</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">2023-06-12</TableCell>
                <TableCell>
                  <div className="inline-block rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-600 dark:bg-green-800 dark:text-green-200">
                    イベント
                  </div>
                </TableCell>
                <TableCell>新しいイベントが追加されました。</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <IconNotifications.MoveHorizontalIcon className="w-4 h-4" />
                        <span className="sr-only">アクション</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>通知を表示</DropdownMenuItem>
                      <DropdownMenuItem>通知を削除</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">2023-06-10</TableCell>
                <TableCell>
                  <div className="inline-block rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-600 dark:bg-yellow-800 dark:text-yellow-200">
                    更新
                  </div>
                </TableCell>
                <TableCell>新しいアップデートが利用可能です。</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <IconNotifications.MoveHorizontalIcon className="w-4 h-4" />
                        <span className="sr-only">アクション</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>通知を表示</DropdownMenuItem>
                      <DropdownMenuItem>通知を削除</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">2023-06-05</TableCell>
                <TableCell>
                  <div className="inline-block rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-600 dark:bg-red-800 dark:text-red-200">
                    重要
                  </div>
                </TableCell>
                <TableCell>重要な情報をお知らせします。</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <IconNotifications.MoveHorizontalIcon className="w-4 h-4" />
                        <span className="sr-only">アクション</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>通知を表示</DropdownMenuItem>
                      <DropdownMenuItem>通知を削除</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
    </DashBoardShell>
  );
}
