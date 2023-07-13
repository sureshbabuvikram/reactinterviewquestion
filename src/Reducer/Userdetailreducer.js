function Userdetailreducer(state=0,action){
switch(action.type){
    case 'postcall':
         return action.payload
    case 'fakecall':
        return action.payload
    default:
        return state

}
}
export default Userdetailreducer;