import quoteBlue from "../assets/QuoteBlue.svg";
import quoteWhite from "../assets/QuoteWhite.svg";

function ClientComment({ data }) {
  const containerClass = {
    male: "flex flex-col items-stretch justify-start rounded-lg shadow-xl gap-16 px-10 py-14 bg-blue-light-400 text-white",
    female:
      "flex flex-col items-stretch justify-start rounded-lg shadow-md gap-16 px-10 py-14",
  };

  return (
    <>
      <div className={containerClass[data.genere]}>
        <div
          className={`flex flex-col justify-start items-start gap-8 pb-10 border-b border-b-${
            data.genere === "male" ? "white" : "blue-dark"
          }`}
        >
          <img
            src={data.genere === "male" ? quoteWhite : quoteBlue}
            alt="quotes"
          />
          <p className="text-lg">{data.comment}</p>
        </div>
        <div className="flex items-center justify-center gap-11">
          <img src={data.avatar} alt="avatar" />
          <div className="flex flex-col items-start justify-center gap-4">
            <h1 className="text-2xl font-semibold">{`${data.name},${data.company}`}</h1>
            <p className="text-lg">{`${data.job},${data.location}`}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientComment;
