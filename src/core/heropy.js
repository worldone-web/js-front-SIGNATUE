/////// Component ////////
export class Component{
    constructor(payload = {} ){ // 태그 생성
        const { 
            tagName = 'div', 
            state = {}, // 컴포넌트에서 사용되는 객체
            props = {}  // 부모 컴포넌트가 자식 컴포넌트에 주는 객체
        } = payload // 기본값은 div
        this.el = document.createElement(tagName)
        this.state = state
        this.props = props
        this.render()
    }
    render(){ // 컴포넌트를 확장해서 사용할 떄 사용(자식 컴포넌트가 함수 재정의) - 출력 역할
        // ...

    }
}


/////// Router /////////
export function createRouter(routes){
    return function(){
        window.addEventListener('popstate',()=>{
            routeRender(routes) // 페이지 렌더링 함수
        })
        routeRender(routes)
    }

}