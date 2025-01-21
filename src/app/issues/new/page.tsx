"use client";
import { TextField, Button } from "@radix-ui/themes";
import React, { useState } from "react";
import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Callout } from "@radix-ui/themes";
interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const [error, setError] = useState("");
  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-5">
         <Callout.Text>
          {error}
        </Callout.Text>
        </Callout.Root>
       
      )}
      <form
        className="max-w-xl space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            router.push("/issues");
          } catch (error) {
            setError("An unxpected error occurred");
          }
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
    </div>
  );
};

export default NewIssuePage;
