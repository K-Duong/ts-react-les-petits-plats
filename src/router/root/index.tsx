import { Outlet } from "react-router-dom";
import NavBar from "../../layout/navbar";
import Banner from "../../components/banner";
export function Root() {
  return (
    <div>
      <Banner>
        <NavBar />
      </Banner>
      <Outlet />
    </div>
  );
}
