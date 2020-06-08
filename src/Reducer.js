const is = {

}
const Reducer = (state=is,action)=>{
    if(action.type==='data'){
        state = action.payload
    }
    return state;
}
export default Reducer