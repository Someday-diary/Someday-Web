import * as S from "src/components/Modal/index.style";

import ReactModal from "react-modal";

const CustomModal = (props: any) => {
  const { setModalIsOpen, title, number, name, phoneNumber, email } = props;

  return (
    <ReactModal 
      isOpen={props.modalIsOpen} 
      onRequestClose={() => {setModalIsOpen(false);}}
      style={{
      overlay: {
        position: 'fixed',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0',
        margin: 'auto',
      },
      content: {
        width: '500px',
        height: '295px',
        margin: 'auto',
        padding: '30px',
        borderRadius: '16px',
        overflow: 'hidden'
      }
    }}>
      <S.ModalTitle>{title} application</S.ModalTitle>
      <S.ModalText>
        <div>class number: {number.replace(/[^0-9]/g, '')}</div>
        <div>name: {name}</div>
        <div>phone number: {phoneNumber.replace(/[^0-9]/g, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, '$1-$2-$3')}</div>
        <div>e-mail: {email}</div>
      </S.ModalText>
      <S.Text>
        *We will send you the pre-assignment and whether or not you passed through the entered email.<br />
        *Once submitted, your application details cannot be edited.
      </S.Text>
      <S.CancelButton onClick={() => {props.setModalIsOpen(false)}}>go back</S.CancelButton>
      <S.SubmitButton onClick={() => {
        props.onClick();  
      }}>submit</S.SubmitButton>
    </ReactModal>
  );
};

export default CustomModal;