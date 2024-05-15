import React from "react";
import SearchItem from "./SearchItem";
import { Link } from "react-router-dom";

function SearchCategory({ category, searchResult }) {
  const baseUrl =
    searchResult && searchResult.length > 0 ? searchResult[0].baseUrl : "/";

  return (
    <div style={{ paddingLeft: "14svw", marginBottom: "60px" }}>
      <div
        className="border border-gray-200 rounded-2xl h-fit ml-3 mt-10 p-4"
        style={{ width: "700px" }}
      >
        <div className="font-bold text-lg">{category}</div>
        <div>
          {searchResult.map((data) => (
            <SearchItem
              key={data.id}
              name={data.name}
              description={data.description}
              url={data.url}
            />
          ))}
        </div>
        <Link to={baseUrl}>
          <div className="flex justify-center mt-4">
            <div className="cursor-pointer w-fit">{category + " 더보기"}</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SearchCategory;
