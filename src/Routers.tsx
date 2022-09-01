import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Introduce from "./pages/Introduce";
import PostList from "./pages/PostList";
import PostDetail from "./pages/PostDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Introduce />} />
        <Route path='/:id' element={<PostDetail />} />
        <Route path='/posts' element={<PostList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
