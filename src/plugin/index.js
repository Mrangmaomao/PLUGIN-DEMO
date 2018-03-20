import Slide from './slide/slide.vue';
import Slip from './Slip/Slip.vue';
const components = {
    Slide,Slip
};
const install = function (Vue, opts = {}) {
    Object.keys(components).forEach((key) => {

        Vue.component(key, components[key]);
    });
};
const VuePlugin = Object.assign(components, {install});
export default VuePlugin;