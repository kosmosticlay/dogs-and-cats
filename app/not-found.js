import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex-col w-full gap-10 h-screen-minus-header place-center">
      <Image width={300} height={180} alt="404에러" src="/404.png" />
      <Link
        className="text-3xl transition duration-300 transform border-b-2 font-gugi hover:border-yellow hover:text-yellow"
        href="/"
      >
        홈으로 돌아가기
      </Link>
    </section>
  );
}
