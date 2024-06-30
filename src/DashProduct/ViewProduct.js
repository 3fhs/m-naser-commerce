import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function ViewProduct(){

    const [view, setView] = useState([])

    let {viewId} = useParams();

    useEffect(() => {
        fetch(`http://localhost:9000/products/${viewId}`)
        .then((res) => res.json())
        .then((data) => setView(data))
    }, [])

    return(
        <div className="side-product">
            <div className="view-product">
                <img className="view-img" src={view.image}/>
                <div className="view-body">
                    <span>{view.title}</span>
                    <span>{view.price} $</span>
                    <p>{view.description}</p>
                </div>
            </div>
        </div>
    )
}