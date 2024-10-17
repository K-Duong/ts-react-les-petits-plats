import { PropsWithChildren } from "react";

import "./style.css"

function MainContainer (props: PropsWithChildren) {
  const {children} = props;
  return <div className="main-container">{children}</div>
}

export default MainContainer