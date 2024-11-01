import {useEffect, useRef, useState} from "react";

export const Home = () => {
    const [s, setS] = useState(""); // Current text being displayed
    const i = useRef(0); // Index to track position in text
    const currentTextIndex = useRef(0); // Index for the current text
    const speed = 340; // Speed of typing
    const isDeleting = useRef(false); // Flag to check if we are deleting

    const texts = [
        'PROGRAMMER',
        'ETHICAL HACKER',
        'GRAPHICS DESIGNER',
        'SOFTWARE ENGINIEER',
        'CUMPUTER ENGINNER',
        'ETC....'
    ]; // Array of texts

    const typeWriter = () => {
        const txt = texts[currentTextIndex.current]; // Get the current text based on index

        // Check if we are deleting
        if (isDeleting.current) {
            // Remove a character
            setS((prev) => txt.substring(0, i.current)); // Update state with the current text
            i.current--; // Move backwards in the string

            // If we have deleted all characters, switch to typing mode
            if (i.current < 0) {
                isDeleting.current = false; // Switch to typing mode
                currentTextIndex.current = (currentTextIndex.current + 1) % texts.length; // Move to the next text
                setTimeout(typeWriter, 100 * 2); // Wait before starting to type
                return;
            }
        } else {
            // Add the next character
            setS((prev) => txt.substring(0, i.current + 1)); // Append next character to the current text
            i.current++; // Move to the next character

            // If we have typed all characters, switch to deleting mode
            if (i.current >= txt.length) {
                isDeleting.current = true; // Switch to deleting mode
                setTimeout(typeWriter, speed * 2); // Wait before starting to delete
                return;
            }
        }

        // Call the function again after the speed duration
        setTimeout(typeWriter, speed);
    };

    // Start typing automatically on component mount
    useEffect(() => {
        typeWriter();
    }, []);

    return (
        <div style={{fontSize: "22px"}}>
            <div className="video-background-holder">
                <div className="video-background-overlay"></div>
                <video playsInline autoPlay muted loop>
                    <source
                        src="https://videos.pexels.com/video-files/1943483/1943483-uhd_2560_1440_25fps.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className="video-background-content container h-100">
                    <div className="d-flex h-100 text-center align-items-center">
                        <div className="w-100" style={{color: "#9560e8", fontSize: "10rem"}}>
                            <h1 style={{color: "#ff00fc"}}>Hi! I am Cyber Code Master</h1>
                            <h1>I am <code style={{color: "cyan"}}>{s}</code></h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded mx-auto"
                 style={{marginTop: "3rem", width: "85%"}}>
                <div className="card-body">
                    <h5 className="card-title shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                        <marquee>Skills:</marquee>
                    </h5>
                    <ol className="list-group list-group-numbered shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                        <li className="list-group-item d-flex justify-content-between align-items-start shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Programming Languages:</div>
                                <li className="list-group-item d-flex justify-content-between align-items-start shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Web Development:</div>
                                        HTML, CSS, JavaScript, Node.js, React, Vite
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Backend & Software Development:</div>
                                        Java, C++, C#, Python, PHP, CMD
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Scripting & Automation:</div>
                                        PowerShell, Linux Shell (SH), general scripting
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Systems Programming:</div>
                                        C
                                    </div>
                                </li>
                            </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Cybersecurity:</div>
                                <li className="list-group-item d-flex justify-content-between align-items-start shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">Ethical Hacking:</div>
                                        Penetration testing, System security
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                                    <div className="ms-2 me-auto">
                                        Binary & System Security
                                    </div>
                                </li>
                            </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Graphic Design:</div>
                                <li className="list-group-item d-flex justify-content-between align-items-start shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                                    <div className="ms-2 me-auto">
                                        Photo Editing, Video Editing, Logo Design
                                    </div>
                                </li>
                            </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Tools & Technologies:</div>
                                <li className="list-group-item d-flex justify-content-between align-items-start shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                                    <div className="ms-2 me-auto">
                                        Virtual Machine Management
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                                    <div className="ms-2 me-auto">
                                        Email Automation (using Gmail API with OAuth2 in Spring Boot projects)
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                                    <div className="ms-2 me-auto">
                                        8K Resolution and Multi-Monitor Support setup for professional PC builds
                                    </div>
                                </li>
                            </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Additional Skills:</div>
                                <li className="list-group-item d-flex justify-content-between align-items-start shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                                    <div className="ms-2 me-auto">
                                        Advanced experience in project planning, critical thinking, and innovation
                                    </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-start shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                                    <div className="ms-2 me-auto">
                                        Knowledgeable in blockchain and Web3 technologies for software engineering roles
                                    </div>
                                </li>
                            </div>
                        </li>
                    </ol>
                </div>
                <hr/>
                <div className="card-body">
                    <div className="card">
                        <div className="card-header text-center">
                            Short bio about me
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                <h1 className="text-center">Cyber Code Master</h1>
                                <p className="text-center"><strong>Location:</strong> Khulna, Jashore, Bangladesh</p>
                                <p className="text-center"><strong>Contact:</strong> +8801728682807 | <strong>Email:</strong> <a
                                    href="mailto:tokyintelligentgamer@gmail.com">tokyintelligentgamer@gmail.com</a></p>

                                <h2 className="text-center">Professional Summary</h2>
                                <p className="text-center">I am an advanced Computer and Software Engineer with a specialization in Full Stack
                                    Development, Blockchain/Web3 technologies, Programming, Cybersecurity (Ethical
                                    Hacking), and Graphic Design. Over the years, I have developed extensive expertise
                                    across multiple domains, continuously seeking innovative solutions to complex
                                    technical challenges. My passion for technology and my drive to push boundaries make
                                    me an invaluable asset in any engineering or technical support role. Currently
                                    joining EoT Labs as a Support Engineer, I bring a diverse skill set and a commitment
                                    to leveraging technology for impactful solutions.</p>

                                <h2 className="text-center">Technical Skills</h2>
                                <h3>Programming Languages</h3>
                                <ul>
                                    <li><strong>Web Development:</strong> HTML, CSS, JavaScript, Node.js, React, Vite
                                    </li>
                                    <li><strong>Backend & Software Development:</strong> Java, C++, C#, Python, PHP, CMD
                                    </li>
                                    <li><strong>Scripting & Automation:</strong> PowerShell, Linux Shell (SH), general
                                        scripting
                                    </li>
                                    <li><strong>Systems Programming:</strong> C</li>
                                </ul>

                                <h3>Graphic Design</h3>
                                <ul>
                                    <li>Photo Editing</li>
                                    <li>Video Editing</li>
                                    <li>Logo Design</li>
                                </ul>

                                <h3>Cybersecurity</h3>
                                <ul>
                                    <li>Ethical Hacking: Penetration Testing, System Security</li>
                                    <li>Binary & System Security</li>
                                </ul>

                                <h3>Tools & Technologies</h3>
                                <ul>
                                    <li>Virtual Machine Management</li>
                                    <li>Email Automation (Gmail API with OAuth2, integrated in Spring Boot projects)
                                    </li>
                                    <li>High-performance PC Builds: Configured for 8K Resolution, Multi-Monitor Support,
                                        Water Cooling, and Advanced RGB Lighting
                                    </li>
                                </ul>

                                <h2 className="text-center">Professional Experience</h2>
                                <h3 className="text-center">Support Engineer - EoT Labs</h3>
                                <p className="text-center">In my current role as a Support Engineer at EoT Labs, I am involved in providing
                                    technical support and solutions within a blockchain-focused environment. This
                                    position allows me to apply my expertise in Web3 technologies, helping EoT Labs
                                    streamline their operations and enhance the performance and stability of their
                                    solutions. I take pride in being a part of a team that pushes the boundaries of
                                    blockchain innovation.</p>

                                <h2 className="text-center">Additional Competencies</h2>
                                <ul>
                                    <li><strong>Critical Thinking & Problem Solving:</strong> My experience has honed my
                                        skills in analyzing complex technical issues and designing solutions that not
                                        only solve the problem but add value to the system as a whole. This ability is
                                        integral to my work and a driving force in my technical career.
                                    </li>
                                    <li><strong>Innovation:</strong> I am always driven to find new, creative ways to
                                        leverage technology for real-world solutions, consistently pushing the
                                        boundaries of traditional software development and tech application.
                                    </li>
                                    <li><strong>Collaboration & Teamwork:</strong> I thrive in collaborative
                                        environments, both virtual and in-person. Whether I’m working with designers,
                                        developers, or business strategists, I prioritize clear communication and a
                                        unified approach to achieving project goals.
                                    </li>
                                </ul>

                                <h2 className="text-center">Education & Certifications</h2>
                                <p className="text-center">I have a solid educational foundation in computer science and software engineering,
                                    equipping me with theoretical and practical skills that I have continuously built
                                    upon through my professional experience. Additionally, I pursue ongoing learning in
                                    blockchain technology, cybersecurity, and software engineering to stay current with
                                    the latest industry trends and technologies.</p>

                                <h2 className="text-center">Portfolio & Projects</h2>
                                <p className="text-center">Throughout my career, I have developed numerous projects, each an illustration of my
                                    commitment to excellence in software engineering. These range from blockchain
                                    integrations to complex web applications and cybersecurity solutions. My portfolio
                                    showcases my adaptability to various technology stacks and my dedication to
                                    high-quality outcomes.</p>

                                <h2 className="text-center">Contact Me</h2>
                                <p className="text-center">If you are looking for a dedicated professional with a passion for technology and a
                                    commitment to excellence, I would be thrilled to connect. Feel free to reach out to
                                    discuss potential collaborations or to learn more about how my expertise can add
                                    value to your organization.</p>
                            </p>
                        </div>
                    </div>
                    <hr/>
                    <div className="card-body">
                        <ul className="nav nav-tabs shadow-lg p-3 mb-5 bg-body-tertiary rounded" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pdf-tab" data-bs-toggle="tab"
                                        data-bs-target="#pdf-tab-pane" type="button" role="tab"
                                        aria-controls="pdf-tab-pane" aria-selected="true">PDF
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="txt-tab" data-bs-toggle="tab"
                                        data-bs-target="#txt-tab-pane" type="button" role="tab"
                                        aria-controls="txt-tab-pane" aria-selected="false">TXT
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="docx-tab" data-bs-toggle="tab"
                                        data-bs-target="#docx-tab-pane" type="button" role="tab"
                                        aria-controls="docx-tab-pane" aria-selected="false">DOCX
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content shadow-lg p-3 mb-5 bg-body-tertiary rounded" id="myTabContent" style={{resize: "both", overflow: "auto"}}>
                            <div className="tab-pane fade show active" id="pdf-tab-pane" role="tabpanel"
                                 aria-labelledby="pdf-tab" tabIndex="0"><a href="/CyberCode_Master_Resume.pdf" download>
                                <div style={{resize: "both", overflow: "auto", width: "1150px", height: "1150px"}}>
                                    <iframe src="/CyberCode_Master_Resume.pdf" style={{width: "100%", height: "100%"}}/>
                                </div>
                            </a>
                            </div>
                            <div className="tab-pane fade" id="txt-tab-pane" role="tabpanel"
                                 aria-labelledby="txt-tab" tabIndex="0"><a href="/CyberCode_Master_Resume.txt" download><iframe src="/CyberCode_Master_Resume.txt" height="1150" width="1150" style={{resize: "both", overflow: "inline"}}/></a>
                            </div>
                            <div className="tab-pane fade" id="docx-tab-pane" role="tabpanel"
                                 aria-labelledby="docx-tab" tabIndex="0">
                                {/*<a href="/CyberCode_Master_Resume.docx" download><iframe src="/CyberCode_Master_Resume.docx" height="1150" width="1150"/></a>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
