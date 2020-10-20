import {node, eventCallback, updateClipboard, getScore, saveScore} from './index.js'

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
    setTimeout(() => {
        window.location.href = '/design';
    }, 2000);
    saveScore('design');
});

Mousetrap.bind('up up down down left right left right b a', () => {
    document.body.classList.add('easter--rotate');
    saveScore('konami');
});

Mousetrap.bind(['ctrl shift i', 'command+option+i'], () => {
    saveScore('devconsole');
});