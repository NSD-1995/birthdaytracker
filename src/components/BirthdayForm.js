import React, { useState } from "react";
import axios from "axios";
import dateFormat from "dateformat";
const now = new Date();

let currentdate = dateFormat(now, "yyyy");

function BirthdayForm() {
  let [Firstname, setFirstName] = useState();
  let [LastName, setLastName] = useState();
  let [Country, setCountry] = useState();
  let [City, setCity] = useState();
  let [Date, setDate] = useState();
  let [Message, setMessage] = useState();

  let OnchangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  let OnchangeLastName = (e) => {
    setLastName(e.target.value);
  };

  let OnCountry = (e) => {
    setCountry(e.target.value);
  };

  let Oncity = (e) => {
    setCity(e.target.value);
  };

  let Ondate = (e) => {
    setDate(e.target.value);
  };

  let OnSubmitData = (event) => {
    let ReceivedData = {
      firstName: Firstname,
      lastName: LastName,
      birthDate: Date,
      city: City,
      country: Country,
    };
    let dateOut = dateFormat(ReceivedData.birthDate, "yyyy");

    let age = currentdate - dateOut;

    if (age >= 18) {
      axios
        .post("http://localhost:3001/list", ReceivedData)
        .then((response) => {
          setMessage(response.data);
        })
        .catch((error) => {
          setMessage(error?.response.data);
        });
    } else {
      setMessage("Age must be greater than or alteast 18");
    }
    event.preventDefault();
  };

  return (
    

    <div class="mb-3 widthClass" >
      <form onSubmit={OnSubmitData}>
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">
            Firstname
          </label>
          <input
            onChange={OnchangeFirstName}
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Firstname"
          />
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">
            LastName
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder=" LastName "
            onChange={OnchangeLastName}
          />
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">
            DOB
          </label>
          <input
            type="date"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Date of Birth"
            onChange={Ondate}
          />
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">
            City
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="City"
            onChange={Oncity}
          />
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">
            Country
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Country"
            onChange={OnCountry}
          />
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            submit
          </button>
        </div>
      </form>
      <div>{Message}</div>
    </div>
  );
}

export default BirthdayForm;
