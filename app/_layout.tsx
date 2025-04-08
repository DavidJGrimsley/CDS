import { createClient } from "@supabase/supabase-js";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const supabase = createClient(
  "https://byyxwnrmmbfcmcsnduyt.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5eXh3bnJtbWJmY21jc25kdXl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxMzI1NzUsImV4cCI6MjA1ODcwODU3NX0.PJV_YcrSLnpz6GONRUTPc4WGaq6ajKBJo-VX-4kU_Ng",
);

export default function RootLayout() {
  const [userRole, setUserRole] = useState<null | "backend" | "frontend">(null);
  const [loading, setLoading] = useState(true);
  
  // log user into backend
  // useEffect(() => {
  //   setUserRole("backend");
  //   setLoading(false);
  // }, [userRole]);
  
  // log user into frontend
  // useEffect(() => {
  //   setUserRole("frontend");
  //   setLoading(false);
  // }, [userRole]);
  

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getSession();
      console.log("🚀 ~ fetchUser ~ data:", data)
      if (data?.session?.user) {
        const { role } = data.session.user.user_metadata || {};
        console.log("🚀 ~ fetchUser !MetaData! ~ role:", role)
        if (role === "backend") {
          setUserRole("backend");
          console.log("🚀 inside userRole:", userRole)
        } else {
          setUserRole("frontend"); // Default to frontend for all other users
          console.log("🚀 inside userRole:", userRole)
        }
      } else {
        setUserRole(null); // User is not logged in
        console.log("🚀 inside NoData/User userRole:", userRole)
      }
      setLoading(false);
    };
    fetchUser();
  }, []);
  console.log("🚀 outside userRole:", userRole)

  return (
    <GestureHandlerRootView key={userRole} style={{ flex: 1 }}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : userRole === "backend" ? (
        <Stack>
          <Stack.Screen name="(backend)" options={{ headerShown: false }} />
        </Stack>
      ) : (
        <Stack>
          <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        </Stack>
      )}
    </GestureHandlerRootView>
  );
}


// "{added basic folder structure for backend but after adding the login screen, I am met with the 'no window' error.}"