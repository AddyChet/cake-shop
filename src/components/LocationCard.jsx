import React from 'react';

const LocationCard = () => {
  // Array of locations (original + 2 dummies + 2 new branches)
  const locations = [
    {
      outlet: "A Piece Of Cake | Pune | Maharashtra",
      address: "Shop No.12, SILVER LOKA, Wanwadi, Pune, Maharashtra 411040",
      notes: "lorem",
      phone: "+91-987654321"
    },
    {
      outlet: "A piece of cake | Pune | Maharashtra",
      address: "Shop No.6, the Peak, opp. to Clover Hill Plaza, NIBM Undri Road, Kondhwa, Pune, Maharashtra 411048",
      notes: "lorem",
      phone: "+91-987654321"
    },
    {
      outlet: "A piece of cake | Pune | Maharashtra",
      address: "Shop No.6, the Peak, opp. to Clover Hill Plaza, lorem ipsum dolor sit amet, Maharashtra 411048",
      notes: "lorem",
      phone: "+91-987654321"
    }
  ];

  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-15 mt-12" style={{ color: '#862633' }}>OUR BRANCHES</h1>
      <div className="grid mb-25 grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto justify-items-center">
        {locations.map((location, index) => (
          <div 
            key={index} 
            className="max-w-sm min-h-[350px] rounded-2xl border border-[#F6CFCF] bg-white shadow-md p-6 transition-all duration-300 hover:shadow-[4px_0_8px_rgba(134,38,50,0.3)]"
          >
            <h2 className="font-bold text-xl mb-3 text-[#862633]">
              {location.outlet}
            </h2>
            
            <div className="space-y-6 text-[#3E3C3C]">
              <div className="flex items-start mt-5">
                <span className="mr-2 text-[#C1003B]">
                  {/* Location pin icon (SVG) */}
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M10 18a1 1 0 0 1-.755-.349c-2.537-2.937-7.078-7.936-7.078-11.151A7.833 7.833 0 0 1 10 2a7.832 7.832 0 0 1 7.833 7.833c0 3.215-4.54 8.215-7.078 11.151A1 1 0 0 1 10 18zm0-14a6.002 6.002 0 0 0-6 6c0 2.59 3.646 7.02 6 9.897C12.354 17.02 16 12.59 16 10a6.002 6.002 0 0 0-6-6zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"/></svg>
                </span>
                <div>
                  <span className="block">
                    {location.address}
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-[#C1003B]">
                  {/* User icon (SVG) */}
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M10 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm3 1h-6c-2.21 0-4 1.79-4 4v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1c0-2.21-1.79-4-4-4z" fill="currentColor"/></svg>
                </span>
                <span>Manager: <span className="font-semibold">{location.notes}</span></span>
              </div>
            </div>
            
            {/* Phone */}
            <div className="flex items-center mt-5">
              <span className="mr-2 text-[#C1003B]">
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M6.75 3.667c0-.92.747-1.667 1.667-1.667H11.583c.92 0 1.667.747 1.667 1.667v12.666a1.667 1.667 0 0 1-1.667 1.667H8.417A1.667 1.667 0 0 1 6.75 16.333V3.667z" fill="currentColor"/></svg>
              </span>
              <span>{location.phone}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LocationCard;
