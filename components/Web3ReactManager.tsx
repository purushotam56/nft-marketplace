import useEagerConnect from "@/hooks/useEagerConnect";

const Web3ReactManager = ({ children }: { children: JSX.Element }) => {
  useEagerConnect();

  return <>{children}</>;
};

export default Web3ReactManager;
