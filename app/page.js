import ImageBtn from "./components/ImageBtn";

export default function Home() {
  return (
    <div className="flex-col w-full gap-16 h-screen-minus-header place-center font-gugi">
      <p className="text-5xl">골라보세요!</p>
      <div>
        <ImageBtn at="/dog" category="강아지"></ImageBtn>
        <ImageBtn at="/cat" category="고양이"></ImageBtn>
      </div>
    </div>
  );
}
