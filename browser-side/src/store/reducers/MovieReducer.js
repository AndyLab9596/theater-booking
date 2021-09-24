import { actionTypes } from "../actions/Types";
import shangchi from '../../assets/img/banner/shangchi.jpg'
import armyofthedead from '../../assets/img/banner/armyofthedead.jpg'
import dune from '../../assets/img/banner/dune.jpg'

const initialValue = {
    arrBanner: [
        {
            hinhAnh: shangchi,
            trailer: "https://youtu.be/5K66kfVce0k",
            tenPhim: "Shang Chi and The Legend of Ten Rings",
            biDanh: "shang-chi-and-the-legend-of-ten-rings",
            maPhim: 1322,
        },
        {
            hinhAnh: armyofthedead,
            trailer: "https://youtu.be/tI1JGPhYBS8",
            tenPhim: "Army of the Dead",
            biDanh: "army-of-the-dead",
            maPhim: 1337,
        },
        {
            hinhAnh: dune,
            trailer: "https://youtu.be/8g18jFHCLXk",
            tenPhim: "Dune",
            biDanh: "dune",
            maPhim: 1352,
        },
    ],
    arrMoviesPagination: [],
    arrMovies: [],
    modalState: {},
    singleMovie: {},
}

export const MovieReducer = (state = initialValue, action) => {
    switch (action.type) {
        case actionTypes.SET_BANNER: {
            state.arrBanner = action.payload
            return { ...state }
        }
        case actionTypes.FETCH_MOVIES_PAGINATION: {
            state.arrMoviesPagination = action.payload
            return { ...state }
        }
        case actionTypes.FETCH_MOVIES: {
            state.arrMovies = action.payload
            return { ...state }
        }
        case actionTypes.PLAY_MODAL: {
            state.modalState = action.payload
            return { ...state }
        }
        case actionTypes.FETCH_MOVIE: {
            state.singleMovie = action.payload
            return { ...state }
        }

        default: return { ...state }

    }
}