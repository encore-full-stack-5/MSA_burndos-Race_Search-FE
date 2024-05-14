import IconBox from "../components/IconBox";
import { useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate(); 
    const submitSearch = (e) => {
        console.log(e)
        if (e.key === "Enter" || e.target.id === "search-btn"){
            const input = document.getElementById("search-input").value.trim();
            if (input != "") 
                navigate("/search?q=" + input);
        }
    }

    return (
      <div className="h-full flex flex-col justify-center items-center">
            <div 
                className="text-8xl font-bold tracking-widest pb-7" 
                style={{
                    //color:"#03c75a"//,
                    color:"transparent",
                    background: "#00ab33 url(https://shopv.pstatic.net/web/r/20240424172058/_next/static/img/bg/header/gnb/bg_gheader.jpg)",
                    backgroundPosition: "right 30%",
                    backgroundSize:"200%",
                    backgroundRepeat: "repeat",
                    WebkitBackgroundClip: "text"
                }}
            >
                NAVER
            </div>
            <div className="flex flex-row items-center hover:shadow-md"
                style={{
                    border: "3px solid transparent",
                    background: "url(https://shopv.pstatic.net/web/r/20240424172058/_next/static/img/bg/header/gnb/bg_gheader.jpg)",
                    backgroundPosition: "center",
                    backgroundSize:"103%",
                    backgroundRepeat: "repeat",
                    // backgroundOrigin: "border-box",
                    backgroundClip: "border-box",
                }}>
                <input id="search-input" className="h-8 w-96 border-none focus:outline-none px-1"
                    onKeyUp={(e) => submitSearch(e)}
                />
                {/* <div className="border-r h-3/5 pl-2" style={{borderColor:"#fff"}}/> */}
                <svg onClick={(e) => submitSearch(e)}
                    id="search-btn" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer ml-1" style={{width:"32px", height:"20px", fill: "#fff"}}>
                    <path d="M22.13.5c11.378 0 20.632 9.256 20.632 20.63 0 4.699-1.566 9.155-4.439 12.782l10.164 10.165a2.41 2.41 0 0 1-1.706 4.115 2.412 2.412 0 0 1-1.706-.705L33.31 35.719a2.41 2.41 0 0 1 0-3.41 15.71 15.71 0 0 0 4.628-11.178c0-8.718-7.09-15.808-15.807-15.808-8.718 0-15.808 7.09-15.808 15.808 0 7.15 4.817 13.43 11.714 15.273a2.41 2.41 0 0 1 1.705 2.954 2.41 2.41 0 0 1-2.95 1.705C7.788 38.658 1.5 30.46 1.5 21.131 1.5 9.756 10.756.5 22.13.5zm4.716 34.746a3.483 3.483 0 1 1 0 6.966 3.483 3.483 0 0 1 0-6.966z" />
                </svg>
            </div>
            <div className="w-96 flex flex-row justify-around pt-7">
                <IconBox category="cafe"/>
                <IconBox category="blog"/>
                <IconBox category="shopping"/>
                <IconBox category="house"/>
            </div>
            <div className="h-16"/>
      </div>
    );
  }
  
  export default Home;
  