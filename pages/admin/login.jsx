import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../../styles/Login.module.css'

const Login = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(false);
    const router = useRouter();

    const handleClick = async () => {
        try {
            await axios.post('http://localhost:3000/api/login', {
                username,
                password
            });
            // localStorage.setItem('token', res.data.token);
            router.push('/admin');
        } catch (error) {
            setError(true);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1>Dashboard</h1>
                <input
                    placeholder="Username"
                    className={styles.input}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    placeholder="Password"
                    type="password"
                    className={styles.input}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleClick} className={styles.button}>
                    Sign In
                </button>
                {error && <span className={styles.error}>Wrong Credentials!</span>}
            </div>
        </div>
    )
}

export default Login
