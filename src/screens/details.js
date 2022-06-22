import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Pressable,
  Linking,
} from 'react-native';
import React from 'react';
import PlanetHeader from '../components/planet-header';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import {
  EarthSvg,
  JupiterSvg,
  MarsSvg,
  MercurySvg,
  NeptuneSvg,
  SaturnSvg,
  UranusSvg,
  VenusSvg,
} from '../svg';
import Text from '../components/text/text';

const PlanetSection = ({ title, value }) => {
  return (
    <View style={styles.planetSection}>
      <Text preset="small" style={{ textTransform: 'uppercase' }}>
        {title}
      </Text>
      <Text preset="h2">{value}</Text>
    </View>
  );
};

export default function Details({ route }) {
  const { planet } = route.params;

  const renderImage = () => {
    switch (planet?.name) {
      case 'mercury':
        return <MercurySvg />;
      case 'earth':
        return <EarthSvg />;
      case 'jupiter':
        return <JupiterSvg />;
      case 'mars':
        return <MarsSvg />;
      case 'neptune':
        return <NeptuneSvg />;
      case 'saturn':
        return <SaturnSvg />;
      case 'uranus':
        return <UranusSvg />;
      case 'venus':
        return <VenusSvg />;
    }
  };

  const onPressLink = () => {
    Linking.openURL(planet?.wikiLink);
  };

  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader title={planet?.name} backBtn={true} />
      <ScrollView>
        <View style={styles.imageView}>{renderImage()}</View>

        <View style={styles.detailsView}>
          <Text preset="h1" style={styles.name}>
            {planet?.name}
          </Text>
          <Text style={styles.description}>{planet?.description}</Text>
          <Pressable onPress={onPressLink} style={styles.source}>
            <Text>Source: </Text>
            <Text preset="h4" style={styles.wikipedia}>
              Wikipedia
            </Text>
          </Pressable>
        </View>

        <PlanetSection title="ROTATION TIME" value={planet?.rotationTime} />
        <PlanetSection title="REVOLUTION TIME" value={planet?.revolutionTime} />
        <PlanetSection title="RADIUS" value={planet?.radius} />
        <PlanetSection title="AVERAGE TEMP." value={planet?.avgTemp} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  imageView: {
    marginTop: spacing[8],
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsView: {
    marginTop: spacing[10],
    marginHorizontal: spacing[6],
    alignItems: 'center',
  },
  name: {
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    marginTop: spacing[5],
    lineHeight: 21,
  },
  source: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing[5],
    marginBottom: spacing[10],
  },
  wikipedia: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  planetSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[4],
    borderWidth: 1,
    borderColor: colors.grey,
    marginHorizontal: spacing[6],
    marginBottom: spacing[4],
  },
});
