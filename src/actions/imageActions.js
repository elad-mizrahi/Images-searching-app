import * as types from './actionTypes';
import axios from 'axios';
import moment from 'moment';

export function receiveData(data, query) {
  return {type: types.RECEIVE_DATA, data, query};
}

export function updateQuery(data) {
  return {
    type: types.UPDATE_QUERY,
    query: data.query,
    service: data.service,
    numberOfResults: data.numberOfResults,
    timeOfSearch: data.timeOfSearch,
    imagesUrlArray: data.imagesUrlArray
  };
}

export function clearList() {
  return {type: types.CLEAR_LIST};
}

export function loadImages(query) {
  const API_KEY = '844360c935b08816298b1029a2426574';
  const url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + API_KEY + '&text=' + encodeURIComponent(query) + '&format=json&nojsoncallback=1';
  return function (dispatch) {
    return axios({url: url, timeout: 20000, method: 'get', responseType: 'json'}).then(response => {
      let photos = response.data.photos.photo;
      let imagesUrlArray = [];
      photos.forEach((item, i) => {
        imagesUrlArray.push('http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_m.jpg');
      });
      let searchHistoryData = {
        query: query,
        service: 'Flickr',
        numberOfResults: response.data.photos.total,
        timeOfSearch: moment().format('LT'),
        imagesUrlArray: imagesUrlArray
      };

      dispatch(receiveData(imagesUrlArray, query));
      dispatch(updateQuery(searchHistoryData));
    }).catch(error => {
      throw(error);
    });
  };
}

export function reloadImagesFromHistory(imagesUrlArray, query) {
  return function (dispatch) {
    dispatch(receiveData(imagesUrlArray, query));
  };
}

export function clearAllResults() {
  return function (dispatch) {
    dispatch(receiveData([], ''));
    dispatch(clearList());
  };
}
