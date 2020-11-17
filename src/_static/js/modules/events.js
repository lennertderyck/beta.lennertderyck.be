import {node, eventCallback, updateClipboard, getScore, saveScore, sesam, setCookieHook, linkRouting, detailPreview} from './index.js'

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
    
    eventCallback('[data-cookie-set]', (target) => {
        const value = target.dataset.cookieSet;
        setCookieHook(value);
    }, false)
    
    eventCallback('.preview .preview__control--prev', (target) => {
        detailPreview.prev(target)
    }, false)
    
    eventCallback('.preview .preview__control--next', (target) => {
        detailPreview.next(target)
    }, false)
    
    eventCallback('[data-sesam-trigger="galeryPreview"]', (target) => {
        detailPreview.onClick(target)
    }, false)
})

document.body.addEventListener('dblclick', (e) => {
    eventCallback('[data-action="trackerNote"] small, [data-action="trackerNote"] .feather', (target) => {
        console.log(target);
        e.preventDefault();
        
        sesam({
            target: 'navMain',
            action: 'hide'
        })
        
        setTimeout(() => {
            window.location.href = '/';
        }, 3000);
        
        saveScore('trackerNote');
    }, false)
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