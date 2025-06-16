export const Footer = () => {
    return (
        <footer className="w-full bg-green-900 text-white py-6 mt-12 flex justify-center items-center">
            <p className="text-center text-sm">
                &copy; {new Date().getFullYear()} Djurens Digitalpark.
            </p>
        </footer>
    );
}