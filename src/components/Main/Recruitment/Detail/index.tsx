/* eslint-disable */
import * as S from "src/components/Main/Recruitment/Detail/index.style";

import jobDescription from "src/config/jobDescription.json";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const RecruitmentDetail = () => {
  const router = useRouter();

  const { id } = router.query;
  const [idx, setIdx] = useState<number|null>();

  useEffect(() => {
    if(id) 
      setIdx(Number(id));
    
    if (Number(id) > jobDescription.jobDescription.length) {
      router.push('/recruitment');
    }
  }, [id]);

  return (
    <S.Layout lang="200">
      <S.BannerImage src="/image/DesignerBanner.svg" />
      {
        idx && idx < jobDescription.jobDescription.length && (
          <S.Container>
            <S.MainTitle>{jobDescription.jobDescription[idx-1]?.jobGroup}</S.MainTitle>
            <S.Title>팀원으로서 하게 될 업무</S.Title>
            <S.Text>
              {jobDescription.jobDescription[idx-1].text1}<br />
              {jobDescription.jobDescription[idx-1]?.text2}<br />
              {jobDescription.jobDescription[idx-1]?.text3}<br /><br />
              {jobDescription.jobDescription[idx-1]?.text4}<br/>
              {jobDescription.jobDescription[idx-1]?.text5}<br />
              {jobDescription.jobDescription[idx-1]?.text6}
            </S.Text>
            <S.Image src="/image/DesignerImage.svg" />
            <S.Title>우대사항</S.Title>
            <S.Text>
              {jobDescription.jobDescription[idx-1]?.text7}<br />
              {jobDescription.jobDescription[idx-1]?.text8}
            </S.Text>
            <S.Title>채용과정</S.Title>
            <S.Text>
              {jobDescription.jobDescription[idx-1]?.text9}<br />
              {jobDescription.jobDescription[idx-1]?.text10}
            </S.Text>
            <S.Title>선배의 한마디</S.Title>
            <S.TextForm>
              <div id='first'>{jobDescription.jobDescription[idx-1]?.text11}</div>
              <div>{jobDescription.jobDescription[idx-1]?.text12}</div>
            </S.TextForm>
            <S.Line />
            <S.Form>
              <table>
                <td id='title'>직군</td>
                <td>{jobDescription.jobDescription[idx-1]?.jobGroup}</td>
              </table>
            </S.Form>
            <S.Form>
              <table>
                <td id='title'>기수</td>
                <td>{jobDescription.jobDescription[idx-1]?.number}</td>
              </table>
            </S.Form>
            <S.Form>
              <table>
                <td id='title'>마감일자</td>
                <td>{jobDescription.jobDescription[idx-1]?.deadLine}</td>
              </table>
            </S.Form>
            <S.ButtonForm>
              <S.SubmitButton 
                onClick={() => {
                  router.push(`/apply?jobGroup=${jobDescription.jobDescription[idx-1]?.jobGroup}`)
                }}
              >
                지원하기
              </S.SubmitButton>
              <S.QuestionButton 
                onClick={() => {
                  window.open('https://open.kakao.com/o/szJTIe3d');
                }}
              >
                질문하기
              </S.QuestionButton>
            </S.ButtonForm>
          </S.Container>
        )                   
      }
      <S.Bottom />
    </S.Layout>
  );
};

export default RecruitmentDetail;