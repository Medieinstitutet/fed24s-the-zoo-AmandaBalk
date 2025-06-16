import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import type { Animal } from "../models/animal";
import { animalsReducer } from "../reducer/animalsReducer";
import { Loader } from "../components/Loader";

type Action =
  | { type: "set"; animals: Animal[] }
  | { type: "feed"; id: number; time: string };

type AnimalsContextType = {
  animals: Animal[];
  dispatch: React.Dispatch<Action>;
};

type AnimalsProviderProps = {
  children: React.ReactNode;
};

const AnimalsContext = createContext<AnimalsContextType | undefined>(undefined);

export const AnimalsProvider = ({ children }: AnimalsProviderProps) => {
  const [animals, dispatch] = useReducer(animalsReducer, []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedFeedInfo = localStorage.getItem("animals");
    if (storedFeedInfo) {
      // setTimeout(() => {
      dispatch({ type: "set", animals: JSON.parse(storedFeedInfo) });
      setLoading(false);
      // }, 2000);
    } else {
      fetch("https://animals.azurewebsites.net/api/animals")
        .then((res) => res.json())
        .then((data) => {
          // setTimeout(() => {
          dispatch({ type: "set", animals: data });
          setLoading(false);
          // }, 2000);
        });
    }
  }, []);

  useEffect(() => {
    if (animals.length > 0) {
      localStorage.setItem("animals", JSON.stringify(animals));
    }
  }, [animals]);

  if (loading) return <Loader />;

  return (
    <AnimalsContext.Provider value={{ animals, dispatch }}>
      {children}
    </AnimalsContext.Provider>
  );
};

export const useAnimalsContext = () => {
  const context = useContext(AnimalsContext);
  if (!context) throw new Error("error");
  return context;
};
