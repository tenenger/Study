import { Routes, Route, Link } from "react-router-dom";
import { Home, About, Profile, Profiles, NotFound } from "./Router/index";
function App() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">home</Link>
                </li>
                <li>
                    <Link to="/about">about</Link>
                </li>
                <li>
                    <Link to="/profiles">프로필 목록</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/profiles" element={<Profiles />} />
                <Route path="/profile/:username" element={<Profile />} />
                {/* 위의 url 이외의 것은 NotFound로 간다. */}
                {/* <Route path="/*" element={<NotFound />} /> */}
            </Routes>
        </div>
    );
}

export default App;
