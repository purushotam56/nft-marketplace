import { useEffect, useRef } from "react";
import type { DependencyList, EffectCallback } from "react";

const useDidUpdateEffect = (effect: EffectCallback, deps?: DependencyList) => {
  const didMountRef = useRef<boolean>(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
    } else {
      return effect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useDidUpdateEffect;
