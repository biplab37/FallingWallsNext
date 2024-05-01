interface winner {
  name: string;
  photo: string;
}

export default function Winners({ winnerList }: { winnerList: winner[] }) {
  return (
    <>
      <div className=" flex flex-col items-center justify-center md:py-10">
        <h2 className="uppercase text-3xl p-4 font-bold text-slate-500">
          {winnerList.length == 0
            ? null
            : winnerList.length == 1
            ? "Winner"
            : "Winners"}
        </h2>
        {winnerList.map((winn) => (
          <div key={winn.name} className="">
            <div className="mx-auto w-1/2  ">
              <img
                src={winn.photo}
                alt="Winners photo"
                className="w-full h-full rounded-full shadow-lg shadow-red-300 p-1 bg-red-600"
                loading="lazy"
              />
            </div>
            <div className="text-center text-xl p-2 font-semibold tracking-wide">
              {winn.name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
