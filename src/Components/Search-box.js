// import React, {useEffect, useState} from "react"
// import {useDispatch, useSelector} from "react-redux";
// import {fetchWeatherAction} from "../features/weatherSlice";
//
// const SearchBox = () => {
//         const [city, setCity] = useState("")
//         const dispatch = useDispatch();
//
//         // useEffect(() => {
//         //     dispatch(fetchWeatherAction(city))
//         // }, [])
//
//
//
//         return (
//             <div className="search-box">
//                 <input
//                     value={city}
//                     type="text"
//                     className="search-bar"
//                     placeholder="Search City..."
//                     onChange={(e) => setCity(e.target.value)}
//                 />
//                 <button className="btn btn-primary" type="button" onClick={() => dispatch(fetchWeatherAction(city))}
//                 >search
//                 </button>
//             </div>
//         );
//     }
// ;
//
// export default SearchBox;
