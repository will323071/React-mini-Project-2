import React, { useState } from "react";

export function FlipCard({ front, back }) {
    const [flipped, setFlipped] = useState(false);
    return (
        <div className="flex flex-col items-center gap-2">
            {/* 바깥 컨테이너 (perspective 적용) */}
            <div style={{ width: '200px', height: '200px', perspective: '1000px', }}>
                {/* 카드 내부 (rotate 동작) */}
                <div style={{ width: '100%', height: '100%',  transition: 'transform 0.5s', transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
                {/* 앞 이미지 */}
                <img src={front} alt="front" style={{ width: '100%', height: '100%', backfaceVisibility: 'hidden', position: 'absolute', transform: 'rotateY(0deg)', }} />
                {/* 뒤 이미지 */}
                <img src={back} alt="back" style={{ width: '100%', height: '100%', backfaceVisibility: 'hidden', position: 'absolute', transform: 'rotateY(180deg)', }} />
            </div>
        </div>
        <button onClick={() => setFlipped((prev) => !prev)} className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300">뒤집기</button>
    </div>
    );
}
