import { authenticate } from './auth';
import { IDs } from './chatIDs';
import { CONFIG } from './config';
const runBot = async () => {
    const client = await authenticate(CONFIG.api_id, CONFIG.api_hash);

    client.addEventHandler(async (event) => {
        try {
            if (event?.message?.className === "MessageService") {
                if (!event?.message?.fromId?.userId?.value) return;
                setTimeout(async () => {
                    try {
                        await client.sendMessage(event?.message?.fromId?.userId?.value, {
                            message: `Hello, I hope you're doing well! 🙌
I’m really sorry for the random message—I don’t mean to bother you. I wanted to personally invite you to a developer collaboration group where like-minded devs share projects, ideas, and opportunities. If you're interested, feel free to check it out: @DevCollab . No pressure at all! 😊 Wishing you a great day ahead!` });
                        console.log("sent dm");
                    } catch (error) {
                        console.log(error);
                    }
                }, 10000);
            } else {

            }
        } catch (error) {
            console.log(error);
        }
    });

    try {
        await client.sendMessage(IDs[0], {
            message: `Hey everyone!

Hope you're all doing great! 😊 I’m a full-stack Web, Blockchain, and Bot developer, always excited to build and collaborate. If you ever need help with a project or just want to chat about ideas, feel free to reach out!

You can check out my work here:
✨ Telegram Portfolio: @BuildWithStella

I’m also part of @DevCollab, where developers share and grow together. Looking forward to connecting with you!` });
        console.log('Message sent!');
    } catch (error) {
        console.error('Error sending message:', error);
    }

    let i = 1;
    setInterval(async () => {
        try {
            await client.sendMessage(IDs[i], {
                message: `Hey everyone!

        Hope you're all doing great! 😊 I’m a full-stack Web, Blockchain, and Bot developer, always excited to build and collaborate. If you ever need help with a project or just want to chat about ideas, feel free to reach out!

        You can check out my work here:
        ✨ Telegram Portfolio: @BuildWithStella

        I’m also part of @DevCollab, where developers share and grow together. Looking forward to connecting with you!` });
            console.log('Message sent!');
        } catch (error) {
            console.error('Error sending message:', error);
        }
        i++;
        if (i >= IDs.length) i = 0;
    }, 1000 * 60 * 60);
};

runBot().catch(console.error);
