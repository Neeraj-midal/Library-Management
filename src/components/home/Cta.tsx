import Link from "next/link";
import { features } from "process";

export default function CTA(){
    return(
        <section className="py-24 bg-indigo-600 text-white">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-5xl font-bold">Ready to Start?</h2>

                <p className="mt-5 text-lg text-indigo-100">Digitize Your Library now</p>

                <Link href="/auth/register">
                Register Now</Link>
            </div>
        </section>
    );
}