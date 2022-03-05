import * as S from 'src/components/Main/Recruitment/List/index.style';

import jobGroup from "src/config/jobGroup.json";
import RecruitmentItem from 'src/components/Main/Recruitment/Item/index';

import { useEffect } from 'react';
import { handleGetRecruitList } from 'src/lib/api/recruit/index.api';
import axios from 'axios';

const RecruitmentList = () => {
  // useEffect(() => {
  //   axios.get('https://recruit.someday.or.kr/recruit').then(res => console.log(res)).catch(err => console.log(err))
  // }, []);

  return (
    <>
      <S.ListTitle>
        <table>
          <td id='first'>직군</td>
          <td id='second'>기수</td>
          <td id='third'>마감일자</td>
        </table>
      </S.ListTitle>

      {
        jobGroup.jobGroup.map(
          job => {
            return <RecruitmentItem 
              key={job.id} 
              id={job.id} 
              jobGroup={job.jobGroup} 
              deadline={job.deadline} 
            />;
          }
        )
      }
    </>
  );
};

export default RecruitmentList;