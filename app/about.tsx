"use client"
import React from "react";
import { Image } from "@nextui-org/react";

export default function AboutPage() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
      <Image
        width={800}
        alt="NextUI hero Image"
        src="https://www.bca.co.id/-/media/Feature/Banner/Product-Banner/Default/20220908-awards-bca-desktop.jpg"
      />
    </div>
  );
}
