import Image from "next/image";

export function Hero() {
  return (
    <div className="relative px-5 md:px-20">
      <div>
        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent text-center text-5xl md:text-7xl font-bold mt-12 md:mt-24">
          The history of Linux
        </h1>
        <div className="hidden md:block absolute right-5 top-10 md:right-24 md:top-20">
          <Image
            src="/images/Tux icone.png"
            alt="Linux Logo"
            width={250}
            height={250}
          />
        </div>
      </div>
    </div>
  );
}
