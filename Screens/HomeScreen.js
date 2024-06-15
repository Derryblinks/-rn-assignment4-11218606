import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import JobCard from '../components/JobCard';

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  const featuredJobs = [
    { id: 1, title: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana', logo: require('../assets/images/facebook.png') },
    { id: 2, title: 'Product Manager', company: 'Google', salary: '$160,000', location: 'Accra, Ghana', logo: require('../assets/images/google.png') },
    // will be adding more featured jobs
  ];

  const popularJobs = [
    { id: 1, title: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US', logo: require('../assets/images/burgur.png') },
    { id: 2, title: 'Product Manager', company: 'Beats', salary: '$84,000/y', location: 'Florida, US', logo: require('../assets/images/beats.png') },
    { id: 3, title: 'Product Manager', company: 'Facebook', salary: '$86,000/y', location: 'Florida, US', logo: require('../assets/images/facebook.png') },
    // will be adding more popular jobs
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
        <Image source={require('../assets/images/profile.png')} style={styles.profilePic} />
      </View>
      <View style={styles.searchContainer}>
        <TextInput 
          style={styles.searchInput}
          placeholder="Search a job or position"
        />
        {/* Filter button can be added here */}
      </View>
      <Section title="Featured Jobs" jobs={featuredJobs} />
      <Section title="Popular Jobs" jobs={popularJobs} />
    </ScrollView>
  );
};

const Section = ({ title, jobs }) => (
  <View style={styles.section}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.seeAll}>See all</Text>
    </View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3A3D46',
  },
  email: {
    fontSize: 16,
    color: '#A1A5B2',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchContainer: {
    padding: 20,
  },
  searchInput: {
    height: 50,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3A3D46',
  },
  seeAll: {
    fontSize: 16,
    color: '#A1A5B2',
  },
});

export default HomeScreen;
