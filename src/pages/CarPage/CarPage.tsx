import React, {FC} from 'react';
import {CarForm, Cars} from "../../components";
import {Outlet} from "react-router-dom";

import css from './CarPage.module.css'


const CarPage:FC = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            <div className={css.wrap}>
                <Outlet/>
                <Cars/>
            </div>

        </div>
    );
};

export {CarPage};

//Щоб у нас працював модуть CSS, потрібно додаткові плагіни в
// "devDependencies": {
//     "typescript-plugin-css-modules": "^3.4.0"
// в папці src створюємо custom.d.ts і в нього декларуємо модуль
