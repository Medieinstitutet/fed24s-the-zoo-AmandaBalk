import { useParams } from "react-router-dom";
import { useAnimalsContext } from "../context/AnimalContext";
import { Error } from "./Error";
import { useErrorImg } from "../hooks/useErrorImg";
import { motion } from "framer-motion"

export const SelectedAnimal = () => {
  const { id } = useParams();
  const { animals, dispatch } = useAnimalsContext();
  const animal = animals.find(a => a.id === Number(id));

  if (!animal) return <Error />;

   const { imgSrc, handleError } = useErrorImg(animal.imageUrl);

  const getHoursSince = (dateString: string) => {
    const last = new Date(dateString);
    const now = new Date();
    return (now.getTime() - last.getTime()) / (1000 * 60 * 60);
  };
  const hoursSinceFed = getHoursSince(animal.lastFed);

  const feedAnimal = () => {
    dispatch({ type: "feed", id: animal.id, time: new Date().toLocaleString() });
  };

  return (
    <section className="max-w-xl mx-auto bg-white rounded shadow p-8 mt-8 mb-8 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-2">{animal.name}</h2>
      <h3 className="text-lg italic text-gray-500 mb-2">{animal.latinName}</h3>
      <p className="mb-2 text-gray-700">{animal.name} föddes {animal.yearOfBirth}</p>
      <img
        src={imgSrc}
        alt={animal.name}
        onError={handleError}
        className="w-80 h-80 object-cover rounded mb-6 shadow"
      />
      <p className="mb-4 text-center leading-relaxed">{animal.longDescription}</p>
      <h3 className="font-semibold mb-2">Senast matad: <span className="font-normal">{animal.lastFed}</span></h3>
      <motion.button whileHover={{scale: 1.1}} whileTap={{scale:0.9}}
        onClick={feedAnimal}
        disabled={hoursSinceFed < 4}
        className={`px-6 py-2 rounded text-white font-semibold 
          ${hoursSinceFed < 4 ? "bg-gray-300 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}`}
      >
        Mata {animal.name}
      </motion.button>
      {hoursSinceFed >= 3 && hoursSinceFed < 4 && (
        <p className="mt-4 text-orange-500 font-semibold">{animal.name} börjar bli hungrig!</p>
      )}
      {hoursSinceFed >= 5 && (
        <p className="mt-4 text-red-600 font-semibold">{animal.name} behöver matas!</p>
      )}
      {hoursSinceFed < 3 && (
        <p className="mt-4 text-green-600 font-semibold animate-fade-in">{animal.name} är mätt, kom tillbaka om en stund!</p>
      )}
    </section>
  );
};