import React, { useReducer } from 'react'
import AlertReducer from './alertReducer'
import AlertContext from './alertContext'

const GithubState = (props) => {
    const initialState = null;

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    const setAlert = (message, type) => {
        dispatch({
            type: 'SET_ALERT',
            payload: { message, type }
        });

        setTimeout(() => {
            dispatch({
                type: 'REMOVE_ALERT'
            });
        }, 3000);
    }

    return (
        <AlertContext.Provider
            value={{
                alert: state,
                setAlert
            }}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default GithubState