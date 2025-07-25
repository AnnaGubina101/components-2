import React, { useState } from "react"
import IconSwitch from "./IconSwitch";
import CardsView from "./View";
import { ListView } from "./View";

export default function Store() {
    const [isState, setState] = useState('cards')

    const products = [{
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
        }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
        }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
        }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
        }, {
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
        }, {
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
        }];

    const handleSwitch = () => {
        setState(view => (view === 'cards' ? 'list' : 'cards'))
    }

    const icon = isState === 'cards' ? 'view_list' : 'view_module';

    return (
        <div>
            <IconSwitch icon={icon} onSwitch={handleSwitch} />
            { isState === 'cards' ? (
                < CardsView cards = {products} />
            ) : (
                < ListView items = {products} />
            )}
        </div>
    )

}