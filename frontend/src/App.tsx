import './App.css'
import qoppaLogo from './assets/qoppaLogo-bg-none.png'
import SignUp from './components/SignUp';


export default function App() {
  return (
    <>
      <img src={qoppaLogo} alt="qoppatech logo" />
      <SignUp />
    </>
  )
}
