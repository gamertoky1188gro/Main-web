import {useEffect} from "react";

export const Nav = () => {

    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
            {
                pageLanguage: "en",
                autoDisplay: false
            },
            "google_translate_element"
        );
    };
    useEffect(() => {
        var addScript = document.createElement("script");
        addScript.setAttribute(
            "src",
            "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        );
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
    }, []);

    return (
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body">
            <script type="text/javascript"
                    src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
            <div className="container-fluid">
                <a className="navbar-brand" href="/my_logo.jpeg">
                    <img
                        src="/my_logo.jpeg"
                        alt="Logo"
                        width="50"
                        height="44"
                        className="d-inline-block"
                    />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" style={{cursor: "none"}} aria-current="page">
                                Cyber Code Master
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/logos">
                                Logos
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/products">
                                Other Products
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/help">
                                Help
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/accounts">
                                my account
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav justify-content-end">
                        <script type="text/javascript"
                                src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                More
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="/contact">Contact Us</a></li>
                                <li><a className="dropdown-item" href="/whythispagesosimple">why this page is very simple?</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" href="/privacypolicy">Privacy Policy</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li>
                                    <div className="dropdown-item" id="google_translate_element"></div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
