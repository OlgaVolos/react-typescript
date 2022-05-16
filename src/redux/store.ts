import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {carReducer} from "./slices";

const rootReducer = combineReducers({
carReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});


type RootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
type AppDispatch = AppStore['dispatch']

export type {
    RootState,
    AppStore,
    AppDispatch
}

export {
    setupStore
}

//для того, що все коректно працювало, треба зробити деякі зміни:
// store стає ф-єю setupStore, яка повертає результат виконання configureStore
// тепер його можна протипізувати під свої редюсери і комбайн-редюсери. Для цього
//витягаємо типи з редаксу
//RootState - відповідає за тип редюсера
// AppStore - відповідає за стор
// AppDispatch - тип діспатчу. dispatch є в AppStore, бо тягне все з конфігурації стору
// а в конфіг-сторі є рутредюсер, який, в свою чергу, має карРедюсер і в карРедюсері є
// саме той діспатч, який буде працювати з карами
//йдемо в index.tsx
// подальші настройки в компонентах, які витягаємо з hook
