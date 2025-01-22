import React from "react";
import prisma from "../../../../prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import { getServerSession } from "next-auth";
import { cache } from "react";
import { Status } from "@prisma/client";
import { IssueQuery } from "./IssueTable";
import { Metadata } from "next";
interface Props {
  searchParams: IssueQuery;
}

const IssuePage = async ({ searchParams }: Props) => {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  return <div>page</div>;
};

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Issue Tracker - Issue List',
  description: 'View all project issues'
};

export default IssuePage;
