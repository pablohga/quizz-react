import axios from 'axios';
const url = 'https://opentdb.com/api.php?amount=1';

function axiosService() {
  axios
    .get(url)
    .then(function (response) {
      const data = response.data;
      //lidar com o sucesso da conexao
      console.log('response do axiosService1: ', data);
    })
    .catch(function (error) {
      //lidar com caso de erro
      console.log(error);
    });
}

export default axiosService;

/* const nQ = {state.numQuizz} */

/* const options = {
  url: 'https://opentdb.com/api.php?amount=5',
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  },

  data: {
    a: 10,
    b: 20
  }
};

axios(options).then((response) => {
  console.log(response.status);
}); */
