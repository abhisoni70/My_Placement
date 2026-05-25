import { createContext, useContext, useState, useEffect } from "react";

const BookmarkContext = createContext(null);

export function BookmarkProvider({ children }) {
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const saved = localStorage.getItem("ap-bookmarks");
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  useEffect(() => {
    try { localStorage.setItem("ap-bookmarks", JSON.stringify(bookmarks)); } catch {}
  }, [bookmarks]);

  const toggle = (question) => {
    setBookmarks(prev => {
      const exists = prev.find(b => b.id === question.id && b.topic === question.topic);
      if (exists) return prev.filter(b => !(b.id === question.id && b.topic === question.topic));
      return [...prev, question];
    });
  };

  const isBookmarked = (id, topic) => bookmarks.some(b => b.id === id && b.topic === topic);

  const clear = () => setBookmarks([]);

  return (
    <BookmarkContext.Provider value={{ bookmarks, toggle, isBookmarked, clear }}>
      {children}
    </BookmarkContext.Provider>
  );
}

export const useBookmarks = () => useContext(BookmarkContext);
