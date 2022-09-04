import { useSelector } from "react-redux";
import Header from "../../components/Header";
import { selectEmployees } from "../../utils/selectors";

import "./style.css";

function EmployeesList() {
   const employees = useSelector(selectEmployees);

   const columns = [
      { title: "First Name", field: "firstName" },
      { title: "Last Name", field: "lastName" },
      { title: "Start Date", field: "startDate" },
      { title: "Department", field: "department" },
      { title: "Date of Birth", field: "dateOfBirth" },
      { title: "Street", field: "street" },
      { title: "City", field: "city" },
      { title: "State", field: "state" },
      { title: "Zip Code", field: "zipCode" },
   ];

   return (
      <div id="block-page">
         <Header />
         <main>
            <h1>Current Employees</h1>
         </main>
      </div>
   );
}
export default EmployeesList;
