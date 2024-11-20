import React from 'react';

function ProfileCard({ name, age, location, isOnline }) {
    return (
        <div className="profile-card">
            {/* TODO: Display user name use <h2> tag */}


            {/* TODO: Display age  use <p> tag*/}


            {/* TODO: Display location or "Unknown" if location is missing */}
            <p>Location: </p>

            <div className="status">
                <span
                    data-testid="status-dot"
                    style={{
                        // TODO: Set the background color based on isOnline (green for online, gray for offline)
                    }}
                />
                {/* TODO: Display "Online" or "Offline" based on isOnline */}
            </div>
        </div>
    );
}

export default ProfileCard;
