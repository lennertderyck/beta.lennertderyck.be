import {node, sesamCollapse, eventCallback, updateClipboard, setScrollProgress, getAverageRGB, menuHeightCompensate, returnNode, linkRouting, createNotice, getScore} from './modules/index.js';
// import * as FastAverageColor from 'https://unpkg.com/fast-average-color/dist/index.min.js'

const app = {
    async init() {
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