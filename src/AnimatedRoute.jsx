import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Project } from "./pages/Project";
import { Home } from "./pages/Home";

export function AnimatedRoute() {
    const location = useLocation();

    return (
      <>
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={null} />
              <Route exact path="/:id" element={<Project/>}></Route>
            </Routes>
        </AnimatePresence>
      </>
    )
}