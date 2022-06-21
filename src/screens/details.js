import { SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import Text from '../components/text/text';
import PlanetHeader from '../components/planet-header';
import { colors } from '../theme/colors';
import { useRoute } from '@react-navigation/native';

export default function Details() {
  const route = useRoute();
  const { planet } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader title={planet?.name} backBtn={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
});
