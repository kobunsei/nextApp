import DashBoardHeader from "@/components/dashboard-header";
import DashBoardShell from "@/components/dashboard-shell";
import PostCreateButton from "@/components/post-create-button";
// import PostItem from "@/components/post-item";
// import { db } from "@/lib/db";
// import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  // const user = await getCurrentUser();
  const user = 123
  if (!user) {
    redirect("/login");
  }

  return (
    <DashBoardShell>
      <DashBoardHeader heading="イベント" text="イベント情報">
        <PostCreateButton />
      </DashBoardHeader>
      <div className="ml-2">最新の通知がありません。</div>
    </DashBoardShell>
  );
}
