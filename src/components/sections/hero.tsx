import DownLeftArrow from "@/assets/icons/down-left-arrow.svg";

export default function Hero() {
  return (
    <section className="h-screen bg-green-100">
      <div className="bg-red-100 container mx-auto">
        <h1 className="text-9xl text-right text-gray-800 leading-none capitalize space-x-4">
          <span className="">Shuvo</span>
          <span className="">Sarkar</span>
        </h1>
        <div className="text-right text-4xl">
          <DownLeftArrow className="inline-block w-8 h-8 mb-2" />
          <span className="block">Autodidact</span>
          <span className="block">Yet another developer</span>
        </div>
      </div>
    </section>
  );
}