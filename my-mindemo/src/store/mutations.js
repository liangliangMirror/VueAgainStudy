import {
    SAVE_ID,
} from './mutation-type.js'

export default {
    //mutations方法必须是同步方法！
    [SAVE_ID](state, id) {
        state.id = id;
    }
}

