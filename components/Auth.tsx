import { Button, Input } from '@rneui/themed';
import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';

import { supabase } from '../utils/supabase';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    console.log({ email, password });

    if (typeof window !== "undefined") {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) Alert.alert(error.message);
    } else {
      console.warn('Supabase auth methods are not available in this environment.');
    }

    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);

    if (typeof window !== 'undefined') {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) Alert.alert(error.message);
    } else {
      console.warn('Supabase auth methods are not available in this environment.');
    }

    setLoading(false);
  }

  return (
    <View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Input
          label="Email"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Input
          label="Password"
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button title="Sign in" disabled={loading} onPress={() => signInWithEmail()} />
      </View>
      <View style={styles.verticallySpaced}>
        <Button title="Sign up" disabled={loading} onPress={() => signUpWithEmail()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
});

