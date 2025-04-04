import { createClient } from "@supabase/supabase-js";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Button, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const unstable_settings = {
  initialRouteName: "(drawer)",
};

const supabase = createClient(
  "https://byyxwnrmmbfcmcsnduyt.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5eXh3bnJtbWJmY21jc25kdXl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxMzI1NzUsImV4cCI6MjA1ODcwODU3NX0.PJV_YcrSLnpz6GONRUTPc4WGaq6ajKBJo-VX-4kU_Ng",
);

export default function RootLayout() {
  const [userRole, setUserRole] = useState<null | "backend" | "frontend">(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getSession();
      if (data?.session?.user) {
        const { role } = data.session.user.user_metadata || {};
        if (role === "backend") {
          setUserRole("backend");
        } else {
          setUserRole("frontend"); // Default to frontend for all other users
        }
      } else {
        setUserRole("frontend"); // Default to frontend if not logged in
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  if (loading) {
    return (
      <GestureHandlerRootView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ActivityIndicator size="large" color="#0000ff" />
      </GestureHandlerRootView>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {userRole === "backend" ? (
        <Stack>
          <Stack.Screen
            name="backend"
            options={{ title: "Backend Dashboard" }}
          />
        </Stack>
      ) : (
        <Stack>
          <Stack.Screen
            name="(drawer)"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="modal"
            options={{ title: "Modal", presentation: "modal" }}
          />
          <Stack.Screen name="login" options={{ title: "Login" }} />
        </Stack>
      )}
    </GestureHandlerRootView>
  );
}
