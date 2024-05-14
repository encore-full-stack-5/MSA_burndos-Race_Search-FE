import { Link, useNavigate, useSearchParams } from "react-router-dom";
import SearchItem from "../components/SearchItem";

function SearchResult() {
  /*const testResult = [
    {
      header:{
        type:"blog",
        title:"블로그명",
        createAt:"2024.05.06"
      },
      title:"web content title",
      content:"contents",
      image:"",
    },
    {
      header:{
        type:"blog",
        title:"블로그명",
        createAt:"2024.05.06"
      },
      title:"web content title",
      content:"contents",
      image:"",
    },
    {
      header:{
        type:"blog",
        title:"블로그명",
        createAt:"2024.05.06"
      },
      title:"web content title",
      content:"contents",
      image:"",
    }
  ]*/
  const testList = [
    [
      {
        title: "asd",
        content: "123"
      },
      {
        title: "asd",
        content: "123"
      },
      {
        title: "asd",
        content: "123"
      },
    ],
    [
      {
        title: "asd",
        content: "123"
      },
      {
        title: "asd",
        content: "123"
      },
    ],
    [
      {
        title: "asd",
        content: "123"
      },
    ],
    [
      {
        title: "asd",
        content: "123"
      },
      {
        title: "asd",
        content: "123"
      },
      {
        title: "asd",
        content: "123"
      },
    ]
  ];
  const categoryIndex = ["쇼핑", "블로그", "카페", "부동산"];

  const [searchParams] = useSearchParams();
  const navigate = useNavigate(); 
  const submitSearch = (e) => {
      if (e.key === "Enter" || e.target.id === "search-btn"){
          const input = document.getElementById("search-input").value;
          if (input) 
              navigate("/search?q=" + document.getElementById("search-input").value);
      }
  }
  
  return (
    <>
      <div className="h-16 flex flex-row items-center jus border-b" style={{borderColor:"#17b75e", paddingLeft:"14svw"}}>
        <div className="flex flex-row items-center" style={{width:"700px", height:"100%"}}>
          <Link to="/">
          <div style={{width:"56px", height:"48px", padding:"13px 16px"}}>
            <div style={{
              background: "url(https://ssl.pstatic.net/sstatic/search/pc/img/sp_svg_common_d5f02484.svg) 0 0 no-repeat",
              width: "24px",
              height: "22px",
              backgroundPosition: "-36px -4px"
            }}/>
          </div>
          </Link>
          <input id="search-input" defaultValue={searchParams.get("q")}
            style={{outline:"none", width:"600px"}}
            className="text-lg font-semibold"
            onKeyUp={(e) => submitSearch(e)}
          />
          <div id="search-btn" onClick={(e) => submitSearch(e)} style={{
            background: "url(https://ssl.pstatic.net/sstatic/search/pc/img/sp_svg_common_d5f02484.svg) 0 0 no-repeat",
            backgroundPosition: "-4px -4px",
            backgroundSize: "204px 192px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
          }}/>
        </div>
      </div>
      <div style={{paddingLeft:"14svw", marginBottom:"60px"}}>
        {testList.map((e,i)=> (
          <div className="border border-gray-200 rounded-2xl h-fit ml-3 mt-10 p-4" style={{width:"700px"}}>
            <div className="font-bold text-lg">
              {categoryIndex[i]}
            </div>
            <div>
              {e.map((e) => (
                <SearchItem 
                  // header={e.header}
                  title={e.title}
                  content={e.content}
                  // image={e.image}
                />
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <div className="cursor-pointer w-fit">
                {categoryIndex[i] + " 더보기"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
  
export default SearchResult;
  