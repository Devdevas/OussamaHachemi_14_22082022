import Form from "../../components/Form";
import Header from "../../components/Header";
import "./style.css";

function CreateEmployee() {
   return (
      <div id="block-page">
         <Header />
         <main>
            <h1>Create Employee</h1>
            <Form />
         </main>
      </div>
   );
}

export default CreateEmployee;
