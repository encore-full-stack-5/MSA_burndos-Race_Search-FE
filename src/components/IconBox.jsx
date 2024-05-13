import "./IconBox.css"
import { Link } from "react-router-dom"

function IconBox(props) {
    const iconImage = {
        cafe: "-250px 0px",
        blog: "-201px -98px",
        house: "-45px -209px",
        shopping: "-90px -209px"
    }
    const link = {
        cafe: "http://192.168.0.22:3000/main/cafepage",
        blog: "http://192.168.0.15:5173",
        house: "/",
        shopping: "http://192.168.0.16:3000/home"
    }

    return (
        <Link to={link[props.category]}>
        <div className="relative block" style={{width:"54px", height:"54px"}}>
            <div className="frame">
                <div className="icon" style={{backgroundPosition:iconImage[props.category]}}/>
            </div>
        </div>
        </Link>
    );
  }
  
  export default IconBox;
  