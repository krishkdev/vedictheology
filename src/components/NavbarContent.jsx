import React from "react";
import { Button, PageHeader, Tag } from "antd";
import Styles from './NavbarContent.module.css';

const NavBar = () => {
  return (
    <div>
       <PageHeader
        title=" Vedictheology"
        className={Styles.header}
        subTitle="Sri Shanthibini Gurukulam Trust"
        avatar={{ src: "https://image.flaticon.com/icons/svg/119/119943.svg" }}
        tags={<Tag color="blue">under dev</Tag>}
        extra={[
          <Button key="4">Gallery</Button>,
          <Button key="3">About Vedas</Button>,
          <Button key="2">Donate</Button>,
          <Button key="1" type="primary">
            Contact us
          </Button>,
        ]}
        
      ></PageHeader>
    </div>
  );
};

export default NavBar;
