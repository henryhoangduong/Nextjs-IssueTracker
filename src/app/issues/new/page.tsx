"use client";
import { TextField, Button } from "@radix-ui/themes";
import React from "react";
import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter( )
  const { register, control, handleSubmit } = useForm<IssueForm>();

  return (
    <form
      className="max-w-xl space-y-3"
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/issues", data)
        router.push("/issues")
      })}
    >
      <TextField.Root size="3" placeholder="Title" {...register("title")} />
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMdeReact placeholder="Description" {...field} />
        )}
      />
      {/* <SimpleMdeReact  placeholder="Description" */}
      <Button>Submit New Issue</Button>
    </form>
  );
};

export default NewIssuePage;
