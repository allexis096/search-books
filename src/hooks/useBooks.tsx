import React, { createContext, useContext, useState } from 'react';

export type BooksData = {
  id: string;
  volumeInfo: {
    title: string;
    publisher: string;
    pageCount: string;
    authors: string[];
    imageLinks: {
      smallThumbnail: string;
    };
  };
  accessInfo: {
    webReaderLink: string;
  };
};

type BooksContextData = {
  books: BooksData[];
  setBooks: React.Dispatch<React.SetStateAction<BooksData[]>>;
  currentlyReading: BooksData[];
  setCurrentlyReading: React.Dispatch<React.SetStateAction<BooksData[]>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
};

type BooksProviderProps = {
  children: React.ReactNode;
};

export const BooksContext = createContext({} as BooksContextData);

export function BooksProvider({ children }: BooksProviderProps) {
  const [name, setName] = useState('User');
  const [books, setBooks] = useState<BooksData[]>([]);
  const [currentlyReading, setCurrentlyReading] = useState<BooksData[]>([]);

  return (
    <BooksContext.Provider
      value={{
        books,
        setBooks,
        currentlyReading,
        setCurrentlyReading,
        name,
        setName,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}

export function useBooks() {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error('Context must used within useContext');
  }

  return context;
}
