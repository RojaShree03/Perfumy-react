import guerlain from "../assets/image/guerlain.png";
import perfume from "../assets/image/perfume.jpg";
import roja from "../assets/image/Roja.jpg";

function Products() {
    return (
        <div className="products">

            <div className="box">
                <img src={guerlain} height="200" width="150" />
                <p>Guerlain Perfume</p>
            </div>

            <div className="box">
                <img src={perfume} height="200" width="150" />
                <p>Unknown Perfume</p>
            </div>

            <div className="box">
                <img src={roja} height="200" width="150" />
                <p>Roja Perfume</p>
            </div>
        </div>
    )
}

export default Products;