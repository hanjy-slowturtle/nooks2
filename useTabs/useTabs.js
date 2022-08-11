export const useTabs = (allTabs, initialTabIndex = 0) => {
  if (!allTabs || !Array.isArray(allTabs) || allTabs.length === 0) {
    return;
  }
  const [tabIndex, setTabIndex] = useState(initialTabIndex);
  return {
    currentTab: allTabs[tabIndex],
    changeTab: setTabIndex,
  };
};
