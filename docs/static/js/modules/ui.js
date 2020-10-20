import {node, returnTag, Element} from './index.js';

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

const $main = node('main');
const $progress = node('[data-label="scrollProgress"]');

const setScrollProgress = (percentage) => {
    const h = $main.scrollHeight;
    const s = $main.scrollTop;
    const o = $main.offsetHeight;
    const progress = percentage || Math.round(s/(h - o)*100);
    $progress.style.setProperty('--progress', `${progress}%`);
}

$main.addEventListener("scroll", () => {
    setScrollProgress();
});

const createNotice = (container, {title, content}) => {
    const n = new Element('div');
    n.class(['notice'])
    n.inner(`
        <div class="notice__body">
            <h5 class="notice__title text-modern font-weight--600 mb-1">${title}</h5>
            <p>${content}</p>
        </div>
        <div class="notice__action">
            <button data-action="closeNotice"><i data-feather="x"></i></button>
        </div>
    `);
    n.prepend(container);
    feather.replace();
}

Node.prototype.closeNotice = function () {
    this.classList.add('notice--hidden');
}


export {
    lazyLoading,
    getAverageRGB,
    menuHeightCompensate,
    setScrollProgress,
    createNotice
}



