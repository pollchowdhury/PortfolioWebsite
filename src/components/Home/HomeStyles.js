import styled from "styled-components";
import image from "../../Images/Img.jpeg";
import pimg1 from "../../Images/Project_Pic/Webchatpic.png";
import pimg2 from "../../Images/Project_Pic/coffeewebsite.PNG";
import pimg3 from "../../Images/Project_Pic/ProtfolioProjectPic.PNG";
import pimg4 from "../../Images/Project_Pic/javaproject.png";

export const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 128px 200px 306px;
  width: 100%;
  height: 732px;
  left: 0px;
  top: 69px;
  border: 1px solid #000000;
  box-sizing: border-box;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background: #000000;
`;
export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;

  position: static;
  width: 100%;
  height: 100%;
  left: 658px;
  top: 128px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 1px 0px;
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  color: #fafafa;
  font-family: "DM Sans", sans-serif;

  width: 660px;
  height: 218px;
  left: 0px;
  top: 0px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 32px 0px 0px;
`;

export const HeroBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  width: 365px;
  height: 48px;
  left: 79.5px;
  top: 250px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 20px;
`;
export const LeftButton = styled.button`
  padding: 11px 20px;
  margin-right: 10px;
  width: 169px;
  height: 48px;
  left: 0px;
  top: 0px;
  background: #5c62ec;
  border-radius: 5px;
  color: #ffffff;
  font-family: "DM Sans", sans-serif;
`;

/**
 * About section
 */
export const Aboutsection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 237px 128px;
  background: #000000;
`;

export const AboutCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 24px;
  background: #1c1e22;
  border-radius: 8px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  margin-left: 32px;

  font-family: DM Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;

  /* or 175% */

  letter-spacing: 0.44px;
  color: #ffffff;
`;

export const Image = styled.img.attrs((props) => ({
  src: props.Img || image,
}))`
  position: static;
  width: 326.33px;
  height: 405.16px;
  left: 24px;
  top: 24px;
  border-radius: 8px;
  background: #85bfd1;
`;
export const AboutButton = styled.button`
  position: static;
  width: 198px;
  height: 48px;
  left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 0.997936px solid #ffffff;
  box-sizing: border-box;
  border-radius: 8px;
  font-family: DM Sans;
  background: #1c1e22;
  color: #ffffff;
`;
/**
 * Projects section
 */

export const ProjectSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 142px 128px;
  text-align: center;
  color: #ffffff;
  background: #000000;
  font-family: DM Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
`;

export const ProjectImagecontainer = styled.div`
  padding: 32px 64px;
  background: #1c1e22;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProjectImage1 = styled.img.attrs((props) => ({
  src: props.Img || pimg1,
}))`
  width: 1000px;
  height: 534px;
  padding: 20px 0px;

  border-radius: 8px;
`;
export const ProjectImage2 = styled.img.attrs((props) => ({
  src: props.Img || pimg2,
}))`
  width: 1000px;
  height: 534px;
  padding: 20px 0px;
  border-radius: 8px;
`;
export const ProjectImage3 = styled.img.attrs((props) => ({
  src: props.Img || pimg3,
}))`
  width: 1000px;
  height: 534px;
  padding: 20px 0px;
  border-radius: 8px;
`;
export const ProjectImage4 = styled.img.attrs((props) => ({
  src: props.Img || pimg4,
}))`
  width: 1000px;
  height: 534px;
  margin: 20px 0px;
  background: #ffffff;
  border-radius: 8px;
`;

export const ProjectsButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 20px;
  background: #5c62ec;
  border-radius: 8px;
  color: #ffffff;
`;
