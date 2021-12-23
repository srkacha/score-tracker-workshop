import { EventsContainer } from './containers/EventsContainer';
import { HeaderContainer } from './containers/HeaderContainer';
import { StatsContainer } from './containers/StatsContainer';
import { EventsContextProvider } from './context/EventsContext';

const App = () => {
  return (
    <EventsContextProvider>
      <HeaderContainer />
      <EventsContainer />
      <StatsContainer />
    </EventsContextProvider>
  );
};

export default App;
