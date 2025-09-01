import React, { lazy, Suspense } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetcMultiplehPokemonById } from "./RTK/thunk";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

const Main = lazy(() => import("./pages/Main"));
const Detail = lazy(() => import("./pages/Detail"));
const Favorite = lazy(() => import("./pages/Favorite"));
const Search = lazy(() => import("./pages/Search"));

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetcMultiplehPokemonById());
  }, [dispatch]);

  return (
    <>
      <h1 style={{ borderTop: "50px solid red", backgroundColor: "black", color: "white", fontSize: "40px", textAlign: "center", }}>
        포켓몬 도감
      </h1>
      <nav className="flex justify-center gap-[20px] py-[10px] border-b-[3px] border-b-black">
        <Link className="no-underline" to={"/"}>메인</Link>
        <Link className="no-underline" to="/favorite">찜목록</Link>
        <div>
          <span>검색</span>
          &nbsp;
          <input onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)} className="w-[120px] border-b border-[darkgray] px-2" />
        </div>
      </nav>
      <main className="flex flex-wrap gap-[20px] justify-center pt-[20px] bg-[#bfbfbf]">
        <Suspense fallback={<div>로딩중...</div>}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/search" element={<Search />} />
            <Route path="/detail/:pokemon" element={<Detail />} />
          </Routes>
        </Suspense>
      </main>
    </>
  )
}

export default App;
