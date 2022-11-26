import React from "react";
import { IconContext } from "react-icons";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { BsFillPhoneFill } from "react-icons/bs";
import profile from "./../Assets/profile_picture.webp";
export default function contact() {
  return (
    <>
      <div className="container" id="Contact">
        <div className="container_content">
          <div className="container_content_inner">
            <div className="title">
              <h1>Contact:</h1>
            </div>
            <div className="par">
              <section className="content-p">
                <IconContext.Provider value={{ className: "react-icons" }}>
                  <a className="info__mail" href="mailto:">
                    <GrMail></GrMail> lemoine.charlottepro@icloud.com
                  </a>
                  {/* <a className="info__phone" href="tel:+">
                    <BsFillPhoneFill></BsFillPhoneFill>
                    <span className="phone"> 0778218944</span>
                  </a>  */}

                  <ul className="info__social">
                    <li className="Facebook">
                      <a href="https://www.facebook.com/Charlotte.Lemoine0">
                        <FaFacebook></FaFacebook> Facebook
                      </a>{" "}
                    </li>
                    <li className="Linkedin">
                      <a href="https://www.linkedin.com/in/charlotte-lem/">
                        <FaLinkedin></FaLinkedin> Linkedin
                      </a>
                    </li>
                    <li className="Github">
                      <a href="https://github.com/Charlotte-Lem?fbclid=IwAR2vkvvDG99sHLVex9ULml653kpG0Qxyswh83sxzkvmrRkhlSXIP31ijyX4">
                        <FaGithub></FaGithub> Github
                      </a>
                    </li>
                  </ul>
                </IconContext.Provider>
              </section>
            </div>
          </div>
        </div>
        {/* <div className="container_outer_img">
          <div className="img-inner">
            <img className="container_img" src={profile} alt="moi" />
          </div>
        </div> */}
      </div>
    </>

    // <div className="info container_outer_img">
    //   <h1>Pour me contacter : </h1>
    //   <IconContext.Provider value={{ className: 'react-icons' }}>

    //     <a className="info__mail" href="mailto:">
    //       <GrMail></GrMail> lemoine.charlotte@gmail.com
    //     </a>

    //     <a className="info__phone" href="tel:+">
    //       <BsFillPhoneFill></BsFillPhoneFill>
    //       <span className="phone"> 0778218944</span>
    //     </a>
    //     <p className="Discord">
    //       <FaDiscord></FaDiscord> Alhyrian#2487
    //     </p>
    //     <ul className="info__social">
    //       <li className="Facebook">
    //         {' '}
    //         <a href="https://www.facebook.com/Charlotte.Lemoine0">
    //           <FaFacebook></FaFacebook> Facebook
    //         </a>{' '}
    //       </li>
    //       <li className="Linkedin">
    //         <a href="https://www.linkedin.com/in/charlotte-lem/">
    //           <FaLinkedin></FaLinkedin> Linkedin{' '}
    //         </a>
    //       </li>
    //       <li className="Github">
    //         <a href="https://github.com/Charlotte-Lem?fbclid=IwAR2vkvvDG99sHLVex9ULml653kpG0Qxyswh83sxzkvmrRkhlSXIP31ijyX4">
    //           <FaGithub></FaGithub> Github
    //         </a>
    //       </li>
    //     </ul>
    //   </IconContext.Provider>
    // </div>
  );
}
