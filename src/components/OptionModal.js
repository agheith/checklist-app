import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
      isOpen={!!props.selectedOption}
      onRequestClose ={props.handleClearSelectedOption}
      contentLabel="Selected Option"
    >
      <h3>Selected Option</h3>
      {props.selectedOption && <p>You have selected {props.selectedOption}</p>}

      <button
        onClick={props.handleClearSelectedOption}
      >
        Nice!!!
      </button>

    </Modal>
)
export default OptionModal;
