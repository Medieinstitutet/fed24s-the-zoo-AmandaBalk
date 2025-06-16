import type { Animal } from "../models/animal";

type Action =
  | { type: "set"; animals: Animal[] }
  | { type: "feed"; id: number; time: string };

export const animalsReducer = (state: Animal[], action: Action): Animal[] => {
  switch (action.type) {
    case "set":
      return action.animals;
    case "feed":
      return state.map((animal) =>
        animal.id === action.id
          ? { ...animal, isFed: true, lastFed: action.time }
          : animal
      );
    default:
      return state;
  }
};
