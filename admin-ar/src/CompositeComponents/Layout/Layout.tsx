import styles from "./Layout.module.scss";
import { Outlet } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import { Circles } from "../Circles/Circles";
import { Footer } from "../Footer/Footer";
import React from "react";

export default function Layout() {
  return (
    <>
      <div className={styles.page}>
        <NavBar />
        <Circles />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
