import axios from 'axios';
import { put as dispatch, takeEvery } from 'redux-saga/effects';




function* fetchInfo() {

    try {
        const infoResponse = yield axios.get('/api/room/');
        console.log('fetchInfo was hit', infoResponse.data);
        yield dispatch({ type: 'GET_INFO', payload: infoResponse.data })
        console.log('fetchInfo was hit', infoResponse.data);
    } catch (error) {
        console.log('Error with your fetch');
    }
}
function* roomSaga() {
    yield takeEvery('FETCH_INFO', fetchInfo)
    // yield takeEvery('POST_INFO', postProject)
    // yield takeEvery('GET_QUANTITY', getQuantity)
    // yield takeEvery('DELETE_ITEM', deleteItem)

};


 export default roomSaga;