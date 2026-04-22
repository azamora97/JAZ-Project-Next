// ✅ Client Component — usa hooks
'use client';

import { AuthAction, AuthState } from "../store/AuthContext";

export const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case "LOGIN":
            return {
                user: action.payload,
                isAuthenticated: true,
            };

        case "LOGOUT":
            return {
                user: null,
                isAuthenticated: false,
            };

        default:
            return state;
    }
};