import React from 'react';

const Author = ({ name, img, view }) => {
    return (
        <>
            <div className="d-none d-sm-none d-md-block">
                <div className="d-flex mt-3 justify-content-between align-items-center">
                    <div className="user d-flex align-items-center gap-3">
                        <img className="img-fluid" src={`img/author/${img}.png`} alt="User Avatar" />
                        <p className="m-0 fw-bold">
                            {name}
                        </p>
                    </div>
                    <div className="share-view d-flex">
                        <div className="fw-bold text-muted">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                                className="me-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" stroke="#000" strokeWidth="2" d="M12,21 C7,21 1,16 1,12 C1,8 7,3 12,3 C17,3 23,8 23,12 C23,16 17,21 12,21 Z M12,7 C9.23875,7 7,9.23875 7,12 C7,14.76125 9.23875,17 12,17 C14.76125,17 17,14.76125 17,12 C17,9.23875 14.76125,7 12,7 L12,7 Z">
                                </path>
                            </svg>
                            {view}
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                                className="text-muted ms-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 15a3.51 3.51 0 0 0 2.36-.93l6.26 3.58a3.06 3.06 0 0 0-.12.85 3.53 3.53 0 1 0 1.14-2.57l-6.26-3.58a2.74 2.74 0 0 0 .12-.76l6.15-3.52A3.49 3.49 0 1 0 14 5.5a3.35 3.35 0 0 0 .12.85L8.43 9.6A3.5 3.5 0 1 0 5.5 15zm12 2a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5zm0-13A1.5 1.5 0 1 1 16 5.5 1.5 1.5 0 0 1 17.5 4zm-12 6A1.5 1.5 0 1 1 4 11.5 1.5 1.5 0 0 1 5.5 10z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex mt-3 align-items-center justify-content-between d-sm-flex d-md-none">
                <div className="user d-flex align-items-center gap-3">
                    <img className="img-fluid" src="img/user-image.jpg" alt="User Avatar" />
                    <p className="m-0 fw-bold d-flex flex-column">
                        Sarthak Kamra
                        <div>
                            1.4k Views
                        </div>
                    </p>
                </div>
                <div className="px-3 py-2 rounded" style={{ background: 'rgb(241, 243, 245)' }}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                        className="text-muted me-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 15a3.51 3.51 0 0 0 2.36-.93l6.26 3.58a3.06 3.06 0 0 0-.12.85 3.53 3.53 0 1 0 1.14-2.57l-6.26-3.58a2.74 2.74 0 0 0 .12-.76l6.15-3.52A3.49 3.49 0 1 0 14 5.5a3.35 3.35 0 0 0 .12.85L8.43 9.6A3.5 3.5 0 1 0 5.5 15zm12 2a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5zm0-13A1.5 1.5 0 1 1 16 5.5 1.5 1.5 0 0 1 17.5 4zm-12 6A1.5 1.5 0 1 1 4 11.5 1.5 1.5 0 0 1 5.5 10z">
                        </path>
                    </svg>
                    Share
                </div>
            </div>
        </>
    );
};

export default Author;