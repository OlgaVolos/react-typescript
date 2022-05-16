declare module '*.module.css'{
    const classes:{[key:string]:string}
    export default classes
}
//Щоб у нас працював модуть CSS, потрібно додаткові плагіни в
// "devDependencies": {
//     "typescript-plugin-css-modules": "^3.4.0"
// в папці src створюємо custom.d.ts і в нього декларуємо модуль
