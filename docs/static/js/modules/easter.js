import { createNotice } from "./index.js";

const $notice = '[data-label="notices"] > .container';

const points = {
    'design': 10,
    'konami': 25,
}

let eggs = [];
const stored = window.localStorage.getItem('easter');
if (stored) {
    const data = JSON.parse(stored);
    eggs = [...eggs, ...data];
}

const saveScore = (egg, notice = true) => {
    const achieved = eggs.includes(egg);
    if (!achieved) {
        eggs.push(egg);
        const str = JSON.stringify(eggs);
        window.localStorage.setItem('easter', str);
        
        if (notice) createNotice($notice, {
            title: 'Easter egg unlocked!',
            content: `Your new score is <strong>${getScore()}</strong>`
        })
    } else {
        createNotice($notice, {
            title: 'This easter egg is unlocked',
            content: `You already unlocked this easter egg, your current score is <strong>${getScore()}</strong>`
        })
    }
}

const getScore = () => {
    const score = eggs.map(s => points[s]).reduce((a, b) => a+b);
    return score;
}

export {
    saveScore,
    getScore
}