import DashBoardShell from "@/components/dashboard/dashboard-shell";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Icon } from "@/components/icon/icon";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"

export default async function DashboardPage() {

  return (
    <DashBoardShell>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">総売上</CardTitle>
            <Icon.DollarSignIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">前月比+20.1%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">テナント入居率</CardTitle>
            <Icon.UsersIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">前月比+3%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">今後のイベント</CardTitle>
            <Icon.CalendarIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">前月比+2</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">テナント満足度</CardTitle>
            <Icon.ThumbsUpIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">前月比+0.2</p>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">今後のイベント</CardTitle>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Icon.PlusIcon className="w-4 h-4" />
              <span className="sr-only">イベントを追加</span>
            </Button>
          </CardHeader>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">日付</TableHead>
                <TableHead>イベント</TableHead>
                <TableHead>テナント</TableHead>
                <TableHead className="text-right">アクション</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">6月15日</TableCell>
                <TableCell>夏のサイドウォークセール</TableCell>
                <TableCell>32</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Icon.MoveHorizontalIcon className="w-4 h-4" />
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
                <TableCell>45</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Icon.MoveHorizontalIcon className="w-4 h-4" />
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
                <TableCell>28</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Icon.MoveHorizontalIcon className="w-4 h-4" />
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
                <TableCell>40</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Icon.MoveHorizontalIcon className="w-4 h-4" />
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
    </DashBoardShell>
  );
}
