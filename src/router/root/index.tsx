import { Outlet } from "react-router-dom";
import NavBar from "../../layout/navbar";
import Banner from "../../components/banner";
import MainContainer from "../../layout/mainContainer";
export function Root() {
  return (
    <>
      <Banner>
        <NavBar />
      </Banner>
      <MainContainer>
        <Outlet />
      </MainContainer>
    </>
  );
}
