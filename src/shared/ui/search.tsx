import React, { useState } from "react";

interface SearchBoxProps {
  onSearch?: (searchTerm: string) => void;
  placeholder?: string;
  className?: string;
  initialValue?: string;
}

export default function Search({
  onSearch,
  placeholder = "검색",
  className = "",
  initialValue = "",
}: SearchBoxProps) {
  const [searchTerm, setSearchTerm] = useState(initialValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch?.(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchTerm);
  };

  const handleClear = () => {
    setSearchTerm("");
    onSearch?.("");
  };

  return (
    <div className={`relative ${className}`}>
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="w-full h-10 px-4 py-3 pl-4 pr-12 bg-black border border-gray-700 rounded-full text-gray-100 placeholder-gray-400 focus:outline-none focus:border-gray-500"
        />

        {/* 검색 아이콘 (오른쪽) */}
        <button
          type="button"
          onClick={handleSubmit}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 "
        >
          <svg
            className="w-4 h-4 text-gray-400 hover:text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>

        {/* 지우기 버튼 */}
        {searchTerm && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </form>
    </div>
  );
}
