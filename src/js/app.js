const evSrc = new EventSource('https://ahj--hw-8-1.herokuapp.com/sse');
const wrapper = document.getElementById('wrapper');

evSrc.addEventListener('comment', (evt) => {
    console.log(evt.data);
    let evType = JSON.parse(evt.data).type;
    if (evType == "freekick") {
    wrapper.insertAdjacentHTML('beforeend', `
    <div class="message">
    <p class="message_date">${JSON.parse(evt.data).date}</p>
    <img class="message_img" src="https://img.icons8.com/emoji/48/000000/exclamation-mark-emoji.png"/>
    <span class="message_text">${JSON.parse(evt.data).message}</span>
    </div>
`)
    } else if (evType == "goal") {
        wrapper.insertAdjacentHTML('beforeend', `
    <div class="message">
    <p class="message_date">${JSON.parse(evt.data).date}</p>
    <img class="message_img" src="https://img.icons8.com/pastel-glyph/64/000000/football-kick.png"/>
    <span class="message_text">${JSON.parse(evt.data).message}</span>
    </div>
`)
    } else {
        wrapper.insertAdjacentHTML('beforeend', `
        <div class="message">
        <p class="message_date">${JSON.parse(evt.data).date}</p>
        <p class="message_text">${JSON.parse(evt.data).message}</p>
        </div>
    `)
    }
    // JSON.parse(evt.data).message
  });
  
  evSrc.addEventListener('open', (evt) => {
    console.log(evt);
    console.log('connected');
    
  });
  
  evSrc.addEventListener('error', (evt) => {
    console.log(evt);
    console.log('error');
  });
  