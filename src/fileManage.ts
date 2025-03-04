import fs from 'fs';
import path from 'path';
import { CONFIG } from './config';

export async function saveTextToFile(text: string) {
    // Ensure the directory exists
    const dir = path.dirname(CONFIG.filePath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    // Write the text to the file (creating the file if it doesn't exist)
    fs.writeFileSync(CONFIG.filePath, text, { flag: 'w' });
    console.log(`Text saved to ${CONFIG.filePath}`);
}

export async function readTextFromFile(): Promise<string> {
    // Check if the file exists
    if (fs.existsSync(CONFIG.filePath)) {
        // Read the content of the file
        return fs.readFileSync(CONFIG.filePath, 'utf-8');
    } else {
        console.log(`File does not exist: ${CONFIG.filePath}`);
        return "";
    }
}