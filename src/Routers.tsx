import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Introduce from "./pages/Introduce";
import PostList from "./pages/PostList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Introduce />} />
        <Route path='/posts' element={<PostList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
