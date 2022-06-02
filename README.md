## Prerequisites

- Make sure you're using node v14 (node -v to check which node version you are on) and yarn

### Prettier/ESLint setup

#### VSCode

Make sure you have the following extensions installed:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Installing

```
yarn
```

## !!Time for an ENV Sanity test!!

There are 3 things we want to verify are working properly:

1. Prettier
2. ESLint
3. Pre-commit hook

So, what you need to do is, copy-pase the following code in to `Playground.tsx` (replace what's currently there) :

```js
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const App = function App() {
    const [count, setCount] = useState(true);

    useEffect(() => {
        console.log(count);
    }, []);
    return null;
};

ReactDOM.render(<App />, document.getElementById("root"));
```

Click `CMD + S`. Your code should be formatted to:

```js
import React, { useState, useEffect } from "react";

import ReactDOM from "react-dom";

const App = function App() {
  const [count, setCount] = useState(true);

  useEffect(() => {
    console.log(count);
  }, []);
  return null;
};

ReactDOM.render(<App />, document.getElementById("root"));
```

**Make sure that**:

1. The tab size is 2.(It was 4 before) - this means Prettier is working
2. The useEffect dependency array should show the following error: `React Hook useEffect has a missing dependency: 'count'. Either include it or remove the dependency array` - this means ESLint is working

Now, lets verify that the precommit hook works correctly (make sure you ran `yarn`).

1. Make sure you are on a new branch
2. In the same file (`Playground.tsx`), delete `useEffect` from the import in the first line
3. Try to commit your changes

**Expected** - commit should fail and you will get an ESLint error in your console

If all worked well, discard your changes and code away 🎸
