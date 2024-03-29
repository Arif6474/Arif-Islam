import React from "react";
import Modal from "react-modal";

const ProjectModal = () => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button onClick={openModal}>Detail</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>
          I am a modal Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eius sequi facere quasi eos blanditiis aperiam inventore iure, nihil
          sapiente dolores cum iste at, corporis placeat. Animi alias ipsa,
          neque consequuntur ipsam facere? Alias voluptate perferendis minima
          quisquam itaque iusto molestiae. Voluptatibus dolores commodi,
          incidunt unde nulla recusandae magni consectetur nobis?
        </div>
        <form>
          <input />

          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
};

export default ProjectModal;
