import Vue from "vue";
import { mapGetters } from "vuex";

const Success = {
    install(Vue, options) {
        Vue.mixin({
            computed: {
                ...mapGetters({
                    success: "validationSuccess/success"
                })
            }
        })
    }
}

Vue.use(Success)