import {node, returnTag, Element} from './index.js'

const lazyLoading = () => {
    const $sections = node('.lazy', true);
    const interactSettings = {threshold: 0.1};
    const animation = target.dataset.lazyAnimation;
    const animationDefault = 'fadeInUp';
    
    const onIntersection = (sections) => {
        sections.forEach(box => {
            if (s.isIntersecting) {
                const target = s.target;
                
                observer.unobserve(target);
                target.classList.add('lazy--ready', animation || animationDefault);
            }
        })
    }
    const observer = new IntersectionObserver(onIntersection, interactSettings)

    $sections.forEach(box => {
        box.classList.add('animated', 'lightspeed');
        observer.observe(box);
    })
}

const getAverageRGB = (imgEl) => {   
    var blockSize = 5, // only visit every 5 pixels
        defaultRGB = {
            r: 0,
            g: 0,
            b: 0
        }, // for non-supporting envs
        canvas = document.createElement('canvas'),
        context = canvas.getContext && canvas.getContext('2d'),
        data, width, height,
        i = -4,
        length,
        rgb = {
            r: 0,
            g: 0,
            b: 0
        },
        count = 0;

    if (!context) {
        return defaultRGB;
    }

    height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

    context.drawImage(imgEl, 0, 0);

    try {
        data = context.getImageData(0, 0, width, height);
    } catch (e) {
        /* security error, img on diff domain */
        alert('x');
        return defaultRGB;
    }

    length = data.data.length;

    while ((i += blockSize * 4) < length) {
        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i + 1];
        rgb.b += data.data[i + 2];
    }

    // ~~ used to floor values
    rgb.r = ~~(rgb.r / count);
    rgb.g = ~~(rgb.g / count);
    rgb.b = ~~(rgb.b / count);

    return rgb;

}

const menuHeightCompensate = () => {
    const $menu = node('[data-label="navBar"]');
    const h = $menu.offsetHeight
    document.body.style.setProperty('--navbar-height', `${h}px`);
}

export {
    lazyLoading,
    getAverageRGB,
    menuHeightCompensate
}



