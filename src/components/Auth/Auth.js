import {useState} from "react";
import 'firebase/auth' 
import {useAuth} from '../../context/authContext'
// import { useFirebaseApp } from 'reactfire'


export default function Auth() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const authContext = useAuth()

    // const firebase = useFirebaseApp()

    const submit = async () => {
    //    await firebase.auth().createUserWithEmailAndPassword(email,password)
    }

    return (
        <div>
            <h1>Registrate!</h1>
            <label>Correo Electronico</label>
            <input type='email' className="input" onChange={(ev) => {setEmail(ev.target.value)}}/>
            <label>Contraseña</label>
            <input type='password' className="input" onChange={(ev) => {setPassword(ev.target.value)}}/>
            <label>Repetir contraseña</label>
            <input type='password' className="input"/>
            <button onClick={submit}>Finalizar registro</button>
        </div>
    )
}