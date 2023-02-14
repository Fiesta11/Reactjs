export const Rest_card = ({image , name , cusines , rating , time}) =>{
    return (
        <div className="card">
            <img src = {image}/>
            <h2>{name}</h2>
             <h3>{cusines.join(", ")}</h3>
            <h4>{rating} rating</h4>
             <h4>{time} </h4> 
        </div>
    )
}