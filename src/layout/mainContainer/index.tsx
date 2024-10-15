import { PropsWithChildren } from "react";

function MainContainer (props: PropsWithChildren) {
  const {children} = props;
  return <div className="main-container">{children}</div>
}

export default MainContainer