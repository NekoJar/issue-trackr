import Image from "next/image";
import Pagination from "./components/Pagination";

export default function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return (
    <main>
      <Pagination
        pageSize={10}
        itemCount={100}
        currentPage={parseInt(searchParams.page)}
      />
    </main>
  );
}
