import React, { useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function Products() {
    const [pausedAt, setPausedAt] = useState<number | null>(null);

    const handleMouseOver = (event: React.MouseEvent<HTMLVideoElement>) => {
        const video = event.currentTarget;
        if (pausedAt) {
            video.currentTime = pausedAt;
        }
        video.play();
    };

    const handleMouseOut = (event: React.MouseEvent<HTMLVideoElement>) => {
        const video = event.currentTarget;
        setPausedAt(video.currentTime);
        video.pause();
    };

    const videoStyle = {
        borderRadius: '10px',
        objectFit: 'cover',
        objectPosition: 'center top',
        zIndex: 1,
        border: '0px solid rgb(255, 255, 255)',
        width: 'calc(100% - 40px)', // Adjusted width to account for left and right margins
        height: 'calc(100% - 40px)', // Adjusted height to account for top and bottom margins
        margin: '20px', // Added margin of 20px on all sides
    };

    return (
        <div>
            <div className="container my-4">
                <div>
                    <h1 className="text-2xl">Explore <b>Bestselle<span className="underline decoration-red-700">rs</span></b> </h1>
                </div>



                <div className="quinn_video-container my-4 p-2 flex flex-wrap gap-20 scroll-m-5">

                    <OwlCarousel items={5}

                        loop
                        nav

                    >
                        <div className=' text-center'>

                            <video
                                preload="none"
                                loop
                                playsInline
                                muted
                                className="svelte-jk0m5r"
                                style={videoStyle}
                                src="https://www.boat-lifestyle.com/cdn/shop/files/quinn_RUxbhR7CvjkNtlFUDxgw9.mp4"
                                poster="https://www.boat-lifestyle.com/cdn/shop/files/quinn_N8V0FmOXVCG4QfYvPSp1w.jpg"
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}

                            ></video>
                           

                            <b >smartwatch</b>
                           
                        </div>

                        {/* second  */}

                        <div className=' text-center'>

                            <video
                                preload="none"
                                loop
                                playsInline
                                muted
                                className="svelte-jk0m5r"
                                style={videoStyle}
                                src="https://www.boat-lifestyle.com/cdn/shop/files/quinn_Bejc8URjU1NSXdhabLCmD.mp4"
                                poster="https://www.boat-lifestyle.com/cdn/shop/files/quinn_9O6xvZXZ3kYLbUbtsnj4S.jpg"
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            ></video>
                            <b>earbuds</b>
                        </div>
                        {/* 3  */}
                        <div className=' text-center'>

                            <video
                                preload="none"
                                loop
                                playsInline
                                muted
                                className="svelte-jk0m5r"
                                style={videoStyle}

                                src="https://www.boat-lifestyle.com/cdn/shop/files/quinn_OyJHanx4QSdUN3OVGTO7C.mp4"
                                poster="https://www.boat-lifestyle.com/cdn/shop/files/quinn_KXwTUL2r91fh5uAHqSyIH.jpg"
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            ></video>
                            <b>earphone</b>
                        </div>
                        {/* 4  */}
                        <div className=' text-center'>


                            <video
                                preload="none"
                                loop
                                playsInline
                                muted
                                className="svelte-jk0m5r"
                                style={videoStyle}
                                src="https://www.boat-lifestyle.com/cdn/shop/files/quinn_CpsRIdJWtpXyFN3enwbXd.mp4"
                                poster="https://www.boat-lifestyle.com/cdn/shop/files/quinn_v90hMzAEa585W2YTUR9UF.jpg"
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            ></video>
                            <b>headphone</b>
                        </div>
                        {/* 5  */}

                        <div className=' text-center'>

                            <video
                                preload="none"
                                loop
                                playsInline
                                muted
                                className="svelte-jk0m5r"
                                style={videoStyle}
                                src="https://www.boat-lifestyle.com/cdn/shop/files/quinn_j1TwOEeceKYOJc7d7mAim.mp4"
                                poster="https://www.boat-lifestyle.com/cdn/shop/files/quinn_FY7dfyFMiXzNTqSLFu2lV.jpg"
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            ></video>
                            <b>speaker</b>
                        </div>

                    </OwlCarousel>
                </div>
            </div>


        </div>
    )
}

export default Products;
