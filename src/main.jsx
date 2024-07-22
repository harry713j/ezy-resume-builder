import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { SignUp, LogIn, Templates, UserDetails, LandingPage } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { PersonalInfo } from "./components/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: , // add error page here

    children: [
      {
        path: "/",
        element: <LandingPage />, 
      },
      {
        path: "/templates",
        element: <Templates />,
      },
      {
        path: "/user-details",
        element: <UserDetails />,
        children: [
          {
            path: "personal-info",
            element: <PersonalInfo />,
          },
        ],
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
