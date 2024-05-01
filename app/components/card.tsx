import Image from "next/image";

interface CardProps {
  imageurl: string;
  description: string;
}

export default function Card({ imageurl, description }: CardProps) {
  return (
    <div className="relative group shadow-lg rounded-lg overflow-hidden ">
      <div className=" flex items-end ">
        <Image
          src={imageurl}
          alt={description}
          width={800}
          height={800}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8+B8AAocBwlBk+oQAAAAASUVORK5CYII="
          className="w-full h-auto"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
      </div>
      <div className="absolute bottom-0 left-0 p-4 transition-opacity opacity-0 group-hover:opacity-100">
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
}
