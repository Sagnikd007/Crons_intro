# Crons_intro

Basically I am appending time to a file every minute using Cron in Node js.
<p align="center">
  <br />
  <b>cron</b> is a robust tool for running jobs (functions or commands) on schedules defined using the cron syntax.
  <br />
  Perfect for tasks like data backups, notifications, and many more!
</p>
Source:https://www.npmjs.com/package//node-cron
<br />
## 🌟 Features

- execute a function whenever your scheduled job triggers
- execute a job external to the javascript process (like a system command) using `child_process`
- use a Date or Luxon DateTime object instead of cron syntax as the trigger for your callback
- use an additional slot for seconds (leaving it off will default to 0 and match the Unix behavior)

Steps for this mini task:
1)Install node-cron using npm:

npm install --save node-cron

2)Import node-cron and schedule a task:

var cron = require('node-cron');

Using step values

cron.schedule('*/1 * * * *', () => {
    appendTime();
    console.log('running a task every 1 minute');
    console.log('Task scheduled to append time to file.');
  });

3)Cron Syntax
This is a quick reference to cron syntax and also shows the options supported by node-cron.

Allowed fields
 # ┌────────────── second (optional)
 # │ ┌──────────── minute
 # │ │ ┌────────── hour
 # │ │ │ ┌──────── day of month
 # │ │ │ │ ┌────── month
 # │ │ │ │ │ ┌──── day of week
 # │ │ │ │ │ │
 # │ │ │ │ │ │
 # * * * * * *

 4)Mainly,In the appendTime() func I have appended my current time into time.txt where the time will be displayed every minute .
