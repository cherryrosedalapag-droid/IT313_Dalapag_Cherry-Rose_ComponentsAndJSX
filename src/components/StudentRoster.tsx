import { useState } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Button,
} from "react-native";

import StudentCard from "./StudentCard";
import { students } from "../data/students";

export default function StudentRoster() {
  const [reversed, setReversed] = useState(false);

  const displayedStudents = reversed
    ? [...students].reverse()
    : students;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Student Roster</Text>

      <Text style={styles.count}>
        Total Students: {students.length}
      </Text>

      <View style={styles.button}>
        <Button
          title={reversed ? "Original Order" : "Reverse Roster"}
          onPress={() => setReversed(!reversed)}
        />
      </View>

      {displayedStudents.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          course={student.course}
          units={student.units}
          isFullLoad={student.isFullLoad}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
    paddingTop: 60,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5,
  },

  count: {
    fontSize: 18,
    marginBottom: 20,
  },

  button: {
    marginBottom: 20,
  },
});