export default function Home() {
  return (
    <div className="relative">
      <div className="flex justify-center items-center bg-primary-600 min-h-screen">
        <span className="text-3xl text-black">I am pure black!</span>
        <span className="text-3xl text-dark">i am not so!</span>
        <div className="grid grid-cols-3">
          <span className="col-span-1 bg-accent-200">
            <div className="w-10 h-16"></div>
          </span>
          <span className="col-span-1 bg-accent-400">
            <div className="w-10 h-16"></div>
          </span>
          <span className="col-span-1 bg-accent-600">
            <div className="w-10 h-16"></div>
          </span>
          <span className="col-span-1 bg-black">
            <div className="w-10 h-16"></div>
          </span>
          <span className="col-span-1 bg-white">
            <div className="w-5 h-12"></div>
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center bg-accent-600 min-h-screen">
        <span className="text-2xl text-accent-200">Hello</span>
      </div>
      {/* <Image
        src="/images/code.png"
        alt="description"
        width={500}
        height={500}
        className="top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2"
      /> */}
      <div className="flex justify-center items-center bg-orange-700 min-h-screen">
        Good Morning, roboket
      </div>
    </div>
  );
}
