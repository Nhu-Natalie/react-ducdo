import { useState, useEffect } from "react";

import TabContent from "./TabContent";
import TabNavigation from "./TabNavigation";

let i = 0;

function Tab() {
  i++;
  const [tabActive, setTabActive] = useState("react");

  const setActiveTabFunc = (tabActive) => {
    setTabActive(tabActive); // function Tab đc RENDER lại
    // console.log("tabActive changed to: ", tabActive);
  };

  // useEffect(() => {}, [dependency]);

  useEffect(() => {
    // Luôn chạy khi state thay đổi và lần đầu render
    console.log("useEffect running version 00" + i, tabActive);
  }, [tabActive]);
  // Nếu click vue -> tabActive(từ react --> vue )

  return (
    <div className="container">
      <div id="tabs" className="tabs-container">
        <TabNavigation activeFunc={setActiveTabFunc} active={tabActive} />
        <TabContent active={tabActive} />
      </div>
    </div>
  );
}

export default Tab;

// Thay đổi state của TAB
// ==========================================
// 1. data truyền từ con lên
// 2. thay đổi state ở trong tab cha theo giá trị con truyền lên khi click
