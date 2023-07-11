import {menFashion} from "./men.json"
import {Link} from "react-router-dom"
import "./index.css"

function HomePage(){
    
    return <div style={{display:"flex",flexWrap:"wrap", gap:40 , margin:"40px 50px"}}>
        {menFashion.map((product)=>{
            return <Link to={`/${product.id}`} className="productContainer" key={product.id}>
                <img src={product.image}/>
                <div className="productAbout">
                <h1>{product.name}</h1>
                <p>{product.cost}</p>
                </div>
            </Link>
        })}
     </div>
}


export default HomePage