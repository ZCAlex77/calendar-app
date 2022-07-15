# calendar-app
### Description:
A calendar app where you can plan events for the current month.
### Features
- updated calendar with different colors for past, current and future days of the current month
- event manager where you can check the events for a selected day from the calendar
- addition and removal of events on specified days
- markers for days with events, notification with number of events for the current selected day
- auto-removal of events from past days
### Technologies used:
- React
- Redux, react-redux
- Material UI
### How it works:
The app uses local storage in order to store events. When the app is starting the saved data is passed as initial state to the redux store and displayed where it's needed; old events are automatically deleted in this step. For each addition/removal the local storage is updated with the new data.
To add/remove new events you need to either click the event manager button (top left), which will open the manager for the current day (if no day was clicked) or for the selected day from the calendar; clicking on a day in the calendar opens it too. After opening the manager you'll be presented a list of events; you can add new ones by completing the text imput and submitting it; you can remove existing events by pressing the delete button on said event.
### Things I would work on:
- improve the key generation for components when using the map() function
- add the ability to select the month (currently it's set to the current month)
- add the ability to change the order of the events and maybe add a timestamp for each event
- improve the css modules (first time using modules in a project, not sure how to organise it well)
