import { types } from "../types/types";

const initialState = {
    modalOpen: false,
    id: "",
}

export const uiReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.modalOpen:

            if (action.payload) {
                return {
                    modalOpen: true,
                    id: action.payload.id
                }
            }

            return {
                modalOpen: true,
            };

        case types.modalClose:
            return {
                modalOpen: false,
            };

        default:
            return state;
    };
};