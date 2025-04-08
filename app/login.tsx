// import { Session } from '@supabase/supabase-js'
// import { useState, useEffect } from 'react'
// import { View } from 'react-native'

// import Account from '../components/Account'
// import Auth from '../components/Auth'
// import { supabase } from '../utils/supabase'

// export default function App() {
//   const [session, setSession] = useState<Session | null>(null)

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       supabase.auth.getSession().then(({ data: { session } }) => {
//         setSession(session);
//       });

//       supabase.auth.onAuthStateChange((_event, session) => {
//         setSession(session);
//       });
//     } else {
//       console.warn('Supabase auth methods are not available in this environment.');
//     }
//   }, [])

//   return (
//     <View>
//       {session && session.user ? <Account key={session.user.id} session={session} /> : <Auth />}
//     </View>
//   )
// }