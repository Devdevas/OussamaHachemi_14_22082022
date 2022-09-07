import "./style.css";
import { statesList } from "../../utils/statesList";
import { departmentList } from "../../utils/departmentList";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { create } from "../../features/Employees";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "@ousshmi/react-modal";
import { Navigate } from "react-router-dom";
import { useState } from "react";
// import closeIcon from "../../assets/close-icon.png";

function Form() {
   const dispatch = useDispatch();

   const [firstName, setFirstName] = useState();
   const [lastName, setLastName] = useState();
   const [dateOfBirth, setDateOfBirth] = useState();
   const [startDate, setStartDate] = useState();
   const [department, setDepartment] = useState();
   const [states, setStates] = useState();
   const [street, setStreet] = useState();
   const [city, setCity] = useState();
   const [zipCode, setZipCode] = useState();

   const [startdateValue, setStartdateValue] = useState();
   const [birthdateValue, setBirthdateValue] = useState();

   const [showModal, setShowModal] = useState(false);
   const [navigateTo, setNavigateTo] = useState(false);

   function saveEmployee(e) {
      e.preventDefault();
      dispatch(
         create(
            firstName,
            lastName,
            dateOfBirth,
            startDate,
            department,
            street,
            city,
            states,
            zipCode
         )
      );
      setShowModal(true);
      e.target.reset();
      setStartdateValue("");
      setBirthdateValue("");
      setStates("");
      setDepartment("");
   }

   if (navigateTo) {
      return <Navigate to="/employeesList" />;
   }

   return (
      <div>
         <div className="form-bg">
            <form onSubmit={saveEmployee}>
               <div className="field">
                  <label htmlFor="first-name">First Name</label>
                  <input
                     type="text"
                     id="first-name"
                     onInput={(e) => setFirstName(e.target.value)}
                  />
               </div>
               <div className="field">
                  <label htmlFor="last-name">Last Name</label>
                  <input type="text" id="last-name" onInput={(e) => setLastName(e.target.value)} />
               </div>
               <div>
                  <label htmlFor="birthdate" className="field">
                     Date Of Birth
                     <DatePicker
                        id="birthdate"
                        selected={birthdateValue}
                        dateFormat="dd/MM/yyyy"
                        onChange={(date) => {
                           setBirthdateValue(date);
                           setDateOfBirth(date.toLocaleDateString());
                        }}
                     />
                  </label>
               </div>
               <div>
                  <label htmlFor="startdate" className="field">
                     Start Date
                     <DatePicker
                        id="startdate"
                        selected={startdateValue}
                        dateFormat="dd/MM/yyyy"
                        onChange={(date) => {
                           setStartdateValue(date);
                           setStartDate(date.toLocaleDateString());
                        }}
                     />
                  </label>
               </div>
               <fieldset className="address">
                  <legend>Address</legend>
                  <div className="field">
                     <label htmlFor="street">Street</label>
                     <input id="street" type="text" onInput={(e) => setStreet(e.target.value)} />
                  </div>
                  <div className="field">
                     <label htmlFor="city">City</label>
                     <input id="city" type="text" onInput={(e) => setCity(e.target.value)} />
                  </div>
                  <div className="field">
                     <label htmlFor="state">State</label>
                     <Dropdown
                        options={statesList}
                        placeholder="Select an option"
                        onChange={(option) => setStates(option.value)}
                        controlClassName="dropdown"
                        menuClassName="menu"
                        value={states}
                     />
                  </div>
                  <div className="field">
                     <label htmlFor="zip-code">Zip Code</label>
                     <input
                        id="zip-code"
                        type="number"
                        onInput={(e) => setZipCode(e.target.value)}
                     />
                  </div>
               </fieldset>
               <div className="field">
                  <label htmlFor="department">Department</label>
                  <Dropdown
                     options={departmentList}
                     placeholder="Select an option"
                     onChange={(option) => setDepartment(option.value)}
                     controlClassName="dropdown"
                     menuClassName="menu"
                     value={department}
                  />
               </div>
               <button type="submit" className="save-button">
                  Save
               </button>
            </form>
         </div>
         <Modal
            show={showModal}
            onClose={() => setShowModal(false)}
            title="Create employee"
            message="Employee created successfully!"
            headerBackground="rgb(232, 236, 239)"
            borderRadius="5px"
            overflow="hidden"
            bodyFont="400 1em Montserrat"
            closeButton
            buttonBackground="#004c86"
            buttonTextColor="white"
            buttonBorder="1px solid rgb(204, 204, 204)"
            buttonPadding="8px 30px"
            buttonBorderRadius="5px"
            buttonFont="bold 15px Montserrat"
            addNewButton
            newButtonText="Current Employees"
            footerPadding="15px"
            onClickNewButton={() => setNavigateTo(true)}
         />
      </div>
   );
}

export default Form;
