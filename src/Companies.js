
// import React, {useState, useEffect} from "react"
// import JoblyAPI from "./joblyApi";
// import Company from "./Company";
// // import { useParams } from "react-router-dom";

// function Companies() {
//     const [companyList, setCompanyList] = useState([]);
//     // const { handle } = useParams();

//     useEffect(function loadCompanyDetail() {
//         async function getCompanyDetail() {
//             const response = await JoblyAPI.getCompany(handle);
//             setCompanyList(response);
//             return response;
//         }
//         getCompanyDetail();
//     }, []);

//     if (!companyDetail) {
//         return <h1>Loading...</h1>
//      }

//      console.log(companyDetail.jobs);
//     return (
//         <div>
//             <SearchBar />
//             {companyDetail.jobs.map((j) => {
//                 return <Job job={j} key={j.id} />
//             })}
//         </div>
//     )

// }

// export default CompanyDetail;