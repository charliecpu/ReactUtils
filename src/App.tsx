import Login from "./Login"
import { useSessionTimeout } from "./useSessionTimeOut"

function App() {

  const apiurl = "http://localhost:5086/api/";


  useSessionTimeout({
    apiUrl: apiurl,
    timeout: 500 * 60 * 1, // 1 minutes
    pathtologin: "/login"
  });

  return (
    <>
      <Login />
    </>
  )
}

export default App
