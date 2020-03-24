import { useRouter } from 'next/router';
import Header from '../../components/Header';

const Questions = () => {
    const router = useRouter();
    const { difficulty } = router.query;

    return (
        <>
        <Header />
        <h1>difficulty: {difficulty}</h1>
        </>
    )
}

export default Questions