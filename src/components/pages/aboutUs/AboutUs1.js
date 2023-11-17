import React from "react";
import { NavLink } from "react-router-dom";
import member1 from "../../assets/member1.png"
import member2 from "../../assets/member2.png"
import member3 from "../../assets/member3.png"
import member4 from "../../assets/member4.png"
import member5 from "../../assets/member5.png"
import member6 from "../../assets/member6.png"

const AboutUs = () => {
  return (
    <section>
      <section id="section1">
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
              }}
            >
              <img
                className="Background"
                style={{
                  maxWidth: "100%",
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  background: "linear-gradient(0deg, #B4B9C9 0%, #B4B9C9 100%)",
                }}
                src="https://via.placeholder.com/542x452"
                alt="Placeholder"
              />
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
      <section id="section2">
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
      <section id="section3">
         <div className="TeamMembersV6" style={{ maxWidth: '1440px', margin: '0 auto', padding: '80px 20px', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="Headings" style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div className="Title" style={{ color: '#19213D', fontSize: '36px', fontFamily: 'Inter', fontWeight: '800', lineHeight: '40px', wordWrap: 'break-word' }}>Meet Our Team</div>
        
        <div className="Paragraph" style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center', color: '#19213D', fontSize: '16px', fontFamily: 'Inter', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word' }}>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.</div>
      </div>
     
      <div className="Members" style={{ display: 'flex', alignItems: 'center', gap: '48px' }}>
      <div className="Member" style={{width: 308, height: 459, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
         <img className="Member" style={{height: 378, borderRadius: 8}} src={member1} />
           <h3>Brian Clark</h3>  
           <h4>Founder & Director</h4>
       </div>
      <div className="Member" style={{width: 308, height: 459, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
         <img className="Member" style={{height: 378, borderRadius: 8}} src={member2} />
           <h3>Stephanie Powell</h3>  
           <h4>Co-founder</h4>
       </div>
      <div className="Member" style={{width: 308, height: 459, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
         <img className="Member" style={{height: 378, borderRadius: 8}} src={member3} />
           <h3>Christopher White</h3>  
           <h4>Director</h4>
       </div>
      <div className="Member" style={{width: 308, height: 459, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
         <img className="Member" style={{height: 378, borderRadius: 8}} src={member4} />
           <h3>Emily Miller</h3>  
           <h4>VP of HR</h4>
       </div>
      <div className="Member" style={{width: 308, height: 459, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
         <img className="Member" style={{height: 378, borderRadius: 8}} src={member5} />
           <h3>Michael Davis</h3>  
           <h4>VP of Sales</h4>
       </div>
      <div className="Member" style={{width: 308, height: 459, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
         <img className="Member" style={{height: 378, borderRadius: 8}} src={member6} />
           <h3>William Anderson</h3>  
           <h4>VP of Business</h4>
       </div>
      </div>
    </div>
      </section>
    </section>
  );
};

export default AboutUs;
