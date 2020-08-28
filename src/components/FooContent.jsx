import React from "react";
import Styles from "./FooContent.module.css";
const FooContent = () => {
  const address = [
    {
      id: 1,
      l1: `Vedic Theology USA`,
      l2: `4116 Ayodhya Way, Ijamsville`,
      l3: `MD 21754`,
    },
    {
      id: 2,
      l1: `Shanthibini Gurukulam India`,
      l2: `Sri Kariyamanikka perumal Kovil Street, East Agraharam`,
      l3: `Kadayanallur 627757`,
    },
  ];
  const contact = [
    { id: 1, display: "Phone : +91 94444 55192" },
    { id: 2, display: "Email : venkatasastri@yahoo.com" },
  ];
  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <div className={Styles.content1}>
          <h1>
            <b>A</b>bout us
          </h1>
          <p>About text</p>
          <p>Goal text</p>
        </div>
        <div className={Styles.content2}>
          <h1>
            <b>Q</b>uick links
          </h1>
          <p>link!</p>
        </div>
        <div className={Styles.content3}>
          <h1>
            <b>F</b>ind us
          </h1>
          {address.map((e) => (
            <li key={e.id}>
              {e.l1}
              <br />
              {e.l2}
              <br />
              {e.l3}
            </li>
          ))}
          {contact.map((e) => (
            <li key={e.id}>{e.display}</li>
          ))}
        </div>
      </div>
      <footer className={Styles.foo}>
        Vedictheology © 2020 Created by Like minded developers
      </footer>
    </div>
  );
};

export default FooContent;
