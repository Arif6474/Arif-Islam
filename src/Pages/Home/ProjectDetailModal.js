import React from "react";

const ProjectDetailModal = ({ detailModal }) => {
  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="modal-box bg-white border-y-4 border-teal-500"
        >
          <p className="py-4">Employee Name: {detailModal.name}</p>
          <p className="py-4">
            Employee ID:{" "}
            <span className="font-family">{detailModal.id}</span>{" "}
          </p>
          
       
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
