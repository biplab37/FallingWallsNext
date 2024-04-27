interface InfoQProps {
    question: string;
    answer: string;
}

export default function InfoQ(info: InfoQProps) {
    return (
        <>
        <div className="max-container p-4 mx-auto lg:py-4">
          <h2 className="text-3xl text-red-700">{info.question}</h2>
          <p className="ps-6 pt-1 text-slate-700 text-xl">{info.answer}</p>
        </div>
      </>
    )
}