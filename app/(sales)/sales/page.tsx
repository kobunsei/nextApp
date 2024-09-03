import DashBoardShell from "@/components/dashboard/dashboard-shell";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Icon } from "@/components/icon/icon";
import { IconSales } from "@/components/icon/icon-sales";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import Image from "next/image";

export default async function DashboardPage() {

  return (
    <DashBoardShell>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
            <CardTitle className="text-sm font-medium">月間売上</CardTitle>
            <Icon.CalendarIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,345.67</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">前月比+8%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">週間売上</CardTitle>
            <Icon.CalendarIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$3,456.78</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">前週比+5%</p>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">売上明細</CardTitle>
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <IconSales.FilterIcon className="w-4 h-4 mr-2" />
                    フィルター
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <div className="flex items-center justify-between">
                      <span>日付範囲</span>
                      <Icon.CalendarIcon className="w-4 h-4" />
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="flex items-center justify-between">
                      <span>商品カテゴリ</span>
                      <IconSales.PackageIcon className="w-4 h-4" />
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="flex items-center justify-between">
                      <span>支払方法</span>
                      <IconSales.CreditCardIcon className="w-4 h-4" />
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <IconSales.ListOrderedIcon className="w-4 h-4 mr-2" />
                    並び替え
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <div className="flex items-center justify-between">
                      <span>日付</span>
                      <Icon.CalendarIcon className="w-4 h-4" />
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="flex items-center justify-between">
                      <span>商品名</span>
                      <IconSales.PackageIcon className="w-4 h-4" />
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="flex items-center justify-between">
                      <span>数量</span>
                      <IconSales.DotIcon className="w-4 h-4" />
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="flex items-center justify-between">
                      <span>金額</span>
                      <Icon.DollarSignIcon className="w-4 h-4" />
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
                <TableHead>商品</TableHead>
                <TableHead>数量</TableHead>
                <TableHead className="text-right">金額</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">2023-06-01</TableCell>
                <TableCell>ワイヤレスイヤホン</TableCell>
                <TableCell>2</TableCell>
                <TableCell className="text-right">$99.98</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">2023-06-02</TableCell>
                <TableCell>スマートウォッチ</TableCell>
                <TableCell>1</TableCell>
                <TableCell className="text-right">$199.99</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">2023-06-03</TableCell>
                <TableCell>Tシャツ</TableCell>
                <TableCell>3</TableCell>
                <TableCell className="text-right">$59.97</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">2023-06-04</TableCell>
                <TableCell>ジーンズ</TableCell>
                <TableCell>1</TableCell>
                <TableCell className="text-right">$79.99</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">2023-06-05</TableCell>
                <TableCell>ノートパソコン</TableCell>
                <TableCell>1</TableCell>
                <TableCell className="text-right">$999.99</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
    </DashBoardShell>
  );
}
