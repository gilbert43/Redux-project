export const Increment = nr =>{
    return{
        type: 'INCREMENT',
        payload: nr
    };
};

export const Decrement = fk =>{
    return{
        type: 'DECREMENT',
        payload: fk
    };
};
