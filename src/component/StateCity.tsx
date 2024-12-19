import React, {useState} from "react";
import statesData from "../assets/data.json";

interface StateCityProps {
  onStateChange?: (state: string) => void;
  onCityChange?: (city: string) => void;
}

const StateCity: React.FC<StateCityProps> = ({onStateChange, onCityChange}) => {
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [isStateOpen, setIsStateOpen] = useState(false);
  const [isCityOpen, setIsCityOpen] = useState(false);

  const states = Object.keys(statesData);

  const handleStateSelect = (state: string) => {
    setSelectedState(state);
    setSelectedCity("");
    setIsStateOpen(false);
    onStateChange?.(state);
  };

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setIsCityOpen(false);
    onCityChange?.(city);
  };

  return (
    <div className="flex flex-col space-y-4 p-4">
      <div className="relative">
        <button
          onClick={() => setIsStateOpen(!isStateOpen)}
          className="w-full px-4 py-2 text-left bg-white border rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {selectedState || "Select State"}
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
            {isStateOpen ? "▲" : "▼"}
          </span>
        </button>

        {isStateOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
            {states.map((state) => (
              <button
                key={state}
                onClick={() => handleStateSelect(state)}
                className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              >
                {state}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="relative">
        <button
          onClick={() => selectedState && setIsCityOpen(!isCityOpen)}
          disabled={!selectedState}
          className={`w-full px-4 py-2 text-left border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            selectedState
              ? "bg-white hover:bg-gray-50"
              : "bg-gray-100 cursor-not-allowed"
          }`}
        >
          {selectedCity || "Select City"}
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
            {isCityOpen ? "▲" : "▼"}
          </span>
        </button>

        {isCityOpen && selectedState && (
          <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
            {(statesData[selectedState as keyof typeof statesData] || []).map(
              (city) => (
                <button
                  key={city}
                  onClick={() => handleCitySelect(city)}
                  className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                >
                  {city}
                </button>
              )
            )}
          </div>
        )}
      </div>

      {selectedState && selectedCity && (
        <div className="mt-4 p-4 bg-blue-50 rounded-md">
          <p className="text-sm text-blue-800">
            Selected: {selectedCity}, {selectedState}
          </p>
        </div>
      )}
    </div>
  );
};

export default StateCity;
