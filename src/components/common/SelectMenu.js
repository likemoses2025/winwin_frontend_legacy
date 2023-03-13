import React, {useState} from 'react';
import {View} from 'react-native';
import {Picker} from 'react-native';

import {List} from 'react-native-paper';

const items = [
  {label: 'Item 1', value: 'item1'},
  {label: 'Item 2', value: 'item2'},
  {label: 'Item 3', value: 'item3'},
];

const SelectMenu = () => {
  const [selectedValue, setSelectedValue] = useState(items[0].value);

  return (
    <View>
      <List.Item
        title="Select an item"
        description="Choose an item from the list"
      />
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        {items.map(item => (
          <Picker.Item key={item.value} label={item.label} value={item.value} />
        ))}
      </Picker>
    </View>
  );
};

export default SelectMenu;
