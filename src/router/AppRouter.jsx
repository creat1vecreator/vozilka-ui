import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Drive} from "../pages/drive/page";
import {Main} from "../pages/main/Main";
import {SignIn} from "../pages/sign-in/page";
import {SignUp} from "../pages/sign-up/page";
import {Layout} from '../components/Layout/Layout.jsx'
import React from "react";


export const AppRouter= () => {
  return (
      <BrowserRouter>
          <Layout>
          <Routes>
              <Route index element={<Main/>}/>
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/drive" element={<Drive />} />
          </Routes>
          </Layout>
      </BrowserRouter>
  );
};
