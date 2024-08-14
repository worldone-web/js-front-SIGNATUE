// page들을 제어할 메인 페이지

import {createRouter} from '../core/heropy'
import Home from "./Home";
import About from "./About";


export default createRouter([
    {path:'#/',component:Home}, // 경로 , 출력할 페이지
    {path:'#/about',component:About}
])