import { useTheme } from "../hooks/useTheme";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <div className="site-footer" style={{ backgroundColor: theme.bgColor, color: theme.textColor }}>
        <span>N5 &copy; 2023</span>
    </div>
  )
}

export default Footer