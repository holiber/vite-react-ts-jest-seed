import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.less'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {HelloWorld} from "./HelloWorld.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App key="app" />,
    },
    {
        path: "/hello-world",
        element: <HelloWorld key="hello-world" />,
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    // <React.StrictMode>
        <RouterProvider router={router} />
    // </React.StrictMode>
);
