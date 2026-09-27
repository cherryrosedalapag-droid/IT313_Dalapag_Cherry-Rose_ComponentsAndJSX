import { View, Text, StyleSheet } from "react-native";

interface StudentCardProps {
  name: string;
  course: string;
  units: number;
  isFullLoad: boolean;
}

export default function StudentCard({
  name,
  course,
  units,
  isFullLoad,
}: StudentCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>

      <Text style={styles.info}>
        Course: {course}
      </Text>

      <Text style={styles.info}>
        Units: {units}
      </Text>

      {isFullLoad && (
        <Text style={styles.fullLoad}>
          Full Load
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },

  info: {
    fontSize: 16,
    marginBottom: 4,
  },

  fullLoad: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});