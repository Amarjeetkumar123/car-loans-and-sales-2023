import React from "react";
import { useEffect } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
import Swal from 'sweetalert2'

const ApplyNow = () => {

  // const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
      "use strict";

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.querySelectorAll(".needs-validation");

      // Loop over them and prevent submission
      Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }

            form.classList.add("was-validated");
          },
          false
        );
      });
    })();
  })

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "85d7a415-b1d5-403d-8958-14a85e89416f");
    formData.append("subject", "New Submission from Car Loan & Sales Website");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
    } else {
      Swal.fire({
        title: "Oops!",
        text: "Something went wrong. Please try again.",
        icon: "error"
      });
    }
  };
  return (
    <div>
      <div className="bg-danger heading d-flex justify-content-center align-items-center">
        <h1 className="text-white">Apply Now</h1>
      </div>

      {/* form */}

      <form
        onSubmit={onSubmit}
        className="row w-75 mx-auto mb-5 needs-validation mt-5"
        noValidate
      >
        <div className="row mb-5">
          <div className="w-50 mx-auto">
            <label htmlFor="LoanType" className="form-label fw-bold fs-5">
              Type Of Loan
            </label>
            <select
              className="form-select"
              name="LoanType"
              id="LoanType"
              required
            >
              <option selected disabled value>
                Select
              </option>
              <option>New Car Loan</option>
              <option>Used Car Loan </option>
              <option>Auto Loan Top Up</option>
              <option>Refinance</option>
              <option>Balance Transfer</option>
            </select>
            <div className="invalid-feedback">
              Please select a valid LoanType.
            </div>
          </div>
        </div>
        <div className="col-12">
          <p className="fw-semibold bg-dark text-white py-2 fs-4 text-center">
            Personal Details
          </p>
        </div>
        <div className="row g-3 mx-auto mt-3">
          <div className="col-xl-6">
            <label htmlFor="Firstname" className="form-label fs-5 fw-semibold">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="Firstname"
              name="Firstname"
              placeholder="FirstName"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-xl-6">
            <label htmlFor="Lastname" className="form-label fs-5 fw-semibold ">
              Last name
            </label>
            <input
              type="text"
              name="LastName"
              className="form-control"
              id="Lastname"
              placeholder="LastName"
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          <div className="col-xl-6">
            <label
              htmlFor="MobileNumber"
              className="form-label fs-5 fw-semibold"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              name="MobileNumber"
              className="form-control"
              id="MobileNumber"
              placeholder="+91"
              required
            />
            <div className="invalid-feedback">
              Please provide a valid number
            </div>
          </div>

          <div className="col-xl-6">
            <label htmlFor="Email" className="form-label fs-5 fw-semibold">
              Email Address
            </label>
            <input
              type="email"
              name="Email"
              className="form-control"
              id="Email"
              placeholder="Example@gmail.com"
              required
            />
            <div className="invalid-feedback">
              Please provide a valid email.
            </div>
          </div>

          <div className="col-xl-6">
            <label htmlFor="City" className="form-label fs-5 fw-semibold">
              Present residing City/Area
            </label>
            <input
              type="text"
              name="City"
              className="form-control"
              id="City"
              placeholder="Bangalore jayanagara"
              required
            />
            <div className="invalid-feedback">
              Please provide a valid Present residing City/Area.
            </div>
          </div>
          <div className="col-xl-6 ">
            <label htmlFor="State" className="form-label fs-5 fw-semibold">
              State
            </label>
            <input
              type="text"
              name="State"
              className="form-control"
              id="State"
              placeholder="Karnataka"
              required
            />
            <div className="invalid-feedback">
              Please provide a valid State.
            </div>
          </div>
          <div className="col-xl-6">
            <label htmlFor="Pincode" className="form-label fs-5 fw-semibold">
              Pincode
            </label>
            <input
              type="text"
              name="Pincode"
              className="form-control"
              id="Pincode"
              placeholder="000000"
              required
            />
            <div className="invalid-feedback">
              Please provide a valid Pincode.
            </div>
          </div>
          <div className="col-12">
            <label htmlFor="Message" className="form-label fs-5 fw-semibold">
              Message
            </label>
            <textarea
              className="form-control"
              name="Message"
              id="validationTextarea"
              placeholder="Required example textarea"
              rows={4}
              required
            ></textarea>
            <div className="invalid-feedback">
              Please enter a message in the textarea.
            </div>
          </div>
          <div className="col-12 mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue
                id="invalidCheck"
                required
              />
              <label className="form-check-label" htmlFor="invalidCheck">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ApplyNow;
