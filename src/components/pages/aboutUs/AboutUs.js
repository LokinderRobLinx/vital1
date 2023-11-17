import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import member1 from "../../assets/member1.png"
import member2 from "../../assets/member2.png"
import member3 from "../../assets/member3.png"
import member4 from "../../assets/member4.png"
import member5 from "../../assets/member5.png"
import member6 from "../../assets/member6.png"
import video1 from "../../assets/video1.mp4"
const membersData = [
  { id: 1, name: 'Brian Clark', role: 'Founder & Director', image: member1 },
  { id: 2, name: 'Stephanie Powell', role: 'Co-founder', image: member2 },
  { id: 3, name: 'Christopher White', role: 'Director', image: member3 },
  { id: 4, name: 'Emily Miller', role: 'VP of HR', image: member4 },
  { id: 5, name: 'Michael Davis', role: 'VP of Sales', image: member5 },
  { id: 6, name: 'William Anderson', role: 'VP of Business', image: member6 },
];

const AboutUs = () => {
  const videoRef = useRef(null);

  const playVideo = () => {
    console.log('playVideo clicked')
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <section>
      <section id="section1" style={{padding:'3vh 7vh'}}>
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <div className="about_content">
              <div className="about_heading">
                <h2>The Story of Vital Creations</h2>
              </div>
              <div className="about_desc">
                <p>
                  Our statistics serve as a testament to our dedication, hard
                  work, and the satisfaction of our clients. These figures
                  provide a comprehensive overview of our performance,
                  demonstrating that we not only meet but exceed expectations
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-6">
      <div
        className="ImageReplace"
        style={{
          maxWidth: "100%",
          width: "100%",
          borderRadius: "8px",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative", // Added position relative for overlay
        }}
      >
        {/* Play icon overlay */}
        <div
          style={{
            position: "absolute",
            cursor: "pointer",
            fontSize: "48px",
            color: "#fff",
          }}
          onClick={playVideo}
        >
          ▶️
        </div>

        {/* Video element */}
        <video
          ref={videoRef}
          style={{
            maxWidth: "100%",
            width: "100%",
            height: "auto",
            borderRadius: "8px",
          }}
          controls={true} // Remove default controls
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
          <div className="about_desc">
            <p style={{ padding: "50px 0" }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elidolor mattis
              sit phasellus mollis sit aliquam sit nullam neques. Eget dictumst
              a at ipsum sed interdum. Proin ut posuere sed inol sit natoque.
              Quam elementum accumsan vitae habitant mattis. Enim sit placerat
              quis. Donec suspendisse malesuada commodo elementum fusce nonol.
              Lorem ipsum dolor sit amet consectetur adipiscing elidolor mattis
              sit phasellus mollis sit aliquam sit nullam neques.
            </p>
            <p style={{ padding: "50px 0" }}>
              Lorem ipsum dolor sit amet consectetur adipiscing elidolor mattis
              sit phasellus mollis sit aliquam sit nullam neques. Eget dictumst
              a at ipsum sed interdum. Proin ut posuere sed inol sit natoque.
              Quam elementum accumsan vitae habitant mattis. Enim sit placerat
              quis. Donec suspendisse malesuada commodo elementum fusce nonol.
              Lorem ipsum dolor sit amet consectetur adipiscing elidolor mattis
              sit phasellus mollis sit aliquam sit nullam neques.
            </p>
            <p style={{ padding: "50px 0" }}>
              Our statistics serve as a testament to our dedication, hard work,
              and the satisfaction of our clients. These figures provide a
              comprehensive overview of our performance, demonstrating that we
              not only meet but exceed expectations. Lorem ipsum dolor sit amet
              consectetur adipiscing elidolor mattis sit phasellus mollis sit
              aliquam sit nullam neques. Eget dictumst a at ipsum sed interdum.
              Proin ut posuere sed inol sit natoque. Quam elementum accumsan
              vitae habitant mattis. Enim sit placerat quis. Donec suspendisse
              malesuada commodo elementum fusce nonol. Lorem ipsum dolor sit
              amet consectetur adipiscing elidolor mattis sit phasellus mollis
              sit aliquam sit nullam neques.
            </p>
          </div>
        </div>
      </section>
      <section style={{background:'#AECFD51A', padding:'3vh 7vh'}} id="section2">
        <div style={{display:'flex', alignContent:'center', justifyContent:'center'}} className="about_heading">
          <h2>Our <span>Mission & Vision</span></h2>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <div className="about_content">
              <div className="about_heading">
                <h3>Vision</h3>
              </div>
              <div className="about_desc">
                <p>
                  Our statistics serve as a testament to our dedication, hard
                  work, and the satisfaction of our clients. These figures
                  provide a comprehensive overview of our performance,
                  demonstrating that we not only meet but exceed expectations
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="about_content">
              <div className="about_heading">
                <h3>Mission</h3>
              </div>
              <div className="about_desc">
                <p>
                  Our statistics serve as a testament to our dedication, hard
                  work, and the satisfaction of our clients. These figures
                  provide a comprehensive overview of our performance,
                  demonstrating that we not only meet but exceed expectations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section3" style={{padding:'3vh 7vh'}}>
         <div className="about_heading" style={{ margin: '0 auto', padding: '80px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2>Meet Our <span>Team</span></h2>
          <p> Our statistics serve as a testament to our dedication, hard
                  work, and the satisfaction of our clients. These figures
                  provide a comprehensive overview of our performance.</p>
        </div>
     
       <div className="Members" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '20px' }}>
      {membersData.map((member) => (
        <div key={member.id} className="Member" style={{ width: 'calc(33.33% - 20px)', height: 459, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
          <img className="Member" style={{ height: 300, borderRadius: 8 }} src={member.image} alt={member.name} />
          <h3>{member.name}</h3>
          <h4 style={{color: '#B4B9C9'}}>{member.role}</h4>
        </div>
      ))}
    </div>
      </section>
    </section>
  );
};

export default AboutUs;
