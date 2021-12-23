# score-tracker

A simple web app created for Alea Gaming Workshop need, showcasing the use of web sockets.

### `npm install`

Installs the required packages needed for running the project

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### `npm run build`

Builds the app for production to the `build` folder.

## Documentation

For more info about the Socket.IO module, refer to their official documentation at: [https://socket.io/docs/v4](https://socket.io/docs/v4)

For more info about the React Context API, refer to their documentation at: [https://reactjs.org/docs/context.html](https://reactjs.org/docs/context.html)

## Tasks

1. Socket connection has been established. In file `hooks/useSocket.tsx` implement functions for joining / leaving rooms and functions for attaching / deattaching event handlers.

2. In file `context/EventContext.tsx`, on app startup join to room 'NEW_EVENT' so you can listen to new event socket messages, and on initial event fetch, for each fetched event join into a separate room where room name is event ID . For example if event ID is '1234-1234-1234' then the room name is also '1234-1234-1234'.

3. In file `hooks/useMessageHandler.tsx` first you'll have to join into a event socket room like in the previous task, when a new event message is handled. After that, based on handleScoreUpdate implementation, implement handler functions for period and status updates. At the end, implement handleRemovedEvent function and filter out the removed event from the events array using filter function, also don't forget to leave the socket room for the removed event.

4. In file `context/EventContext.tsx` create new numerical state called `totalEvents` and provide it to StatsContainer using existing EventsContext and show it in the appropriate component. On initial events fetch, set the totalEvents state to the value `total` provided by the API response, and on 'NEW_EVENT' and 'REMOVED_EVENT' messages update the eventTotal to match the new events array length.

5. In file `containers/StatsContainer.tsx` calculate the values for liveEvents and notRunningEvents where liveEvents is the number of events with status LIVE, and where notRunningEvents is the number of events that either haven't started yet, or have been stopped, or have finished.
