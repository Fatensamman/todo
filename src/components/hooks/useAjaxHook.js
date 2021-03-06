import axios from 'axios';

export default function useAjax(obj) {
    return axios[obj.method](obj.url, obj.body)
}

// its really a simple way
    // const [returnData, setReturnData] = useState([]);

    // async function getAjax(url){
    //     return await axios.get(url)
    // }

    // async function postAjax(url, body){
    //     return await axios.post(url, body)
    // }

    // async function putAjax(url, body){
    //     console.log('this is in PUT AJAX ', url, body)
    //     return await axios.put(url, body);
    // }

    // async function deleteAjax(url, id){
    //     await axios.delete(url)
    // }

    // if(obj.method === 'get'){
    //     return getAjax(obj.url, obj.body);

    // }
    // else if(obj.method ==='post'){
    //     return  postAjax(obj.url, obj.body);

    // }
    // else if(obj.method ==='put'){
    //     putAjax(obj.url, obj.body)
    // }
    // else if(obj.method === 'delete'){
    //     deleteAjax(obj.url )
    // }


//  return {
//      getAjax,
//      putAjax,
//      deleteAjax,
//      postAjax,
//  }

// }