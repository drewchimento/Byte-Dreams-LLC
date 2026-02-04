import React from 'react';
import './DiscoveryButton.css';

interface DiscoveryButtonProps {
    onClick?: () => void;
}

const DiscoveryButton: React.FC<DiscoveryButtonProps> = ({ onClick }) => {
    return (
        <div className="discovery-btn-wrapper">
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                <filter width="3000%" x="-1000%" height="3000%" y="-1000%" id="unopaq">
                    <feColorMatrix
                        values="1 0 0 0 0 
                  0 1 0 0 0 
                  0 0 1 0 0 
                  0 0 0 3 0"
                    ></feColorMatrix>
                </filter>
            </svg>


            <button className="button" onClick={onClick}>
                <div className="a l"></div>
                <div className="a r"></div>
                <div className="a t"></div>
                <div className="a b"></div>
                <div className="text heading-font">BOOK A DISCOVERY CALL</div>
            </button>
        </div>
    );
};

export default DiscoveryButton;
