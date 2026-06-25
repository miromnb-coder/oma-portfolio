"use client";

import { useEffect } from "react";
import { encodedStyles } from "./nodraStyles";

export function StyleInjector() {
  useEffect(() => {
    const id = "nodra-style-sheet";
    if (document.getElementById(id)) return;

    const styleTag = document.createElement("style");
    styleTag.id = id;
    styleTag.textContent = atob(encodedStyles);
    document.head.appendChild(styleTag);
  }, []);

  return null;
}
