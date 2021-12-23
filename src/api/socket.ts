import { io } from 'socket.io-client';
import { wsUrl } from './host';

export const socket = io(wsUrl, { path: '/ws/socket.io', transports: ['websocket'] });
