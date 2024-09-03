"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supportRequestSchema, SupportRequestSchemaType } from "@/schemas/supportRequestSchema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function SupportRequestForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<SupportRequestSchemaType>({
    resolver: zodResolver(supportRequestSchema),
  });

  const onSubmit = (data: SupportRequestSchemaType) => {
    console.log(data);
    // Submit data to API or handle it as needed
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-2">
        <Label htmlFor="subject">件名</Label>
        <Input id="subject" placeholder="件名を入力" {...register("subject")} />
        {errors.subject && <p className="text-red-500 text-xs">{errors.subject.message}</p>}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">内容</Label>
        <Textarea id="description" placeholder="詳細を入力" {...register("description")} />
        {errors.description && <p className="text-red-500 text-xs">{errors.description.message}</p>}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="contact">連絡先</Label>
        <Input id="contact" placeholder="メールアドレスまたは電話番号" {...register("contact")} />
        {errors.contact && <p className="text-red-500 text-xs">{errors.contact.message}</p>}
      </div>
      <Button type="submit" className="justify-self-end">
        送信
      </Button>
    </form>
  );
}
