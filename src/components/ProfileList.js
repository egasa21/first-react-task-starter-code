import React from 'react';
import ProfileCard from './ProfileCard';

function ProfileList({ profiles }) {
    return (
        <div className="profile-list">
            {/* TODO: Use the map function to render a ProfileCard for each profile */}
            {profiles.map((profile) => (
                <ProfileCard
                    key={profile.id}
                // TODO: Pass profile data (name, age, location, isOnline) to ProfileCard
                />
            ))}
        </div>
    );
}

export default ProfileList;
