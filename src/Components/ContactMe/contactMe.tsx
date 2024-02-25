import React, { forwardRef } from "react";
import "./contactMe.css";

interface ContactMeProps {
    toggleRequestGrades: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    toggleDirectContact: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  }

const ContactMe = forwardRef<HTMLDivElement, ContactMeProps>(({ toggleRequestGrades, toggleDirectContact }, ref) => {
  return (
    <div ref={ref} className="contact-me-container">
            <footer
                className="text-center text-lg-start text-white"
                style={{ backgroundColor: "#1c2331" }}>
                <section
                    className="d-flex justify-content-between p-4"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    <div className="me-5">
                        <span>Get connected with me on social networks:</span>
                    </div>

                    <div>
                        <a href="https://www.linkedin.com/in/jakub-m-matusik-81480b264/" className="text-white me-4">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/jakubmat2001?tab=overview&from=2023-12-01&to=2023-12-05" className="text-white me-4">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </section>

                <section>
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold">Note</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                                <p>
                                    Have a great day.
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-3 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold">Inquiries & More</h6>
                                <hr className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                                <p>
                                    <a href="#" onClick={toggleRequestGrades} style={{color: "white", borderBottom: "solid white 2px"}}>Request Grades</a>
                                </p>
                                <br/>
                                <p>
                                    <a href="#" onClick={toggleDirectContact} style={{color: "white", borderBottom: "solid white 2px"}}>Direct Contact</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold">Contact</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                                <p><i className="fas fa-home mr-3"></i> Aberdeen, Scotland</p>
                                <p><i className="fas fa-envelope mr-3"></i> jakubmatusik11@gmail.com</p>
                                <p><i className="fas fa-phone mr-3"></i> +44 0798 3570 285</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div
                    className="text-center p-3"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © 2023 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/"> <b>J.M.Matusik</b></a>
                </div>
            </footer>
        </div >
  );
});

export default ContactMe;

