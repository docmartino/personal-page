import type { NextPage } from "next";
import myPicture from '../public/assets/Picture_NB.jpg'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
      <div className="background">
        <div className="main-container">
        <div className="text-container">
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Repudiandae, velit eaque 
            atus officiis illo libero optio? Enim, odit, 
            pariatur minus mollitia, quae dicta hic nobis
             eos ex sequi ipsum at.
          </div>

          <div className="photo-container">
            <Image src={myPicture} alt="My Picture" width={400} height={533} className='photo'/>
          </div>
        </div>
      </div>
  );
};

export default Home;
