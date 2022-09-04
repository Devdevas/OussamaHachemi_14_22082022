import "./style.css";
import { useEffect, useState } from "react";
import { FetchStates } from "../../utils/statesList";
import { departmentList } from "../../utils/departmentList";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { create } from "../../features/Employees";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
   // const [showModal, setShowModal] = useState(false);

   const [statesList, setStatesList] = useState();
   useEffect(() => {
      const getStates = async () => {
         const { states } = await FetchStates();
         setStatesList(states);
      };
      getStates();
   }, []);

   function saveEmployee() {
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
      // setShowModal(true);
   }

   if (!statesList) {
      return;
   }

   return (
      <div>
         <div className="form-bg">
            <form action="#">
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
               <div className="field">
                  <label htmlFor="birthdate">Date Of Birth</label>
                  <DatePicker
                     selected={birthdateValue}
                     dateFormat="dd/MM/yyyy"
                     onChange={(date) => {
                        setBirthdateValue(date);
                        setDateOfBirth(date.toLocaleDateString());
                     }}
                  />
               </div>
               <div className="field">
                  <label htmlFor="startdate">Start Date</label>
                  <DatePicker
                     selected={startdateValue}
                     dateFormat="dd/MM/yyyy"
                     onChange={(date) => {
                        setStartdateValue(date);
                        setStartDate(date.toLocaleDateString());
                     }}
                  />
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
                  />
               </div>
            </form>
            <button onClick={saveEmployee} className="save-button">
               Save
            </button>
         </div>
         {/* <Modal
            show={showModal}
            onClose={() => setShowModal(false)}
            title="Create employee"
            message="Employee created successfully!"
            headerBackground="#e5e8ec"
            borderRadius='5px'
            bodyFont="400 1em Montserrat"
            buttonBorder="1px solid rgb(204, 204, 204)"
            buttonPadding="5px 30px"
            buttonBorderRadius="5px"
            buttonFont="bold 15px Montserrat"
            footerPadding="15px"
         /> */}
      </div>
   );
}

export default Form;
