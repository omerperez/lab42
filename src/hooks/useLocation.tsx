import { PATHS } from "@/constants";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";

const useCustomLocation = () => {
  const location = useLocation();

  const isFavoritePage = useMemo(() => {
    return location.pathname === PATHS.FAVORITE;
  }, [location.pathname]);

  return {
    ...location,
    isFavoritePage,
  };
};

export { useCustomLocation as useLocation };
