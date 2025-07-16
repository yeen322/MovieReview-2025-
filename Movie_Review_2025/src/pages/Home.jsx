import CardItems from "../components/CardItems.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Home() {
    const mockData = [1, 2, 3, 4, 5, 6]; // 카드 5개 예시

    return (
        <div
            style={{
                textAlign: "center",
                padding: "40px",
            }}
        >

            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={30}
                slidesPerView={"auto"} // 카드 몇 개씩 보일지
                centeredSlides = {true}
                style={{ paddingBottom: "40px", marginLeft: "60px", maxWidth: "1700px", margin: "0 auto" }}
            >
                {mockData.map((num) => (
                    <SwiperSlide key={num}>
                        <CardItems /> {/* 카드 하나씩 출력 */}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
