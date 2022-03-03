import { useRouter } from "next/router";
import * as S from "src/components/Main/Recruitment/Detail/index.style";

const RecruitmentDetail = () => {
  const router = useRouter();

  return (
    <S.Layout lang="200">
      <S.BannerImage src="/image/DesignerBanner.svg" />
      <S.Container>
        <S.MainTitle>UX/UI Designer</S.MainTitle>
        <S.Title>팀원으로서 하게 될 업무</S.Title>
        <S.Text>
          UX(User eXperience)는 사용자 경험을 의미합니다.<br />
          UX/UI 디자이너는 사용자 중심으로 생각하며, 사용자 친화적인 디자인을 하는 역할을 합니다. <br />
          기획 단계부터 개발까지 모든 단계에 참여하며, 프러덕트 개발에 큰 비중을 차지합니다. <br /><br />
          1. 기존 서비스인 &lsquo;나를 기록하다, 오늘하루&rsquo;의 리디자인 업무에 참여합니다. <br/>
          2. UX 방법론에 따라 리서치/User Flow 제작/와이어프레임 제작/프로토타입 제작/UI 디자인 등의 업무에 참여합니다. <br />
          3. 프로젝트에 필요한 아이콘 등을 제작하며, 최종적으로 디자인 시스템을 제작합니다.
        </S.Text>
        <S.Image src="/image/DesignerImage.svg" />
        <S.Title>우대사항</S.Title>
        <S.Text>
          디자인 툴을 다뤄본 경험이 있으신 분 [ex|Photoshop, Illustrator, Figma, Adobe XD 등] <br />
          이유 있는 디자인의 필요성을 인지 하고 있으신 분
        </S.Text>
        <S.Title>채용과정</S.Title>
      <S.Text>
          서류 접수 &gt; 사전 과제(디자인 과제) &gt; <br />
          직무 인터뷰/문화적합성 인터뷰 &gt; 인턴과정 &gt; 최종 합격
        </S.Text>
        <S.Title>선배의 한마디</S.Title>
        <S.TextForm>
          <div id='first'>프로젝트에서 디자인은 생각보다 훨씬 큰 비중을 차지하고 있습니다.</div>
          <div>오늘하루팀에서 UX/UI 디자이너로서 참여하여 사용자를 위한 디자인을 해본다면 좋은 경험이 될 것 입니다.</div>
        </S.TextForm>
        <S.Line />
        <S.Form>
          <table>
            <td id='title'>직군</td>
            <td>asdf</td>
          </table>
        </S.Form>
        <S.Form>
          <table>
            <td id='title'>기수</td>
            <td>asdf</td>
          </table>
        </S.Form>
        <S.Form>
          <table>
            <td id='title'>마감일자</td>
            <td>asdf</td>
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