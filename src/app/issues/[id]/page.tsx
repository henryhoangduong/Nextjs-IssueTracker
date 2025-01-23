import React from "react";
import { cache } from "react";
import { Flex, Box, Grid } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import prisma from "../../../../prisma/client";
import authOptions from "@/app/auth/autOptions";
import { notFound } from "next/navigation";
import IssueDetail from "./IssueDetail";
import EditIssueButton from "./EditIssueButton";
import DeleteIssueButton from "./DeleteIssueButton";
interface Props {
  params: { id: string };
}

const fetchUser = cache((issueId: number) =>
  prisma.issue.findUnique({ where: { id: issueId } }),
);

const IssueDetailPage = async ({ params }: Props) => {
  const session = await getServerSession(authOptions);
  const issue = await fetchUser(parseInt(params.id));
  if (!issue) notFound();

  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="5">
      <Box className="md:col-span-4">
        <IssueDetail issue={issue} />
      </Box>
      {session && (
        <Box>
          <Flex direction="column" gap="4">
            <EditIssueButton issueId={issue.id} />
            <DeleteIssueButton issueId={issue.id} />
          </Flex>
        </Box>
      )}
    </Grid>
  );
};

export default IssueDetailPage;

export async function generateMetadata({ params }: Props) {
  const issue = await fetchUser(parseInt(params.id));
  return {
    title: issue?.title,
    description: "Details of issue " + issue?.id,
  };
}
