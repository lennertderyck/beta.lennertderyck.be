Mousetrap.bind('up up down down left right left right b a', () => {
    document.body.classList.add('easter--rotate')
});

const points = {
    'design': 10,
    'konami': 25,
}

const eggs = [];

const saveScore = (egg) => {
    eggs.push(egg);
    const str = JSON.stringify(eggs);
    window.localStorage('easter', str);
}

const getScore = () => {
    
}

export {
    saveScore,
    getScore
}