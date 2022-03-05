/* eslint-disable */
import * as S from "src/components/Apply/index.style";

import InputBox from "src/components/Apply/InputBox/index";
import ErrorMessage from "src/components/Apply/ErrorMessage/index";
import useInput from "src/hooks/useInput";

import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import CustomModal from "../Modal";
import PhoneNumberInputBox from "./InputBox/phoneNumber";
import SchoolNumberInputBox from "./InputBox/schoolNumber";

const ApplyForm = (props: any) => {
  const [number, onChangeNumber] = useInput<string>('');
  const [name, onChangeName] = useInput<string>('');
  const [phoneNumber, onChangePhoneNumber] = useInput<string>('');
  const [email, onChangeEmail] = useInput<string>('');

  const [numberText, setNumberText] = useState<string>('');
  const [nameText, setNameText] = useState<string>('');
  const [phoneNumberText, setPhoneNumberText] = useState<string>('');
  const [emailText, setEmailText] = useState<string>('');
  const [countNumber, setCountNumber] = useState<number>(0);
  const [countName, setCountName] = useState<number>(0);
  const [countPhoneNumber, setCountPhoneNumber] = useState<number>(0);
  const [countEmail, setCountEmail] = useState<number>(0);

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (sessionStorage)
      setCountNumber(Number(sessionStorage?.getItem(numberText)));
      setCountName(Number(sessionStorage?.getItem(nameText)));
      setCountPhoneNumber(Number(sessionStorage?.getItem(phoneNumberText)));
      setCountEmail(Number(sessionStorage?.getItem(emailText)));
  });

  const onClickNumberEvent = () => {
    if (sessionStorage)
      setCountNumber(Number(sessionStorage?.getItem(numberText)));
  }
  const onClickNameEvent = () => {
    if (sessionStorage)
      setCountName(Number(sessionStorage?.getItem(nameText)));
  }
  const onClickPhoneNumberEvent = () => {
    if (sessionStorage)
      setCountPhoneNumber(Number(sessionStorage?.getItem(phoneNumberText)));
  }
  const onClickEmailEvent = () => {
    if (sessionStorage)
      setCountEmail(Number(sessionStorage?.getItem(emailText)));
  }

  return (
    <S.ApplyLayout>
      <S.Title>{props.query} 지원서</S.Title>
      <S.Content onSubmit={(e) => {e.preventDefault(); }}>
        <SchoolNumberInputBox 
          text="학번" 
          onChange={onChangeNumber} 
          value={number} 
          onClick={onClickNumberEvent} 
          setter={setNumberText} 
          type="text" 
          maxLength={4}
        />
        <S.Message>
          <div>*학번은 학년, 반, 번호 순서대로 기입합니다.</div>
          <div>*번호가 한자리수일 경우에 앞에 0을 기입후 번호를 기입합니다.</div>
          <div>ex) 1학년 2반 5번 일 경우 &gt; 1205</div>
        </S.Message>
        {
          countNumber === 0 || number.length !== 0 ? (
            <></>
          ) : (
            <ErrorMessage text='*학번을 입력해주세요' />
          )
        }
        <InputBox 
          text="이름" 
          onChange={onChangeName} 
          value={name} 
          onClick={onClickNameEvent} 
          setter={setNameText} 
          type="text" 
        />
        {
          countName === 0 || name.length !== 0 ? (
            <></>
          ) : (
            <ErrorMessage text='*이름을 입력해주세요' />
          )
        }
        <PhoneNumberInputBox 
          text="전화번호" 
          onChange={onChangePhoneNumber} 
          value={phoneNumber} 
          onClick={onClickPhoneNumberEvent} 
          setter={setPhoneNumberText} 
          type="text" 
          maxLength={13}
        />
        {
          countPhoneNumber === 0 || phoneNumber.length !== 0 ? (
            <></>
          ) : (
            <ErrorMessage text='*전화번호을 입력해주세요' />
          )
        }
        <InputBox 
          text="이메일" 
          onChange={onChangeEmail} 
          value={email} 
          onClick={onClickEmailEvent} 
          setter={setEmailText} 
          type="email" 
          placeholder="@dgsw.hs.kr" 
          pattern="^\w+((\.\w+)?)+@\w+.?\w+\.\w+$"
        />
        {
          countEmail === 0 || email.length !== 0 ? (
            <ErrorMessage text='' />
          ) : (
            <ErrorMessage text='*이메일을 입력해주세요' />
          )
        }
        {
          number.length !== 0 && name.length !== 0 && phoneNumber.length !== 0 && email.length !== 0 ? (
            <S.SubmitButton type='submit'>제출 하기</S.SubmitButton>
          ) : (
            <S.SubmitButton disabled>제출 하기</S.SubmitButton>
          )
        }
        {/* <S.SubmitButton disabled onClick={() => {
          toast('동일한 학번으로 지원한 이력이 있습니다.',
            {
              style: {
                borderRadius: '8px',
                maxWidth: '516px',
                height: '43px',
                fontSize: '16px',
                background: 'rgba(18, 24, 33, 0.8)',
                color: '#FFFFFF'
              }
            }
          );
        }}>test</S.SubmitButton>
        <Toaster position="bottom-center" toastOptions={{
          style: {
            width: '560px'
          }
        }} /> */}
      </S.Content>
      <CustomModal 
        modalIsOpen={modalIsOpen} 
        setModalIsOpen={setModalIsOpen} 
        title={props.query} 
        number={number} 
        name={name} 
        phoneNumber={phoneNumber} 
        email={email} 
      />
    </S.ApplyLayout>
  );
};

export default ApplyForm;
