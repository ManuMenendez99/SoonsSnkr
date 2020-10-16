import keys from './keys';
import * as Pusher from 'pusher';

const pusher = new Pusher(keys.pusher)

export default pusher