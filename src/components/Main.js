import React from "react"
import deskserv from "../images/desktop&server.png"
import camera from "../images/camera.png"
import data from "../images/data.png"

export default function Main() {
    return (
        <body>
            <div className="main">
                <div className="bigContTitle">
                    <p id="services">SERVICES</p>
                </div>
                <div className="bigCont">
                    <div className="bodyContainers">
                        <div className="contTitle">
                            <img src={deskserv} alt="desktop&server" width="225px" className="bodyImg" />
                            <p>Desktop & Server</p>
                        </div>
                        <div className="contBody">
                            <h3 className="bodyBold">
                                With every partner, existing and new, an assessment of the required IT infrastructure in a 
                                professional environment is crucial to generate the most efficient and suitable solution. 
                                After all, to each to their own.
                            </h3>
                            <ul className="bodyList">
                                <li>
                                    Design, install, and setup of hardware such as PCs, servers, printers along with wireless 
                                    functionalities.
                                </li>
                                <li>
                                    General maintenance including installation of the latest patches and updates to the
                                    commonly used operating systems, Windows 10/11 and MacOS. 
                                </li>
                                <li>
                                    Configuration of a company database and domain to ensure full connectivity between workers
                                    and equipment.
                                </li>
                                <li>
                                    Telecommunications systems install through VoIP phones, video, and voice chat applications.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="bodyContainers">
                        <div className="contTitle">
                            <img src={camera} alt="camera" width="225px" className="bodyImg" />
                            <p>Surveillance & Networking</p>
                        </div>
                        <div className="contBody">
                            <h3 className="bodyBold">
                                Ensuring connectivity and security is essential at any given organization including us.
                                Groups of computers should be in synchronization throughout the daily workday, making
                                daily computing tasks seamless.
                            </h3>
                            <ul className="bodyList">
                                <li>
                                    Protecting organization networks from unauthorized access and threats through industry
                                    leading equipment and security applications.
                                </li>
                                <li>
                                    Installation and configuration of network hardware such as routers, firewalls, and switches.
                                </li>
                                <li>
                                    Monitoring workplace activities through the latest surveillance equipment installation and
                                    configuration, allowing replays at the touch of a finger.
                                </li>
                                <li>
                                    Continuous recording with HD quality stored on the organization server
                                    allows for archives up to months prior depending on storage options.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="bodyContainers">
                        <div className="contTitle">
                            <img src={data} alt="data" width="225px" className="bodyImg" />
                            <p>Data Management</p>
                        </div>
                        <div className="contBody">
                            <h3 className="bodyBold">
                                With any active organization comes thousands of data entries which calls for the latest 
                                storage technology. In a technology driven world, being slowed by 
                                outdated storage equipment is dicey.
                            </h3>
                            <ul className="bodyList">
                                <li>
                                    Remote and on-site sessions ensure data is being delivered seamlessly between network computers
                                    and partner communications.
                                </li>
                                <li>
                                    Tune-ups to existing hardware with bloatware removal and system setting refinement.
                                </li>
                                <li>
                                    Virtual machines through the organization domain allows for constant data flow, regardless of 
                                    which computer station at the organization.
                                </li>
                                <li>
                                    Wireless printing and fax services such as selecting which faxes are printed are just one of
                                    the many conveniences modern software can provide.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <hr></hr>

                <div className="bigContTitle">
                    <p id="partners">PARTNERS</p>
                </div>
                <div className="bigCont">
                    <div className="bodyContainers">
                        <div className="contTitle">
                            <p><a href="https://www.nychealthandhospitals.org/bellevue/">NYC Health + BELLEVUE</a></p>
                        </div>
                        <div className="contBody">
                            <h3>
                                Manhattan, NY
                            </h3>
                        </div>
                    </div>
                    <div className="bodyContainers">
                        <div className="contTitle">
                            <p><a href="https://www.upbrooklynent.com">UPB Brooklyn ENT</a></p>
                        </div>
                        <div className="contBody">
                            <h3>
                                Brooklyn, NY
                            </h3>
                        </div>
                    </div>
                    <div className="bodyContainers">
                        <div className="contTitle">
                            <p><a href="http://lowermanhattandialysis.com">LMDC</a></p>
                        </div>
                        <div className="contBody">
                            <h3>
                                Manhattan, NY
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="bigCont">
                    <div className="bodyContainers">
                        <div className="contTitle">
                            <p><a href="https://goo.gl/maps/SDFN8KZq8fCPpbG58">Royzman & Poznyansky, DDS</a></p>
                        </div>
                        <div className="contBody">
                            <h3>
                                Brooklyn, NY
                            </h3>
                        </div>
                    </div>
                    <div className="bodyContainers">
                        <div className="contTitle">
                            <p><a href="https://goo.gl/maps/HNQtApCfUDVKBnyr8">Irina Mikheyeva, DO</a></p>
                        </div>
                        <div className="contBody">
                            <h3>
                                Brooklyn, NY
                            </h3>
                        </div>
                    </div>
                    <div className="bodyContainers">
                        <div className="contTitle">
                            <p><a href="https://www.nyurology.com">NY UROLOGY</a></p>
                        </div>
                        <div className="contBody">
                            <h3>
                                Brooklyn, NY
                            </h3>
                        </div>
                    </div>
                </div>
                
                <div className="bigCont">
                    <div className="bodyContainers">
                        <div className="contTitle">
                            <p></p>
                        </div>
                        <div className="contBody">
                            <h3>
                            </h3>
                        </div>
                    </div>
                    <div className="bodyContainers">
                        <div className="contTitle">
                            <p><a href="https://goo.gl/maps/hqKUYxooWiUvhD319">Chinatown Dialysis Center</a></p>
                        </div>
                        <div className="contBody">
                            <h3>
                                Brooklyn, NY
                            </h3>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <hr></hr>

                <div className="bigContTitle">
                    <p id="about">ABOUT</p>
                </div>
                <div className="bigCont">
                    <div className="bodyContainers">
                        <div className="contTitle">
                            <p>Purpose</p>
                        </div>
                        <div className="contBody">
                            <h3 className="bodyBold">
                                Leading the Healthcare field by IT refinement is one of many goals at Barmaley Consulting.
                                Partner involvement is crucial to the agile development approach we take.
                            </h3>
                            <ul className="bodyList">
                                <li>
                                    Many healthcare organizations have outdated computer setups that leave vulnerabilities
                                    within the system network.
                                </li>
                                <li>
                                    Existing configurations can be tuned to further support larger bandwidths within
                                    an organization through software configuration or hardware assessment.
                                </li>
                                <li>
                                    Updating networks of computers within the healhcare field to better serve evergrowing lists
                                    of patients remains top priority.
                                </li>
                                <li>
                                    While serving the healthcare field contributes to a large portion of our partner list, we
                                    may be able to assess and help beyond healthcare.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="bodyContainers">
                        <div className="contTitle">
                            <p>Mission</p>
                        </div>
                        <div className="contBody">
                            <h3 className="bodyBold">
                                With great power comes great responsibility. We have an obligation to leave every partner with utmost 
                                satisfaction and peace of mind when continuing their daily tasks.
                            </h3>
                            <ul className="bodyList">
                                <li>
                                    Ensuring partner satisfaction and reliability within the organization network. Cutting corners
                                    is simply not a possibility.
                                </li>
                                <li>
                                    Thoroughly assessing an inquiry remotely, and on-site is crucial to fully understand the needs
                                    of every partner.
                                </li>
                                <li>
                                    Privacy of data is nothing less of high priority when handling every IT support request, big or 
                                    small.
                                </li>
                                <li>
                                    Going above and beyond at each job should never be asked for when we do what we love. Passion and
                                    the desire for greatness fuels every job.
                                </li>
                            </ul>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                    <div className="bodyContainers">
                        <div className="contTitle">
                            <p>Contact</p>
                        </div>
                        <div className="contBody">
                            <h3 className="bodyBold">
                                To set up an assessment, there are multiple commuication options available.
                                Please leave a name, best method of contact and detailed inquiry.
                            </h3>
                            <ul className="bodyList">
                                <li id="tel">
                                <a href="tel:3472040737">(347) 204-0737</a>
                                </li>
                                <li id="email">
                                <a href="mailto:barmaley75@gmail.com">barmaley75@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}