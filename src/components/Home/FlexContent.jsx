import React from "react";
import { Card } from "antd";
import Styles from './FlexContent.module.css';
const FlexContent = ({data}) => {
  return (
    <div className={Styles.container}>
        {data.map((e) => <Card title={e.title} className={Styles.cards} key={e.id} hoverable><p>{e.description}</p></Card>)}
    </div>
  );
};

export default FlexContent;
