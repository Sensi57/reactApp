import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../../../shared/hooks";
import { ROUTES } from "../constants/routes";
import { getFromLocalStorage } from "../../../../shared/helpers";
import { LS_USER_ACCESS_TOKEN } from "../../../../shared/constants/userAccess";

interface AuthRouteProps {
    children: React.ReactNode;
}

export const AuthRoute = ({children}: AuthRouteProps) => {
    const isAuth  = getFromLocalStorage(LS_USER_ACCESS_TOKEN)
    const replaceUrl = ROUTES.auth.path;

    return isAuth ? <>{children}</> : <Navigate to={replaceUrl} />
    
}
