import { Component } from "./core/heropy";

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
            ${this.state.fruits
                .filter((fruit)=>fruit.price < 1500)
                .map((fruit)=>`<li>${fruit.name}</li>`)
                .join('')}
        </ul>
        `
    }
}