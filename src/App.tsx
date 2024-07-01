import Login from "./Login"
import { useSessionTimeout } from "./useSessionTimeOut"
import { getUserStore } from "./UserStore";
function App() {

  const apiurl = "http://localhost:5086/api/";

  const useUserStore = getUserStore(apiurl);
  const logout = useUserStore(state => state.logout);
  const username = useUserStore(state => state.userName);

  useSessionTimeout({
    apiUrl: apiurl,
    timeout: 500 * 60 * 1, // 1 minutes
    onIdle: () => {
      logout(username);
    },
  });

  return (
    <>
      <Login />
    </>
  )
}

export default App
