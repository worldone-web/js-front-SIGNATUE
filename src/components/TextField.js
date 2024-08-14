import {Component} from '../core/heropy'
import messageStore from '../store/message'

export default class TextField extends Component{
   
    render(){
        //getter()
        this.el.innerHTML = `
            <input value="${messageStore.state.message}"/> 
        
        `
        const inputEl=this.el.querySelector('input')
        inputEl.addEventListener('input',()=>{
            messageStore.state.message = inputEl.value // setter()
        })
    }
}