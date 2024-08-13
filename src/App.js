import { Component } from "./core/heropy";
import FruitItem from "./components/FruitItem";

export default class App extends Component{
    constructor(){
        super({
            state: {
                fruits:[
                    {name:'Apple',price:1000},
                    {name:'Buanna',preice:2000}
                ]
            }
        })
    }
    
    render(){
        this.el.innerHTML=`
        <h1>Fruits</h1>
        <ul>
            
        </ul>
        `

        const ulEl= this.el.querySelector('ul')
        ulEl.append(...this.state.fruits
            .filter((fruit)=>fruit.price < 1500)
            .map((fruit)=>new FruitItem({
                props:{
                    name: fruit.name,
                    price: fruit.price
                }
            }).el)
        )
    }
}