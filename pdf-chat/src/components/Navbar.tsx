import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
    return (
        <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex items-center justify-between h-full pt-2">
                    <Link href='/' className="flex z-40 font-semibold">
                        <span>Chat PDF</span>
                    </Link>

                    {/* Mobile Navbar */}
                    <div className="hidden items-center justify-between space-x-4 sm:flex">
                        <>
                            <Link
                                href="/pricing"
                                className={buttonVariants({
                                    variant: 'ghost',
                                    size: 'sm',
                                })}>
                                Pricing
                            </Link>
                            <LoginLink
                                className={buttonVariants({
                                    variant: 'ghost',
                                    size: 'sm',
                                })}>
                                Sign in
                            </LoginLink>
                            <RegisterLink
                                className={buttonVariants({
                                    size: 'sm',
                                })}>
                                Get started <ArrowRight className="ml-1.5 h-5 w-5" />
                            </RegisterLink>
                        </>
                    </div>

                </div>
            </MaxWidthWrapper>
        </nav>
    );
}

export default Navbar;