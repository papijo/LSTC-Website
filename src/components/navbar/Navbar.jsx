"use client";
import React, { useState, useRef, useEffect, useContext } from "react";
import styled from "styled-components";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { MdMenu, MdClose } from "react-icons/md";
import { ThemeContext, ThemeProvider } from "@/context/ThemeContext";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },

  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 4,
    title: "Land",
    url: "/land",
  },
  {
    id: 5,
    title: "Houses for Rent",
    url: "/rent",
  },
  {
    id: 6,
    title: "Houses for Sale",
    url: "/sale",
  },
];

const Container = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0px;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const DesktopLogo = styled.div`
  font-weight: bold;
  font-size: 22px;
  color: inherit;
`;

const MobileLogo = styled.div`
  font-weight: bold;
  font-size: 25px;
  color: inherit;
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #bbb;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuIcon = styled(MdMenu)`
  color: ${({ theme }) => (theme === "light" ? "#111" : "#bbb")};
`;

const CloseIcon = styled(MdClose)`
  color: ${({ theme }) => (theme === "light" ? "#111" : "#bbb")};
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    position: fixed;
    top: 70px;
    left: ${({ menuOpen }) => (menuOpen ? "0" : "-100%")};
    flex-direction: column;
    gap: 10px;
    width: 100%;
    height: ${({ menuOpen }) => (menuOpen ? "auto" : "0")};
    overflow-y: auto;
    transition: 1s all ease;
    background-color: ${({ theme }) => (theme === "light" ? "white" : "#111")};
    color: inherit;
    padding-bottom: 20px;
    z-index: 999;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  font-size: 20px;
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef();
  const theme = useContext(ThemeContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      <Logo href="/">
        {isMobile ? (
          <MobileLogo>LSTC</MobileLogo>
        ) : (
          <DesktopLogo>Lo-Kwu Shehe Topp Community</DesktopLogo>
        )}
      </Logo>
      <DarkModeToggle />
      <MenuButton onClick={toggleMenu}>
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </MenuButton>

      <LinksContainer menuOpen={menuOpen} ref={menuRef} theme={theme.mode}>
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
      </LinksContainer>
    </Container>
  );
};

export default Navbar;
