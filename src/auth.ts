import { TelegramClient } from 'telegram';
import { StringSession } from 'telegram/sessions';
import input from 'input';

export const authenticate = async (apiId: number, apiHash: string) => {
    const stringSession = new StringSession("1BAAOMTQ5LjE1NC4xNjcuOTEAUBU8iLc2ksWHUHVIs4pHBztCQyEsUPt/IrVL1KKYTWNE/OZiuOwr6NrmAZ0Mhs9uPxUs5AdGE3HfIxgRC/s8I5LXBA6H2UMSMKP6UI9K7XTV6EuohxIU5Hl24STcYhb5hDo7Sacf7TBGZsKNwy5SoRcqeAyVN5huwJWDE4/B6S5xT9PkBvajgFZniI0laMXA/A1lLNXOdxUN0z9d8AXvOtIf1ejMu9ZG6DzbxBpw/soY8R9SbVuQegZYqWiiCVxP4/hjE568r04udeZm5aTzJEyhBJD2CY7mZevpiybL9IliRqLoC11IANdwDjwXOOzLA31R9kghXh099uUUXy0W1QU=");
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
