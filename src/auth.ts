import { TelegramClient } from 'telegram';
import { StringSession } from 'telegram/sessions';
import input from 'input';

export const authenticate = async (apiId: number, apiHash: string) => {
    const stringSession = new StringSession("");
    const client = new TelegramClient(stringSession, apiId, apiHash, { connectionRetries: 5 });

    await client.start({
        phoneNumber: async () => await input.text('📞 Enter your phone number: '),
        password: async () => await input.text('🔑 Enter your password: '),
        phoneCode: async () => await input.text('🔓 Enter the code you received: '),
        onError: (err) => console.log(err),
    });

    console.log('✅ Logged in successfully!');
    console.log(client.session.save()); // Save this string to avoid logging in again
    await client.sendMessage("me", { message: "Started bot" });
    return client;
};
