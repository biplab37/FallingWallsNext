interface CardProps {
  imageurl: string;
  description: string;
}

export default function Card({ imageurl, description }: CardProps) {
  return (
    <>
      <div className=" border border-gray-200 rounded-lg shadow-md overflow-hidden bg-white">
        <div className="">
          <img
            src={imageurl}
            alt="description"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
        <div className="px-5 py-3 text-gray-700">
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}
