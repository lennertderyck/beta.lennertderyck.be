export {
    node, 
    returnTag, 
    Element,
    returnNode,
    updateClipboard,
    eventCallback,
    linkRouting,
    cookies
} from 'https://unpkg.com/cutleryjs@3.5.4/dist/js/index.js';

export {
    sesamCollapse, 
    sesam
} from 'https://unpkg.com/sesam-collapse@5.6.0/dist/index.min.js';

export {
    getAverageRGB,
    setScrollProgress,
    menuHeightCompensate,
    createNotice
} from './ui.js';

export {
    saveScore,
    getScore
} from './easter.js'

export {
    setCookieHook,
    cookieHook
} from './cookies.js'

import './events.js'

// Node.prototype.event = function (type) {
//     const hasOn = type.startsWith('on'), isDefined = this[type] !== undefined;
//     type = hasOn == false ? `on${type}` : type;
    
//     if (isDefined == false) throw new Error(`This type of event (${type}) doesn\'t exist`);
//     return (funct) => this[type] = funct;
// } 

// import * as Glide from 'https://cdn.jsdelivr.net/npm/@glidejs/glide';