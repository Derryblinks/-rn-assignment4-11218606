import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const JobCard = ({ job }) => (
  <View style={styles.card}>
    <Image source={job.logo} style={styles.logo} />
    <View style={styles.details}>
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.company}>{job.company}</Text>
      <Text style={styles.salary}>{job.salary}</Text>
      <Text style={styles.location}>{job.location}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginRight: 10,
    width: 250,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3A3D46',
  },
  company: {
    fontSize: 14,
    color: '#A1A5B2',
  },
  salary: {
    fontSize: 14,
    color: '#3A3D46',
    marginTop: 5,
  },
  location: {
    fontSize: 14,
    color: '#A1A5B2',
  },
});

export default JobCard;
