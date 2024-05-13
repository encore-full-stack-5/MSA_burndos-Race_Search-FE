import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <main style={{height:"100svh"}}>
        <Outlet />
      </main>
    </>
  );
}

export default App;
