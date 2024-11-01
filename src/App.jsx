import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home.jsx";
import { Nav } from "./Pages/Nav.jsx";
import { Logos } from "./Pages/logos.jsx";
import {PrivecyPolicy} from "./Pages/PrivecyPolicy.jsx"
import {Contact} from "./Pages/Contact.jsx";
import {Products} from "./Pages/Products.jsx";
import {Help} from "./Pages/Help.jsx";
import {Profiles} from "./Pages/Profiles.jsx";
import {WhySimpleThisPage} from "./Pages/WhySimpleThisPage.jsx";
import {TermsOfService} from "./Pages/TermsOfService.jsx";

export const App = () => {
    const exam1 = "data:image/jpeg;base64,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"
    const profs = [
        ["Cyber Code Master", "Member since: Sep 2024", "Profile: ", "fiverr", "https://www.fiverr.com/cybercodemaster", "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/f277c10bb7cd2c61a543dfcbc4259f37-1727014103894/9dd02721-2d57-4173-af64-3e070dd345e4.png", exam1]
    ]

    return (
        <div style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
            <Nav/>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/logos" element={<Logos/>}/>
                    <Route path="/restricted.html" element={<h1>Warning: Do not use DevTools!</h1>}/>
                    <Route path="/privacypolicy" element={<PrivecyPolicy/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/help" element={<Help/>}/>
                    <Route path="/accounts" element={<Profiles profiles={profs}/>}/>
                    <Route path="/whythispagesosimple" element={<WhySimpleThisPage/>}/>
                    <Route path="/termsofservice" element={<TermsOfService/>}/>
                </Routes>
            </Router>

            <footer className="text-white" style={{backgroundColor: "#121212"}}>
                {/* Social media section */}
                <section className="d-flex justify-content-center py-4" style={{backgroundColor: "#1f1f1f"}}>
                    <span className="me-3">Connect with us:</span>
                    <a href="#" className="text-white mx-3"><i className="fab fa-facebook"></i></a>
                    <a href="#" className="text-white mx-3"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="text-white mx-3"><i className="fab fa-linkedin"></i></a>
                    <a href="#" className="text-white mx-3"><i className="fab fa-github"></i></a>
                </section>

                {/* Main footer content */}
                <section className="container text-center text-md-start py-5">
                    <div className="row">
                        {/* Company info */}
                        <div className="col-md-4 mb-4">
                            <h6 className="fw-bold text-uppercase">CyberStudio</h6>
                            <p className="text-muted">Innovative solutions in software engineering, blockchain, and
                                cybersecurity.</p>
                            <hr style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}/>
                        </div>

                        {/* Products */}
                        <div className="col-md-2 mb-4">
                            <h6 className="fw-bold text-uppercase">Products</h6>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-white">Empty</a></li>
                            </ul>
                        </div>

                        {/* Useful links */}
                        <div className="col-md-2 mb-4">
                            <h6 className="fw-bold text-uppercase">Useful Links</h6>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-white">Your Account</a></li>
                                <li><a href="/help" className="text-white">Help Center</a></li>
                                <li><a href="/privacypolicy" className="text-white">Privacy Policy</a></li>
                                <li><a href="/contact" className="text-white">Contact Us</a></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="col-md-4 mb-4">
                            <h6 className="fw-bold text-uppercase">Contact</h6>
                            <ul className="list-unstyled">
                                <li><i className="fas fa-map-marker-alt me-2"></i> Khulna, Jashore, Bangladesh</li>
                                <li><i className="fas fa-envelope me-2"></i> tokyintelligentgamer@gmail.com</li>
                                <li><i className="fas fa-phone me-2"></i> +8801728682807</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Achievements & Certifications */}
                <section className="container my-5 text-center">
                    <h6 className="fw-bold text-uppercase mb-4">Achievements & Certifications</h6>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="card bg-dark text-white h-100 border-light">
                                <div className="card-body">
                                    <h5 className="card-title">Certified Blockchain Expert</h5>
                                    <p className="card-subtitle text-muted mb-1">Blockchain Council, 2023</p>
                                    <p>In-depth certification in blockchain technology covering cryptography, consensus
                                        algorithms, and networks.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card bg-dark text-white h-100 border-light">
                                <div className="card-body">
                                    <h5 className="card-title">Ethical Hacking Certification</h5>
                                    <p className="card-subtitle text-muted mb-1">EC-Council, 2022</p>
                                    <p>Specialized in ethical hacking with a focus on penetration testing and system
                                        vulnerability assessments.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card bg-dark text-white h-100 border-light">
                                <div className="card-body">
                                    <h5 className="card-title">Google Cloud Professional Certification</h5>
                                    <p className="card-subtitle text-muted mb-1">Google Cloud, 2022</p>
                                    <p>Advanced certification in Google Cloud services, cloud computing essentials, and
                                        scalable applications.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer Bottom */}
                <div className="text-center py-3" style={{backgroundColor: "#1f1f1f"}}>
                    <p className="mb-0">© 2024 CyberStudio. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};
