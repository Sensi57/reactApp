import { Outlet, createBrowserRouter } from "react-router-dom";
import { AuthRoute } from "../ui/AuthRoute";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { ROUTES } from "../constants/routes";

import {  ShopPage, 
          NotFoundPage
       } from "../../../../pages";
import { UnAuthRoute } from "../ui/UnAuthRoute";
import { LoginPage } from "../../../../pages/authication/LoginPage/ui/LoginPage";
import { AuthLayout } from "../../layouts/AuthLayout/AuthLayout";


export const router = createBrowserRouter([
    {
        path: ROUTES.app.route,
        element: (
            <AuthRoute >
                <MainLayout />
            </AuthRoute>
        ),
        children: [
            {
                index: true,
                element: <ShopPage />
            }
        ],
    },
    {
        path: ROUTES.auth.path,
        element: (
            <UnAuthRoute>    
                <AuthLayout />
            </UnAuthRoute>
        ),
        children: [
            {
                path: ROUTES.auth.login.route,
                element: <LoginPage />
            }
        ]
    },
    {
        path: ROUTES.page_not_fount.route,
        element: <NotFoundPage />
    }
])