import logo from './logo.svg';
import './newcss.css';

function App() {

  
  
  const studentArr = [
    {
      name: "Raihan Nahar Tofa",
      year: "4th year",
      dob: "19 july 1998",
      graduation: "2021" 
    },
    {
      name: "Raihan Nahar Tofa",
      year: "4th year",
      dob: "19 july 1998",
      graduation: "2021" 
    },
    {
      name: "Raihan Nahar Tofa",
      year: "4th year",
      dob: "19 july 1998",
      graduation: "2021" 
    },
    {
      name: "Raihan Nahar Tofa",
      year: "4th year",
      dob: "19 july 1998",
      graduation: "2021" 
    }
  ]
  const blogOBJ2 = {
    name: "XYZ",
    year: "4th year",
    dob: "21 November 1998",
    graduation: "2021"    
  }
  const student= studentArr.map((item,position) => {
    console.log(item);

    return(
      <div className="student" key={position}>
        <h2>
         Title: Student Details
        </h2>
        <h3>{item.name}</h3>
        <h4> {item.year} </h4>
        <p>{item.dob}<br></br>
        {
          item.graduation
        } </p>
      </div>
    )

  }) 


  
  const  style={
    
      margin: '20px',
      borderRadius: '5px',
      boxSizing: 'border-box',
      boxShadow: '0 2px 5px #ccc',
      padding: '16px'
      
    
  }
  return (
    <div className="App">
    {student}
    </div>
    
  );
}

export default App;
