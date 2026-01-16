// components/TravelMap.tsx
"use client";

import { useEffect, useRef } from "react";

type Place = {
  name: string;
  lat: number;
  lng: number;
  description: string;
  category: "travel" | "work" | "life experience" | "origin" | "study" | "life" | "project" | string;
  timeline?: string;
  link?: string;
  imageUrl?: string;
};

const places: Place[] = [
  {
    name: "France",
    lat: 46.2276,
    lng: 2.2137,
    category: "origin",
    description:
      "Country of origin; formative years and education, building strong cultural fluency, discretion and social awareness.",
  },

  {
    name: "Montréal, Canada",
    lat: 45.5017,
    lng: -73.5673,
    category: "study",
    timeline: "2010–2014",
    description:
      "BBA at HEC Montréal (trilingual) with an IT specialisation.",
  },

  {
    name: "Montréal, Canada",
    lat: 45.5017,
    lng: -73.5673,
    category: "work",
    timeline: "2010–2013",
    description:
      "Service industry work in bars and at the university.",
  },

  {
    name: "Montréal, Canada",
    lat: 45.5017,
    lng: -73.5673,
    category: "life",
    timeline: "2010–2011",
    description:
      "AIESEC member.",
  },

  {
    name: "Toronto, Canada",
    lat: 43.6532,
    lng: -79.3832,
    category: "study",
    timeline: "2009",
    description:
      "TOEFL preparation course focused on advanced academic and professional English.",
  },

  {
    name: "Madrid, Spain",
    lat: 40.4168,
    lng: -3.7038,
    category: "work",
    timeline: "2010 (2 months)",
    description:
      "Hospitality work in an Irish pub, covering bar service, food service and venue upkeep in a high-traffic environment.",
  },

  {
    name: "La Plata, Argentina",
    lat: -34.9205,
    lng: -57.9536,
    category: "work",
    timeline: "2011 (2 months)",
    description:
      "Volunteer work with a non-profit organisation, providing administrative support and coordinating donation campaigns.",
  },

  {
    name: "Burkina Faso",
    lat: 12.2383,
    lng: -1.5616,
    category: "life",
    timeline: "2005 (1 month)",
    description:
      "Supported teachers in a school for children with physical and intellectual disabilities.",
  },

  {
    name: "Brisbane, Australia",
    lat: -27.4698,
    lng: 153.0251,
    category: "study",
    timeline: "2014–2016",
    description:
      "Studied a Master in Information Technology at the University of Queensland.",
  },

  {
    name: "Brisbane, Australia (entrepreneurship)",
    lat: -27.4698,
    lng: 153.0251,
    category: "project",
    timeline: "2016–2019",
    description:
      "Built and tested an early business venture, gaining hands-on experience in operations, execution and resilience.",
  },

  {
    name: "Mullumbimby, NSW, Australia",
    lat: -28.553,
    lng: 153.507,
    category: "work",
    timeline: "2017–2025",
    description:
      "Founder and manager of Duck Distilling, producing and distributing whisky essences for the homebrew industry.",
  },

  {
    name: "Mullumbimby, NSW, Australia (fire service)",
    lat: -28.553,
    lng: 153.507,
    category: "life",
    timeline: "2019–2025",
    description:
      "Volunteer firefighter with the NSW Rural Fire Service; operational response to fires, floods, storms and road accidents, including training and equipment roles.",
  },

  {
    name: "United States (East & West Coast)",
    lat: 39.8283,
    lng: -98.5795,
    category: "travel",
    description:
      "Travel across both coasts, observing varied hospitality standards and service cultures.",
  },

  {
    name: "Yucatán, Mexico",
    lat: 20.7099,
    lng: -89.0943,
    category: "travel",
    description: "Travel experience.",
  },

  {
    name: "Belize",
    lat: 17.1899,
    lng: -88.4976,
    category: "travel",
    description: "Travel experience.",
  },

  {
    name: "Dublin, Ireland",
    lat: 53.3498,
    lng: -6.2603,
    category: "travel",
    description: "Travel experience.",
  },

  {
    name: "Islay, Scotland",
    lat: 55.756,
    lng: -6.287,
    category: "travel",
    description: "Travel experience.",
  },

  {
    name: "Prague, Czech Republic",
    lat: 50.0755,
    lng: 14.4378,
    category: "travel",
    description: "Travel experience.",
  },

  {
    name: "Italy",
    lat: 41.8719,
    lng: 12.5674,
    category: "travel",
    description: "Travel experience.",
  },

  {
    name: "Greece",
    lat: 39.0742,
    lng: 21.8243,
    category: "travel",
    description: "Travel experience.",
  },

  {
    name: "Ibiza (quiet side), Spain",
    lat: 38.9067,
    lng: 1.4206,
    category: "travel",
    description:
      "Nature-focused travel away from nightlife.",
  },

  {
    name: "Morocco (Marrakesh, Essaouira, Fez, Taghazout)",
    lat: 31.7917,
    lng: -7.0926,
    category: "travel",
    description:
      "Multi-city travel across Morocco.",
  },

  {
    name: "Tanzania",
    lat: -6.369,
    lng: 34.8888,
    category: "travel",
    description: "Travel experience.",
  },

  {
    name: "Senegal",
    lat: 14.4974,
    lng: -14.4524,
    category: "travel",
    description: "Travel experience.",
  },

  {
    name: "Egypt",
    lat: 26.8206,
    lng: 30.8025,
    category: "travel",
    description: "Travel experience.",
  },

  {
    name: "Doha, Qatar",
    lat: 25.2854,
    lng: 51.531,
    category: "travel",
    description: "Travel experience.",
  },

  {
    name: "Beijing, China",
    lat: 39.9042,
    lng: 116.4074,
    category: "travel",
    description: "Travel experience.",
  },

  {
    name: "Thailand",
    lat: 15.87,
    lng: 100.9925,
    category: "travel",
    description: "Travel experience.",
  },

  {
    name: "Laos",
    lat: 19.8563,
    lng: 102.4955,
    category: "travel",
    description: "Travel experience.",
  },

  {
    name: "Myanmar",
    lat: 21.9162,
    lng: 95.956,
    category: "travel",
    description: "Travel experience.",
  },

  {
    name: "Bali, Indonesia",
    lat: -8.3405,
    lng: 115.092,
    category: "travel",
    description: "Travel experience.",
  },

  {
    name: "Kuala Lumpur, Malaysia",
    lat: 3.139,
    lng: 101.6869,
    category: "travel",
    description: "Travel experience.",
  },

  {
    name: "Bundaberg, Australia",
    lat: -24.866,
    lng: 152.348,
    category: "travel",
    description: "Domestic travel.",
  },

  {
    name: "Penguin, Tasmania, Australia",
    lat: -41.121,
    lng: 146.072,
    category: "travel",
    description: "Domestic travel.",
  },

  {
    name: "Moree, NSW, Australia",
    lat: -29.462,
    lng: 149.84,
    category: "travel",
    description:
      "Outback travel experience.",
  },
];

export default function TravelMap() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const initMap = async () => {
      // Dynamic import to avoid SSR issues
      const L = await import("leaflet");
      const Leaflet = L.default || L;

      // Helper function to create colored marker icons (proper pin shape)
      const createColoredIcon = (color: string) => {
        return (Leaflet as any).divIcon({
          className: 'custom-marker',
          html: `<div style="
            position: relative;
            width: 30px;
            height: 30px;
          ">
            <svg width="30" height="41" viewBox="0 0 30 41" style="filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
              <path d="M15 0 C6.716 0 0 6.716 0 15 C0 26.25 15 41 15 41 C15 41 30 26.25 30 15 C30 6.716 23.284 0 15 0 Z" fill="${color}" stroke="white" stroke-width="1.5"/>
              <circle cx="15" cy="15" r="5" fill="white"/>
            </svg>
          </div>`,
          iconSize: [30, 41],
          iconAnchor: [15, 41],
          popupAnchor: [0, -41],
        });
      };

      // Create yellow icon for travel
      const travelIcon = createColoredIcon('#FFD700'); // Yellow/Gold
      // Create orange icon for other categories
      const otherIcon = createColoredIcon('#FF8C00'); // Orange

      const map = Leaflet.map(mapContainerRef.current!, {
        center: [10, 10], // vue globale
        zoom: 2,
        worldCopyJump: true,
      });

      mapInstanceRef.current = map;

      Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18,
      }).addTo(map);

      // Group places by coordinates
      const groupedPlaces = new Map<string, Place[]>();
      
      places.forEach((place) => {
        const key = `${place.lat.toFixed(4)},${place.lng.toFixed(4)}`;
        if (!groupedPlaces.has(key)) {
          groupedPlaces.set(key, []);
        }
        groupedPlaces.get(key)!.push(place);
      });

      // Create markers for grouped places
      groupedPlaces.forEach((locationPlaces, key) => {
        const [lat, lng] = key.split(',').map(Number);
        const firstPlace = locationPlaces[0];
        
        // Build popup content with all items for this location
        let popupContent = `<div style="font-size: 12px; max-width: 280px;">`;
        popupContent += `<strong>${firstPlace.name}</strong>`;
        
        locationPlaces.forEach((place) => {
          if (place.category !== "travel") {
            popupContent += `<br/><br/>`;
            if (place.timeline) {
              popupContent += `<em style="color: #666;">${place.timeline}</em>`;
            }
            popupContent += `<br/><span>${place.description}</span>`;
          }
        });
        
        popupContent += `</div>`;

        // Use yellow icon if all are travel, orange otherwise
        const allTravel = locationPlaces.every(p => p.category === "travel");
        const icon = allTravel ? travelIcon : otherIcon;
        
        const marker = Leaflet.marker([lat, lng], { icon }).addTo(map);
        marker.bindPopup(popupContent);
      });
    };

    initMap();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="rounded-3xl border border-sky-100 bg-white/80 p-4 shadow-sm">
      <div
        ref={mapContainerRef}
        className="h-96 w-full overflow-hidden rounded-2xl border border-sky-100"
        style={{ minHeight: '512px' }}
      />
      <p className="mt-3 text-xs text-slate-600">
        Yellow markers indicate places I travelled to for discovery, while orange markers represent places where I lived.
      </p>
    </div>
  );
}
