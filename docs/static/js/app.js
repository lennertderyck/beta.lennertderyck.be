import {node, sesamCollapse, setScrollProgress, getAverageRGB, menuHeightCompensate, returnNode} from '../js/modules/index.js';
// import * as FastAverageColor from 'https://unpkg.com/fast-average-color/dist/index.min.js'

const app = {
    async init() {
        sesamCollapse.initialize();
        menuHeightCompensate();
        setScrollProgress(0);
    }
}

const event = (nodeSelector, type) => {
    const $el = returnNode(nodeSelector);
    const callback = (funct) => $el[type] = funct;
    return {callback}
}

event('body', 'onclick').callback(() => {
    console.log('this works!')
});

app.init();


Array.prototype.selectOr = function() {
    console.log(this)
};

[1, 2, 3].selectOr();

