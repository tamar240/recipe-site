import { createContext, Dispatch } from 'react';

export type UserType = {
    id: number,
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    address: string;
    phone: string;
};
type Action = {
    type: 'ADD' | 'UPDATE' | 'DELETE';
    data?: Partial<UserType>;
    id?: number;
};

export const UserReducer = (state: UserType, action: Action): UserType => {

    switch (action.type) {
        case 'ADD':
            if (action.data)
                return {
                    ...state,
                    id: action.data.id ?? state.id,
                    email: action.data.email ?? state.email,
                    password: action.data.password ?? state.password

                }
            return state;
        case 'UPDATE':
            if (action.data) {
                return {
                    ...state,
                    ...action.data,
                };
            }
            return state;
        case 'DELETE':
                return {
                    ...initialUserState

                }
        default:
            return state;
    }
}
export const initialUserState: UserType = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    phone: '',
};

type UserContextType = [UserType, Dispatch<Action>];

export const userContext = createContext<UserContextType>([initialUserState, () => { }])