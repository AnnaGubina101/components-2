export default function CardsView ({cards}) {
    return (
        <div className="cards-view">
            {cards.map((card, index) => (
                <div key={index} className="card">
                    <h1>{card.name}</h1>
                    <p>{card.color}</p>
                    <img src={card.img} alt={card.name} />
                    <div className="price-wrap">
                        <p className="price">{'$' + card.price}</p>
                        <button className="add-to-cart-cards">Add to cart</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export function ListView ({items}) {
    return (
        <div className="list-view">
            {items.map((item, index) => (
                <div key={index} className="item">
                    <img className="list-img" src={item.img} alt={item.name} />
                    <h1>{item.name}</h1>
                    <p>{item.color}</p>
                        <p className="price">{'$' + item.price}</p>
                        <button className="add-to-cart-list">Add to cart</button>
                </div>
            ))}
        </div>
    )
}