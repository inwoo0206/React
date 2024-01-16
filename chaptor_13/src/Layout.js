/* 13.5 중첩된 라우트 
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <header style={{ background: 'lightgray', padding: 16, fontSize: 24}}>
                Header
                </header>
                <main>
                    <Outlet/>
                </main>
        </div>
    );
};

export default Layout;
*/

// 13.6 리액트 라우터 부가 기능
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
    const navigate = useNavigate();

    const goBack = () => {
        // 이전 페이지로 이동
        navigate(-1);
    };

    const goArticles = () => {
        // articles 경로로 이동
        navigate('/articles', { replace: true });
    };

    return (
        <div>
            <header style={{ background: 'lightgray', padding: 16, fontSize: 24}}>
                <button onClick={goBack}>뒤로 가기</button>
                <button onClick={goArticles}>게시글 목록</button>
                </header>
                <main>
                    <Outlet/>
                </main>
        </div>
    );
};

export default Layout;