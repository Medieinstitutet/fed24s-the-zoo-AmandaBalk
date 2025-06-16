import { Link } from "react-router-dom";
import { useAnimalsContext } from "../context/AnimalContext";
import type { Animal } from "../models/animal"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { useErrorImg } from "../hooks/useErrorImg";
import { motion } from "framer-motion";

export const Animals = () => {
  function getHoursSince(dateString: string) {
    const last = new Date(dateString);
    const now = new Date();
    return (now.getTime() - last.getTime()) / (1000 * 60 * 60);
  }

  const getHungerStatus = (animal: Animal) => {
    const hoursSinceFed = getHoursSince(animal.lastFed);
    if (hoursSinceFed >= 5) return { icon: faCircle, color: "text-red-600" };
    if (hoursSinceFed >= 3) return { icon: faCircle, color: "text-orange-400" };
    return { icon: faCircle, color: "text-green-600" };
  };
  const { animals } = useAnimalsContext();

  return (
    <>
      <h1 className="text-4xl font-bold text-green-900 mb-12 text-center">
        Alla våra djur
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6 ml-4 mr-4">
        {animals.map((animal) => {
          const status = getHungerStatus(animal);
          const { imgSrc, handleError } = useErrorImg(animal.imageUrl);
          return (
            <li
              key={animal.id}
              className="rounded shadow p-4 flex flex-col items-center"
            >
              <h2 className="text-xl font-semibold mb-2">
                {animal.name}{" "}
                <FontAwesomeIcon
                  icon={status.icon}
                  className={`${
                    status.color
                  } ${status.color === "text-red-600" ? "animate-pulse" : ""}`}
                />
              </h2>
              <img
                src={imgSrc}
                alt={animal.name}
                onError={handleError}
                className="w-80 h-80 object-cover rounded mb-6 shadow"
              />
              <p className="mb-4 text-center text-sm max-w-80">
                {animal.shortDescription}
              </p>
              <Link to={`/animals/${animal.id}`}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Visa mer
                </motion.button>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};