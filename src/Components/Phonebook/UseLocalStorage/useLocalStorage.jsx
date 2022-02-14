import { useState, useEffect } from "react";

export default function useLocalStorage (key, defaultValue) {

    const [contacts, setContacts] = useState(() => {
      return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
    });
  
    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(contacts));
    }, [key, contacts]);
    return [contacts, setContacts]
  }