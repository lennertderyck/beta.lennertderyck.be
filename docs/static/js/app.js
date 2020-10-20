import {node, sesamCollapse, eventCallback, updateClipboard, setScrollProgress, getAverageRGB, menuHeightCompensate, returnNode} from '../js/modules/index.js';
// import * as FastAverageColor from 'https://unpkg.com/fast-average-color/dist/index.min.js'

const app = {
    async init() {
        sesamCollapse.initialize();
        menuHeightCompensate();
        setScrollProgress(0);
    }
}

app.init();

document.addEventListener('click', () => {
    eventCallback('pre', (target) => {
        const text = target.innerText;
        updateClipboard(text);
    },false)
})

// node('body').event('click')(() => {
//     console.log('click!');
// });

