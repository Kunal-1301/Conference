import React from 'react';
import { importantDates } from "../data/conferenceData";
import './Floater.css';

export default function Floater() {
    return (
        <aside className="floater" id='dates' aria-label="Important Dates">
            <section className="impDates">
                <h3>IMPORTANT DATES</h3>
                <ul>
                    {importantDates.map((item) => (
                        <li key={item.id}>
                            <span className="date-label">{item.label}</span>
                            <span className="date-value">{item.date}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </aside>
    );
}
