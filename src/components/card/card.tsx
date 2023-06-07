import "./card.css"

interface CardProps {
    price: number,
    title: string,
    image: string
}


export function Card({price, image, title}: CardProps){
    return(
        //console.log(`${price}`)

        <div className="card">
            <img src="" alt="" />
            <h2>Titulo:</h2>
            <p><b>Valor:</b></p>
        </div>
    )
}