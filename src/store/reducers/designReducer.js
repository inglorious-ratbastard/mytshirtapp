const initialState = { 
    designs: [
        {id: 1, name: 'Your Custom Shirt', tshirtcolor: 'black'},
        {id: 2, name: 'Your Custom Shirt', tshirtcolor: 'grey'},
        {id: 3, name: 'Your Custom Shirt', tshirtcolor: 'red'},
        {id: 4, name: 'Your Custom Shirt', tshirtcolor: 'blue'},
        {id: 5, name: 'Your Custom Shirt', tshirtcolor: 'white'}  
    ]
} 

const designReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_DESIGN':
        console.log('Your design has been saved.', action.designs) 
        break; 
        default:
    }
    return state
}

export default designReducer