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
    // const h = $main.scrollHeight;
    // const s = $main.scrollTop;
    // const o = $main.offsetHeight;
    // const progress = percentage || Math.round(s/(h - o)*100);
    
    var h = document.documentElement, 
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight';

    const calculation = Math.round((h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100);
    const progress = percentage || calculation;
    $progress.style.setProperty('--progress', `${progress}%`);
}

document.addEventListener("scroll", () => {
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
    return n;
}

Node.prototype.closeNotice = function () {
    this.classList.add('notice--hidden');
}

const detailPreview = {
    index: null,
    parent: null,
    preview: null,
    max: null, 
    
    onClick: (target) => {
        const name = target.getAttribute('data-sesam-trigger');
        const parent = detailPreview.parent = target.parentElement
        detailPreview.index = [...parent.children].indexOf(target)
        detailPreview.max = parent.children.length;
        
        const $view = document.querySelector(`[data-sesam-target="${name}"] .preview__view img`)
        const imageUri = target.querySelector('img').src;
        $view.src = imageUri
    },
    
    setPreview: (target) => {
        detailPreview.preview = target.closest('.preview').querySelector('.preview__view img')
    },
    
    indexMin: () => {
        return detailPreview.index = detailPreview.index-1
    },
    
    indexPlus: () => {
        return detailPreview.index = detailPreview.index+1
    },
    
    buttonDisable: (target, disabled = true) => {
        if (disabled) target.classList.add('disabled')
        if (!disabled) target.classList.remove('disabled')
    },
    
    prev: (target) => {
        if (detailPreview.index != 0) {
            detailPreview.setPreview(target);
            const imageUri = detailPreview.parent.querySelectorAll('.preview__item')[detailPreview.indexMin()].querySelector('img').src;
            detailPreview.preview.src = imageUri;
            // detailPreview.buttonDisable(false);
        }
        
        // if (detailPreview.index == 0) {
        //     detailPreview.buttonDisable()
        // }
    },
    
    next: (target) => {
        if (detailPreview.index != detailPreview.max-1) {
            detailPreview.setPreview(target);
            const imageUri = detailPreview.parent.querySelectorAll('.preview__item')[detailPreview.indexPlus()].querySelector('img').src;
            detailPreview.preview.src = imageUri;
            // detailPreview.buttonDisable(false);
        } 
        
        // if (detailPreview.index == detailPreview.max-1) {
        //     detailPreview.buttonDisable();
        // }
    }
}


export {
    lazyLoading,
    getAverageRGB,
    menuHeightCompensate,
    setScrollProgress,
    createNotice,
    detailPreview
}



