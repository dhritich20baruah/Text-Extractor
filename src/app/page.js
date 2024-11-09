import { pool } from "@/utils/dbConnect";
import dbConnect from "@/utils/dbConnect";
import Link from "next/link";
import { redirect } from "next/navigation";
import Ocr from "./tesseract/Ocr";

export default async function Home() {
  return (
    <main className="p-10">
      <Ocr/>
    </main>
  );
}
