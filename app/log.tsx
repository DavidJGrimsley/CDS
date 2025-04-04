// import { useState, useEffect } from "react";
// import { Button, TextInput, View, StyleSheet, Text } from "react-native";
// import { Stack, useRouter } from "expo-router";
// import { createClient } from "@supabase/supabase-js";

// import { Container } from "~/components/Container";
// import { ScreenContent } from "~/components/ScreenContent";

// const supabase = createClient(
//   "https://your-supabase-url.supabase.co",
//   "your-supabase-anon-key",
// );

// export default function BackDoor() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [userEmail, setUserEmail] = useState(null); // State to store the logged-in user's email
//   const router = useRouter(); // Router for navigation

//   const handleLogin = async () => {
//     try {
//       const { data, error } = await supabase.auth.signInWithPassword({
//         email,
//         password,
//       });

//       if (error) {
//         console.error("Error logging in:", error.message);
//         alert("Login failed: " + error.message); // Show an alert to the user
//       } else if (data?.user) {
//         console.log("User logged in successfully:", data);
//         // setUserEmail(data.user.email); // Save the user's email
//         router.push("/"); // Navigate back to the home screen
//       } else {
//         console.error("Unexpected response:", data);
//         alert("Unexpected error occurred. Please try again.");
//       }
//     } catch (err) {
//       console.error("Unexpected error:", err);
//       alert("An unexpected error occurred. Please try again.");
//     }
//   };

//   useEffect(() => {
//     const fetchUser = async () => {
//       const { data, error } = await supabase.auth.getUser();
//       if (data?.user) {
//         // setUserEmail(data.user.email); // Set the logged-in user's email
//       }
//     };

//     fetchUser();
//   }, []);

//   return (
//     <>
//       <Stack.Screen options={{ title: "Login" }} />
//       <Container>
//         <ScreenContent path="app/login.tsx" title="Login" />
//         <View style={styles.form}>
//           {userEmail ? (
//             <Text style={styles.loggedInText}>Logged in as: {userEmail}</Text>
//           ) : (
//             <>
//               <Text style={styles.label}>Email</Text>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Enter your email"
//                 value={email}
//                 onChangeText={setEmail}
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//               />
//               <Text style={styles.label}>Password</Text>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Enter your password"
//                 value={password}
//                 onChangeText={setPassword}
//                 secureTextEntry
//               />
//               <Button title="Log In" onPress={handleLogin} />
//             </>
//           )}
//         </View>
//       </Container>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   form: {
//     marginTop: 20,
//     padding: 10,
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 15,
//   },
//   loggedInText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
// });
