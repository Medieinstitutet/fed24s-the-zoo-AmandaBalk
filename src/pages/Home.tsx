import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <main className="max-w-2xl mx-auto mt-12 mb-12 bg-white rounded shadow px-4 sm:px-8 py-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-green-900 mb-6 text-center drop-shadow">
        Välkommen till Djurens Digitalpark!
      </h1>
      <div className="mb-8 m-8 text-lg text-gray-700 space-y-3 text-center">
        <p>
          Här kan du utforska en spännande och lärorik värld fylld av djur - från fluffiga kaniner och lojala hundar till slingrande ormar och vandrande pinnar. Oavsett vad du är nyfiken på så har vi något för dig.
        </p>
        <p>
          Klicka dig in på varje djur för att läsa intressanta fakta, se bilder och hålla koll på när de senast blev matade. Du kan själv hjälpa till att mata djuren och se hur deras hungerstatus förändras i realtid.
        </p>
        <p className="pt-8 font-semibold">
          Välkommen att upptäcka dina nya favoritdjur!
        </p>
      </div>
      <Link
        to="/animals"
        className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold text-lg shadow hover:bg-green-700 transition"
      >
        Se alla djur
      </Link>
    </main>
  );
}