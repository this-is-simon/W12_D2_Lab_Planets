const planetsData = require('./data/planets.js');

document.addEventListener('DOMContentLoaded', () => {
  PubSub.subscribe('my-custom-event', function(event){
    console.log('event', event);
    console.log('event.detail', event.detail);
  })
  console.log('Hello');

  PubSub.publish('my-custom-event', {
    detail: {
      name: Mars,
      size: 300
    }
  });
  document.dispatchEvent(event);
});
