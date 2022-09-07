import { useSelector } from "react-redux";
import Header from "../../components/Header";
import { selectEmployees } from "../../utils/selectors";
import MUIDataTable from "mui-datatables";

import "./style.css";

function EmployeesList() {
   const employees = useSelector(selectEmployees);

   const columns = [
      { label: "First Name", name: "firstName" },
      { label: "Last Name", name: "lastName" },
      { label: "Start Date", name: "startDate" },
      { label: "Department", name: "department" },
      { label: "Date of Birth", name: "dateOfBirth" },
      { label: "Street", name: "street" },
      { label: "City", name: "city" },
      { label: "State", name: "states" },
      { label: "Zip Code", name: "zipCode" },
   ];

   const options = {
      download: false,
      filter: false,
      fixedHeader: true,
      print: false,
      searchPlaceholder: "Search for an employee",
      searchOpen: true,
      searchAlwaysOpen: true,
      viewColumns: false,
      selectableRows: "none",
      selectableRowsHeader: false,
   };

   return (
      <div id="block-page">
         <Header />
         <main>
            <h1>Current Employees</h1>
            <div className="dataTable">
               <MUIDataTable columns={columns} data={employees} options={options} />
            </div>
         </main>
      </div>
   );
}
export default EmployeesList;
