import { Navigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { useAppSelector } from "../../../../shared/hooks";
import { getFromLocalStorage } from "../../../../shared/helpers";
import { LS_USER_ACCESS_TOKEN } from "../../../../shared/constants/userAccess";

interface UnAuthRouteProps {
    children: React.ReactNode;
}

export const UnAuthRoute = ({children}: UnAuthRouteProps) => {
    const isAuth = getFromLocalStorage(LS_USER_ACCESS_TOKEN)
    const replaceUrl = ROUTES.app.route;
    console.log(isAuth)
    return !isAuth ? <>{children}</> : <Navigate to={replaceUrl} />
    
}