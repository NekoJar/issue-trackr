import Image from "next/image";
import Pagination from "./components/Pagination";

export default function Home() {
  return (
    <main>
      <Pagination pageSize={10} itemCount={100} currentPage={10} />
    </main>
  );
}
