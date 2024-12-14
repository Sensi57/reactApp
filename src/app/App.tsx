import { RouterProvider } from "react-router-dom";
import { router } from "./providers/router/config/routeConfig";
import { Provider } from "react-redux";
import { store } from "./providers/store/config/store";

import './styles/App.css'

export const App: React.FC = () => {
    return(
      <div className="wrapper">
          <Provider store={store}>
            <RouterProvider router={router} />
          </Provider>
      </div>
    )
}