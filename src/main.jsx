import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  SignUp,
  LogIn,
  Templates,
  UserDetails,
  LandingPage,
  NotFoundPage,
  Preview,
} from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import {
  PersonalInfo,
  EducationInfo,
  WorkExperience,
  Skills,
  Projects,
  Awards,
} from "./components";
import About from "./pages/About/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,

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
        path: "/about",
        element: <About />,
      },
      {
        path: "/preview",
        element: <Preview />,
      },
      {
        path: "/user-details",
        element: <UserDetails />,
        children: [
          {
            path: "personal-info",
            element: <PersonalInfo />,
          },
          {
            path: "education",
            element: <EducationInfo />,
          },
          {
            path: "experience",
            element: <WorkExperience />,
          },
          {
            path: "skills",
            element: <Skills />,
          },
          {
            path: "projects",
            element: <Projects />,
          },
          {
            path: "achievements",
            element: <Awards />,
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
