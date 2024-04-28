export default function SectionHeader({ title }: { title: string }) {
  return (
    <>
      <div className="inline-flex items-center justify-center w-full">
        <hr className="h-[2px] my-8 bg-gray-200 border-0 w-64 rounded" />
        <span className="absolute text-xl text-slate-600 -translate-x-1/2 bg-white left-1/2 px-2">
          {title}
        </span>
      </div>
    </>
  );
}
