import { useNavigate } from 'react-router-dom';

export default function CardItems() {
    const navigate = useNavigate();

    function CardImages() {
        const handleClick = () => {
            navigate('/');
        };

        return (
            <button
                onClick={handleClick}
                style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
            >
                <img
                    src="/assets/image.svg"
                    alt="포스터"
                    style={{ width: '180px', borderRadius: '6px' }}
                />
            </button>
        );
    }

    return (
        <div
            className="card-container"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '40px',
            }}
        >


            {/*  카드 박스 */}
            <div
                className="card"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '20px',
                    border: '1px solid #ccc',
                    borderRadius: '12px',
                    width: '220px',
                }}
            >
                <CardImages />
                <h3 style={{ marginTop: '10px', fontSize: '18px' }}>제목</h3>
                <p style={{ marginTop: '5px', color: '#555' }}>⭐️ 별점</p>
            </div>
        </div>
    );
}
