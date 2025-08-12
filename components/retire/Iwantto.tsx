"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

type Option = {
  label: string;
  value: string;
};

const OPTIONS: Option[] = [
  { label: "Protect my Assets", value: "retire_early" },
  { label: "Transfer Generational Wealth", value: "build_legacy" },
  { label: "Prepare for Long-Term Care", value: "travel_world" },
  { label: "Give with Intention", value: "travel_world" },
  { label: "Secure Comfortable Retirement", value: "travel_world" },
];


export type IwanttoProps = {
  value: string;
  onChange: (newValue: string) => void;
};

export function Iwantto({ value, onChange }: IwanttoProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{
        position: "relative",
        width: 320,
        fontFamily: "'Poppins', sans-serif",
        fontSize: 20,
        fontWeight: 500,
        userSelect: "none",
        margin: "20px auto", // Center horizontally by margin auto
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          padding: "12px 20px",
          background: "linear-gradient(to right, #005b7f, #00bfff)",
          borderRadius: 20,
          color: "white",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center", // Center text horizontally
          cursor: "pointer",
          gap: 4,
        }}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>I want to</span>
        <FaChevronDown style={{ fontSize: 12 }} />
      </button>

      {open && (
        <ul
          role="listbox"
          tabIndex={-1}
          style={{
            position: "absolute",
           
            left: 0,
            right: 0,
            background: "white",
            borderRadius: 12,
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            margin: 0,
            padding: 0,
            listStyle: "none",
            maxHeight: 200,
            overflowY: "auto",
            zIndex: 1000,
          }}
        >
          {OPTIONS.map(({ label, value: optionValue }) => (
            <li
              key={optionValue}
              role="option"
              aria-selected={value === optionValue}
              onClick={() => {
                onChange(optionValue);
                setOpen(false);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  onChange(optionValue);
                  setOpen(false);
                }
              }}
              tabIndex={0}
              style={{
                padding: "10px 20px",
                cursor: "pointer",
                backgroundColor: value === optionValue ? "#e6f7ff" : "white",
              }}
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
