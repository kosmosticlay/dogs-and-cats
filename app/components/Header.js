import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full gap-12 text-3xl font-bold text-black h-header place-center bg-main font-gugi ">
      <Link className="hover-text-yellow" href="/">
        홈
      </Link>
      <Link className="hover-text-yellow" href="/dog">
        강아지
      </Link>
      <Link className="hover-text-yellow" href="/cat">
        고양이
      </Link>
    </header>
  );
}
