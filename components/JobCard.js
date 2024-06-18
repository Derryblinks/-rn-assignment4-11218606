// import React from 'react';
// import { Image, StyleSheet, Text, View } from 'react-native';

// const JobCard = ({ job, isFeatured }) => (
//   <View style={[styles.card, isFeatured && { backgroundColor: job.color } ,!isFeatured && styles.popularCard]}>
//     <Image source={job.logo} style={styles.logo} />
//     <View style={styles.details}>
//       <Text style={styles.title}>{job.title}</Text>
//       <Text style={styles.company}>{job.company}</Text>
//       <Text style={styles.salary}>{job.salary}</Text>
//       <Text style={styles.location}>{job.location}</Text>
//     </View>
//   </View>
// );

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 10,
//     padding: 30,
//     marginRight: 10,
//     width: 250,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   logo: {
//     width: 80,
//     height: 80,
//     marginRight: 15,
//     marginTop: -50,
//     display: "flex",
//   },
//   details: {
//     flex: 1,
//   },
  
//   title: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#3A3D46',
//     fontFamily: "Poppins"
//   },
//   popularCard: {
//     backgroundColor: '#FFFFFF',
//     marginBottom: 25,
//     width: '100%',
//     padding: 10,
//   },
//   company: {
//     fontSize: 14,
//     color: '#A1A5B2',
//     fontFamily: "Poppins"
//   },
//   salary: {
//     fontSize: 14,
//     color: '#3A3D46',
//     marginTop: 5,
//     fontFamily:"poppins",
//   },
//   location: {
//     fontSize: 14,
//     color: '#A1A5B2',
//     fontFamily:"Poppins"
//   },
// });

// export default JobCard;


import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const JobCard = ({ job }) => {
    return (
        <View style={styles.card}>
          <View style={styles.first}>
            <Image source={job.logo} style={styles.logo} />
            <View style={styles.third}>
              <Text style={styles.title}>{job.title}</Text>
              <Text style={styles.company}>{job.company}</Text>
            </View>
          </View>
          <View style={styles.second}>
            <Text style={styles.salary}>{job.salary}</Text>
            <Text style={styles.location}>{job.location}</Text>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
      width: 280,
      padding: 10,
      marginRight: 10,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 25,
      backgroundColor: 'lightblue',
      height: 180,
    },
    first: {
      flexDirection: 'row',

    },
    third: {
      paddingLeft: 10,
    },
    logo: {
      width: 80,
      height: 80,
      marginRight: 15,
    },
    second: {
      position: 'absolute',
      bottom: 0,
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      paddingBottom: 10
    },
    info: {
      marginRight: 15,
      
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 20,
      fontFamily: "Poppins",
      color: "#ffff",
      marginLeft: -20,
    },

    company: {
      fontSize: 14,
      color: '#6B7280',
      marginLeft: -20,
    },
    salary: {
      fontSize: 14,
      fontWeight: 'bold',
      marginLeft: 20,
      color: "#fff",
    },
    location: {
      fontSize: 12,
      color: '#6B7280',
      paddingLeft: 80,
      fontFamily: "Poppins", 
      marginRight: 10,
    },
})

export default JobCard


