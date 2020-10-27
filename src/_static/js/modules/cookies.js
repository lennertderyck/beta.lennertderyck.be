import {cookies, node} from './index.js';

window.cookieHooks = [];

const setCookieHook = (name) => {
    cookies.set(`hook:${name}`, 'true');
};

// const cookieHooks = () => {
//     const $hooks = node('[data-cookie-hook]', true);
//     $hooks.forEach(hook => {
//         const value = hook.dataset.cookieHook;
//         const global = window.cookieHooks.find(g => g.name == value);
//         if (global && cookies.get(`hook:${hook}`)) global.callback();
//     });
// }

const cookieHook = (hook, callback = () => {null}) => {
    const $target = node(`[data-cookie-hook="${hook}"]`)
    console.log((cookies.get(`hook:${hook}`)));
    if (cookies.get(`hook:${hook}`) == null) {
        callback($target);
        if ($target.classList.contains('notice')) $target.classList.add('notice--show');
    };
}



export {
    setCookieHook,
    cookieHook
}

// check if cookie exists if exists do callback if not, nothing?