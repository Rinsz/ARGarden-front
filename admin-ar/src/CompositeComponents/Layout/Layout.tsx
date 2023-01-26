import styles from "./Layout.module.scss";
import { Outlet } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import React from "react";

export default function Layout() {
  return (
    <>
      <div className={styles.page}>
        <NavBar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
