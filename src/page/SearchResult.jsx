import { Link, useNavigate, useSearchParams } from "react-router-dom";
import SearchItem from "../components/SearchItem";
import { useQuery } from "@tanstack/react-query";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  blogSearchResult,
  productSearchResult,
  searchState,
} from "../states/userState";
import { fetchSerachData } from "../apis/searchApis";
import SearchCategory from "../components/SearchCategory";

function SearchResult() {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useRecoilState(searchState);
  const productResult = useRecoilValue(productSearchResult);
  const blogResult = useRecoilValue(blogSearchResult);
  const query = searchParams.get("q");
  const navigate = useNavigate();

  const submitSearch = (e) => {
    if (e.key === "Enter" || e.target.id === "search-btn") {
      const input = document.getElementById("search-input").value;
      if (input)
        navigate("/search?q=" + document.getElementById("search-input").value);
    }
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["searchResults", query],
    queryFn: () => fetchSerachData({ keyword: query }), // 함수로 전달
    enabled: !!query,
  });
  setSearch(data);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const categoryIndex = ["쇼핑", "블로그", "카페", "부동산"];
  return (
    <>
      <div
        className="h-16 flex flex-row items-center jus border-b"
        style={{ borderColor: "#17b75e", paddingLeft: "14svw" }}
      >
        <div
          className="flex flex-row items-center"
          style={{ width: "700px", height: "100%" }}
        >
          <Link to="/">
            <div
              style={{ width: "56px", height: "48px", padding: "13px 16px" }}
            >
              <div
                style={{
                  background:
                    "url(https://ssl.pstatic.net/sstatic/search/pc/img/sp_svg_common_d5f02484.svg) 0 0 no-repeat",
                  width: "24px",
                  height: "22px",
                  backgroundPosition: "-36px -4px",
                }}
              />
            </div>
          </Link>
          <input
            id="search-input"
            defaultValue={searchParams.get("q")}
            style={{ outline: "none", width: "600px" }}
            className="text-lg font-semibold"
            onKeyUp={(e) => submitSearch(e)}
          />
          <div
            id="search-btn"
            onClick={(e) => submitSearch(e)}
            style={{
              background:
                "url(https://ssl.pstatic.net/sstatic/search/pc/img/sp_svg_common_d5f02484.svg) 0 0 no-repeat",
              backgroundPosition: "-4px -4px",
              backgroundSize: "204px 192px",
              width: "24px",
              height: "24px",
              cursor: "pointer",
            }}
          />
        </div>
      </div>

      {productResult && productResult.length > 0 && (
        <SearchCategory category="상품" searchResult={productResult} />
      )}
      {blogResult && blogResult.length > 0 && (
        <SearchCategory category="블로그" searchResult={blogResult} />
      )}
    </>
  );
}

export default SearchResult;
