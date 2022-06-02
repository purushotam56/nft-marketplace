import React, { Dispatch } from "react";

type SetStateAction<S> = S | ((prev: S) => S);

type STATE<R> = [R, Dispatch<SetStateAction<Partial<R>>>];

const stateReducer = (state, action) => ({
  ...state,
  ...(typeof action === "function" ? action(state) : action),
});

const useReducer = <S>(initial, lazyInitializer = null): STATE<S> => {
  const [state, setState] = React.useReducer(stateReducer, initial, (init) =>
    lazyInitializer ? lazyInitializer(init) : init,
  );

  return [state, setState];
};

export default useReducer;
