import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/serbankLogo.png')}
        style={{ width: 150, height: 150 }}
      />
      <Text style={styles.text}>SerBank</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
  }
});
