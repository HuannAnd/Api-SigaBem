'use client';

import googlePlayground from '../assets/google-playground.png'

import React from "react";

interface GooglePlaygroundProps { }

export default function GooglePlayground({ }: GooglePlaygroundProps) {
  return (
    <section className="w-screen h-screen fixed top-0 left-0 -z-10">
      <img className="h-screen object-cover" src={googlePlayground} alt="Google play ground" />
    </section>
  )
}