export default function Winners({ winnerList }: { winnerList: string[] }) {
  return (
    <>
      <div className=" flex flex-col items-center justify-center">
        <h2 className="uppercase text-3xl p-4 font-bold text-slate-500">
          Winners
        </h2>
        {winnerList.map((winner) => (
          <>
            <div className="w-[12rem] h-[12rem] rounded-full shadow-lg" />
            <div>{winner}</div>
          </>
        ))}
      </div>
    </>
  );
}
