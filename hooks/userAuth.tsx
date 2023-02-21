import React, {useEffect} from "react";
import { getAuth,onAuthStateChanged, User } from 'firebase/auth';

const auth = getAuth();

export function userAuth() {
    const [user, setUser] = React.useState<User>();
    useEffect
    const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth,
        if (user {

        })
    )
}