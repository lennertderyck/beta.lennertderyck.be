import {node, sesamCollapse, eventCallback, updateClipboard, setScrollProgress, getAverageRGB, menuHeightCompensate, returnNode, linkRouting, createNotice, getScore, cookieHook} from './modules/index.js';
// import * as FastAverageColor from 'https://unpkg.com/fast-average-color/dist/index.min.js'

const app = {
    async init() {
        cookieHook('cookies');
        sesamCollapse.initialize();
        menuHeightCompensate();
        setScrollProgress(0);
    }
}

app.init();

// new AppErr({
//     title: 'test',
//     message: 'a message',
//     error: 'an error'
// })