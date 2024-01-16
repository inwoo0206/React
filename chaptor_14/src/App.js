/* chaptor 14 
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [data,setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=bfb3351c3e944816b52aec36412663e7',
      );
      setData(response.data);
    } catch(e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data,null,2)} readOnly={true} />}
    </div>
  );
};

export default App;

*/

/*
// 14.4 NewList 만들기 
import NewsList from "./components/NewsList";

const App = () => {
  return <NewsList/>;
};

export default App;
*/

/*
// 14.6 카테고리 기능 구현하기
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";

const App = () => {
  return (
  <>
  <Categories/>
  <NewsList/>
  </>
  )
};

export default App;
*/

/*  14.6.1
import { useState, useCallback } from "react";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";

const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category),[]);
  return (
  <>
  <Categories category={category} onSelect={onSelect} />
  <NewsList category={category} />
  </>
  )
};

export default App;
*/

// 14.7 리액트 라우터 적용하기
import { Route, Routes } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element = {<NewsPage/>} />
      <Route path="/:category" element = {<NewsPage/>} />
    </Routes>
  );
};

export default App;