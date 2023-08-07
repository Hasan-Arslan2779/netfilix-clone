import axios from "axios";
import { ActionTypes } from "../../constant/actionTypes";
import { options } from "../../constant/constants";

// Bütün atılan isteklerin başına eklenir
axios.defaults.baseURL = "https://api.themoviedb.org/3";
// Aksiyon objesi oluşturan bir fonksiyon
export const setLoading = (payload) => ({
  type: ActionTypes.SET_LOADİNG,
  payload,
});

// Hem verileri çek hemde reducere aktar
// Thunk aksiyonunun kısa yazımı
export const getMovies = () => async (dispatch) => {
  const res = await axios.get("/movie/popular?language=tr", options);
  // Gelen Veriyi reducera aktarma
  dispatch({
    type: ActionTypes.SET_MOVİES,
    payload: res.data,
  });
};

// ! Thunk Uzun Versiyon
// export const getMovies = () => {
//   return async function (dispatch) {
//     // veri çekme işlemleri
//     const res = await axios.get(
//       "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
//       options
//     );

//     // gelen veriyi reducer'a aktarma
//     dispatch({
//       type: ActionTypes.SET_MOVİES,
//       payload: res.data,
//     });
//   };
// };

export const getGenres = () => (dispatch) => {
  axios
    .get("/genre/movie/list?language=tr", options)
    .then((res) =>
      dispatch({
        type: ActionTypes.SET_GENRES,
        payload: res.data.genres,
      })
    )
    .catch((err) => console.log(err));
};
