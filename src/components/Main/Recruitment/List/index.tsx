import * as S from 'src/components/Main/Recruitment/List/index.style';
import 'react-loading-skeleton/dist/skeleton.css';

import RecruitmentItem from 'src/components/Main/Recruitment/Item/index';

import { useEffect, useState } from 'react';
import { handleGetRecruitList } from 'src/lib/api/recruit/index.api';
import { IJobGroupList } from 'src/types/recruit';
import Skeleton from 'react-loading-skeleton';

const RecruitmentList = () => {
  const [jobGroup, setJobGroup] = useState<IJobGroupList[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    handleGetRecruitList().then(res => {
      setJobGroup(res.result);
    }).catch(err => {
      console.log(err);
    });
  }, []);

  useEffect(() => {
    if (jobGroup)
      setLoading(false);
  }, [jobGroup]);

  const ItemSkeleton: object = {
    'height': '50px',
    'margin-top': '20px',
    'margin-bottom': '15px'
  }

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
        loading === true ? (
          <>
            <Skeleton count={10} style={ItemSkeleton} />
          </>
        ) : (
          jobGroup && (
            jobGroup.map(
              job => {
                return <RecruitmentItem
                  key={job}
                  object={job}
                />
              }
            )
          )
        )
      }
    </>
  );
};

export default RecruitmentList;