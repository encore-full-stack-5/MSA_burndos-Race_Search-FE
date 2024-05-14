import { Link } from "react-router-dom"
import SearchItemHeader from "./SearchItemheader";

function SearchItem(props) {
    // console.log(props);
    return (
        <Link to="/">
        <div className="py-4 border-b border-gray-200">
            {/* <SearchItemHeader header={props.header} /> */}
            <div className="flex flex-row">
                <div className="flex-1 flex flex-col">
                    <div className="text-xl text-blue-800">
                        {props.title}
                    </div>
                    <div className="flex-1 overflow-hidden text-ellipsis break-all"
                        style={{display:"-webkit-box", WebkitLineClamp:"3", webkitBoxOrient:"vertical"}}>
                        {props.content}
                    </div>
                </div>
                {/* <img
                    style={{width:"104px", height:"104px"}}
                    className="rounded-lg border ml-5"
                    src={props.image}
                    alt=""
                /> */}
            </div>
        </div>
        </Link>
    );
  }
  
  export default SearchItem;
  