import Link from "next/link";

export default function ImageBtn({ at, category }) {
  return (
    <button className="w-56 h-56 mx-10 text-3xl text-black rounded-full hover:bg-yellow bg-main">
      <Link href={at}>{category}</Link>
    </button>
  );
}
