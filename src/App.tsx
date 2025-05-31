import './App.scss';
import DATA from './assets/data.json';
import { useEffect, useState } from 'react';
import type { QUIZ } from './interfaces/QUIZ.ts';
import { Quiz } from './components/quiz.tsx';

function App() {
    const [data, setData] = useState<QUIZ[]>([]);

    useEffect(() => {
        // fetch('')
        //     .then((res) => res.json)
        //     .then((data) => setData(data));
        setData(DATA as QUIZ[]);
    }, []);

    return (
        <div className="container">
            <div className="subject">Programming</div>
            <div className="question-header">question: 1/10</div>
            <Quiz {...data[0]} />
            <div className="nav nav-next">
                <button>Next</button>
            </div>
            <div className="nav nav-prev">
                <button>Prev</button>
            </div>
        </div>
    );
}

export default App;
