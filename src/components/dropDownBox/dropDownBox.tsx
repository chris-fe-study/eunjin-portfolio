import React, { useState } from "react";

interface Location {
  id: number;
  city: string;
}

const locations: Location[] = [
  { id: 1, city: "서울" },
  { id: 2, city: "경기" },
  { id: 3, city: "부산" },
  { id: 4, city: "제주도" },
];

interface LocationDropBoxProps {
  onLocationChange?: (Location: Location) => void;
}

export default function DropDownBox({
  onLocationChange,
}: LocationDropBoxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<Location>(
    locations[0]
  );

  const handleLocationSelect = (location: Location) => {
    setSelectedLocation(location);
    setIsOpen(false);
    onLocationChange?.(location);
  };

  return (
    <div className={`relative`}>
      {/* 드롭다운 버튼 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-7 w-40 px-5 flex items-center justify-between bg-gray-900  hover:bg-gray-800 transition-colors duration-200"
      >
        <span className="text-left text-neutral-400 text-sm font-normal font-['Inter']">
          {selectedLocation.city}
        </span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* 드롭다운 메뉴 */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-10 mt-1 bg-gray-900 border border-gray-700 rounded-b-md shadow-lg">
          {locations.map((location) => (
            <button
              key={location.id}
              onClick={() => handleLocationSelect(location)}
              className={`w-full text-left px-5 py-3  text-neutral-400 text-sm font-normal font-['Inter'] hover:bg-gray-800 transition-colors duration-150 ${
                selectedLocation.id === location.id ? "bg-gray-800" : ""
              }`}
            >
              {location.city}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
