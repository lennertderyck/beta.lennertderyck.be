let toastIndex = 0;

const getURLparameter = (url) => {
    url = url.split('?')[1].split('&');
    let valuesArray = [];
    url.map(x => {
        valuesArray.push(
            {
                key: x.split('=')[0],
                value: x.split('=')[1],
            }
        )
    });
    const filterForKeys = (input) => {return input.key == key};
    const returnValue = valuesArray.filter(filterForKeys)[0];                
    return returnValue !== undefined ? returnValue.value : console.log('%c\tgetClientFilesKey() parameter key in parameter not found', 'color: #f30;');
}

const getURLslug = (o) => {
    if (o.url == undefined) o.url = window.location.pathname;
    if (o.slugPosition == undefined) o.slugPosition = 1;
    if (o.returnSlugContent == undefined) o.returnSlugContent = false;
    
    let urlArray = o.url.split('/');
    urlArray.shift();
    
    return o.url == '/' ? undefined : urlArray[o.slugPosition-1];
}

const onUrl = (url, action) => {
    if (window.location.pathname.includes(url) == true) {
        action;
    }
}

onUrl('over', () => (
    console.log('onUrl function works')
));

const el = (el, multiple = false) => {  
    const checkedElement =  document.querySelector(el)
    if (typeof checkedElement == 'object' && multiple == false) {
        return document.querySelector(el);
    } else if (typeof checkedElement == 'object' && multiple == true) {
        return document.querySelectorAll(el);
    } else if (el == null) {
        console.error('[get object] this element doesn\'t exist 🤷‍♂️');
    } else {
        console.error('[get object] something went wrong 🧐');
    }
}

function replaceElement(element, content) {
    element = document.querySelectorAll(`[data-replace="${element}"]`);
    element.forEach((el) => {
        el.outerHTML = content;
    })
}

function fillElement(element, content) {
    element = document.querySelectorAll(`[data-fill="${element}"]`);
    element.forEach((el) => {
        el.innerHTML = content;
    })
}

function errorText(element, content) {
    element = document.querySelectorAll(`[data-error="${element}"]`);
    element.forEach((el) => {
        // el.style.display = 'block !important';
        el.innerHTML = content;
    })
}

function createToast(title, message) {
    console.log(`%c[service] ${arguments.callee.name}()`, 'font-weight: bold');
    console.log(toastIndex);

    let now, moment;

    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
    now = new Date()
    moment = {
        dd: addZero(now.getDate()),
        mm: addZero(now.getMonth() + 1),
        yyyy: now.getFullYear(),
        hh: addZero(now.getHours()),
        nn: addZero(now.getMinutes()),
    }

    let toast = document.createElement('div');
    toastIndex++;

    toast.classList.add('toast', 'animated', 'fadeInRight', 'faster');
    toast.setAttribute('data-toast', `toastIndex${toastIndex}`);
    toast.setAttribute('data-delay', `3500`);
    toast.setAttribute('role', `alert`);
    toast.setAttribute('aria-atomic', `true`);
    toast.setAttribute('aria-live', `assertive`);

    toast.innerHTML = `
        <div class="toast-body">
            <p class="toast-title mr-auto text-modern bold mb-0">${title}</p>
            <p class="mb-0">${message}</p>
            <small class="text-muted d-none">${moment.hh}:${moment.nn}</small>
        </div>
        <button type="button" class="close" data-dismiss="toast" aria-label="Close">
            <div class="icon-md"><i data-feather="x"></i></div>
        </button>
    `

    toast.addEventListener('animationend', function () {
        toast.classList.add('animated', 'fadeOutRight', 'delay-3s')
    })

    document.querySelector('#toastContainer').appendChild(toast);
    feather.replace();
    $(`[data-toast="toastIndex${toastIndex}"]`).toast('show');
}

const clientFilesKeys = {
    initialize() {
        console.log('\n' + `%c[service] main.js ${arguments.callee.name}() running! \n` + ' ', 'color: #00d400; font-weight: bold');
        console.log(`%c[service] ${arguments.callee.name}()`, 'font-weight: bold');
        
        this.formConfig();
        this.db = window.localStorage;
        
        if (this.db.getItem('fileKey') == null) {
            this.checkUrlStorageKeys();
        } else {
            const key = JSON.parse(this.db.getItem('fileKey')).key;
            this.redirectToStorage(key);
        }
    },

    cached() {
        console.log(`%c[service] ${arguments.callee.name}()`, 'font-weight: bold');
    },
    
    formConfig() {
        this.form = el('#clientFilesKey') 
        this.form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            let formData = new FormData(this.form);
            const formDataArray = await this.getInputValues(formData);
            await this.saveLocalStorage(formDataArray.key, formDataArray.email);
            await this.initialize();
        })
    },
    
    async getInputValues(input) {
        return await {
            key: input.get('key'),
            email: input.get('email'),
        }
    },
    
    checkUrlStorageKeys() {
        if (this.getClientFilesKey('key') !== undefined && this.getClientFilesKey('use') !== undefined) {
            this.saveLocalStorage(this.getClientFilesKey('key'),this.getClientFilesKey('use'))
            el('#clientFilesKey [name="key"]').value = this.getClientFilesKey('key');
            el('#clientFilesKey [name="email"]').value = this.getClientFilesKey('use');
        } else if (this.getClientFilesKey('key') !== undefined && this.getClientFilesKey('use') == undefined) {
            el('#clientFilesKey [name="key"]').value = this.getClientFilesKey('key');
            // el('#clientFilesKey [name="email"]').value = this.getClientFilesKey('use');
        }
    },
    
    getClientFilesKey(key) {
        let url = window.location.href;
        if (key == undefined) {
            console.log('%c\tgetClientFilesKey() parameter not given', 'color: #f30;');
            return 'getClientFilesKey() parameter not given'
        } else {
            url = url.split('?')[1].split('&');
            let valuesArray = [];
            url.map(x => {
                valuesArray.push(
                    {
                        key: x.split('=')[0],
                        value: x.split('=')[1],
                    }
                )
            });
            const filterForKeys = (input) => {return input.key == key};
            const returnValue = valuesArray.filter(filterForKeys)[0];                
            return returnValue !== undefined ? returnValue.value : console.log('%c\tgetClientFilesKey() parameter key in parameter not found', 'color: #f30;');
        }
    },
    
    saveLocalStorage(key, email) {            
        const keyInfo = {
            key: key,
            use: email
        }
        
        this.db.setItem('fileKey', JSON.stringify(keyInfo))
        console.log(JSON.parse(this.db.getItem('fileKey')))
    },
    
    redirectToStorage(key) {
        // window.alert('Je word doorgestuurd');
        window.location.replace(`https://ledery.stackstorage.com/s/${key}`);
    }
}

if (window.location.pathname == '/files') {
    clientFilesKeys.initialize();
}

const contentBodyIndexing = {
    initialize() {
        this.headings = document.querySelectorAll('#contentBody h3, #contentBody h5');
        this.addToDom();
    },
    
    addToDom() {
        let $tempStr = '';
        const $indexList = document.querySelector('#pageIndex ul');
        
        this.headings.forEach((i, index) => {
            let nextEl = '', prevEl = '', sesamInitClass = '';
            const h3 = i.tagName == 'H3'
            prevEl = this.headings[index-1]
            nextEl = this.headings[index+1];
                        
            if (index == 0) sesamInitClass = 'sesam sesam-show';
            
            if (h3 == true) {
                $tempStr += `
                    <li class="page-index-item mb-3 small text-modern page-index-lvl1" data-sesam-trigger="${i.id}">
                        <a href="#${i.id}">${i.textContent}</a>
                    </li>
                `
            } else if (h3 == false) {
                if (prevEl.tagName == 'H3') {
                $tempStr += `
                    <div data-sesam-target="${prevEl.id}" data-sesam-parent="pageIndexGroup" class="${sesamInitClass}">
                        <li class="page-index-item small text-modern page-index-lvl2">
                            <a href="#${i.id}">${i.textContent}</a>
                        </li>
                `
                }
                if (nextEl != undefined && nextEl.tagName == 'H3') {
                $tempStr += `
                        <li class="page-index-item small text-modern page-index-lvl2">
                            <a href="#${i.id}">${i.textContent}</a>
                        </li>
                    </div>
                `
                }
                if (prevEl != undefined && nextEl != undefined && prevEl.tagName != 'H3' && nextEl.tagName != 'H3') {
                $tempStr += `
                        <li class="page-index-item small text-modern page-index-lvl2">
                            <a href="#${i.id}">${i.textContent}</a>
                        </li>
                `
                }
            }            
        })
        $indexList.innerHTML = $tempStr;  
        sesamCollapse.initialize();
        sesam({
            target: this.headings[0].id,
            action: 'show'
        })     
    }
}

if (document.querySelector('#pageIndex ul') !== null) {
    contentBodyIndexing.initialize();
}

const introWordSwither = {
    initialize() {
        this.wordIndex = 0
        // Ik ben een OF ik ben gepassioneerd door
        // this.words = ['graphic designer','creative','scout','web designer','web developer','dromer']
        this.words = ['maak websites','ben student','schrijf code','ben een dromer','geef workshops','design','develop','geef bijles']
        this.$replaceElement = document.querySelector('[data-label="wordReplacer"] span')
        
        this.replaceWord();
    },
    
    replaceWord() {
        const typewriter = new Typewriter(this.$replaceElement, {
            loop: true
        });

        typewriter  
            .typeString(this.words[0])
            .pauseFor(2500)
            .deleteAll()
            .typeString(this.words[1])
            .pauseFor(2500)
            .deleteAll()
            .typeString(this.words[2])
            .pauseFor(2500)
            .deleteAll()
            .typeString(this.words[3])
            .pauseFor(2500)
            .deleteAll()
            .typeString(this.words[4])
            .pauseFor(2500)
            .deleteAll()
            .typeString(this.words[5])
            .pauseFor(2500)
            .deleteAll()
            .typeString(this.words[6])
            .pauseFor(2500)
            .deleteAll()
            .typeString(this.words[7])
            .pauseFor(2500)
            .deleteAll()
            .start();
    }
}

if (document.querySelector('[data-label="wordReplacer"] span') !== null) introWordSwither.initialize();

const projectGallery = {
    initialize() {
        document.querySelector('#pageContent .glide').addEventListener('click', (e) => {
            if (e.target.offsetParent.classList.contains('glide__slides')) this.renderLightbox(e.target.src)
        })
        
        document.querySelector('[data-label="lightbox"]').addEventListener('click', () => {
            sesam({
                target: 'lightbox',
                action: 'hide'
            })
        })
        
        this.lightbox = document.querySelector('[data-label="lightbox"]');
        this.lightboxImg = document.querySelector('[data-label="lightbox"] .img-wrapper img');
    },
    
    renderLightbox(src) {
        this.lightbox.classList.add('fadeIn');
        this.lightboxImg.src = src;
        sesam({
            target: 'lightbox',
            action: 'show'
        })
    },
}

projectGallery.initialize();

/*
const cookieImg = document.querySelector('[data-label="cookie"]');

console.log(readCookie('cookieConsent'));
if(readCookie('cookieConsent') != 'true') {
    let img = document.createElement('img');
    img.src ='https://res.cloudinary.com/lennertderyck/image/upload/v1583618012/COOKIE_bljwhf.png';
    img.setAttribute('data-label', 'cookie');
    document.body.appendChild(img);
    
    let cookieWall = document.createElement('div');
    cookieWall.setAttribute('data-label', 'cookieWall');
    document.body.appendChild(cookieWall);
    
    cookieWall.addEventListener('click', (event) => {
        const button1 = document.querySelector('#staticBackdrop .modal-footer button:nth-child(1)');
        const button2 = document.querySelector('#staticBackdrop .modal-footer button:nth-child(2)');
    
        if(event.target !== button1 && event.target !== button2 && event.target.href !== '') {
            el('#staticBackdrop').modal('show');
        };
        
        // Just add layer, then add cookie
        
        button1.onclick = createCookie('cookieConsent', true) && cookieWall.remove();
        button2.onclick = createCookie('cookieConsent', true) && cookieWall.remove();
    });
    
    document.onmousemove = (e) => {
        const offset = 10;
        let xPos = e.clientX, yPos = e.clientY;
        img.style.top = `${yPos + offset}px`;
        img.style.left = `${xPos + offset}px`;
        // console.log(`mouse pos x: ${xPos}, y: ${yPos}`);
    }
}
/*
/**
 * CONTENT TO MARKDOWN
 */

// console.log(document.querySelectorAll('[markdown="1"]'))


/* window.addEventListener('mousewheel', (() => {
    console.log('window.pageYOffset');
}));

const cards = document.querySelector('[data-label="portfolioCards"]')

var throttle = function(type, name, obj){
    var obj = obj || window;
    var running = false;
    var func = function(){
    if (running){ return; }
        running = true;
        requestAnimationFrame(function(){
            obj.dispatchEvent(new CustomEvent(name));
            running = false;
        });
    };
    obj.addEventListener(type, func);
};
    
throttle("mousewheel", "optimizedScroll");
  
window.addEventListener("optimizedScroll", function(){
    console.log('\t' + window.pageYOffset);
    if (document.body.classList.contains('sesam-show')) {
        cards.style.transform = "translateY(-" + window.pageYOffset + "px)";
    }
}) */