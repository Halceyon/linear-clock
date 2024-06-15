const useOperatingSystem = () => {
  let platform;

  if (window.navigator.platform) {
    platform = window.navigator.platform.toLowerCase();
  } else if (navigator.userAgentData && navigator.userAgentData.platform) {
    platform = navigator.userAgentData.platform.toLowerCase();
  } else {
    // Handle the case when neither property is available
    return 'Unknown';
  }

  if (platform.includes('win')) {
    return 'Windows';
  } else if (platform.includes('mac')) {
    return 'Mac';
  } else {
    return 'Other';
  }
};

export { useOperatingSystem };
