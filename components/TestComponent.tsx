import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Text } from "react-native";

import { ScreenContent } from "./ScreenContent";

const supabase = createClient("your-supabase-url", "your-supabase-anon-key");

const YourComponent = () => {
  const [userRole, setUserRole] = useState<null | "backend" | "frontend">(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session?.user) {
        // Example: Check user metadata or role
        const { role } = data.session.user.user_metadata || {};
        if (role === "backend") {
          setUserRole("backend");
        } else if (role === "frontend") {
          setUserRole("frontend");
        } else {
          setUserRole(null);
        }
      } else {
        setUserRole(null);
      }
    };

    fetchUser();
  }, []);

  return (
    <ScreenContent title="My Title" path="/example">
      {userRole === "backend" ? (
        <Text>Welcome to the backend dashboard!</Text>
      ) : userRole === "frontend" ? (
        <Text>Welcome to the frontend site!</Text>
      ) : (
        <Text>Please log in to access the site.</Text>
      )}
    </ScreenContent>
  );
};

export default YourComponent;
