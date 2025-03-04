import { authenticate } from './auth';
import { CONFIG } from './config';
import { eventHandler } from './eventHandler';
import { startSendMessage } from './sendMessages';
const runBot = async () => {
    const client = await authenticate(CONFIG.api_id, CONFIG.api_hash);

    client.addEventHandler(eventHandler(client));

    startSendMessage(client)

};

runBot().catch(console.error);
