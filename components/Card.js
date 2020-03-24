import Link from 'next/link'

const Card = (props) => (
    <div>
        <Link href={props.to}>
            <a className="card">
                <h3>{props.title} &rarr;</h3>
                <p>{props.description}</p>
            </a>
        </Link>
        <style jsx>{`
            .card {
                margin: 1rem;
                padding: 1.5rem;
                text-align: center;
                color: inherit;
                text-decoration: none;
                border: 1px solid #eaeaea;
                border-radius: 10px;
                transition: color 0.15s ease, border-color 0.15s ease;
            }

            .card:hover,
            .card:focus,
            .card:active {
                color: #0070f3;
                border-color: #0070f3;
            }

            .card h3 {
                margin: 0 0 1rem 0;
                font-size: 1.5rem;
            }

            .card p {
                margin: 0;
                font-size: 1.25rem;
                line-height: 1.5;
            }
            `}
        </style>
    </div>
)

export default Card