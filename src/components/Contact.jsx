import React, { useState } from 'react'
import toast, { Toaster } from "react-hot-toast";

function Contact() {
    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "b74cbb86-e8a1-4fc9-843c-89ded5bf489a");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
            toast.success("Message Sent Successful")
        } else {
            toast.error("already added");
            console.log("Error", data);
            setResult(data.message);
        }
    }
    return (
      <div className="w-full h-[500px] mt-24 mb-24  lg:h-full mx-auto flex lg:mt-24 justify-center">
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-5 h-[50%] p-2  items-center border-2 rounded-lg hover:border-blue-300 lg:p-5 lg:h-[40%] lg:gap-5 lg:items-center lg:w-[30%]  "
            >
                <h1>Contact</h1>
          <div className="flex flex-row  justify-center gap-5  w-[100%]">
            <label>FullName</label>
            <input
              type="text"
              className="border-2"
              placeholder="FullName"
                        name="fullname"
                        required
            ></input>
          </div>

          <div className="flex flex-row  justify-center gap-12  w-[100%]">
            <label>Email</label>
            <input
              type="text"
              placeholder="Email"
              name="email"
              className=" border-2"
              required
            ></input>
          </div>

          <div className="flex flex-row  justify-center gap-6  w-[100%]">
            <label>Message</label>
            <input
              type="text"
              className="border-2"
              required
                        name="message"
                        placeholder='Message'
            ></input>
          </div>
          <button type="submit" className='bg-blue-600 w-16 rounded-lg hover:bg-green-600 hover:text-white'>Submit</button>
          <Toaster />
        </form>
      </div>
    );
}

export default Contact
