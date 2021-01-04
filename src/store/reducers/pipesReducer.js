import { createSlice } from "@reduxjs/toolkit";

const pipesReducer = createSlice({
    name: "pipesReducer",
    initialState: {
        arrayOfPipes: [],
        gameFieldHeight: 512,
        bottomBgHeight: 118,
        gameFieldWidth: 288,
        pipeWidth: 50,
        pipeGap: 100,
    },
    reducers: {
        addNewPipe: (state) => {
            let height =
                Math.floor(
                    Math.random() *
                        (state.gameFieldHeight - state.bottomBgHeight)
                ) - state.pipeGap;
            if (height < 0) {
                height = 0;
            }
            let { gameFieldWidth, gameFieldHeight } = state;
            state.arrayOfPipes.push({
                pipeHeightTop: height,
                pipeHeightBottom: gameFieldHeight - state.pipeGap - height,
                pipeWidth: state.pipeWidth,
                pipePosX: gameFieldWidth,
            });
        },
        movePipes: (state) => {
            state.arrayOfPipes.map((elem) => {
                return (elem.pipePosX -= 1);
            });
        },
        deleteItemFromArrayOfPipes: (state) => {
            state.arrayOfPipes = [];
        },
    },
});
export const {
    addNewPipe,
    movePipes,
    deleteItemFromArrayOfPipes,
} = pipesReducer.actions;
export default pipesReducer.reducer;
