
    const showNotification=()=> {
        if (Notification.permission === 'granted') {
            const options = {
                body: 'Simple Chrome Desktop Notification',
                dir: 'ltr',
                image: 'image.jpg'
              };
              const notification = new Notification('Notification', options);
        
              notification.onclick = function () {
                window.open('https://www.google.com');
              };
        } 
      }


export  {showNotification}