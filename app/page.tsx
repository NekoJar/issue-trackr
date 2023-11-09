import Image from "next/image";
import Pagination from "./components/Pagination";
import LatestIssues from "./LatestIssues";
import IssueSummary from "./IssueSummary";
import { Container, Flex } from "@radix-ui/themes";
import prisma from "@/prisma/client";
import IssueChart from "./IssueChart";

export default async function Home() {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closed = await prisma.issue.count({ where: { status: "CLOSED" } });

  return (
    <>
      <div className="mb-5">
        <IssueSummary open={open} inProgress={inProgress} closed={closed} />
      </div>
      <div className="mb-5">
        <IssueChart open={open} inProgress={inProgress} closed={closed} />
      </div>
      <LatestIssues />
    </>
  );
}
