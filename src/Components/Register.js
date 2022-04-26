import React, { useState } from "react";
import "./Register.css";
import schedule from "../assets/schedule.svg";
import { CalendarIcon } from "@heroicons/react/outline";
import DatePicker from "react-date-picker";
import QRCode from "react-qr-code";

const Register = () => {
  const [qrText, setQrText] = useState("");

  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);

  const [lastName, setLasttName] = useState("");
  const [lastNameError, setLastNameError] = useState(false);

  const [email, setEmail] = useState("");
  const [emailHelper, setemailHelper] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [phone, setPhone] = useState("");
  const [phoneHelper, setphoneHelper] = useState("");
  const [phoneError, setPhoneError] = useState(false);

  const [dob, setDob] = useState("");
  const [dobError, onChangeError] = useState(false);

  const [gender, setGender] = useState("");
  const [genderError, setGenderError] = useState(false);

  const [openModal, setopenModal] = useState(false);

  let handleOnChange = (event) => {
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );

        if (!valid) {
          setemailHelper("Invalid email");
        } else {
          setemailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        valid =
          /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i.test(
            event.target.value
          );

        if (!valid) {
          setphoneHelper("Invalid phone");
        } else {
          setphoneHelper("");
        }
        break;
      default:
        break;
    }
  };

  const submitEvent = (event) => {
    setQrText(firstName);
    if (firstName === "") {
      setFirstNameError(true);
      setopenModal(false);
    } else {
      setFirstNameError(false);
    }
    if (lastName === "") {
      setLastNameError(true);
    } else {
      setLastNameError(false);
    }
    if (email === "") {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (phone === "") {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
    if (dob === "") {
      onChangeError(true);
    } else {
      onChangeError(false);
    }

    if (gender === "") {
      setGenderError(true);
    } else {
      setGenderError(false);
    }

    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      phone === "" ||
      dob === "" ||
      gender === "" ||
      emailHelper === "Invalid email" ||
      phoneHelper === "Invalid phone"
    ) {
      setopenModal(false);
    } else {
      setopenModal(true);
    }
    console.log(dob);
  };

  const closeModal = () => {
    setopenModal(false);
  };
  const modal = (
    <div
      className="fixed z-10 inset-0 overflow-y-auto "
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 ">

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
          <div className=" px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <p className="text-xl text-center font-bold">
              Your event have been booked
            </p>
            <p className="text-lg text-center font-medium">
              Print a copy of the QRCode and bring it with you, thank you
            </p>
          </div>
          <div className=" px-4   sm:px-6  sm:flex-row-reverse  modal-size">
            {qrText.length > 0 && <QRCode value={qrText} />}

            <div className="flex py-7 justify-between">
              <p className="text-center">{firstName + " " + lastName}</p>

              <button
                type="button"
                onClick={closeModal}
                className="mt-3  inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm update-prod-btn"
              >
                close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="md:flex overflow-hidden">
      <div className="blue-section overflow-hidden">
        <div className=" pt-20 md:pt-0 justify-between md:block ml-10 overflow-hidden">
          <div className="flex ml-1 sm:ml-20 md:ml-0 md:pt-5">
            <CalendarIcon className="h-5 w-5 mr-2 event-icon" />
            <p className="text-white text-sm md:text-base"> Book your Event</p>
          </div>
          <div className="hidden sm:flex md:flex">
            <p className="text-white ml-10 sm:ml-15 md:ml-0  md:mt-20 text-sm md:text-3xl lg:text-4xl">
              A few clicks from booking your event
            </p>
          </div>
          <img className="mt-5 md:mt-20 ml-10 sm:ml-20 md:ml-0" src={schedule} alt="schedule-img" />
        </div>
      </div>
      <div className="register-section ">
        <div className=" ml-10 form-section">
          <p className="mb-10 text-xl font-bold">Register</p>
          <p className="font-medium text-lg mb-5">
            Book your events efficiently
          </p>
          <p>lets get you all set up so you can register for the even</p>
          <hr className="my-5" />
          <div className="md:flex name-input mt-6 md:mt-10 justify-between">
            <div className="mb-6 md:mb-0">
              <p className="mb-2">First Name</p>

              <input
                value={firstName}
                id="firstname"
                onChange={(e) => setFirstName(e.target.value)}
                className="w-64 sm:w-80 p-2 md:w-56 lg:w-72 xl:w-96 "
              />
              {firstNameError ? (
                <h6 className="text-red-500">first name is required *</h6>
              ) : (
                ""
              )}
            </div>
            <div className="md:ml-10 sm:ml-0">
              <p className="mb-2">Last Name</p>
              <input
                value={lastName}
                onChange={(e) => setLasttName(e.target.value)}
                className="w-64 p-2 sm:w-80 md:w-56 lg:w-72 xl:w-96 "
              />
              {lastNameError ? (
                <h6 className="text-red-500">last name is required *</h6>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="md:flex name-input mt-6 md:mt-10  justify-between">
            <div className="mb-6 md:mb-0">
              <p className="mb-2">Email</p>
              <input
                value={email}
                id={"email"}
                onChange={handleOnChange}
                className="w-64 p-2 sm:w-80 md:w-56 lg:w-72 xl:w-96 "
              />
              {emailError ? (
                <h6 className="text-red-500">Email is required *</h6>
              ) : (
                ""
              )}
              <p>{emailHelper}</p>
            </div>
            <div className="md:ml-10">
              <p className="mb-2">Phone Number</p>
              <input
                value={phone}
                id="phone"
                onChange={handleOnChange}
                className="w-64 p-2 sm:w-80 md:w-56 lg:w-72 xl:w-96 "
              />
              {phoneError ? (
                <h6 className="text-red-500">phone number is required *</h6>
              ) : (
                ""
              )}
              <p>{phoneHelper}</p>
            </div>
          </div>
          <div className="md:flex mt-6 md:mt-10 n justify-between">
            <div className="mb-6 md:mb-0">
              <p className="mb-2">Date of Birth</p>
              <div>
                <input
                  onChange={(e) => setDob(e.target.value)}
                  type="date"
                  value={dob}
                  className="w-64 p-2 sm:w-80 md:w-56 lg:w-72 xl:w-96 date"
                />

                {dobError ? (
                  <h6 className="text-red-500">date of birth is required *</h6>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="md:ml-10 name-input">
              <p className="mb-2">Gender</p>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-64 p-2 sm:w-80 md:w-56 lg:w-72 xl:w-96 "
              >
                <option></option>
                <option value={"Male"}>Male</option>
                <option value={"female"}>Female</option>
                <option value={"others"}>Others</option>
              </select>
              {genderError ? (
                <h6 className="text-red-500">gender is required *</h6>
              ) : (
                ""
              )}
            </div>
          </div>
          <button
            onClick={submitEvent}
            className="inline-block mb-20 md:mb-0 text-sm px-10 py-3 leading-none border mt-10  text-white "
          >
            Book Event
          </button>
        </div>
        {openModal ? modal : null}
      </div>
    </div>
  );
};

export default Register;
