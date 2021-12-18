import { productListApiUrl } from '../appConfigs';

export default () => {
    return fetch(productListApiUrl)
        .then((response) => response.json())
        .catch((err) =>  console.log(err));
}