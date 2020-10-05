import {node, sesamCollapse, eventCallback, updateClipboard, setScrollProgress, getAverageRGB, menuHeightCompensate, returnNode, linkRouting} from './modules/index.js';
// import * as FastAverageColor from 'https://unpkg.com/fast-average-color/dist/index.min.js'

const app = {
    async init() {
        sesamCollapse.initialize();
        menuHeightCompensate();
        setScrollProgress(0);
    }
}

app.init();

document.addEventListener('click', (e) => {
    eventCallback('pre', (target) => {
        const text = target.innerText;
        updateClipboard(text);
    },false)
    
    eventCallback('[data-label="contentBody"] a', (target) => {
        e.preventDefault();
        linkRouting(target);
    }, false)
})

node('.nav__crumbles').on('contextmenu')((e) => {
    e.preventDefault();
    window.location.href = '/design';
});

export class AppErr {
    constructor(data) {
       this.send(data)
    }
    
    async send({title = null, message = null, url = window.location.href, error = null}) {
        const res = await fetch(`http://err.lennertderyck.be/api/new?title=${title}&message=${message}&url=${url}&error=${error}`);
        if (!res.error) console.log('New app-error logged',await res.json());
        else console.log('Something went wrong when logging error',await res.json())
    }
}

new AppErr({
    title: 'test',
    message: 'a message',
    error: 'an error'
})

