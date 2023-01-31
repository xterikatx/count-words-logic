import React, {useCallback, useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

function App() {
  const [showView2, setShowView2] = useState(false);

  const [value, setValue] = useState('');
  const [lettersArr, setLetterArr] = useState([]);

  const countLetters = useCallback(() => {
    let letters = [];
    letters.push(value.split(' '));

    // return ex: {"esse": 1, "exemplo": 2, "texto": 1, "um": 1, "é": 1}
    const count = letters[0].reduce((acc, element) => {
      acc[element] = (acc[element] || 0) + 1;

      return acc;
    }, {});

    setLetterArr(count);

    return count;
  }, [value]);

  useEffect(() => {
    countLetters();
  }, [countLetters]);

  function renderView() {
    if (showView2) {
      return (
        <>
          <Text>Esse é o output</Text>
          {Object.entries(lettersArr).map(item => (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {console.log(item)}
              <Text>{item[0]}: </Text>
              <Text>{item[1]}</Text>
            </View>
          ))}
        </>
      );
    }
    return (
      <View>
        <Text>Esse é o Input Text</Text>
        <TextInput placeholder="input1" onChangeText={setValue} />
      </View>
    );
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {renderView()}
      <TouchableOpacity style={{marginTop: 20}} onPress={() => setShowView2(oldValue => !oldValue)}>
        <Text>{showView2 ? 'Voltar' : 'Press me'}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default App;
