function TabNavigation(props) {
  console.log(props);
  const active = props.active;
  const setActiveTabFunc = props.activeFunc;

  const checkActiveTab = (idTab) => {
    let classTab = "tab ";
    if (active === idTab) {
      classTab += "active";
    }
    return classTab;
  };

  const handleClickActiveTab = (idTab) => {
    // console.log("cliked: ", idTab);
    setActiveTabFunc(idTab);
  };

  return (
    <div className="tabs">
      <a
        onClick={() => {
          handleClickActiveTab("react");
        }}
        className={checkActiveTab("react")}
      >
        Reactjs
      </a>
      <a
        onClick={() => {
          handleClickActiveTab("vue");
        }}
        className={checkActiveTab("vue")}
      >
        Vuejs
      </a>
      <a
        onClick={() => {
          handleClickActiveTab("angular");
        }}
        className={checkActiveTab("angular")}
      >
        Angular
      </a>
      <a
        onClick={() => {
          handleClickActiveTab("svelte");
        }}
        className={checkActiveTab("svelte")}
      >
        Svelte
      </a>
    </div>
  );
}

export default TabNavigation;

// 1. xác định event đã chạy từ con chưa
