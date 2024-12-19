import Navbar from "./component/navbar";
import StateCity from "./component/StateCity";

export default function MyApp() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex items-center justify-center min-h-[calc(100vh-64px)] px-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Select Location
          </h2>
          <StateCity 
            onStateChange={(state) => console.log('Selected state:', state)}
            onCityChange={(city) => console.log('Selected city:', city)}
          />
        </div>
      </main>
    </div>
  );
}
