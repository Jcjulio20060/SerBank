import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons/faCircleQuestion';
import { styles } from '../../screens/login/style';

export default function LogoHeader() {
  return (
    <View style={{ gap: 15 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={styles.Logo}>
          <Text style={{ color: '#2D9CDB' }}>Ser</Text>
          <Text style={{ color: '#F2C94C' }}>Bank</Text>
        </Text>
        <FontAwesomeIcon icon={faCircleQuestion} style={{ color: 'gray' }} />
      </View>
      <Text style={styles.title}>Bem vindo ao banco do futuro!</Text>
      <Text style={styles.subtitleHead}>
        Seu primeiro passo para a liberdade financeira começa aqui
      </Text>
    </View>
  );
}
