import Image from "next/image";

interface BannerProps {
  imageurl: string;
  text: string;
}

function Banner({ imageurl, text }: BannerProps) {
  return (
    <>
      <div className="relative overflow-hidden max-h-[30rem]">
        <Image
          src={imageurl}
          alt="Main building of the University of Wrocław"
          width={1920}
          height={1080}
          className="brightness-50"
        />
        <div className="flex absolute inset-0 justify-center items-center text-slate-200 text-5xl uppercase font-bold tracking-wide">
          {text}
        </div>
      </div>
    </>
  );
}

export default Banner;
