import React, {useCallback, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import gunnySackNumber from '../../../assets/datas/GunnySackNumber';
import yearMonth from '../../../assets/datas/YearMonth';

const ReturnConfirm = ({route}) => {
  const {returnItemList} = route.params;
  const [filterData, setFilterData] = useState('');

  useEffect(() => {
    filteredReturnInputData();
  }, []);

  // 입력값이 0보다 큰 값을 필터링
  const filteredReturnInputData = useCallback(() => {
    const filterInputData = returnItemList.filter(item => item.returnCount > 0);
    setFilterData(filterInputData);
  }, [returnItemList]);

  // 품목별 합계

  // 전체 수량, 전체 금액 계산

  console.log('filterData', filterData);
  console.log('gunnySackNumber', gunnySackNumber);
  console.log('yearMonth', yearMonth);

  return (
    <View>
      <Text>ReturnConfirm</Text>
    </View>
  );
};

export default ReturnConfirm;
