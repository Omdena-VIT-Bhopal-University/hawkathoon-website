import * as React from "react"
import Image from 'next/image';
import "bootstrap-icons/font/bootstrap-icons.css";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface CardWithFormProps {
  title?: string
  desc?: string
  link?: string
  image?: string
}

export function FormCard({ title = "", desc = "", link = ""}: CardWithFormProps) {
  return (
    <Card className="w-[250px] text-center">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-center">
        <a href={link} target="_blank" rel="noreferrer" className="w-full">
          <Button className="w-full">Register</Button>
        </a>
      </CardFooter>
    </Card>
  );
}

export function ProjectCard({ title="", desc="Google Form", link="", image="" }: CardWithFormProps) { 
  return (
    <Card className="w-[250px] text-center">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="pt-4">{desc}</CardDescription>
      </CardHeader>
      <Image
        src={image}
        alt="test"
        className="rounded-lg px-6 pb-6"
        width={250}
        height={250}
      />
      <CardFooter className="flex justify-center">
        <a href={link} target="_blank" rel="noreferrer" className="w-full">
          <Button className="w-full" variant='outline'>Repository <i className="bi bi-github"/></Button>
        </a>
      </CardFooter>
    </Card>
  );
}
