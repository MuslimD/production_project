import { FC, useEffect } from 'react';
import { ReduxStoreWithManager, StateSchemaKey }
    from 'app/providers/StoreProvider/config/StateSchema';
import { useDispatch, useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
    [name in StateSchemaKey]? : Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer]
interface DynemicModuleLoaderProps {
reducers: ReducersList,
removeAfterUnmount?: boolean,
}

export const DynemicModuleLoader:FC<DynemicModuleLoaderProps> = (props) => {
    const { children, reducers, removeAfterUnmount } = props;
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;
    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
            dispatch({ type: `@INIT ${name}` });
            store.reducerManager.add(name, reducer);
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
                    store.reducerManager.remove(name);
                    dispatch({ type: `@DESTROY ${name}` });
                });
            }
        };
    // eslint-disable-next-line
    },[])

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>{children}</>
    );
};
