export const debounce = function (func, wait) {
    let timer = null;
    return function () {
        const that = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            func.call(that, args);
        }, wait);
    };
};
