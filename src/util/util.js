export default {
    install (Vue, options) {
        Vue.prototype.formatDate = (value) => {
            let y, m, d, curD
            curD = new Date (value);
            y = curD.getFullYear();
            m = curD.getMonth();
            d = curD.getDate();
            if (m == 0) {
              m = 1;
            }
            return `${y}-${m}-${d}`;
        }

    }
}