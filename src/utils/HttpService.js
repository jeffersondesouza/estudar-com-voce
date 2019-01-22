/**
 * @class HttpService - encapsulates the XMLHttpRequest making code http calls more clean
 * @example HttpService.get('uri').then(res=>res).catch(err=>err)
 */
export default class HttpService {

  static get(path) {
    const xhr = new XMLHttpRequest();

    return new Promise((resolve, reject) => {
      
      xhr.open('GET', `${API_BASE_URL}/${path}`);
      
      xhr.onreadystatechange = () => {        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.responseText))
          } else {
            reject({ error: xhr.status });
          }
        }
      }
      xhr.send();
    });
  }
}
