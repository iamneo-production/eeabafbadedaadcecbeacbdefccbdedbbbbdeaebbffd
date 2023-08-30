function getUserIpDetails(userResponse = {}) {
    const { userName, userIp = '0.0.0.0' } = userResponse;
    return [userName, userIp];
  }
  
  // getTopThree function implementation
  function getTopThree(studentMarks = []) {
    const [first = null, second = null, third = null] = studentMarks;
    return [first, second, third];
  }
  module.exports = { getUserIpDetails, getTopThree };
