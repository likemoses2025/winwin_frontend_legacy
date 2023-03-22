import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {DataTable} from 'react-native-paper';

const Table = ({data}) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title style={{flex: 1}}>NO</DataTable.Title>
            <DataTable.Title style={{flex: 3}}>품목</DataTable.Title>
            <DataTable.Title style={{flex: 1}}>수량</DataTable.Title>
            <DataTable.Title style={{flex: 1}} numeric>
              금액
            </DataTable.Title>
          </DataTable.Header>

          {data.map((i, index) => (
            <DataTable.Row key={i.product_no}>
              <DataTable.Cell style={{flex: 1}}>{index}</DataTable.Cell>
              <DataTable.Cell style={{flex: 3}}>
                {i.product_returnName}
              </DataTable.Cell>
              <DataTable.Cell
                style={{
                  flex: 1,
                  alignSelf: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                }}>
                {i.returnCount}
              </DataTable.Cell>
              <DataTable.Cell style={{flex: 1}} numeric>
                {parseInt(i.returnCount * i.product_returnPrice, 10)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </ScrollView>
    </View>
  );
};

export default Table;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 30,
  },
});
