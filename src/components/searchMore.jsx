export default function SearchMore({ onOpen }) {
  return (
    <div className="flex flex-col justify-center space-y-10">
      <h2 className="text-center text-2xl font-semibold text-gray-900 leading-tight">
        Still not found what you were looking for? Let us help you.
      </h2>
      {/* <p className="text-2xl font-semibold text-gray-900"> Let us help you.</p> */}

      <div className="w-full text-center">
        <button
          type="button"
          onClick={() => onOpen()}
          className="w-80 text-2xl py-2 px-2 bg-amber-600 text-white border-2 border-amber-600 hover:bg-amber-700 hover:border-amber-700 transition-all duration-300 hover:shadow-lg rounded-lg"
        >
          Find a vehicle
        </button>
      </div>
    </div>
  );
}
