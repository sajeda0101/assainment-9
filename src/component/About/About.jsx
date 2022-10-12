import React from 'react';
import img from '../../image/3.jpg'
import Footer from '../Footer/Footer';

const About = () => {
    return (
        <div>
            <div className="mt-36 w-4/5 m-auto bg-red-200 p-12 rounded-md text-2xl">
      <p>If you want to be improve your IQ knowledge then quiz will be help you increase knowladge.So We are give you this opportunity for improve your knowledge. </p>
    </div>
    <div className="mt-12 ml-96">
      <img src={img} alt="" className="w-2/5 rounded-md ml-28" />
    </div>
    <Footer></Footer>
        </div>
    );
};

export default About;