function getTimeStamp() {
  return Date.now();
}

function getLongTime(locale = "es-ES") {
  const options = {
    week: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };
  return new Date().toLocaleDateString(locale, options);
}

module.exports = {
  getLongTime,
  getTimeStamp,
};
