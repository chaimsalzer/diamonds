import {diamonds} from '../assets/Diamonds'


export const GET_DIAMONDS = 'GET_DIAMONDS';

export const getDiamonds = ()=>{
    // console.log(diamonds);
    return {
        type: GET_DIAMONDS,
        payload: diamonds
    };
};

export const postDiamond=(diamond)=>{
    console.log(diamond);
    diamonds.push(diamond);
    return {
        type: GET_DIAMONDS,
        payload: diamonds
    };
};