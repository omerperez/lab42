import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Layout } from "./Layout";
import { PATHS } from "./constants";
import { FavoritePosts, Posts } from "./pages";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(PATHS.HOME);
  }, []);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path={PATHS.HOME} element={<Posts />} />
        <Route path={PATHS.FAVORITE} element={<FavoritePosts />} />
      </Route>
    </Routes>
  );
}

export default App;
