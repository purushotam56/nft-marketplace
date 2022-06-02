import React, { ReactChild } from "react";

import Head from "next/head";

interface Props {
  id: string;
  title: string;
  children: ReactChild | ReactChild[];
}

const Layout = ({ id, title, children }: Props) => {
  return (
    <div id={id}>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </div>
  );
};

export default Layout;
