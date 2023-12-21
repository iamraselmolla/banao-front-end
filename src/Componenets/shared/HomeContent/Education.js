import React from 'react';
import Author from '../Author';

const Education = () => {
    return (
        <div className="single-post border border-1 my-2 rounded">
            <img className="img-fluid" src="img/a1 (2).png" />
            <div className="px-3 py-3">
                <span className="fw-bolder mb-3 d-block">
                    <span className="me-2">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M367.717 25.318L325.94 63.475l49.953 38.296 26.002-50.247-34.178-26.205zm-62.71 41.608l-38.562 49.242 70.936 55.66 38.604-49.12-70.978-55.782zm-50.495 64.28l-58.035 73.85 118.628 88.885s3.513 2.384 5.48 5.904c2.02 3.612 1.81 6.935 1.81 6.935v128.544H297.14v-24.56H89.255v24.56H61.51v59.358H432.963V338.184c-9.25 4.65-19.462 7.077-29.817 7.084-36.706 0-66.463-29.758-66.462-66.465.034-23.723 12.71-45.63 33.26-57.48L254.51 131.206zM185 220.175l-68.21 87.103 112.83 1.668 27.495-34.984L185 220.175zm218.146 11.285a47.344 47.344 0 0 0-47.34 47.343 47.344 47.344 0 0 0 47.34 47.343 47.344 47.344 0 0 0 47.344-47.343 47.344 47.344 0 0 0-47.344-47.344zm0 17.67a29.674 29.674 0 0 1 29.676 29.673 29.674 29.674 0 0 1-29.676 29.674 29.674 29.674 0 0 1-29.673-29.674 29.674 29.674 0 0 1 29.673-29.674z">
                            </path>
                        </svg>
                    </span>
                    Education
                </span>
                <div className="section_title d-flex justify-content-between">
                    <h4 className="fw-bolder">
                        Tax Benefits for Investment under National Pension Scheme launched by
                        Government
                    </h4>
                    <span className="fw-bolder position-relative">
                        ...
                    </span>
                </div>
                <p className="text-muted">
                    I’ve worked in UX for the better part of a decade. From now on, I plan
                    to rei…
                </p>
                <div className="d-none d-sm-none d-md-block">
                    <div className="d-flex mt-3 justify-content-between">
                        <div className="user d-flex align-items-center gap-3">
                            <img src="https://i.ibb.co/vcFj6pP/sarah.png" alt="" />
                            <p className="m-0 fw-bold">
                                Sarah West
                            </p>
                        </div>
                        <div className="share-view d-flex">
                            <div className="fw-bold text-muted">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                                    className="me-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" stroke="#000" stroke-width="2" d="M12,21 C7,21 1,16 1,12 C1,8 7,3 12,3 C17,3 23,8 23,12 C23,16 17,21 12,21 Z M12,7 C9.23875,7 7,9.23875 7,12 C7,14.76125 9.23875,17 12,17 C14.76125,17 17,14.76125 17,12 C17,9.23875 14.76125,7 12,7 L12,7 Z">
                                    </path>
                                </svg>
                                1.4k
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                                    className="text-muted ms-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.5 15a3.51 3.51 0 0 0 2.36-.93l6.26 3.58a3.06 3.06 0 0 0-.12.85 3.53 3.53 0 1 0 1.14-2.57l-6.26-3.58a2.74 2.74 0 0 0 .12-.76l6.15-3.52A3.49 3.49 0 1 0 14 5.5a3.35 3.35 0 0 0 .12.85L8.43 9.6A3.5 3.5 0 1 0 5.5 15zm12 2a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5zm0-13A1.5 1.5 0 1 1 16 5.5 1.5 1.5 0 0 1 17.5 4zm-12 6A1.5 1.5 0 1 1 4 11.5 1.5 1.5 0 0 1 5.5 10z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <Author name="Sarah West" img="sarah" view="1.4" ></Author>

            </div>
        </div>
    );
};

export default Education;