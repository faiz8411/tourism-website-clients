import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer-container bg-dark">
                <div className=" text-center text-md-left  ">
                    <div className="row">

                        <div className="col-md-3 mx-auto mb-4">
                            <h5 className="text-uppercase font-weight-bold text-white">The providers</h5>
                            <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" />
                            <h2 className="text-white">world tourist site</h2>
                        </div>
                        <div className="col-md-3 mx-auto mb-4">
                            <h5 className="text-uppercase font-weight-bold text-white">navigation</h5>
                            <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" />
                            <ul className="text-white mb-2">
                                <li>home</li>
                                <li>address</li>
                                <li>aboutus</li>
                            </ul>
                        </div>

                        <div className="col-md-3 mx-auto ">
                            <h5 className="text-uppercase font-weight-bold text-white">services</h5>
                            <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" />
                            <ul className="text-white mb-2">
                                <li>FaQ</li>
                                <li>Contacts: 01629207400</li>
                                <li>about us</li>
                            </ul>
                        </div>


                    </div>




                </div>
            </div>
            {/* <div className="">
                <h5>© 2020 DSL. Designd By tourist world All Rights Reserved</h5>
            </div> */}
        </div>
    );
};

export default Footer;