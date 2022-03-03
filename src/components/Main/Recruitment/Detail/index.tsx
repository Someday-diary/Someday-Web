import * as S from "src/components/Main/Recruitment/Detail/index.style";

import jobDescription from "src/config/jobDescription.json";

import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { jobDescriptionState } from "src/store/job";

const RecruitmentDetail = () => {
  const router = useRouter();
  const id: number = useRecoilValue(jobDescriptionState);

  return (
    <S.Layout lang="200">
      <S.BannerImage src="/image/DesignerBanner.svg" />
      <S.Container>
        <S.MainTitle>{jobDescription.jobDescription[id-1].jobGroup}</S.MainTitle>
        <S.Title>팀원으로서 하게 될 업무</S.Title>
        <S.Text>
          {jobDescription.jobDescription[id-1].text1}<br />
          {jobDescription.jobDescription[id-1].text2}<br />
          {jobDescription.jobDescription[id-1].text3}<br /><br />
          {jobDescription.jobDescription[id-1].text4}<br/>
          {jobDescription.jobDescription[id-1].text5}<br />
          {jobDescription.jobDescription[id-1].text6}
        </S.Text>
        <S.Image src="/image/DesignerImage.svg" />
        <S.Title>우대사항</S.Title>
        <S.Text>
          {jobDescription.jobDescription[id-1].text7}<br />
          {jobDescription.jobDescription[id-1].text8}
        </S.Text>
        <S.Title>채용과정</S.Title>
      <S.Text>
          {jobDescription.jobDescription[id-1].text9}<br />
          {jobDescription.jobDescription[id-1].text10}
        </S.Text>
        <S.Title>선배의 한마디</S.Title>
        <S.TextForm>
          <div id='first'>{jobDescription.jobDescription[id-1].text11}</div>
          <div>{jobDescription.jobDescription[id-1].text12}</div>
        </S.TextForm>
        <S.Line />
        <S.Form>
          <table>
            <td id='title'>직군</td>
            <td>{jobDescription.jobDescription[id-1].jobGroup}</td>
          </table>
        </S.Form>
        <S.Form>
          <table>
            <td id='title'>기수</td>
            <td>{jobDescription.jobDescription[id-1].number}</td>
          </table>
        </S.Form>
        <S.Form>
          <table>
            <td id='title'>마감일자</td>
            <td>{jobDescription.jobDescription[id-1].deadLine}</td>
          </table>
        </S.Form>
        <S.ButtonForm>
          <S.SubmitButton 
            onClick={() => {
              alert('지원페이지로 이동하는 버튼')
            }}
          >
            지원하기
          </S.SubmitButton>
          <S.QuestionButton 
            onClick={() => {
              router.push('https://open.kakao.com/o/szJTIe3d');
            }}
          >
            질문하기
          </S.QuestionButton>
        </S.ButtonForm>
      </S.Container>
      <S.Bottom />
    </S.Layout>
  );
};

export default RecruitmentDetail;