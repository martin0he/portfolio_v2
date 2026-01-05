import type { ReactNode } from "react";

type PageWrapperProps = {
  children: ReactNode;
};

const PageWrapper = ({ children }: PageWrapperProps) => {
  return <div className="page-container">{children}</div>;
};

export default PageWrapper;
