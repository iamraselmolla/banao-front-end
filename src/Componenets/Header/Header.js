import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import RegisterModal from '../shared/RegisterModal';


const Header = () => {
    const [show, setShow] = useState(false);
    const [modalShow, setModalShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <header className='container py-4'>
            <div className="d-md-flex d-none d-sm-none justify-content-between">
                <div>
                    <Link to="/"><img src="img/logo.png" alt="" /></Link>
                </div>

                <form>

                    <div className='d-flex align-items-center rounded-5 px-3 border'>
                        <AiOutlineSearch className='fs-4'></AiOutlineSearch> <input placeholder='Search for your favorite groups in ATG' type="text" className="form-control search-input border-0 rounded-5" id="exampleInputPassword1" />
                    </div>
                </form>
                <div>
                    <Button className='bg-transparent border-0 text-black fw-bold' onClick={() => setModalShow(true)}>
                        Create account. <span className="text-info" id="myBtn" style={{ cursor: 'pointer' }}>it's free</span>
                    </Button>
                </div>
            </div>

            <RegisterModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />






        </header>
    );
};

export default Header;