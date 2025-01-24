import { notFound } from "next/navigation";
import prisma from "../../../../../prisma/client";
import dynamic from "next/dynamic";
import IssueFormSkeleton from "../../_compnents/IssueFormSkeleton";
import IssueForm from "@/app/issues/_compnents/IssuesForm";
// const IssueForm = dynamic(
//   () => import('@/app/issues/_compnents/IssuesForm'),
//   {
//     ssr: false,
//     loading: () => <IssueFormSkeleton />
//   }
// )

interface Props {
  params: { id: string };
}
const EditIssuePage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue) notFound();
  return <IssueForm issue={issue} />;
};

export default EditIssuePage;
