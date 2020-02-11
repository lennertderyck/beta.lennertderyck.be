(() => {
    const app = {
        initialize() {
            console.log('\n' + `%c[service] main.js ${arguments.callee.name}() running! \n` + ' ', 'color: #00d400; font-weight: bold');
            console.log(`%c[service] ${arguments.callee.name}()`, 'font-weight: bold');
        },

        cached() {
            console.log(`%c[service] ${arguments.callee.name}()`, 'font-weight: bold');
        },

        readyState() {

        },
    }

    app.initialize();
})();

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

let toastIndex = 0;

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
    toastIndex ++;

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

    toast.addEventListener('animationend', function() {toast.classList.add('animated', 'fadeOutRight', 'delay-3s')})

    document.querySelector('#toastContainer').appendChild(toast);
    feather.replace();
    $(`[data-toast="toastIndex${toastIndex}"]`).toast('show');
}