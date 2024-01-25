import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../../services/Api";
export const getListLocation = createAsyncThunk(
    "location/getListLocation",
    async () => {
        try {
            const listLocation = await axiosClient.getListLocation();
            return listLocation;
        } catch (error) {
            throw error;
        }
    },
);
