import React from "react";
import prisma from "../../../../prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import { getServerSession } from "next-auth";
import { cache } from "react";

interface Props {
  params: { id: string };
}

const fetchUser = cache((issueId: number) =>
  prisma.issue.findUnique({ where: { id: issueId } }),
);

const IssuePage = async ({ params }: Props) => {
  const issue = await fetchUser(parseInt(params.id));

  if (!issue) notFound();
  return <div>page</div>;
};

export async function generateMetadata({ params }: Props) {
  const issue = await fetchUser(parseInt(params.id));

  return {
    title: issue?.title,
    description: 'Details of issue ' + issue?.id
  }
}

export default IssuePage;
