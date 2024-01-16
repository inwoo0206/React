/*
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/profiles/:username" element={<Profile/>}/>
    </Routes>
  );
};

export default App;
*/

/*
// 13.5 중첩된 라우트 
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Routes>
      <Route element = {<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/profiles/:username" element={<Profile/>}/>
      </Route>
      <Route path="/articles" element={<Articles />}>
      <Route path="/articles/:id" element={<Article/>}/>
      </Route>
    </Routes>
  );
};

export default App;
*/

/*
// 13.6.3 NotFound 페이지 만들기
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route element = {<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/profiles/:username" element={<Profile/>}/>
      </Route>
      <Route path="/articles" element={<Articles />}>
      <Route path="/articles/:id" element={<Article/>}/>
      </Route>
      <Route path="*" element= {<NotFound/>} />
    </Routes>
  );
};

export default App;
*/
 // 13.6.4 Navigate 컴포넌트 

import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route element = {<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/profiles/:username" element={<Profile/>}/>
      </Route>
      <Route path="/articles" element={<Articles />}>
      <Route path="/articles/:id" element={<Article/>}/>
      </Route>
      <Route path="/login" element= {<Login/>} />
      <Route path="/mypage" element= {<MyPage/>} />
      <Route path="*" element= {<NotFound/>} />
    </Routes>
  );
};

export default App;