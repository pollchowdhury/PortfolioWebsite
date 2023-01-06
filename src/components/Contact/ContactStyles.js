import styled from "styled-components";

import { createGlobalStyle } from "styled-components";

export const Formcontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 64px 397px 128px;
  width: 100%;
  height: 900px;
  font-family: "DM Sans", sans-serif;
  background: #000000;
  color: #ffffff;
`;

export const Formcontent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;

  position: static;
  width: 800px;
  height: 107px;
  left: 397.5px;
  top: 50px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 24px;

  position: static;
  width: 460px;
  height: 546px;
  left: 550px;
  top: 215px;

  /* Borders */

  background: #26292d;
  border-radius: 8px;
`;

export const Label = styled.label`
  position: static;
  left: 0%;
  right: 79.2%;
  top: 0%;
  bottom: 70.83%;
  padding: 5px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */

  letter-spacing: 0.44px;

  /* Body 1 */
  letter-spacing: 0.44px;

  /* Blanco */
  color: #ffffff;
`;
export const Nameinput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;

  left: 5.37%;
  right: 5.37%;
  top: 0;
  bottom: 78.02%;
`;

export const Emailinput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
`;

export const Messageinput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
`;

export const Input = styled.input`
  width: 380px;
  height: 60px;
  left: 0px;
  background: #1c1e22;
  border: 1px solid #a0a0a1;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 15px;
  color: white;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 8px;

  position: static;
  width: 380px;
  height: 48px;
  left: 24px;
  top: 500px;
  margin-left: 10px;
  /* Primario */

  background: #5c62ec;
  border-radius: 8px;
`;
export const Submitalert = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #5c62ec;
  background: #000000;
  font-size: x-large;
  font-family: "DM Sans", sans-serif;
`;
export const Textarea = styled.textarea`
  padding: 16px 15px;

  position: static;
  width: 380px;
  height: 150px;
  left: 0px;
  top: 36px;

  /* Rellenos */

  background: #1c1e22;
  /* Gris */
  border: 1px solid #a0a0a1;
  box-sizing: border-box;
  border-radius: 8px;
  color: white;
`;
