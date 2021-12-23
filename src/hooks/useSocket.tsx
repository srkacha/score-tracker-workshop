import { socket } from '../api/socket';

export const useSocket = () => {
  const join = (room: string) => {
    try {
      // TODO - Emit message to join into the room using imported socket object
      // code goes here
      // console.log(`Socket - joined to room: ${room}`);
    } catch (err) {
      console.error(err);
    }
  };
  const leave = (room: string) => {
    try {
      // TODO - Emit message to leave into the room using imported socket object
      // code goes here
      // console.log(`Socket - left room: ${room}`);
    } catch (err) {
      console.error(err);
    }
  };

  const listen = (event: string, handler: (data: any) => void) => {
    try {
      // TODO - Call appropriate socket object function to attach handler to event
      // code goes here
      // console.log('Socket - listen: ' + event);
    } catch (err) {
      console.error(err);
    }
  };

  const remove = (event: string, handler: (data: any) => void) => {
    try {
      // TODO - Call appropriate socket object function to deattach handler from event
      // code goes here
      // console.log('Socket - remove: ' + event);
    } catch (err) {
      console.error(err);
    }
  };

  return { join, leave, listen, remove };
};
