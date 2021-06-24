/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { SubscriptionServicePromiseClient } from 'src/protos/sub_grpc_web_pb';

// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
const URL = `${process.env.SERVER_URL}`;

const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || (() => {});
const asyncSubClient = new SubscriptionServicePromiseClient(`${URL}`);
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
enableDevTools([asyncSubClient]);

export default asyncSubClient;
