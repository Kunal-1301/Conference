import React from 'react';
import { importantDates } from "../data/conferenceData";

export default function Floater() {
    return (
        <aside className="floater" id='dates' aria-label="Important Dates">
            <section className="impDates">
                <h3>IMPORTANT DATES</h3>
                <ul>
                    {importantDates.map((item) => (
                        <li key={item.id}>
                            {item.label}
                            <span>{item.date}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </aside>
    );
}

