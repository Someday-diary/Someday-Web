import * as S from 'src/components/Main/index.style';

const MainForm = () => {
  const ScrollPage = () => {
    const location = document.querySelector("#move")?.getBoundingClientRect().top;
    window.scrollTo({top: location, behavior:'smooth'});
  }

  return (
    <S.Layout>
      <S.MainImage src='image/MainImage.png' />
      <S.ScrollImage 
        src='image/ScrollDown.png' 
        onClick={() => {ScrollPage();}}
      />
      <S.MainTitle 
        id='move'
      >
      <S.TitleText>
        <div>매일을 기록하는 습관</div>
        <div>하루 하루를 기록하며 나만의 앱을 만들어갑니다.</div>
      </S.TitleText>
      </S.MainTitle>
    </S.Layout>
  );
};

export default MainForm;