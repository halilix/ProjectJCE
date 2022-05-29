import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom/client';
import UserProvider from './components/provider/userProvider';
import UsersProvider from './components/provider/usersProvider';
import EventsProvider from './components/provider/eventsProvider';
import CalendarProvider from './components/provider/calendarProvider';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <CalendarProvider>
        <UsersProvider>
          <EventsProvider>
            <UserProvider>
              <App />
            </UserProvider>
          </EventsProvider>
        </UsersProvider>
    </CalendarProvider>
  </React.StrictMode>);

