import TabContent from "./TabContent";
import TabNavigation from "./TabNavigation";
import { useState } from "react";

function Tab() {
  const [tabActive, setTabActive] = useState("react");

  const setActiveTabFunc = (tabActive) => {
    setTabActive(tabActive); // function Tab đc RENDER lại
    // console.log("tabActive changed to: ", tabActive);
  };

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
