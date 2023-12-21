import React from 'react';

const SignInUser = ({ showRegister, setShowRegister }) => {
    return (
        <div className="signin-user pb-2 px-4 pt-4">
            <div className="row">
                <div className="col-md-6">
                    <div className="form-part">
                        <h3 className="fw-bold mb-3">Sign in</h3>
                        <div className="register-user-form">
                            <form>
                                <div className="row">
                                    <input placeholder="Email" type="email" className="form-control rounded-0 fw-bold py-3  border-bottom-none text-muted" id="emailinput2" />
                                </div>
                                <div className="row">
                                    <input placeholder="Password" type="password" className="form-control rounded-0 fw-bold py-3  text-muted" id="passinputlogin2" />

                                </div>

                                <div className="row"><button type="submit" className="btn mt-3 py-2 w-100 rounded-5 fw-bold btn-primary">Sign in</button></div>
                            </form>
                            <button className="border fw-bold mt-4 w-100 px-3 py-2 bg-transparent border-1 rounded-0">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-primary mr-4 fs-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                                </svg>
                                Sign up with Facebook
                            </button>
                            <button className="border fw-bold mt-2 w-100 px-3 py-2 bg-transparent border-1 rounded-0">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" x="0px" y="0px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" className="mr-2 fs-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
                          c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
                          c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
                          C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                                    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
                          c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                                    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
                          c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                </svg>
                                Sign up with Goggle
                            </button>

                            <p className="fw-bold text-center  mt-4">
                                Forgot Password?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex  align-items-center flex-column text-center">
                    <p className="mb-0 text-end">Didn't have an account yet? <span onClick={() => setShowRegister(!showRegister)} className="text-primary fw-bold" style={{ cursor: 'pointer' }}>Create new for free</span></p>
                    <img src="register.png" className="img-fluid" alt="Register user" />

                </div>
            </div>
        </div>
    );
};

export default SignInUser;