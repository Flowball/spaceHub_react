import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App.tsx";
import EONET from "./components/EONET.tsx";
import Nasa from "./components/Nasa.tsx";
import POTD from "./components/POTD.tsx";
import RoverImages from "./components/RoverImages.tsx";
import Spacex from "./components/Spacex.tsx";
import "./index.css";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" Component={App}>
      <Route path="spacex" Component={Spacex}></Route>
      <Route path="nasa" Component={Nasa}>
        <Route path="pictureoftheday" Component={POTD} />
        <Route path="marsweather" Component={RoverImages} />
        <Route path="eonet" Component={EONET} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
