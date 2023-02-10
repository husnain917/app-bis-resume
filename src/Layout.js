import React from "react";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { useRouter } from "next/router";
import AuthModal from "./components/authModal/AuthModal";
import { useSelector, useDispatch } from "react-redux";
import { modalOpen, modalClose } from "../store/actions/AuthAction";

export default function Layout({ children }) {
  const modalOpenstate = useSelector((state) => state.AuthReducer.isModalOpen);
  const dispatch = useDispatch();
  const ismodalOpen = async () => {
    dispatch(modalOpen());
  };
  const ismodalClose = async () => {
    dispatch(modalClose());
  };
  // get path
  const router = useRouter();
  const path = router.pathname;
  return (
    <>
      {path.includes("templates/") ||
      path.includes("/blog") ||
      path.includes("/personal-development") ||
      path.includes("/Jobs") ||
      path.includes("/ComingSoon") ||
      path.includes("/inspiring-stories") ? (
        <>
          <main>{children}</main>
        </>
      ) : (
        <>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </>
      )}
      <AuthModal
        ismodalClose={ismodalClose}
        isModalOpen={modalOpenstate}
        setIsModalOpen={ismodalOpen}
      />
    </>
  );
}
