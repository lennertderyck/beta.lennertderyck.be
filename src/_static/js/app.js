import {node, sesamCollapse} from '../js/modules/index.js';
import { getAverageRGB, menuHeightCompensate } from './modules/ui.js';
import * as FastAverageColor from 'https://unpkg.com/fast-average-color/dist/index.min.js'

const app = {
    async init() {
        sesamCollapse.initialize();
        menuHeightCompensate();
    }
}

app.init();

const $main = node('main');
const $progress = node('[data-label="scrollProgress"]');

const setScrollProgress = (percentage) => {
    const h = $main.scrollHeight;
    const s = $main.scrollTop;
    const o = $main.offsetHeight;
    const progress = percentage || Math.round(s/(h - o)*100);
    $progress.style.setProperty('--progress', `${progress}%`);
}

setScrollProgress(0);

$main.addEventListener("scroll", () => {
    setScrollProgress();
});