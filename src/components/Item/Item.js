import "./Item.css"

function Item(props) {
    return (
        <div className="property-card">
            <img src={props.photo}
                alt="property" className="property-photo" />
            <div className="property-details">
                <div className="property-city">{props.city}</div>
                <div className="property-price">{props.price}</div>
            </div>
        </div>
  
    )
}
//
//Athens
//2000$
export default Item