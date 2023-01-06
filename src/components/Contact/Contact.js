import React from "react";
import {
  Formcontainer,
  Formcontent,
  Form,
  Label,
  Input,
  Button,
  Textarea,
  Nameinput,
  Messageinput,
  Emailinput,
  Submitalert,
} from "./ContactStyles";
import { useForm, ValidationError } from "@formspree/react";
const Contact = () => {
  const [state, handleSubmit] = useForm("xrgjpyek");
  if (state.succeeded) {
    return (
      <>
        <Submitalert>
          <p>Thanks for Contacting</p>
        </Submitalert>
      </>
    );
  }
  return (
    <>
      <Formcontainer>
        <Formcontent>
          <h1 style={{ paddingBottom: "20px" }}>Lets Talk!</h1>
          <p style={{ paddingBottom: "45px" }}>
            If you are interested in my work or have any concerns, do not
            hesitate to contact me!
          </p>
        </Formcontent>
        <Form onSubmit={handleSubmit}>
          <Nameinput>
            <Label htmlFor="Name">Name</Label>
            <Input id="text" type="text" name="text" />
            <ValidationError prefix="text" field="text" errors={state.errors} />
          </Nameinput>
          <Emailinput>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" name="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </Emailinput>
          <Messageinput>
            <Label htmlFor="text">Message</Label>
            <Textarea id="message" name="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </Messageinput>
          <Button type="submit" disabled={state.submitting}>
            Submit
          </Button>
        </Form>
      </Formcontainer>
    </>
  );
};

export default Contact;
