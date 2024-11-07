import user1 from "../assets/Avater1.png";
import user2 from "../assets/Avater2.png";
import user3 from "../assets/Avater3.png";

import { useState } from "react";
import ClientComment from "./ClientComment";

function CarruselComments() {
  const [index, setIndex] = useState(0);

  const itemsPerPage = 3;

  const data = [
    {
      id: 1,
      name: "Oberon Shaw",
      company: "MCH",
      job: "Head of Talent Acquisition",
      location: "North America",
      avatar: user1,
      genere: "female",
      comment:
        "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    },
    {
      id: 2,
      name: "Oberon Shaw",
      company: "MCH",
      job: "Head of Talent Acquisition",
      location: "North America",
      avatar: user2,
      genere: "male",
      comment:
        "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    },
    {
      id: 3,
      name: "Oberon Shaw",
      company: "MCH",
      job: "Head of Talent Acquisition",
      location: "North America",
      avatar: user3,
      genere: "male",
      comment:
        "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    },
    {
      id: 5,
      name: "Oberon Shaw",
      company: "MCH",
      job: "Head of Talent Acquisition",
      location: "North America",
      avatar: user2,
      genere: "male",
      comment:
        "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    },
    {
      id: 6,
      name: "Oberon Shaw",
      company: "MCH",
      job: "Head of Talent Acquisition",
      location: "North America",
      avatar: user3,
      genere: "male",
      comment:
        "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    },
    {
      id: 4,
      name: "Oberon Shaw",
      company: "MCH",
      job: "Head of Talent Acquisition",
      location: "North America",
      avatar: user1,
      genere: "female",
      comment:
        "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    },
    {
      id: 8,
      name: "Oberon Shaw",
      company: "MCH",
      job: "Head of Talent Acquisition",
      location: "North America",
      avatar: user2,
      genere: "male",
      comment:
        "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    },
    {
      id: 7,
      name: "Oberon Shaw",
      company: "MCH",
      job: "Head of Talent Acquisition",
      location: "North America",
      avatar: user1,
      genere: "female",
      comment:
        "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    },
    {
      id: 9,
      name: "Oberon Shaw",
      company: "MCH",
      job: "Head of Talent Acquisition",
      location: "North America",
      avatar: user3,
      genere: "male",
      comment:
        "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    },
  ];

  // Función para manejar el cambio de índice
  const handleIndexChange = (newIndex) => {
    if (newIndex < 0) {
      setIndex(data.length - itemsPerPage); // Si está en la primera posición, ir al final
    } else if (newIndex >= data.length) {
      setIndex(0); // Si está en la última posición, volver al principio
    } else {
      setIndex(newIndex);
    }
  };

  // Función para renderizar los elementos visibles
  const currentItems = data.slice(index, index + itemsPerPage);

  return (
    <div className="flex flex-col justify-center items-center gap-14">
      <div className="flex justify-between gap-8">
        {currentItems.map((item) => (
          <ClientComment data={item} key={item.id} />
        ))}
      </div>
      <div className="flex justify-between items-center gap-8">
        <button
          onClick={() => handleIndexChange(index - itemsPerPage)}
          className="bg-blue-500 p-2 rounded-full cursor-pointer hover:bg-blue-700"
        >
          &larr;
        </button>

        <div className="flex justify-center items-center gap-3">
          {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map(
            (_, idx) => (
              <span
                key={idx}
                className={`h-3 w-3 rounded-full cursor-pointer ${
                  idx === Math.floor(index / itemsPerPage)
                    ? "bg-blue-dark"
                    : "bg-cian-300"
                }`}
                onClick={() => setIndex(idx * itemsPerPage)}
              ></span>
            )
          )}
        </div>

        <button
          onClick={() => handleIndexChange(index + itemsPerPage)}
          className="bg-blue-500 p-2 rounded-full cursor-pointer hover:bg-blue-700"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}

export default CarruselComments;
