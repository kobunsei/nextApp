import { z } from "zod";

export const supportRequestSchema = z.object({
  subject: z
    .string()
    .min(3, { message: "件名は3文字以上で入力してください。" })
    .max(128, { message: "件名は128文字以内で入力してください。" }),
  description: z
    .string()
    .min(10, { message: "内容は10文字以上で入力してください。" }),
  contact: z
    .string()
    .email({ message: "有効なメールアドレスを入力してください。" })
});

export type SupportRequestSchemaType = z.infer<typeof supportRequestSchema>;
