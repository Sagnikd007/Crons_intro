const cron = require('node-cron');
const fs = require('fs');


function appendTime(){
    const dateTimeObject = new Date();
    const time= `${dateTimeObject.toTimeString()}`;
    fs.appendFile('time.txt',time + '\n', (err) => {
        if (err) {
          console.error('Error appending time to file:', err);
        } else {
          console.log('Appended time to file:',time);
        }
      });
    
}
cron.schedule('*/1 * * * *', () => {
    appendTime();
    console.log('running a task every 1 minute');
    console.log('Task scheduled to append time to file.');
  });
