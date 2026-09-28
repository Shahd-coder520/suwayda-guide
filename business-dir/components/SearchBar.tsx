"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();

  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = () => {
    const searchParams = new URLSearchParams();
    if (query.trim()) searchParams.append("query", query.trim());
    if (location) searchParams.append("location", location);
    if (category) searchParams.append("category", category);

    const queryString = searchParams.toString();
    router.push(queryString? `/search?${queryString}`: "/search");  
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-container">

      <input 
      type="text" 
      placeholder="ابحث عن محل، خدمة، أو منتج..."
      value={query} 
      onChange={(e) => setQuery(e.target.value)} 
      onKeyDown={handleKeyDown}
      ></input>

      <select  className="location-select " onChange={(e) => setLocation(e.target.value)}>
        <option value="">الموقع</option>
        <option value="المحوري">المحوري</option>
        <option value="المشنقة">المشنقة</option>
      </select>

      <select  className="category-select"  onChange={(e) => setCategory(e.target.value)}>
        <option value="">الفئة</option>
        <option value="مطاعم">مطاعم</option>
        <option value="ملابس">ملابس</option>
      </select>

      <button className="search-btn"  onClick={handleSearch}>
        بحث
      </button>

    </div>
  );
}