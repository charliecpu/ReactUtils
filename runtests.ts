import { loginUser } from './src/UserStore';


async function runTests() {
    const validUsername = 'admin';
    const validPassword = 'password';
    const invalidUsername = 'wrong';
    const invalidPassword = 'wrong';
    const url = 'http://localhost:5086/api/User/login';

    // Test successful login
    try {
        const user = await loginUser(url, validUsername, validPassword);
        console.log('Test successful login:', user.username === validUsername && user.role === 'admin' ? 'Passed' : 'Failed');
    } catch (error) {
        console.log('Test successful login: Failed', error);
    }

    // Test failed login
    try {
        await loginUser(url, invalidUsername, invalidPassword);
        console.log('Test failed login: Failed');
    } catch (error) {
        console.log('Test failed login: Passed');
    }
}

runTests().catch(console.error);
