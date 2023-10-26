"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("48dfc6f2-7861-459d-b687-95155d4e122f");
  }, []);

  return null;
};
