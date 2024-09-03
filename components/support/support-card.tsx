import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { IconSupport } from "@/components/icon/icon-support";

interface SupportCardProps {
  title: string;
  icon: React.ReactNode;
  value: string | number;
  description: string;
}

export function SupportCard({ title, icon, value, description }: SupportCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-gray-500 dark:text-gray-400">{description}</p>
      </CardContent>
    </Card>
  );
}
