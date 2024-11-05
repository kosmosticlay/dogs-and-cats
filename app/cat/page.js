import Image from "next/image";
import Link from "next/link";

export default async function Dog() {
  const res = await fetch("http://localhost:3000/api/cat", {
    cache: "no-store",
  });
  const dog = await res.json();
  return (
    <div className="flex justify-center h-full gap-10 pt-20">
      <h1 className="text-5xl text-right font-gugi">
        오늘의
        <br /> 고양이
      </h1>
      <div>
        <Image
          className="rounded-2xl"
          width={300}
          height={300}
          src={dog.image}
          alt="오늘의고양이"
        />
        <p className="my-6 text-xl text-center font-jua">"{dog.message}"</p>
      </div>
      <Link className="text-2xl font-gugi hover:text-yellow" href="/">
        {`홈으로 >`}
      </Link>
    </div>
  );
}
