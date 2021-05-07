import React from 'react';
const Gallery = () =>{
    return ( 
      <div className="yp_memories">
        <h1>Our Memories</h1>
        <nav id="navbar-example2" className="navbar sticky-top">
            <ul className="nav flex-column">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="yp_year" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">2018</a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#club2018">Club Meetings</a>
                        <a className="dropdown-item" href="#ashram2018">Ashram Visits</a>
                        <a className="dropdown-item" href="#swatch2018">Swatch BIT</a>
                        <a className="dropdown-item" href="#tours2018">Outings</a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="yp_year" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">2019</a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#club2019">Club Meetings</a>
                        <a className="dropdown-item" href="#ashram2019">Ashram Visits</a>
                        <a className="dropdown-item" href="#river2019">River Rejuvination</a>
                        <a className="dropdown-item" href="#tours2019">Outings</a>
                    </div>
                </li>
            </ul>
        </nav>
        <div data-spy="scroll" data-target="#navbar-example2" data-offset="0" className="yp_gallery">
            <h4 id="club2018">Club Meetings 2018</h4>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src=".\images\g39.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src=".\images\g30.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src=".\images\g18.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                  <div className="carousel-item ">
                    <img src=".\images\g13.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src=".\images\g9.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src=".\images\g42.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src=".\images\g47.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src=".\images\g49.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
            </div>
            <h4 id="ashram2018">Ashram Visits 2018</h4>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src=".\images\g7.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                  <div className="carousel-item ">
                    <img src=".\images\e1.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                  <div className="carousel-item ">
                    <img src=".\images\g16.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                  <div className="carousel-item ">
                    <img src=".\images\g28.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                  <div className="carousel-item ">
                    <img src=".\images\g25.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                  <div className="carousel-item ">
                    <img src=".\images\g29.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                  <div className="carousel-item ">
                    <img src=".\images\g48.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                  <div className="carousel-item ">
                    <img src=".\images\g51.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
            </div>
            <h4 id="swatch2018">Swatch BIT 2018</h4>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src=".\images\g33.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src=".\images\a1.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
            </div>
            <h4 id="tours2018">Outings 2018</h4>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src=".\images\g32.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                  <div className="carousel-item ">
                    <img src=".\images\g36.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                  <div className="carousel-item ">
                    <img src=".\images\g43.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                  <div className="carousel-item ">
                    <img src=".\images\g44.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                  <div className="carousel-item ">
                    <img src=".\images\g46.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>   
            <h4 id="club2019">Club Meetings 2019</h4>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src=".\images\g22.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src=".\images\g14.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                  <div className="carousel-item ">
                    <img src=".\images\g20.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src=".\images\g22.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
            </div>
            <h4 id="ashram2019">Ashram Visits 2019</h4>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src=".\images\g1.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                  <div className="carousel-item ">
                    <img src=".\images\e3.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                  <div className="carousel-item ">
                    <img src=".\images\g26.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                  <div className="carousel-item ">
                    <img src=".\images\e1.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                  <div className="carousel-item ">
                    <img src=".\images\g2.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                  <div className="carousel-item ">
                    <img src=".\images\g24.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
            </div>
            <h4 id="river2019">River Rejuvination 2019</h4>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src=".\images\a2.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src=".\images\g10.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src=".\images\g17.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src=".\images\g12.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src=".\images\g23.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
            </div>
            <h4 id="tours2019">Outings 2019</h4>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src=".\images\g21.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                  <div className="carousel-item ">
                    <img src=".\images\g40.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                  <div className="carousel-item ">
                    <img src=".\images\g41.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                  <div className="carousel-item ">
                    <img src=".\images\g15.jpeg" className="d-block yp_immgs" alt="..."/>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>   
            </div>
        </div>
    );
};
export default Gallery;