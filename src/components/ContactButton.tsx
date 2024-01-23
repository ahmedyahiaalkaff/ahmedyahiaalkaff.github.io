'use client';
import { scrollToSection } from "@/lib/util";
import Button from "./Button";

const ContactButton = () => {
  return (
    <Button label="Contact me" onClick={()=>scrollToSection('#contact')}/>
  );
}

export default ContactButton;