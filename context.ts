'use client';
import { createContext } from 'react';
import englishDictionary from '@/dictionaries/en.json'

export const DictionaryContext = createContext(englishDictionary);
