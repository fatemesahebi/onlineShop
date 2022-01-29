import {A11y, Navigation, Pagination, Scrollbar} from "swiper";

import { Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Slider({children}){
    return(
        <div>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={30}
                slidesPerView={5}
                navigation
                pagination
            >
                {children}
            </Swiper>
        </div>
    )
}
export default Slider