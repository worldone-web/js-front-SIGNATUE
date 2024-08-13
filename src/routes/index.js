// page들을 제어할 메인 페이지

import {createRouter} from '../core/heropy'
import Home from "./Home";
import About from "./About";


export default createRouter([
    {path:'#/',component:Home},
    {path:'#/about',component:About}
])