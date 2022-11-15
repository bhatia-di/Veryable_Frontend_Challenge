import React from 'react';
import IUser from '../types/IUser';
import { BACKEND_URL, FETCH_USER_LIST_URL } from '../utils';
import { UserCard } from './UserCard';

interface UserList extends Array<IUser>{}

export const UserListComponent = () => {

    const [users, setUsers] = React.useState<UserList | null>();

    React.useEffect(() => {

        fetchUserList();

    }, []); 

    const fetchUserList = async () => {
        try {

          
            const URL = BACKEND_URL + FETCH_USER_LIST_URL;
            console.log(URL);

            fetch(FETCH_USER_LIST_URL)
                .then(response => {
                    console.log(response);
                    if (response.status === 200) {
                        return response.json();
                    }
                    else {
                        new Error();
                    } 
                })
                .then(result => {
                    console.log(result);  
                    setUsers(result); 

                }).catch((error) => {
                    console.error("Fetch API Call failed with an error " + error);
                });

        } catch (error) {
            console.error(error);
            console.log("error", error);
        }  
    };

    if (users === undefined || users === null) { return null;}
    if (users !== null && users.length === 0) { return null;}

    return(
        <div className='background-color-grey'>
            {
                users.map((user, index) => {
                    return (
                        <UserCard key={'user' + index} userInfo={user} />
                    );
                })

            }

        </div>
    );



}