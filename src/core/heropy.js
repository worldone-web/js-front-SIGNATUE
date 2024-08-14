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
function routeRender(routes){
    if(!location.hash){ // hash가 없는 경우 대체 페이지
        history.replaceState(null,'','/#/') // 데이터 상태, 제목, 주소
    }

    const routerView = document.querySelector('router-view')
    // http://localhost:1234/#/about?name=heropy
    // #/about?name=heropy -> location.hash를 이용해 판별
    const [ hash, queryString='' ]=location.hash.split('?') // hash 주소, queryString 

    // queryString 예시
    // a=123&b=456
    // ['a=123', 'b=456']
    // {a:'123,b:'456'}
    const query = queryString
        .split('&')
        .reduce((acc, cur) => {
            const [key, value] = cur.split('=')
            acc[key] = value
            return acc
        }, {})
    history.replaceState(query,'')

    const currentRoute = routes.find(route=>{
        return new RegExp(`${route.path}/?$`).test(hash) // '/'가 있을 수도 있고 없을 수도 있다.
        // /#\/about\/?$/
    })
    routerView.innerHTML=''
    routerView.append(new currentRoute.component().el)

    window.scrollTo(0,0)

}
export function createRouter(routes){
    return function(){
        window.addEventListener('popstate',()=>{ // 주소부분 변경시 발생
            routeRender(routes) // 페이지 렌더링 함수
        })
        routeRender(routes)
    }

}

//////// Store ////////
export class Store{
    constructor(state){
        this.state={}
        this.observers={}
        for(const key in state){
            Object.defineProperty(this.state, key, { // 속성 정의 메서드
                get: () => state[key], // state['message']
                set: (val) => {
                    state[key]=val
                    this.observers[key].forEach(observer =>observer()) // 다른 컴포넌트에서의 값 최신화
                }
            })
        }
    }
    subscribe(key, cb){ //state 객체 감시 - 값변경
        Array.isArray(this.observers[key])
         ? this.observers[key].push(cb) // 각 컴포넌트의 콜백함수 추가
         : this.observers[key]=[cb] // 첫 시행에서 배열객체 생성
    }
}