import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { FindingPage } from '..'

export const Findingpage= ({Findingpage}) => {

  const [jobList, setJobList] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:3001/JobPostings").then((response) => {
            setJobList(response.data);
        });
    }, []);

  return (
    <div>This is where you can find a job!
      {/* {jobList.map((value) => 
      <div>
        {value.companyName}
      </div>
        )} */}
    </div>
  )
}
export default Findingpage
