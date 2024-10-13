import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Contactform from "../FormComponents/ContactForm";

export default function ContactCta() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  const handleNavigate = () => {
    navigate("/pricing");
  };

  return (
    <div className="w-screen flex items-center justify-center flex-wrap">
      <div className="w-[1050px] flex items-center justify-center">
        <div className="w-[607px] font-bold text-[#252B42] flex flex-col items-center gap-9 pb-[100px]">
          <div>
            <img src="images/arrow.png" alt="" />
          </div>
          <div className=" text-base text-center">
            WE CAN'T WAIT TO MEET YOU
          </div>
          <div className="text-[58px] leading-[80px] text-center">
            Let’s Talk
          </div>
          <div>
            <button
              onClick={toggleModal}
              className="button-primary bg-[#23A6F0] text-white text-sm"
            >
              Try it free now
            </button>
          </div>
        </div>
      </div>

      {/* Modal Section */}
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>
          <div className="flex flex-col justify-center items-center">
            <h5 className="text-base sm:hidden">Contact Us</h5>
            <h2 className="text-2xl sm:hidden">Make an Appointment</h2>
            <h3 className="text-2xl lg:hidden">Book Appointment</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <Contactform />
        </ModalBody>
      </Modal>
    </div>
  );
}
