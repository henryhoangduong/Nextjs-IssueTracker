"use client";
import { TextField, TextArea, Button } from "@radix-ui/themes";
import React from "react";
import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root size="3" placeholder="Title" />
      <TextArea placeholder="Description" />
      <SimpleMdeReact  placeholder="Description"/>
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
