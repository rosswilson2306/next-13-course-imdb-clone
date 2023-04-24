'use client'

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import {MdLightMode} from 'react-icons/md';
import {BsFillMoonFill} from 'react-icons/bs';

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div>
      {(mounted && currentTheme === 'dark') ? (
        <button 
          onClick={() => setTheme('light')}
          type="button"
        >
          <MdLightMode className="text-xl cursor-pointer hover:text-amber-500"/>
        </button>
      ) : (
        <button
          onClick={() => setTheme('dark')}
          type="button"
        >
          <BsFillMoonFill className="text-xl cursor-pointer hover:text-amber-500" />
        </button> 
      )}
    </div>
  )
}
