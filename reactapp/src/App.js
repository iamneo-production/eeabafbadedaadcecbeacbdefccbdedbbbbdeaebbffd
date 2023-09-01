import { getUserIpDetails, getTopThree } from './functions/destructuring';
function App() {
  const userResponse = { userName: 'test' };
  const userDetails = getUserIpDetails(userResponse);
  console.log(userDetails); // Output: ['test', '0.0.0.0']
  const studentMarks = [null, 70];
  const topThreeStudents = getTopThree(studentMarks);
  console.log(topThreeStudents);
  if(topThreeStudents[0]==null){
    topThreeStudents[0]='null';
  }
  if(topThreeStudents[1]==null){
    topThreeStudents[1]='null';
  }
  if(topThreeStudents[2]==null){
    topThreeStudents[2]='null';
  }

  return (
    <div>
      <h1>User Details:</h1>
      <p>Username: {userDetails[0]}</p>
      <p>IP Address: {userDetails[1]}</p>

      <h1>Top Three Students:</h1>
      <ul>
      <li>First: {topThreeStudents[0]}</li>
        <li>Second: {topThreeStudents[1]}</li>
        <li>Third: {topThreeStudents[2]}</li>
      </ul>
    </div>
  );
}
export default App;
