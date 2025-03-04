import dotenv from "dotenv";
import path from "path";
dotenv.config();

export const CONFIG: {
    api_id: number;
    api_hash: string;
    filePath: string;
} = {
    api_id: parseInt(process.env.API_ID),
    api_hash: process.env.API_HASH,
    filePath: path.resolve(process.cwd(),"chatIDs")
};