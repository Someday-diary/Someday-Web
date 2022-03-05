import * as S from 'src/components/Main/Recruitment/List/index.style';

import RecruitmentItem from 'src/components/Main/Recruitment/Item/index';

import { useEffect, useState } from 'react';
import { handleGetRecruitList } from 'src/lib/api/recruit/index.api';
import { IJobGroupList } from 'src/types/recruit';

const RecruitmentList = () => {
  const [jobGroup, setJobGroup] = useState<IJobGroupList[]>();
  useEffect(() => {
    handleGetRecruitList().then(res => {
      setJobGroup(res.result);
    }).catch(err => {
      console.log(err);
    });
  }, []);

  const widths = ['8.5', '6.5', '9.5', '9.3', '7.1'];

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
        jobGroup && (
          jobGroup.map(
            job => {
              return <RecruitmentItem
                key={job}
                object={job}
                width={widths[Number(job.id) - 1]}
              />
            }
          )
        )
      }
    </>
  );
};

export default RecruitmentList;