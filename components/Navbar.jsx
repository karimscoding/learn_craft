import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Button from "./Button";
import ModeToggle from "./ModeToggle";
import { getTransition, shutterDown } from "@/utils/motion";

function Navbar() {
  const { data: session } = useSession();
  return (
    <header className="h-20">
      <div className="wrapper flex justify-between items-center overflow-hidden">
        <motion.div
          variants={shutterDown()}
          initial="from"
          animate={"to"}
          transition={getTransition()}
        >
          <Link
            className="link-item text-xl text-foreground font-bold"
            href="/"
          >
            LearnCraft
          </Link>
        </motion.div>

        <motion.div
          variants={shutterDown()}
          initial="from"
          animate={"to"}
          transition={getTransition()}
          className="hidden md:flex gap-5"
        >
          <Link
            href="/"
            className="link-item text-foreground hover:text-primary transition-color"
          >
            Home
          </Link>
          <Link
            href="/courses"
            className="link-item text-foreground hover:text-primary transition-color"
          >
            Courses
          </Link>
          <Link
            href="/about"
            className="link-item text-foreground hover:text-primary transition-color"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="link-item text-foreground hover:text-primary transition-color"
          >
            Contact
          </Link>
          {session && (
            <Link
              href="/orders"
              className="link-item text-foreground hover:text-primary transition-color"
            >
              Orders
            </Link>
          )}
        </motion.div>

        <motion.div
          variants={shutterDown()}
          initial="from"
          animate={"to"}
          transition={getTransition()}
          className="flex items-center gap-5"
        >
          <ModeToggle />
          {!session ? (
            <Button
              href="/users/login"
              placeholder="Login"
              color="primary"
              size="default"
            />
          ) : (
            <Button
              href="/users/profile"
              placeholder="Profile"
              color="primary"
            />
          )}
        </motion.div>
      </div>
    </header>
  );
}

export default Navbar;
