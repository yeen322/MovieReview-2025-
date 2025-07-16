const Header = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            padding: '6px',  // 헤더 패딩
            backgroundColor: 'white',
            position: 'fixed',
            top: '0',
            width: '100%',
            zIndex: 1000,
            borderBottom: '1px solid #ddd' // 회색 줄
        }}>
            <button style={{
                padding: '10px',  // Movie Diary 버튼 패딩
                backgroundColor: 'white',
                color: 'black',
                border: 'none',
                borderRadius: '5px',
                fontSize: '16px',  // 글자 크기
                marginRight: '6px' // 버튼 간격
            }}>
                🎥 Movie Diary
            </button>
            <button style={{
                padding: '10px',  // edit review 버튼 패딩
                backgroundColor: 'white',
                color: 'gray',
                border: 'none',
                borderRadius: '5px',
                fontSize: '12px'  // 글자 크기
            }}>
                ✒️Edit review
            </button>
        </div>
    );
}

export default Header;
