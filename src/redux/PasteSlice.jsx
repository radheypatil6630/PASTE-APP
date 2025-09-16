import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

export const PasteSlice = createSlice({
    name: 'paste',
    initialState: {
        pastes: localStorage.getItem("pastes")
            ? JSON.parse(localStorage.getItem("pastes"))
            : []
    },
    reducers: {
        addToPastes: (state, action) => {
            const Paste = action.payload;
            state.pastes.push(Paste);
            localStorage.setItem("pastes", JSON.stringify(state.pastes));
            toast.success("Paste added successfully");
        },
        updateToPastes: (state, action) => {
            const Paste = action.payload;
            const index = state.pastes.findIndex((item) => item.id === Paste.id);

            if (index >= 0) {
                state.pastes[index] = Paste
                localStorage.setItem("pastes", JSON.stringify(state.pastes))
                toast.success("Paste updated ");
            }
        },
        resetAllPaste: (state) => {
            state.pastes = [];
            localStorage.setItem("pastes");
            toast.success("All pastes reset");
        },
        removeFromPastes: (state,action) => {

            const pasteId = action.payload;
            console.log(pasteId);

            const index = state.pastes.findIndex((item) => item._id === pasteId)

            if (index >= 0) {

                state.pastes.splice(index, 1);
                localStorage.setItem("pastes", JSON.stringify(state.pastes));
                toast.success(" paste removed");
            }
        }
    }
});

export const { addToPastes, updateToPastes, resetAllPaste, removeFromPastes } = PasteSlice.actions;

export default PasteSlice.reducer;
