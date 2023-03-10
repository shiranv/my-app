import React, { useState,useEffect } from 'react';
import './App.css';
import icon from './icon.svg'; // with import




function App() {
  const [sum, setSum] = useState(0);
  const [showIcon, setShowIcon] = useState(false);
  const [currentRow, setCurrentRow] = useState(-1);
    const [data, setData] = useState([
      {
        "resource": "aws_s3_bucket",
        "category": "Storage",
        "creation_date": "1628406616705",
        "errors": 5,
        "details": {
            "severity": "low",
            "status": "error",
            "tags": [{"name":"application_bucket"}, {"size":"10GB"}, {"region": "us_west_2"}]
        }
     },
     {
        "resource": "aws_api_gateway_api_key",
        "category": "Storage",
        "creation_date": "1628406236705",
        "errors": 6,
        "details": {
            "severity": "high",
            "status": "error",
            "tags": [{"name":"application_bucket"}, {"size":"10GB"}, {"region": "us_west_2"}]
        }
     },
     {
        "resource": "aws_s3_bucket_storage",
        "category": "Storage",
        "creation_date": "1628406236725",
        "errors": 7,
        "details": {
            "severity": "low",
            "status": "passed",
            "tags": [{"name":"application_bucket"}, {"size":"10GB"}, {"region": "us_west_2"}]
        }
     },
     {
        "resource": "aws_acm_certificate_validation",
        "category": "Logging",
        "creation_date": "1628406236725",
        "errors": 15,
        "details": {
            "severity": "high",
            "status": "error",
            "tags": [{"name":"application_bucket"}, {"size":"10GB"}, {"region": "us_west_2"}]
        }
     },
     {
        "resource": "aws_acm_certificate_validation",
        "category": "Secrets",
        "creation_date": "1628406236725",
        "errors": 5,
        "details": {
            "severity": "high",
            "status": "error",
            "tags": [{"type":"super secret secret"}, {"region": "us_west_2"}]
        }
     },
     {
        "resource": "aws_api_gateway_authorizer",
        "category": "Networking",
        "creation_date": "1628406236725",
        "errors": 35,
        "details": {
            "severity": "high",
            "status": "suppressed",
            "tags": [{"name":"application_bucket"},  {"region": "us_west_2"}]
        }
     },
     {
        "resource": "aws_api_gateway_documentation_part",
        "category": "Vulnerabilities",
        "creation_date": "1638406236725",
        "errors": 35,
        "details": {
            "severity": "high",
            "status": "error",
            "tags": [{"name":"application_bucket"}, {"tag":"this is a private documentation that is secret"},  {"region": "us_west_2"}]
        }
     },
     {
        "resource": "aws_api_gateway_domain_name",
        "category": "Networking",
        "creation_date": "1438406236725",
        "errors": 55,
        "details": {
            "severity": "high",
            "status": "error",
            "tags": [{"name":"application_bucket"}, {"tag":"this is a private documentation that is secret"},  {"region": "us_west_2"}]
        }
     },
     {
        "resource": "aws_api_gateway_method_settings",
        "category": "General",
        "creation_date": "1638406232725",
        "errors": 9,
        "details": {
            "severity": "high",
            "status": "error",
            "tags": [{"name":"application_bucket"}, {"tag":""},  {"region": "us_west_2"}]
        }
     }

]);

const sumErrors =()=>{
  let newSum=0;
  for(let i=0;i<data.length;i++){
    newSum+=data[i].errors;
  }
  setSum(newSum);
}

useEffect(() => {
  sumErrors();
},[]);

const handleClick=(index)=>{
  if(index == currentRow){
    setShowIcon(!showIcon);
  } 
  else{
    setShowIcon(true);
    setCurrentRow(index);
  }

}

const renderData=()=>{

  return <div className='page-container'>
    <div className='title'>{sum} Total errors</div>
    {data.length!==0?  data.map((row,index) => (
      <div  className={(index === currentRow) && showIcon?'open-div':''}  key={index} onClick={() => handleClick(index)}>
        <div className={!showIcon || (index !== currentRow)?'table-row row-container':'row-container'} >
        <div>{row.resource}</div>
        <div>{row.category}</div>
        <div>{row.errors}</div>
        </div>
        {(index === currentRow) && showIcon?<div className='icon-div'><img src={icon} className='icon'/></div>:null}
        </div>
       
      )):null}
      
  </div>
}
  

  return (
    <div> 
      {renderData()}
    </div>
  );
}

export default App;
