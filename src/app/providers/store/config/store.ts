import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../../../../pages/authication/authSlice"


const createReduxStore = () => {
    return configureStore(
        {
            reducer: {
                auth: authReducer
            }
        }
    )
}
export const store = createReduxStore();

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
export type RootState = ReturnType<typeof store.getState>

