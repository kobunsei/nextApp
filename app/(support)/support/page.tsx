import React from "react";
import DashBoardShell from "@/components/dashboard/dashboard-shell";
import { IconSupport } from "@/components/icon/icon-support";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { SupportCard } from "@/components/support/support-card";
import { SupportRequestForm } from "@/components/support/support-request-form";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <DashBoardShell>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <SupportCard
          title="FAQ"
          icon={<IconSupport.CircleHelpIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />}
          value={24}
          description="よくある質問"
        />
        <SupportCard
          title="サポートリクエスト"
          icon={<IconSupport.MessageCircleIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />}
          value={12}
          description="未対応"
        />
        <SupportCard
          title="ライブチャット"
          icon={<IconSupport.HeadphonesIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />}
          value="Online"
          description="ただいま対応中"
        />
        <SupportCard
          title="ナレッジベース"
          icon={<IconSupport.BookOpenIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />}
          value={142}
          description="記事数"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">よくある質問</CardTitle>
            <Button variant="ghost" size="icon" className="rounded-full">
              <IconSupport.PlusIcon className="w-4 h-4" />
              <span className="sr-only">新規追加</span>
            </Button>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="1">
                <AccordionTrigger>
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-medium">アカウントの作成方法は?</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    トップページの「サインアップ」ボタンをクリックし、必要な情報を入力してください。
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="2">
                <AccordionTrigger>
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-medium">ログインできない場合は?</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    パスワードの再設定が必要な場合は、ログイン画面の「パスワードを忘れた」リンクから手続きを行ってください。
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="3">
                <AccordionTrigger>
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-medium">支払い方法を変更するには?</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    アカウント設定の「支払い」タブから変更できます。クレジットカードの追加や削除が可能です。
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">サポートリクエスト</CardTitle>
            <Button variant="ghost" size="icon" className="rounded-full">
              <IconSupport.PlusIcon className="w-4 h-4" />
              <span className="sr-only">新規追加</span>
            </Button>
          </CardHeader>
          <CardContent>
            <SupportRequestForm />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">ライブチャット</CardTitle>
            <Button variant="ghost" size="icon" className="rounded-full">
              <IconSupport.MessageCircleIcon className="w-4 h-4" />
              <span className="sr-only">チャットを開始</span>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="rounded-lg w-11 h-11 bg-[#55efc4] text-3xl flex items-center justify-center">
                  😁
                </div>
                <div className="grid gap-1 items-start text-sm">
                  <div className="flex items-center gap-2">
                    <div className="font-bold">サポートエージェント</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">今すぐ対応</div>
                  </div>
                  <div>
                    <p>こんにちは、どのようなお問い合わせですか?</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-lg w-11 h-11 bg-[#fdcb6e] text-3xl flex items-center justify-center">
                  🤠
                </div>
                <div className="grid gap-1 items-start text-sm">
                  <div className="flex items-center gap-2">
                    <div className="font-bold">ユーザー</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">2分前</div>
                  </div>
                  <div>
                    <p>アカウントの設定方法について教えてください。</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-lg w-11 h-11 bg-[#55efc4] text-3xl flex items-center justify-center">
                  😁
                </div>
                <div className="grid gap-1 items-start text-sm">
                  <div className="flex items-center gap-2">
                    <div className="font-bold">サポートエージェント</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">1分前</div>
                  </div>
                  <div>
                    <p>
                      アカウントの設定は、ダッシュボードの「プロフィール」タブから行えます。ご不明な点がありましたら、いつでもご連
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashBoardShell>
  );
}
