import React, {FC} from 'react';
import {IUser} from "../../interfaces";

interface IProps{
    user:IUser
}

const User: FC<IProps> = ({user:{id, name, username, email}}) => {
    return (
        <div>
            id: {id}
            name: {name}
            username: {username}
            email: {email}
            <hr/>
        </div>
    );
};

export {User};

