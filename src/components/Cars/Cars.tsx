import React, {FC} from 'react';
import {useSelector} from "react-redux";

const Cars:FC = () => {
    useSelector(state => state.carReducer())

    return (
        <div>
            Cars
        </div>
    );
};

export {Cars};
