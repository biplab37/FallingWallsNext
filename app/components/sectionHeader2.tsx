export default function SectionHeader2({ title }: { title: string } ) {
    return (
      <>
        <div className="max-container flex items-center py-4">
          <div className="w-4 h-4 bg-red-700 rounded-full m-2" />
          <h2 className="text-3xl text-red-700">{title}</h2>
        </div>
      </>
    );
};
