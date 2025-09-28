import ThemeSwitch from "./ThemeSwitch";

export default function Navbar() {
    return (
      <nav className="p-4 border-b">
        <div className="container mx-auto flex justify-between">
          <div className="font-bold">Travel Guides</div>
          <div>Menu</div>
          <ThemeSwitch></ThemeSwitch>
        </div>
      </nav>
    )
  }
  