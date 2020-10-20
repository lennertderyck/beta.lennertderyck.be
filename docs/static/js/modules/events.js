import {node, eventCallback} from './index.js'

document.addEventListener('click', (e) => {
    eventCallback('pre', (target) => {
        const text = target.innerText;
        updateClipboard(text);
    },false)
    
    eventCallback('[data-label="contentBody"] a', (target) => {
        e.preventDefault();
        linkRouting(target);
    }, false)
    
    eventCallback('closeNotice', (target) => {
        const $notice = target.closest('.notice');
        $notice.closeNotice();
    })
})

node('.nav__crumbles').on('contextmenu')((e) => {
    e.preventDefault();
    window.location.href = '/design';
});