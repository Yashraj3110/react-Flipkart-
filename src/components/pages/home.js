import React from "react";
import "bootstrap";
import "./home.css"
import Navbar from "../layout/navbar";
import Footer from "../layout/footer";

const Home = () => {
    return (
        <>
        
            <Navbar />
            {/* Header Top */}
            <div class="container-fluid mt-3 mb-3">
                <div class="row ">
                    <div class="col-md-12">
                        <div class="card">
                            <div className="card-body">

                                <div className="_1ch8e_">
                                    <div className="imgtt">
                                        <img src="./media/2.jpeg" class="d-block" alt="" />
                                    </div>
                                    <span className="_1XjE3T">
                                        <span>Top Offers</span>
                                    </span>
                                </div>
                                <div className="_1ch8e_">
                                    <div className="imgtt">
                                        <img src="./media/3.jpeg" class="d-block" alt="" />
                                    </div>
                                    <span className="_1XjE3T">
                                        <span>Mobiles & Tablets</span>
                                    </span>
                                </div>
                                <div className="_1ch8e_">
                                    <div className="imgtt">
                                        <img src="./media/4.jpeg" class="d-block" alt="" />
                                    </div>
                                    <span className="_1XjE3T">
                                        <span>Electronics</span>
                                    </span>
                                </div>
                                <div className="_1ch8e_">
                                    <div className="imgtt">
                                        <img src="./media/5.jpeg" class="d-block" alt="" />
                                    </div>
                                    <span className="_1XjE3T">
                                        <span>Tvs & Appliances</span>
                                    </span>
                                </div >
                                <div className="_1ch8e_">
                                    <div className="imgtt">
                                        <img src="./media/6.jpeg" class="d-block" alt="" />
                                    </div>
                                    <span className="_1XjE3T">
                                        <span>Fashion</span>
                                    </span>
                                </div>
                                <div className="_1ch8e_">
                                    <div className="imgtt">
                                        <img src="./media/7.jpeg" class="d-block" alt="" />
                                    </div>
                                    <span className="_1XjE3T">
                                        <span>Beauty</span>

                                    </span>
                                </div>
                                <div className="_1ch8e_">
                                    <div className="imgtt">
                                        <img src="./media/8.jpeg" class="d-block" alt="" />
                                    </div>
                                    <span className="_1XjE3T">
                                        <span>Home & Kitchen</span>
                                    </span>
                                </div>
                                <div className="_1ch8e_">
                                    <div className="imgtt">
                                        <img src="./media/9.jpeg" class="d-block" alt="" />
                                    </div>

                                    <span className="_1XjE3T">
                                        <span>Furniture</span>
                                    </span>
                                </div>
                                <div className="_1ch8e_">
                                    <div className="imgtt">
                                        <img src="./media/10.jpeg" class="d-block" alt="" />
                                    </div>

                                    <span className="_1XjE3T">
                                        <span>Flights</span>
                                    </span>
                                </div>
                                <div className="_1ch8e_">
                                    <div className="imgtt">
                                        <img src="./media/11.jpeg" class="d-block" alt="" />
                                    </div>

                                    <span className="_1XjE3T">
                                        <span>Grocery</span>
                                    </span>
                                </div>








                            </div>


                        </div>
                    </div>

                </div>
            </div>

            {/* Carousel */}
            <div className="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="1000">
                                    <img src="./media/7beee9cb3cfe9ccf.jpeg" class="d-block w-100" alt="" />
                                </div>
                                <div class="carousel-item" data-bs-interval="4000">
                                    <img src="./media/2467438532863d2e.jpeg" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item" data-bs-interval="4000">
                                    <img src="./media/78f0374b0191d762.jpeg" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item" data-bs-interval="4000">
                                    <img src="./media/bb35af7b3673ec73.jpeg" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item" data-bs-interval="4000">
                                    <img src="./media/cb9a4bc2ffd319f7.jpeg" class="d-block w-100" alt="..." />
                                </div>

                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <span className="Boxl me-auto">
                                    <span id="arrow">
                                        <span class="bi bi-chevron-left" ></span>
                                    </span>
                                    <span class="visually-hidden">Previous</span>
                                </span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                <span className="Boxr ms-auto">
                                    <span id="arrow" class="bi bi-chevron-right" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </span>
                            </button>
                        </div>

                    </div>

                </div>

            </div>

            <div class="container-fluid mt-3">
                <img src="./media/12.jpeg" class="img-fluid rounded-top" alt="" />
            </div>
            {/* Main */}
            <div class="container-fluid mt-2 mb-1">
                <div class="row">
                    <div class="col-md-12">
                        <div class="container-fluid">
                            <div class="row mt-1 mb-1 ">
                                <div class="col-md-10">
                                    <div class="card">
                                        <div className="card-body" id="banner1">
                                        <img src="./media/19.jpeg" class="img-fluid rounded-top" alt="" />
                                        <img src="./media/18.png" class="img-fluid rounded-top" alt="" />
                                        <img src="./media/17.png" class="img-fluid rounded-top" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="card">
                                        <div className="card-body" id="banner1">
                                        <img src="./media/16.jpeg" class="img-fluid rounded-top" alt="" />
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
            <div class="container-fluid mt-3">
                <div class="row mt-1 mb-1 ">
                    <div class="col-md-12">
                        <div class="card">
                            <div className="card-body" id="banner">
                            <img src="./media/13.jpeg" class="img-fluid rounded-top" alt="" />
                            <img src="./media/14.jpeg" class="img-fluid rounded-top" alt="" />
                            <img src="./media/15.jpeg" class="img-fluid rounded-top" alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>





            {/* footer */}
            <Footer></Footer>
        </>
    );
}

export default Home;