"use client";
import Gallery from "./components/Gallery";
export default function Home() {

  return (
    <div className="bg-white w-full h-full text-black flex justify-center flex-col items-center p-[50px]">
      <h1 className="text-2xl font-bold m-[50px]">Instagram Preview</h1>
      <Gallery />
    </div>
  );
}
