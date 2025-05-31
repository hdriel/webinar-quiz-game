import './App.css';
import DATA from './assets/data.json';
import { useEffect, useState } from 'react';
import type { QUIZ } from './interfaces/QUIZ.ts';

function App() {
    const [data, setData] = useState<QUIZ[]>([]);

    useEffect(() => {
        // fetch('')
        //     .then((res) => res.json)
        //     .then((data) => setData(data));
        setData(DATA as QUIZ[]);
    }, []);

    return <pre>{JSON.stringify(data, null, 4)}</pre>;
}

export default App;
