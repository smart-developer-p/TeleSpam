import dotenv from "dotenv";
dotenv.config();

export const CONFIG: {
    api_id: number;
    api_hash: string;
} = {
    api_id: parseInt(process.env.API_ID),
    api_hash: process.env.API_HASH,
};