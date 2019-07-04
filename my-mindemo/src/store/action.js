//异步方法
export default {
    jiajia(context, value) {
        setTimeout(function () {
            context.commit("SAVE_ID", value)
        }, 1000)
    }
}