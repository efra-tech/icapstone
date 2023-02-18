import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Button from '@mui/material/Button';

export default function Footer() {
    return (
    <div>
        <div className="footerp">
    <p className="mail">
       <Button href="mailto:Forte@gmail.com" color="secondary" variant="contained" style={{fill: "white"}} startIcon={<EmailIcon/>}>Forte@gmail.com</Button>
    </p>
    <p className="phone">
        <Button href="555-555-5555" color="secondary" variant="contained" style={{fill: "white"}} startIcon={<LocalPhoneIcon/>}>555-555-5555</Button>
    </p>
    <p className="copyright">
        &copy; Forte 2021
    </p>
    </div>
    <div className="footer">
        <h2>Join the Party</h2>
    </div>
    </div>
    );
}
