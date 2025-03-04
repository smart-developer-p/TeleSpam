import { TelegramClient } from "telegram";
import { readTextFromFile } from "./fileManage";
import { messages } from "./messageTemplates";

function getRandomInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getMessage = () => {
    return messages[getRandomInteger(0, messages.length - 1)];
};

export const startSendMessage = async (client: TelegramClient) => {
    let interval = null;

    if (interval) (
        clearInterval(interval)
    );

    let IDs: string[] = (await readTextFromFile()).split("\n");

    let i = 0;
    interval = setInterval(async () => {
        try {
            await client.sendMessage(IDs[i], {
                message: getMessage()
            });
            console.log('Message sent!');
        } catch (error) {
            console.error('Error sending message:', error);
        }
        i++;
        if (i >= IDs.length) i = 0;
    }, 1000 * 60);
};