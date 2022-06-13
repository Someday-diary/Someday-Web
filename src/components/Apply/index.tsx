/* eslint-disable */
import * as S from "src/components/Apply/index.style";

import InputBox from "src/components/Apply/InputBox/index";
import ErrorMessage from "src/components/Apply/ErrorMessage/index";
import useInput from "src/hooks/useInput";
import CustomModal from "../Modal";

import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { handleDuplicateCheckVolunteer, handlePostVolunteer } from "src/lib/api/volunteer/index.api";
import { IPostVolunteer } from "src/types/volunteer";
import { useRouter } from "next/router";

const ApplyForm = () => {
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

  const router = useRouter();

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

  const onSubmit = (e: any) => {
    e.preventDefault();

    handleDuplicateCheckVolunteer(number).then(res => {
      if (res.code === 200) {
        setModalIsOpen(true);
      } else if (res.code === 409) {
        toast('동일한 학번으로 지원한 이력이 있습니다.',
          {
            style: {
              borderRadius: '8px',
              maxWidth: '516px',
              height: '43px',
              fontSize: '16px',
              fontFamily: 'Pretendard400',
              background: 'rgba(18, 24, 33, 0.8)',
              color: '#FFFFFF'
            }
          }
        );
      }
    }).catch(err => {
      console.log(err);
    })
  };

  const PostVolunteer = () => {
    const data: IPostVolunteer = {
      email: email,
      name: name,
      phone_number: phoneNumber,
      recruit_id: Number(router.query['recruit']),
      student_id: number
    }

    handlePostVolunteer(data).then(res => {
      router.push(`/success?name=${name}&jobGroup=${router.query['jobGroup']}`, '/success');
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <>
      <S.ApplyLayout>
        <S.Title>{router.query['jobGroup']} application</S.Title>
        <S.Content onSubmit={onSubmit}>
          <InputBox 
            text="class number" 
            type="text" 
            onClick={onClickNumberEvent} 
            onChange={onChangeNumber} 
            value={number.replace(/[^0-9]/g, '').replace(/^(\d{4})$/, '$1')} 
            setter={setNumberText} 
            maxLength={4}
          />
          <S.Message>
            <div>*The student number is written in the order of grade, class, and number.</div>
            <div>*If the number is a single digit, enter the number after putting a leading 0.</div>
            <div>ex) if 1st year, 2nd class, 5th &gt; 1205</div>
          </S.Message>
          {
            countNumber === 0 || number.length === 4 ? (
              <></>
            ) : (
              <ErrorMessage text='*Please enter your class number' />
            )
          }
          <InputBox 
            text="name" 
            onChange={onChangeName} 
            // value={name.replace(/[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g, '')} 
            onClick={onClickNameEvent} 
            setter={setNameText} 
            type="text" 
            style="ime-mode:active;"
          />
          {/* <S.Message>
            <div>*한글만 입력이 가능합니다.</div>
            <div>*글자가 입력되지 않는다면 한/영키를 확인해주세요.</div>
          </S.Message> */}
          {
            countName === 0 || name.length !== 0 ? (
              <></>
            ) : (
              <ErrorMessage text='*Please enter your name' />
            )
          }
          <InputBox 
            text="phone number" 
            onChange={onChangePhoneNumber} 
            value={phoneNumber.replace(/[^0-9]/g, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, '$1-$2-$3')} 
            onClick={onClickPhoneNumberEvent} 
            setter={setPhoneNumberText} 
            type="text" 
            maxLength={13}
          />
          {
            countPhoneNumber === 0 || phoneNumber.length > 12 ? (
              <></>
            ) : (
              <ErrorMessage text='*Please enter your phone number' />
            )
          }
          <InputBox 
            text="e-mail" 
            onChange={onChangeEmail} 
            value={email} 
            onClick={onClickEmailEvent} 
            setter={setEmailText} 
            type="email" 
            pattern="^\w+((\.\w+)?)+@\w+.?\w+\.\w+$"
          />
          {
            countEmail === 0 || email.length !== 0 ? (
              <ErrorMessage text='' />
            ) : (
              <ErrorMessage text='*Please enter your e-mail' />
            )
          }
          {
            number.length !== 0 && name.length !== 0 && phoneNumber.length !== 0 && email.length !== 0 ? (
              <S.SubmitButton type='submit'>Submit</S.SubmitButton>
            ) : (
              <S.SubmitButton disabled>Submit</S.SubmitButton>
            )
          }
          <Toaster position="bottom-center" toastOptions={{
            style: {
              width: '560px'
            }
          }} />
        </S.Content>
        <CustomModal 
          modalIsOpen={modalIsOpen} 
          setModalIsOpen={setModalIsOpen} 
          title={router.query['jobGroup']} 
          number={number} 
          name={name} 
          phoneNumber={phoneNumber} 
          email={email} 
          onClick={PostVolunteer} 
        />
      </S.ApplyLayout>
      <S.Footer />
    </>
  );
};

export default ApplyForm;
