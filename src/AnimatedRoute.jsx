import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Project } from "./pages/Project";

export function AnimatedRoute() {
    const location = useLocation();

    return (
      <>
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
              <Route exact path="/:id" element={<Project/>}></Route>
            </Routes>
        </AnimatePresence>
      </>
    )
}