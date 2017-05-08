import { fromJS } from 'immutable';  //为什么immutable 没写入package.json 好奇怪


export default (state = {}, action) => {

    switch ( action.type ){
        case 'FIRST':
            state.appleBasket = 'rtrt';
            return state;
        default:
            return state;
    }

};
