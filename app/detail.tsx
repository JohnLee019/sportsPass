import { View, Text, StyleSheet } from "react-native";

export default function DetailPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>상세 화면</Text>
      <Text>여기에 체육시설 정보를 넣을 예정입니다.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 12 },
});
