/* eslint-disable */
import * as S from "src/components/Main/Recruitment/Detail/index.style";
import 'react-loading-skeleton/dist/skeleton.css';

import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import jobDescription from "src/config/jobDescription.json";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const RecruitmentDetail = () => {
  const router = useRouter();

  const { id } = router.query;
  const [idx, setIdx] = useState<number|null>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if(id) 
      setIdx(Number(id));
    
    if (Number(id) > jobDescription.jobDescription.length) {
      router.push('/recruitment');
    }
  }, [id]);

  const TitleSkeleton: object = {
    'width': '300px',
    'height': '30px',
    'margin-top': '50px',
    'margin-bottom': '20px'
  }

  const TextSkeleton: object = {
    'margin-bottom': '10px',
    'width': '600px',
    'height': '20px'
  }

  const BigBoxSkeleton: object = {
    'width': '540px',
    'height': '110px',
  }

  useEffect(() => {
    if (idx)
      setLoading(false);
  }, [idx]);

  return (
    <S.Layout lang="200">
      {
        loading === true ? (
          <>
            <Skeleton 
              width={'1200px'} 
              height={'350px'} 
              borderRadius={'24px'} 
            />
            <S.SkeletonContainer>
              <Skeleton style={TitleSkeleton} />
              <Skeleton count={4} style={TextSkeleton} />
              <Skeleton style={TitleSkeleton} />
              <Skeleton count={2} style={TextSkeleton} />
              <Skeleton style={TitleSkeleton} />
              <Skeleton count={2} style={TextSkeleton} />
              <Skeleton style={TitleSkeleton} />
              <Skeleton style={BigBoxSkeleton} />
            </S.SkeletonContainer>
          </>
        ) : (
          idx && idx <= jobDescription.jobDescription.length && (
            <>
              <Image 
                src={`/image/jobGroup/DeveloperBanner${idx}.svg`} 
                width={'1200px'} 
                height={'350px'} 
              />
              <S.Container>
                <S.MainTitle>{jobDescription.jobDescription[idx-1]?.jobGroup}</S.MainTitle>
                <S.Title>What you will do as a team member</S.Title>
                <S.Text>
                  {
                    jobDescription.jobDescription[idx-1]?.text1.split('\n').map(
                      text => {
                        return <div>{text}</div>
                      }
                    )
                  }
                </S.Text>
                {
                  idx === 5 && (
                    <S.InnerImage>
                      <Image 
                        src={jobDescription.jobDescription[idx-1]?.innerImage} 
                        width={'820px'} 
                        height={'278px'} 
                        placeholder={'blur'} 
                        blurDataURL={'/image/jobGroup/InnerImage.svg'}
                      />
                    </S.InnerImage>
                  )
                }
                <S.Title>Preferential treatment</S.Title>
                <S.Text>
                  {
                    jobDescription.jobDescription[idx-1]?.text2.split('\n').map(
                      text => {
                        return <div>{text}</div>
                      }
                    )
                  }
                </S.Text>
                <S.Title>Recruitment process</S.Title>
                <S.Text>
                  {jobDescription.jobDescription[idx-1]?.text3}
                </S.Text>
                <S.Title>A word from a senior</S.Title>
                <S.TextForm>
                  {
                    jobDescription.jobDescription[idx-1]?.text4?.split('\n').map(
                      text => {
                        return <div id="first">{text}</div>
                      }
                    )
                  }
                </S.TextForm>
                <S.Line />
                <S.Form>
                  <table>
                    <td id='title'>Job Group</td>
                    <td>{jobDescription.jobDescription[idx-1]?.jobGroup}</td>
                  </table>
                </S.Form>
                <S.Form>
                  <table>
                    <td id='title'>th</td>
                    <td>{jobDescription.jobDescription[idx-1]?.number}</td>
                  </table>
                </S.Form>
                <S.Form>
                  <table>
                    <td id='title'>Daedline</td>
                    <td>{jobDescription.jobDescription[idx-1]?.deadLine}</td>
                  </table>
                </S.Form>
                <S.ButtonForm>
                  <S.SubmitButton 
                    onClick={() => {
                      router.push(`/apply?jobGroup=${jobDescription.jobDescription[idx-1]?.jobGroup}&recruit=${idx}`)
                    }}
                  >
                    Apply
                  </S.SubmitButton>
                  <S.QuestionButton 
                    onClick={() => {
                      window.open('https://open.kakao.com/o/szJTIe3d');
                    }}
                  >
                    Ask
                  </S.QuestionButton>
                </S.ButtonForm>
              </S.Container>
            </>
          )
        )
      }
      <S.Bottom />
    </S.Layout>
  );
};

export default RecruitmentDetail;