'use client';

import React, {
  useContext,
  ReactNode,
  useState,
  useEffect,
  createContext,
} from 'react';

import { getProfile } from '@/sanity/sanity.query';
import { ProfileType } from '@/types';

interface DataType {
  profile?: ProfileType[];
}

const DataContext = createContext<DataType | undefined>(undefined);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

interface Props {
  children: ReactNode;
}

export const DataProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = useState<DataType>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileData = await getProfile();
        setData({ profile: profileData });
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
