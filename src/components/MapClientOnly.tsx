'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Leaflet components with no SSR
const EnhancedDonorsMap = dynamic(
  () => import('@/components/EnhancedDonorsMap'),
  { ssr: false, loading: () => <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">Loading map...</div> }
);

const GoogleDonorsMap = dynamic(
  () => import('@/components/GoogleDonorsMap'),
  { ssr: false, loading: () => <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">Loading map...</div> }
);

export { EnhancedDonorsMap, GoogleDonorsMap };