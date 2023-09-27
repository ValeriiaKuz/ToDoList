import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AppHeader } from "../app-header/app-header";
import { Projects } from "../../pages/projects/projects";
import { Modal } from "../modal/modal";
import { NewProjectForm } from "../forms/new-project-form";
import { Tasks } from "../../pages/tasks/tasks";

function App() {
  let location = useLocation();
  let background = location.state && location.state.background;
  return (
    <>
      <AppHeader />
      <Routes location={background || location}>
        <Route path={"/"} element={<Projects />} />
        <Route path={"/:id"} element={<Tasks />} />
        <Route
          path={"/new_project"}
          element={<Modal children={<NewProjectForm />} />}
        />
      </Routes>
    </>
  );
}

export default App;
