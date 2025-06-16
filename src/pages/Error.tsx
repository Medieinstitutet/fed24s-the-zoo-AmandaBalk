export const Error = ()=>{
    return<>
    <div className="min-h-[100vh] flex flex-col items-center justify-center rounded mx-auto max-w-full p-8">
    <h1 className="text-5xl font-bold text-red-700 mb-12">Oj, något gick fel!</h1>
    <p className="text-xl text-red-800 mb-6 text-center">Försök igen om en liten stund, eller gå tillbaka till startsidan</p>
     <a
      href="/"
      className="mt-4 px-6 py-3 bg-red-700 text-white rounded-xl font-semibold shadow hover:bg-red-700 transition"
    >
      Till startsidan
    </a>
    </div>
    </>
}