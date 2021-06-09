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
};

type BooksProviderProps = {
  children: React.ReactNode;
};

export const BooksContext = createContext({} as BooksContextData);

export function BooksProvider({ children }: BooksProviderProps) {
  const [books, setBooks] = useState<BooksData[]>([]);

  return (
    <BooksContext.Provider value={{ books, setBooks }}>
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
