/////// Component ////////
export class Component{
    constructor(payload = {} ){ // 태그 생성
        const { 
            tagName = 'div', 
            state= {} 
        } = payload // 기본값은 div
        this.el = document.createElement(tagName)
        this.state = state
        this.render()
    }
    render(){ // 컴포넌트를 확장해서 사용할 떄 사용(자식 컴포넌트가 함수 재정의) - 출력 역할
        // ...

    }
}