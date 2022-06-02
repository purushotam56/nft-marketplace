import { useEffect } from "react";

import { NextComponentType } from "next";
import { useRouter } from "next/router";

import { PATHS } from "@/constants/url";

export const App: NextComponentType = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace(PATHS.homePath, undefined, { shallow: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default App;
