import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon, CDBContainer } from 'cdbreact';

export const Footer = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '40%' }}
      >
        <CDBBox display="flex" alignItems="center">
          <small className="ml-2">&copy; Daniela Lopez, 2022. All rights reserved.</small>
        </CDBBox>
        <CDBFooterLink href="https://github.com/dlope0831/">
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="github" />
          </CDBBtn></CDBFooterLink>
          <CDBFooterLink href="https://www.linkedin.com/in/daniela-lopez-5654851b6/">
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="linkedin" />
          </CDBBtn></CDBFooterLink>
          <CDBFooterLink href="https://stackoverflow.com/users/19469535/daniela/">
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="stack-overflow" />
          </CDBBtn></CDBFooterLink>
        </CDBBox>
    </CDBFooter>
  );
};

export default Footer;
