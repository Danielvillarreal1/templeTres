import React from 'react';
import uno from '../../src/assets/img/portfolio/fullsize/uno.jpg'
import dos from '../../src/assets/img/portfolio/fullsize/dos.jpg'
import tres from '../../src/assets/img/portfolio/fullsize/tres.jpg'
import cuatro from '../../src/assets/img/portfolio/fullsize/cuatro.jpg'
import cinco from '../../src/assets/img/portfolio/fullsize/cinco.jpg'
import seis from '../../src/assets/img/portfolio/fullsize/seis.jpg'

const Portfolio = () => {
    return (
        <>
         <div id="portfolio">
            <div className="container-fluid p-0">
                <div className="row no-gutters">
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/uno.jpg">
                            <img className="img-fluid" src={uno} alt="" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/dos.jpg">
                            <img className="img-fluid" src={dos} alt="" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/3.jpg">
                            <img className="img-fluid" src={tres} alt="" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/4.jpg">
                            <img className="img-fluid" src={cuatro} alt="" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/5.jpg">
                            <img className="img-fluid" src={cinco} alt="" />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/6.jpg">
                            <img className="img-fluid" src={seis} alt="" />
                            <div className="portfolio-box-caption p-3">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default Portfolio;